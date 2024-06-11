from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
 
class produto(db.Model):

    def to_dict(self):
        return{
            'cor': self.cor,
            'marca': self.marca,
            'tamanho': self.tamanho,
            'preco': self.preco
        }

    id = db.Column(db.Integer, primary_key=True)
    cor = db.Column(db.String(100))
    marca = db.Column(db.String(100))
    tamanho = db.Column(db.Int(100))
    preco = db.Column(db.Float(10,2))


    def __init__(self, cor, marca, tamanho, preco) -> None:
        self.cor = cor
        self.marca = marca
        self.tamanho = tamanho
        self.preco = preco