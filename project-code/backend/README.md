# flask 서버 실행
- pip install -r requirements.txt
- app.py있는 폴더에서 flask db init => flask db migrate => flask db upgrade 입력 후 db에 테이블이 잘 생성되는지 확인
- server 폴더에 secret.py 생성
```python
username = ''
db_pw = ''
secret_key = ''
jwt_secret_key = ''
```
- app.py있는 폴더에서 flask run 실행