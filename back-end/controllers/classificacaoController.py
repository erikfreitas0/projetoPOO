from flask import request
from database.db import db
from models.classificacao import classificacao

def classificacaoController():
    if request.method == 'POST':
        try:
            data = request.get_json()
            classificacao = classificacao(data['id'])
            db.session.add(classificacao)
            db.session.commit()
            return 'classificacao inserida com sucesso', 200
        except Exception as e:
            return {'error: erro ao inserir classificacao. Erro: {}'.format(str(e)), 400}
    elif request.method == 'GET':
        try:
            data = classificacao.query.all()
            new = {'classificacao': [classificacao.to_dict() for classificacao in data]}
            return new, 200
        except Exception as e:
            return {'error: erro ao buscar classificacao. Erro: {}'.format(str(e)), 400}