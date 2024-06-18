from flask import request, render_template
from database.db import db
from models.produto import produto

def produto_controller():
        if request.method == 'POST':
            try:
                data = request.get_json()
                print(data)
                user = produto(data['cor'], data['marca'], data['tamanho'], data['preco'])
                db.session.add(user)
                db.session.commit()
                return 'Produto cadastrado com sucesso', 200
            except Exception as e:
                return 'O produto nao foi cadastrado', 405
            
        elif request.method == 'GET':
            try:
                data = produto.query.all()
                return render_template('produto.html', data={'produto': [produto.to_dict() for produto in data]})
            
            except Exception as e:
                return 'Nao foi possivel buscar produtos', 405
            
        elif request.method == "PUT":
            try:
                data = request.get_json()
                put_produto_id = data['id']
                put_produto = produto.query.get(put_produto_id)
                if put_produto is None:
                    return {'error': 'produto nao encontrado'}, 404
                put_produto.cor = data.get('cor', put_produto.cor)
                put_produto.marca = data.get('marca', put_produto.marca)
                put_produto.tamanho = data.get('tamanho', put_produto.tamanho)
                put_produto.preco = data.get('preco', put_produto.preco)
                print(put_produto.cor, put_produto.marca, put_produto.tamanho, put_produto.preco)
                db.session.commit()
                return 'produto atualizado com sucesso', 200
            except Exception as e:
                return {'error': 'erro ao atualizar o produto. Erro {}'.format(e)}, 400
            
        elif request.method == "DELETE":
            try:
                data = request.get_json()
                delete_usuario_id = data['id']
                delete_usuario = produto.query.get(delete_usuario_id)
                if delete_usuario is None:
                    return {'error': 'produto nao encontrado'}, 404
                db.session.delete(delete_usuario)
                db.session.commit()
                return 'produto deletado com sucesso', 200
            except Exception as e:
                return {'error': 'erro ao atualizar o produto. Erro {}'.format(e)}, 400