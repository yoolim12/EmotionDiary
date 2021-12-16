from sqlalchemy import Column, Integer, String
from db_connect import Base, engine

class User(Base):
    __tablename__ = "User"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    email = Column(String(100), nullable=False)
    password = Column(String(255), nullable=False)
    name = Column(String(50), nullable=False)

    def __init__(self, email, password, name):
        self.email = email
        self.password = password
        self.name = name

# User.__table__.create(bind=engine, checkfirst=True)
