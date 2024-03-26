import uvicorn
from fastapi import FastAPI
from data_form import Employer
import numpy as np
import pandas as pd
import pickle
import random

app = FastAPI()

# Load the sig matrix from the pickle file
with open("/Users/aryansheregar/Documents/VScode/Python/model.pkl", "rb") as f:
    sig = pickle.load(f)

# Load your clean data and create indices
clean = pd.read_csv("Final_emp_data.csv")
indices = pd.Series(clean.index, clean['Company_Name'])

# Define the give_rec function


def give_rec(Name, sig=sig):
    idx = indices[Name]
    sig_score = list(enumerate(sig[idx]))
    sig_score = sorted(sig_score, key=lambda x: x[1], reverse=True)
    sig_score = sig_score[1:11]
    job_indices = [i[0] for i in sig_score]
    return clean['Company_Name'].iloc[job_indices]


@app.get('/')
def index():
    return {'message': 'Hello,Testing'}


@app.get('/recommend')
def give_recommend(Company_Name: str):
    if Company_Name not in indices:
        random_company = random.choice(clean['Company_Name'])
        recommendation = give_rec(random_company)
        return {'message': f'Company not found. Here is a random recommendation based on company "{random_company}": {recommendation}'}
    recommendation = give_rec(Company_Name)
    return {'recommendation': recommendation}


if __name__ == '__main__':
    uvicorn.run(app, host='127.0.0.1', port=8000)
