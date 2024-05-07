from controllers.usuarioController import usuario_controller

def clientes(app):
    app.route('/clientes', methods=['POST', 'GET', 'PUT', 'DELETE'])(usuario_controller)