from sqlalchemy import Column, Integer, String, ForeignKey, Date, Float, Text
from db_connect import Base, engine

class Diary(Base):
    __tablename__ = "Diary"
    id = Column(Integer, primary_key=True, nullable=False, autoincrement=True)
    date = Column(Date, nullable=False)
    title = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    happy = Column(Float)
    sad = Column(Float)
    fear = Column(Float)
    surprised = Column(Float)
    anger = Column(Float)
    aversion = Column(Float)
    neutral = Column(Float)


    user_id = Column(Integer, ForeignKey('User.id'), nullable=False)
    
    # def __init__(self, date, title, content, user_id):
    #     self.date = date
    #     self.title = title
    #     self.content = content
    #     self.user_id = user_id

# Diary.__table__.create(bind=engine, checkfirst=True)