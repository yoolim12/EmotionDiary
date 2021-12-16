from datetime import datetime
from flask import jsonify, request

def flower_response_dto(count, emotion):
    if count > 0:
        return jsonify({
            "count":count,
            "emotion":emotion
        }), 200
    else:
        return "No Diary", 400

def flowers_response_dto(result):
    if result:
        return jsonify(result), 200
    else:
        return "failed", 400

def chart_request_dto():
    year = int(request.args.get("year"))
    month = int(request.args.get("month"))
    return year, month


def chart_response_dto(result):
    if result:
        return jsonify(result), 200
    else:
        return "failed", 400