from controllers.categoriaController import categoriaController

def categoria(app):
    app.route('/categoria', methods=['POST', 'GET'])(categoriaController)