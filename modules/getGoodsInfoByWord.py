from urllib import response
from bs4 import BeautifulSoup
from getGoodsInfoByUrl import getGoodsInfoByUrl
from getPageFromAmazon import getPageFromAmazon

def getGoodsInfoByWord(word):
    list = []
    word = word.strip()
    word = word.replace(' ', '+')
    url = "https://www.amazon.co.jp/s?k=" + word
    res = getPageFromAmazon(url)
    soup = BeautifulSoup(res, 'html.parser')
    contents = soup.find_all('div', class_='a-section a-spacing-base')
    for content in contents:
        link = content.find('a', class_='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal')
        link = link.get('href')
        link = "https://www.amazon.co.jp/" + link
        response = getPageFromAmazon(link)
        besicInfo = getGoodsInfoByUrl(response)
        list.append(besicInfo)
    return list
