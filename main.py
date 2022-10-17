import csv
import shutil
from fastapi import FastAPI, File, HTTPException, UploadFile, status
from pathlib import Path
from tempfile import NamedTemporaryFile
from fastapi.responses import JSONResponse, FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from modules.getPageFromAmazon import getPageFromAmazon
from modules.getGoodsInfoByUrl import getGoodsInfoByUrl
from modules.chengeJsonToCsv import chengeJsonToCsv

app = FastAPI()

origins = [
    "http://localhost",
    'http://localhost:8000',
    'http://localhost:3000',
    'http://localhost:3000/edit/url',
    'http://localhost:8000/edit/url',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Body(BaseModel):
    productURL : str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/edit/url/")
def urlReceive(body : Body):
    print(body.productURL)
    url = body.productURL
    res = getPageFromAmazon(url)
    try:
        besicInfo = getGoodsInfoByUrl(res)
        return JSONResponse(besicInfo)
    except AttributeError:
        return {"ERROR":"URL is wrong"}

@app.post("/newdata/download/")
def downloadCsv(request):
    chengeJsonToCsv(request)
    filePath = "./output.csv"
    return FileResponse(filePath)

@app.post("/newdata/upload/")
def upload_file(upload_file: UploadFile = File(...)):
    tmp_path: Path = ""
    try:
        suffix = Path(upload_file.filename).suffix
        with NamedTemporaryFile(delete=False, suffix=suffix) as tmp:
            shutil.copyfileobj(upload_file.file, tmp)
            tmp_path = Path(tmp.name)
    except Exception as e:
        print(f"一時ファイル作成: {e}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="一時ファイル作成できません",
        )
    finally:
        upload_file.file.close()
    list = []
    with open(tmp_path, "r", encoding="utf-8_sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            list.append(row)
    return list