from database.db import db
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
 
class usuario(db.Model):

    def to_dict(self):
        return{
            'nome': self.nome,
            'login': self.login,
            'senha': self.senha,
        }

    id = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    login = db.Column(db.String(100))
    senha = db.Column(db.String(100))


    def __init__(self, nome, login, senha):
        self.nome = nome
        self.login = login
        self.senha = senha