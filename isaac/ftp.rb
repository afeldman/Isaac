require 'tempfile'
require 'net-ftp'

require_relative "./parser"

def work_robot_db (robot_config_data, db)
    
    tmp_file_name = Tempfile.new(robot_config_data.name)

    Net::FTP.open(robot_config_data.ip) do |ftp|
        ftp.login (user=robot_config_data.user, passwd=robot_config_data.passwd)

        ftp.getbinaryfile("ERRALL.LS", tmp_file_name, 1024)
    end

    work_error_file (tmp_file_name, robot_config_data.name, db)

end

def work_error_file (error_file, robot_name, db):

    if File.exist?(error_file) then
        parser = Err_Parser.new(error_file, db)
        parser.parse(robot_name)
        error_file.close   
        error_file.unlink   
    end

end
