import csv
import shutil
import pprint
from typing import List
from fastapi import FastAPI, File, HTTPException, UploadFile, status
from pathlib import Path
from tempfile import NamedTemporaryFile
from pydantic import BaseModel
from fastapi.responses import JSONResponse, FileResponse
from modules.getPageFromAmazon import getPageFromAmazon
from modules.getGoodsInfoByUrl import getGoodsInfoByUrl
from modules.chengeJsonToCsv import chengeJsonToCsv

app = FastAPI()

class Itme(BaseModel):
    url: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/newdata/")
def urlReceive(request):
    url = request
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