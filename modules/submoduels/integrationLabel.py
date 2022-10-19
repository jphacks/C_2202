import gensim

def integrationLabel(labelText, columnList):
    model = gensim.models.Word2Vec.load('./models/ja.bin')
    for column in columnList:
        print(model.wv.similarity(labelText, column))

list = [""]
integrationLabel("", list)
