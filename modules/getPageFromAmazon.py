from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def getPageFromAmazon(url):
    text = ""
    #　ヘッドレスモードでブラウザを起動
    options = Options()
    options.add_argument('--headless')
    # ブラウザーを起動
    # ドライバーまでのpathは各自変更してください
    path = "C:/Users/Riku/Downloads/chromedriver_win32/chromedriver"
    driver = webdriver.Chrome(path, options=options)
    driver.get(url)
    driver.implicitly_wait(10)  # 見つからないときは、10秒まで待つ     
    text = driver.page_source
    # ブラウザ停止
    driver.quit()
    return text