import uuid

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import Column, String, Integer, Float, Text
from sqlalchemy.dialects.postgresql import UUID

from routes.__init__ import app

db = SQLAlchemy(app)


def get_connection():
    return db.session.connection()


class Celular(db.Model):
    __tablename__ = "celular"

    id = Column(UUID, primary_key=True, default=uuid.uuid4())
    modelo = Column(String(32), unique=True, nullable=False)
    desempenho = Column(Float(), nullable=False)
    armazenamento = Column(Integer(), nullable=False)
    tamanho_tela = Column(Float(), nullable=False)
    qualidade_tela = Column(Float(), nullable=False)
    camera = Column(Float(), nullable=False)
    bateria = Column(Integer(), nullable=False)
    preco = Column(Float(), nullable=False)
    imagem = Column(Text(), nullable=False)
    link_compra = Column(Text(), nullable=True)


db.create_all()
