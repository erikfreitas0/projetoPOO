from database.db import db

class classificacao(db.Model):
    def to_dict(self):
        return{
            'id': self.id,
            'tipo': self.tipo,
        }
    id = db.Column(db.Integer, primary_key=True, nullable=False, unique=True)
    tipo = db.Column(db.String(100))

    def __init__(self, tipo):
        self.tipo = tipo