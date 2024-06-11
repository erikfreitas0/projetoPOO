from routes.categoriaRoutes import categoria
from routes.classificacaoRoutes import classificacao
from routes.comprasRoutes import compras
from routes.produtoRoutes import produto
from routes.usuarioRoutes import usuario


def default_routes(app):
    categoria(app)
    classificacao(app)
    compras(app)
    produto(app)
    usuario(app)