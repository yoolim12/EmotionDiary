from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from config import SQLALCHEMY_DATABASE_URI
from domain.models import Base

engine = create_engine(SQLALCHEMY_DATABASE_URI)
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()


session = scoped_session(
    sessionmaker(
        autocommit=False,
        autoflush=False, 
        bind=engine
))