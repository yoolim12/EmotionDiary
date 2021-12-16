from domain.dao.diaryDao import check_diary_date, new_diary, all_diaries, delete_diary_date, update_diary
# from service.AI_model.analysisService import function


# 일기 작성 서비스
def diary_post_service(user_id, diary):
    check_diary = check_diary_date(user_id, diary['date'])

    # 작성한 다이어리가 없다면 새로 생성
    # emotion = function.split_send_data(diary['content'])
    emotion = {
        '공포' : 0, 
        '놀람': 0, 
        '분노': 0, 
        '슬픔': 0, 
        '중립': 0, 
        '행복': 0, 
        '혐오': 0
        }
    if not check_diary:
        diary = new_diary(
            user_id=user_id,
            date=diary['date'],
            title=diary['title'],
            content=diary['content'],
            emotion=emotion
        )
        return diary
    
    else:
        return ''    

# 일기 삭제 서비스
def diary_delete_service(user_id, date):
    if delete_diary_date(user_id, date):
        return 200
    else:
        return 400

# 일기 수정 서비스
def diary_update_service(user_id, diary):
    emotion = {
        '공포' : 0, 
        '놀람': 0, 
        '분노': 0, 
        '슬픔': 0, 
        '중립': 0, 
        '행복': 0, 
        '혐오': 0
        }

    if update_diary(
        user_id=user_id,
        diary=diary, 
        emotion=emotion
    ):
        return 200
    else:
        return 400

def diary_read_service(user_id, date):
    check_diary = check_diary_date(user_id, date)
    if check_diary:
        return check_diary
    else:
        ''

def diary_list_service(user_id):
    diaries = all_diaries(user_id)
    result = []
    for diary in diaries:
        result.append(
            {
                "title":diary.title,
                "content":diary.content,
                "date":diary.date.strftime("%Y-%m-%d"),
                "emotion":max_emotion(diary)
            }
        )

    return result

# 일기장 감정 분석 결과 중 가장 수치가 큰 감정
def max_emotion(diary):
    emotion = {
        '공포' : diary.fear, 
        '놀람': diary.surprised, 
        '분노': diary.anger, 
        '슬픔': diary.sad, 
        '중립': diary.neutral, 
        '행복': diary.happy, 
        '혐오': diary.aversion
        }
    return max(emotion.keys(), key=(lambda k:emotion[k]))

