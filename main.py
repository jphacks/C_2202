from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from modules.getPageFromAmazon import getPageFromAmazon
from modules.scraping import getGoodsInfo
app = FastAPI()

class Itme(BaseModel):
    url: str

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.post("/index/")
def receive(request):
    url = request
    res = getPageFromAmazon(url)
    besicInfo = getGoodsInfo(res)
    return JSONResponse(besicInfo)
