from domain.models.flower import Flower
from datetime import datetime, date
from db_connect import session

def new_flower(user_id, count, emotion):
    cur_date = date(datetime.today().year, datetime.today().month, 1)

    flower = Flower(
        user_id=user_id,
        count=count,
        emotion=emotion,
        date=cur_date
    )
    session.add(flower)
    session.commit()
    return flower

def update_flower(user_id, count, emotion):
    flower = check_flower(user_id)
    flower.count = count
    flower.emotion = emotion
    session.commit()
    return flower

def check_flower(user_id):
    flowers = session.query(Flower).filter(Flower.user_id==user_id).all()
    result = None
    for flower in flowers:
        if flower.date.year == datetime.today().year and flower.date.month == datetime.today().month:
            result = flower
    if result:
        return result
    else:
        return False
 
def statics_year(user_id, year):
    flowers = session.query(Flower).filter(Flower.user_id==user_id).all()
    result = []
    for flower in flowers:
        if flower.date.year == year:
            result.append(flower)

    return result