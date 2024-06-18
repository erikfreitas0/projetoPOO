from controllers.classificacaoController import classificacao_Controller

def classificacao(app):
    app.route('/classificacao', methods=['POST', 'GET'])(classificacao_Controller)