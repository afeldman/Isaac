#!/usr/bin/env ruby

require 'thor'
require 'yaml'
require_relative './isaac/database'
require_relative './isaac/parser'
require_relative './isaac/ftp'


class RoboErrorDataBase < Thor

    desc "file config", "use files"
    def file(config_file, err_file)
        config = YAML.load_file(config_file)

        # make 
        robots = config["robots"].uniq { |robot| robot["ip"] }
        
        # create database
        db = DB.new config["database"]
        
        robots.each do |robot|
            work_error_file(err_file, robot["name"], db)
        end
    end

    desc "ftp config", "Download data from robot"
    def ftp(config_file)
        config = YAML.load_file(config_file)

        # make 
        robots = config["robots"].uniq { |robot| robot["ip"] }
        
        # create database
        db = DB.new config["database"]
        
        robots.each do |robot|
            work_robot_db(robot, db)
        end
    end

end

RoboErrorDataBase.start(ARGV)
