from secret import username, db_pw, secret_key, jwt_secret_key
from datetime import timedelta

SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://'+username+':'+db_pw+'@172.17.0.1/emotionDiary?charset=utf8mb4'
SQLALCHEMY_TRACK_MODIFICATIONS = False
SESSION_TYPE = 'filesystem'

SECRET_KEY = secret_key


# jwt
JWT_SECRET_KEY = jwt_secret_key
JWT_ACCESS_TOKEN_EXPIRES = timedelta(hours=1)
JWT_REFRESH_TOKEN_EXPIRES = timedelta(days=30)

JWT_COOKIE_SECURE = False # https를 통해서만 cookie가 갈 수 있는지 (production 에선 True)
JWT_TOKEN_LOCATION = ["headers", "cookies", "json"]
# JWT_ACCESS_COOKIE_PATH = '/' # access cookie를 보관할 url (Frontend 기준)
JWT_REFRESH_COOKIE_PATH = '/' # refresh cookie를 보관할 url (Frontend 기준)
# # CSRF 토큰 역시 생성해서 쿠키에 저장할지 
# # (이 경우엔 프론트에서 접근해야하기 때문에 httponly가 아님)
JWT_COOKIE_CSRF_PROTECT = True 