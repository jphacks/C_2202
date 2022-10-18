import pandas as pd
import json
import os
def chengeJsonToCsv(data):
    data = json.loads(data)
    try:
        os.remove("./output.csv")
    except:
        print('creat new file')
    df = pd.json_normalize(data)
    df.to_csv("./output.csv", encoding='utf-8')
