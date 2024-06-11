from controllers.classificacaoController import classificacaoController

def classificacao(app):
    app.route('/classificacao', methods=['POST', 'GET'])(classificacaoController)