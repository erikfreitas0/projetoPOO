from flask import request, render_template
from database.db import db
from models.compras import compras

def compras_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                user = compras(data['valor'], data['data'], data['quantidade'])
                db.session.add(user)
                db.session.commit()
                return 'Compra cadastrada com sucesso', 200
            except Exception as e:
                return 'A compra nao foi cadastrada', 405
            
        elif request.method == 'GET':
            try:
                data = compras.query.all()
                return render_template('compras.html', data={'compras': [compras.to_dict() for compras in data]})
            
            except Exception as e:
                return 'Nao foi possivel buscar usuarios', 405
            
        elif request.method == "PUT":
            try:
                data = request.get_json()
                put_compras_id = data['id']
                put_compras = compras.query.get(put_compras_id)
                if put_compras is None:
                    return {'error': 'compras nao encontrado'}, 404
                put_compras.valor = data.get('valor', put_compras.valor)
                put_compras.data = data.get('data', put_compras.data)
                put_compras.quantidade = data.get('quantidade', put_compras.quantidade)
                print(put_compras.valor, put_compras.data, put_compras.quantidade, put_compras.senha)
                db.session.commit()
                return 'compras atualizada com sucesso', 200
            except Exception as e:
                return {'error': 'erro ao atualizar as compras. Erro {}'.format(e)}, 400
            
        elif request.method == "DELETE":
            try:
                data = request.get_json()
                delete_compras_id = data['id']
                delete_compras = compras.query.get(delete_compras_id)
                if delete_compras is None:
                    return {'error': 'compras nao encontradas'}, 404
                db.session.delete(delete_compras)
                db.session.commit()
                return 'compras deletadas com sucesso', 200
            except Exception as e:
                return {'error': 'erro ao atualizar o compras. Erro {}'.format(e)}, 400