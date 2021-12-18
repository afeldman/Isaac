#!/usr/bin/env ruby

require 'yaml'
require_relative './isaac/database'
require_relative './isaac/parser'
require_relative './isaac/ftp'


config_file = ARGV[0]

config = YAML.load_file(config_file)

# make 
robots = config["robots"].uniq { |robot| robot["ip"] }

# create database
db = DB.new config["database"]

robots.each do |robot|
    work_error_file("./test_data/ERRALL.LS", robot["name"], db)
end