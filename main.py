from fastapi import FastAPI
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
    besicInfo = getGoodsInfoByUrl(res)
    return JSONResponse(besicInfo)

@app.post("/newdata/uploadcsv/")
def downloadCsv(request):
    chengeJsonToCsv(request)
    filePath = "./output.csv"
    return FileResponse(filePath)
