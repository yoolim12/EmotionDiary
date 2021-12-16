from flask import Blueprint, jsonify
from flask_jwt_extended import  jwt_required, get_jwt_identity
from service.statisticsService import year_statics_service, month_statics_service, chart_service
from apis.dto.statisticsDto import flower_response_dto, chart_request_dto, chart_response_dto, flowers_response_dto

statistics_bp = Blueprint('statistics', __name__, url_prefix='/api')

# 현재 달에 작성한 일기 횟수
@statistics_bp.route("/flower", methods=['GET'])
@jwt_required()
def get_flower():
    user_id = get_jwt_identity()

    count , current_emotion = month_statics_service(user_id)
    return flower_response_dto(count, current_emotion)

# 꽃무리 페이지 꽃 통계
@statistics_bp.route("/flowers/<int:year>", methods=['GET'])
@jwt_required()
def get_flowers(year):
    user_id = get_jwt_identity()
    result = year_statics_service(user_id, year)
    return flowers_response_dto(result)

@statistics_bp.route("/chart", methods=['GET'])
@jwt_required()
def get_charts():
    user_id = get_jwt_identity()
    year, month = chart_request_dto()
    result = chart_service(user_id=user_id, month=month, year=year)
    return chart_response_dto(result)

