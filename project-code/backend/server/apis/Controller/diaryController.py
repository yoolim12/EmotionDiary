from flask import Blueprint, request, jsonify
from apis.dto.diaryDto import diary_request_dto, date_request_dto,  diary_response_dto, diaries_response_dto
from service.diaryService import diary_post_service, diary_read_service, diary_list_service, diary_delete_service, diary_update_service
from flask_jwt_extended import  jwt_required, get_jwt_identity

diary_bp = Blueprint('diary', __name__, url_prefix='/api')

# 일기 작성
@diary_bp.route("/diary", methods=['POST'])
@jwt_required()
def diary_post():
    user_id = get_jwt_identity()

    diary = diary_request_dto(request.json)
    result = diary_post_service(user_id, diary)
    return diary_response_dto(result)

# 일기 삭제
@diary_bp.route("/diary/<string:date>", methods=['DELETE'])
@jwt_required()
def diary_delete(date):
    user_id = get_jwt_identity()
    new_date = date_request_dto(date)

    result = diary_delete_service(user_id, new_date)
    return jsonify(result)

# 일기 수정
@diary_bp.route("/diary", methods=['PATCH'])
@jwt_required()
def diary_update():
    user_id = get_jwt_identity()
    diary = diary_request_dto(request.json)

    result = diary_update_service(user_id, diary)
    return jsonify(result)


# 일기 보기
@diary_bp.route("/diary/<string:date>", methods=['GET']) 
@jwt_required()
def diary(date):
    user_id = get_jwt_identity()
    new_date = date_request_dto(date)
    diary = diary_read_service(user_id, new_date)
    return diary_response_dto(diary)


# 일기 리스트
@diary_bp.route("/diaries", methods=['GET'])
@jwt_required()
def diary_list():
    user_id = get_jwt_identity()
    result = diary_list_service(user_id)
    return diaries_response_dto(result)

