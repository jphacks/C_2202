from fastapi import FastAPI
from pydantic import BaseModel
from bs4 import BeautifulSoup
from fastapi.responses import JSONResponse
from modules.getPageFromAmazon import getPageFromAmazon
from modules.getGoodsInfoByUrl import getGoodsInfoByUrl

app = FastAPI()

class Itme(BaseModel):
    url: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/index/")
def urlReceive(request):
    url = request
    res = getPageFromAmazon(url)
    besicInfo = getGoodsInfoByUrl(res)
    return JSONResponse(besicInfo)

