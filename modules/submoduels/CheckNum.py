def is_num(s):
    try:
        float(s)
    except ValueError:
        return False
    else:
        return True