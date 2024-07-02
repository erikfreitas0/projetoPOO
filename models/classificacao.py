from database.db import db

class classificacao(db.Model):
    def to_dict(self):
        return{
            'codigo': self.codigo,
            'tipo': self.tipo,
        }
    codigo = db.Column(db.Integer, primary_key=True)
    tipo = db.Column(db.String(100))

    def __init__(self, tipo):
        self.tipo = tipo