from controllers.classificacaoController import classificacaoController

def cargos(app):
    app.route('/classificacao', methods=['POST', 'GET'])(classificacaoController)