class ParametrosBuscaCelulares():
    desempenho: str
    armazenamento: str
    tamanho_tela: str
    qualidade_tela: str
    camera: str
    bateria: str
    preco_maximo: float

    def __init__(
            self,
            desempenho: str,
            armazenamento: str,
            tamanho_tela: str,
            qualidade_tela: str,
            camera: str,
            bateria: str,
            preco_maximo: float
    ):
        self.desempenho = desempenho
        self.armazenamento = armazenamento
        self.tamanho_tela = tamanho_tela
        self.qualidade_tela = qualidade_tela
        self.camera = camera
        self.bateria = bateria
        self.preco_maximo = preco_maximo
