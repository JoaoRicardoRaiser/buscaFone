from database.models import get_connection
from models.celular_model import CelularModel
from models.parametros_busca_celular import ParametrosBuscaCelulares


def buscar_celulares(parametros_da_busca: ParametrosBuscaCelulares):
    connection = get_connection()
    sql = f"""SELECT 
                c.modelo,
                c.preco,
                c.imagem,
                c.link_compra
            FROM celular c
            WHERE c.desempenho >= {parametros_da_busca.desempenho}
            AND c.armazenamento >= {parametros_da_busca.armazenamento}
            AND c.tamanho_tela >= {parametros_da_busca.tamanho_tela}
            AND c.qualidade_tela >= {parametros_da_busca.qualidade_tela}
            AND c.camera >= {parametros_da_busca.camera}
            AND c.bateria >= {parametros_da_busca.bateria}
            AND c.preco <= {parametros_da_busca.preco_maximo}
    """
    resultado = connection.execute(sql)
    celulares = []
    for row in resultado:
        celular_model = CelularModel(**row)
        celulares.append(celular_model)

    return celulares
