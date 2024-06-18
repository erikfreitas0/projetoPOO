from controllers.comprasController import compras_controller

def compras(app):
    app.route('/compras', methods=['POST', 'GET', 'PUT', 'DELETE'])(compras_controller)