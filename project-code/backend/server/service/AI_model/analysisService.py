# -*- coding: utf-8 -*-
# 사용할때는 복사본으로 사용
from tensorflow.keras.models import load_model
from konlpy.tag import Okt
import fasttext
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pathlib
from collections import defaultdict
import re

current_path = str(pathlib.Path(__file__).parent.resolve())

# model_path
pretrain_model_path = current_path + "/model3_100.h5"
fasttext_model_path = current_path + "/cc.ko.100.bin"


okt = Okt()
emotion_list = ['공포' , '놀람', '분노', '슬픔', '중립', '행복', '혐오']

#따옴표 사이에 바로 구분자를 넣으면 됩니다.
split_string = "\n."

class LSTM_emotion:
    def __init__(self):
        self.ft_model=fasttext.load_model(fasttext_model_path)
        self.model = load_model(pretrain_model_path)

    
    # 이 메소드로 사용하시면 됩니다.
    def split_send_data(self,input_data):
        
        split_data = re.split(f"[{split_string}]",input_data)
        split_data = list(filter(None, split_data))
        emotion_return = defaultdict(float)

        for split_data_number in split_data:

            one_sentence_data = self._predict_sentence(split_data_number)
            
            for i, sentence in enumerate(one_sentence_data):
                emotion_return[emotion_list[i]]+=sentence  
        
        return emotion_return
    
    def _predict_sentence(self,input_sentence):
        
        sentence = okt.morphs(input_sentence)# 하나의 문장으로 와야 한다.
        tokens = []
        
        for i in sentence:
            tokens.append(self.ft_model.get_word_vector(i))
        
        pad_tokens = pad_sequences([tokens], maxlen=30, padding='post', dtype='float32')
        
        predict_arr = self.model.predict(pad_tokens)[0]
        return  predict_arr
        
function = LSTM_emotion()