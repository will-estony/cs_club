FROM ubuntu

MAINTAINER Will Estony
RUN apt-get update && apt-get install -y python3 python3-pip



ADD hello.py /home/hello.py
ADD a.py /home/a.py

CMD ["/home/hello.py"]
ENTRYPOINT ["python3"]