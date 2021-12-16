from sqlalchemy import Column, Integer, String, ForeignKey, Date, Float, Text
from db_connect import Base, engine


class Flower(Base):
    __tablename__ = "Flower"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    count = Column(Integer)
    emotion = Column(String(10))
    date = Column(Date, nullable=False)
    
    user_id = Column(Integer, ForeignKey('User.id'), nullable=False)
    
    # def __init__(self, date, title, content, user_id):
    #     self.date = date
    #     self.title = title
    #     self.content = content
    #     self.user_id = user_id

# Flower.__table__.create(bind=engine, checkfirst=True)