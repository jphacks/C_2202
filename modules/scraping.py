from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from bs4 import BeautifulSoup

def getGoodsInfo(response):
# url = 'https://www.amazon.co.jp/%E3%83%90%E3%83%AB%E3%83%9F%E3%83%A5%E3%83%BC%E3%83%80-%E9%9B%BB%E6%B0%97%E7%82%8A%E9%A3%AF%E5%99%A8-BALMUDA-Gohan-K03A-WH/dp/B01NBX0HC7'
# response = getPageFromAmazon(url)
    soup = BeautifulSoup(response, 'html.parser')
    besicInfo = {}

    title = soup.find('span', class_='a-size-large product-title-word-break').text
    title = title.replace(' ', '')
    try:
        price = soup.find('span', class_='a-price-whole').text
        price = int(price.replace(',', ''))
    except:
        price = soup.find('span', class_='a-offscreen').text
        price = price.replace('￥', '')
        price = int(price.replace(',', ''))
    star = soup.find('span', class_='a-icon-alt').text
    star = star.replace('5つ星のうち', '')
    star = star.replace('.', '')
    star = int(star)
    img = soup.find('div', class_="imgTagWrapper").img['data-old-hires']

    besicInfo['title'] = title
    besicInfo['price'] = price
    besicInfo['star'] = star
    besicInfo['img'] = img


    # 商品情報のテーブルを取得
    table = soup.find('div', class_='a-expander-content a-expander-section-content a-section-expander-inner').table
    # tableの解析
    ths = table.find_all('th')  # tableからtrタグを探す
    trs = table.find_all('tr')  # tableからtrタグを探す
    for i in range(len(ths)):
        labelText = ths[i].text 
        labelText = labelText.replace(' ','')                   # ラベルを取得
        valueText = trs[i].find('td').text      # 値を取得
        valueText = valueText.replace(' ', '')   # 空白削除
        valueText = valueText.replace('\u200e', '') 
        valueText = valueText.replace('\n', '')  # 改行削除
        besicInfo[labelText] = valueText

    return besicInfo
