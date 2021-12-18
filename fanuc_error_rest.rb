#!/usr/bin/env ruby

require 'sinatra'
require "sinatra/namespace"
require 'dotenv/load'
require 'json'

require_relative './isaac/database'

port = ENV["DBPORT"]
host = ENV["DBHOST"]
user = ENV["DBUSER"]
passwd = ENV["DBPASSWD"]
db = ENV["DB"]

db = DB.new({"host"=>host, 
             "port"=>port, 
             "user"=>user, 
             "passwd"=>passwd,
             "db"=>db})

namespace '/v1' do

    before do
        content_type 'application/json'
    end

    get '/robots' do
        robots = db.db.table_list().run
        robots.to_json
    end

    get '/:robot' do
        cursor = db.robot(params[:robot]).run()
        cursor.to_a.to_json
    end

    get '/:robot/:tp' do
        end_tp=DateTime.parse(db.now.to_iso8601().run).to_time.to_i
        redirect to("/v1/#{params[:robot]}/#{params[:tp]}/#{end_tp}")
    end

    get '/:robot/:from/:to' do
        cursor = db.robot(params[:robot]).between(params[:from].to_i, params[:to].to_i).run.to_a.to_json
    end
end