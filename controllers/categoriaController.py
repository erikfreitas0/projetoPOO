from flask import request
from database.db import db
from models.categoria import categoria

def categoria_Controller():
    if request.method == 'POST':
        try:
            data = request.get_json()
            user = categoria(data['descricao'])
            db.session.add(user)
            db.session.commit()
            return 'categoria cadastrada com sucesso', 200
        except Exception as e:
            return 'error: erro ao inserir categoria. Erro: {}'.format(str(e)), 400
    elif request.method == 'GET':
        try:
            data = categoria.query.all()
            new = {'categoria': [categoria.to_dict() for categoria in data]}
            return new, 200
        except Exception as e:
            return 'error: erro ao buscar categoria. Erro: {}'.format(str(e)), 400