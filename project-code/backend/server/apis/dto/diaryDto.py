from datetime import datetime
from flask.json import jsonify

def diary_request_dto(diary):
    date = date_request_dto(diary['date'])
    return {
        "title": diary['title'],
        "content": diary["content"],
        "date":date
    }

def date_request_dto(date):
    date_tmp = datetime.strptime(date, '%Y-%m-%d')
    new_date = date_tmp.strftime("%Y-%m-%d")
    return new_date

def diary_response_dto(result):
    if result is None:
        return 'failed', 400
    return jsonify({
        "title":result.title,
        "content":result.content
        })

def diaries_response_dto(result):
    if result:
        return jsonify(result), 200
    elif result == []:
        return jsonify(result), 200
    else:
        return "failed", 400