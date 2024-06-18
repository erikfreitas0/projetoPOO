from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
 
class compras(db.Model):

    def to_dict(self):
        return{
            'valor': self.valor,
            'data': self.data,
            'quantidade': self.quantidade
        }

    id = db.Column(db.Integer, primary_key=True)
    valor = db.Column(db.Float(100))
    data = db.Column(db.Date())
    quantidade = db.Column(db.Float(100))


    def __init__(self, valor, data, quantidade) -> None:
        self.valor = valor
        self.data = data
        self.quantidade = quantidade