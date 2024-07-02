from database.db import db

class categoria(db.Model):
    def to_dict(self):
        return{
            'codigo': self.codigo,
            'descricao': self.descricao,
        }
    id = db.Column(db.Integer, primary_key=True)
    descricao = db.Column(db.String(100))

    def __init__(self, descricao):
        self.descricao = descricao