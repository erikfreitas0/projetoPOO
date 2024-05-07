from controllers.categoriaController import categoriaController

def cargos(app):
    app.route('/categoria', methods=['POST', 'GET'])(categoriaController)