FROM ruby:3.0.2

COPY Gemfile .
RUN apt-get update
RUN bundle install 

EXPOSE 21