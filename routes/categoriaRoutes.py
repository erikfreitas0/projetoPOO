from controllers.categoriaController import categoria_Controller

def categoria(app):
    app.route('/categoria', methods=['POST', 'GET'])(categoria_Controller)