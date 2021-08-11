import json

from flask import request, jsonify

from models.parametros_busca_celular import ParametrosBuscaCelulares
from routes.__init__ import app
from services.buscar_celulares import buscar_celulares


@app.route('/buscar-celulares', methods=["POST"])
def tratar_busca_celular():
    data = request.get_json()

    parametros_da_busca = ParametrosBuscaCelulares(**data)

    resultado = buscar_celulares(parametros_da_busca)

    resposta = json.dumps([celular.__dict__ for celular in resultado])

    response = jsonify(json.loads(resposta))
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response, 200


app.run()
