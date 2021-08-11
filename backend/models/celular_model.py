class CelularModel:
    modelo: str
    preco: float
    imagem: str
    link_compra: str

    def __init__(
            self,
            modelo: str,
            preco: float,
            imagem: str,
            link_compra: str,
    ):
        self.modelo = modelo
        self.preco = preco
        self.imagem = imagem
        self.link_compra = link_compra
