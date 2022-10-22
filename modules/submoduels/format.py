import re
def isNum(s):
    try:
        float(s)
    except ValueError:
        return False
    else:
        return True

def isIntUnit(s):
    if re.fullmatch(r'\d+\D+', s):
        return True
    else:
        return False

def isFloatUnit(s):
    if re.fullmatch(r'\d+\.\d+\D+', s):
        return True
    else:
        return False

def unitFormat(s):
    dict = {
        "キログラム" : "kg",
        "グラム" : "g",
        "キロメートル" : "km",
        "メートル" : "m",
        "センチメートル" : "cm",
        "ミリメートル" : "mm",
        "リットル" : "L",
        "ミリリットル" : "ml",
        "ボルト" : "V",
        "キロワット" : "kW",
        "ワット" : "W",
    }
    for k, v in dict.items():
        if (s == k):
            s = v
            return s
    return s

def labelFormat(labelText, unit):
    formattedUnit = "(" + unit + ")"
    if (formattedUnit in labelText):
        return labelText
    else:
        return labelText + formattedUnit


def format(labelText, valueText):
    if (isNum(valueText)):
        valueText = float(valueText)
        return labelText, valueText

    elif (isIntUnit(valueText)):
        list = re.findall(r'(\d+)(\D+)', valueText)
        unit = unitFormat(list[0][1])
        labelText = labelFormat(labelText, unit)
        valueText = int(list[0][0])
        return labelText, valueText

    elif (isFloatUnit(valueText)):
        list = re.findall(r'(\d+\.\d+)(\D+)', valueText)
        unit = unitFormat(list[0][1])
        labelText = labelFormat(labelText, unit)
        valueText = float(list[0][0])
        return labelText, valueText

    else:
        return labelText, valueText
