from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from routes.index import default_routes

# Certifique-se de que o db está definido e inicializado corretamente
db = SQLAlchemy()

class App:
    def __init__(self):
        self.app = Flask(__name__)
        CORS(self.app)
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/lojaroupa'  # Verifique se a string de conexão está correta
        db.init_app(self.app)
        default_routes(self.app)  # Certifique-se de que as rotas estão corretas

    def run(self):
        return self.app.run(port=3000, host='localhost', debug=True)  # debug deve ser booleano

app = App()
app.run()
