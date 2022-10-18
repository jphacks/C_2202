from bs4 import BeautifulSoup
from .submoduels.format import format

def getGoodsInfoByUrl(response):
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
    try:
        star = soup.find('span', class_='a-icon-alt').text
        star = star.replace('5つ星のうち', '')
        star = float(star)
    except:
        star = 0.0
    img = soup.find('div', class_="imgTagWrapper").img['data-old-hires']

    besicInfo['商品名'] = title
    besicInfo['価格'] = price
    besicInfo['評価'] = star
    besicInfo['画像'] = img

    table = soup.find('div', class_='a-expander-content a-expander-section-content a-section-expander-inner').table

    ths = table.find_all('th') 
    trs = table.find_all('tr') 
    for i in range(len(ths)):
        labelText = ths[i].text 
        labelText = labelText.replace(' ','')
        labelText = labelText.replace('\u200e','')
        labelText = labelText.replace('\n','')
        valueText = trs[i].find('td').text 
        valueText = valueText.replace(' ', '') 
        valueText = valueText.replace('\u200e', '') 
        valueText = valueText.replace('\n', '')
        labelText, valueText = format(labelText, valueText)
        besicInfo[labelText] = valueText
    return besicInfo