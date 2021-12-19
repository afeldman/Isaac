FROM ruby:3.0.2

RUN apt-get update

WORKDIR /robor_data/

COPY red_service/* ./
RUN bundle install

EXPOSE 21 28015

VOLUME [ "/data" ]

CMD ["ruby", "/robor_data/pull_data", "ftp", "/data/fanuc.config"]
