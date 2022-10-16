import re
from CheckNum import is_num
def format(labelText, valueText):
    if (is_num(valueText)):
        valueText = float(valueText)
        return labelText, valueText
