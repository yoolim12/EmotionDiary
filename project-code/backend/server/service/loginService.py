from flask import jsonify
from flask_jwt_extended.utils import set_refresh_cookies
from domain.dao.userDao import one_user
from bcrypt import checkpw
from flask_jwt_extended import (
    create_access_token, create_refresh_token, get_jwt_identity
)

def login_user(user):
    email = user['email']
    password = user['password']
    user = one_user(email)

    if not user:
        return 'login fail'
    elif not checkpw(password.encode("utf-8"), user.password.encode("utf-8")):
        return 'login fail'
    else:
        access_token = create_access_token(identity=user.id, fresh=True)
        refresh_token = create_refresh_token(identity=user.id)

        res = jsonify({'login':True})
        set_refresh_cookies(res, refresh_token)
        return [access_token, refresh_token]

# 토큰 재발급
def token_reissuance():
    current_user = get_jwt_identity()
    access_token = create_access_token(identity=current_user, fresh=False)
    refresh_token = create_refresh_token(identity=current_user)
    return [access_token, refresh_token]

# 토큰으로 유저 정보 체크
def check_user():
    identity = get_jwt_identity()
    user = one_user(identity)

    return user
