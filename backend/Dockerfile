FROM python:3.10-alpine

WORKDIR app
COPY requirements.txt .
COPY src . 

RUN pip3 install -r requirements.txt --no-cache-dir

ENTRYPOINT ["python3"] 
CMD ["manage.py", "runserver", "0.0.0.0:5000"]
