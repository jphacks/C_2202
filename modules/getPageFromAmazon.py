from selenium import webdriver
from selenium.webdriver.chrome.options import Options

def getPageFromAmazon(url):
    text = ""

    options = Options()
    options.add_argument('--headless')

    # ドライバーまでのpathは各自変更してください
    # path = "C:/Users/jayji/Downloads/chromedriver_win32/chromedriver.exe"
    path = "C:/Users/Riku/Downloads/chromedriver_win32/chromedriver"
    # path = "C:/Users/inher/chromedriver"
    driver = webdriver.Chrome(path, options=options)
    driver.get(url)
    driver.implicitly_wait(10)   
    text = driver.page_source

    driver.quit()
    return text