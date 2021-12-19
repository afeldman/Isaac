require 'net/ftp'
require 'tmpdir'
require_relative "./parser"

def work_robot_db (robot_config_data, db)
    
    tmp_file_name = File.join(Dir::tmpdir, robot_config_data["name"])

    Net::FTP.open(robot_config_data.ip) do |ftp|
        ftp.login(user=robot_config_data["user"], 
                  passwd=robot_config_data["passwd"])
        ftp.passive = true
        #ftp.chdir('MD')
        ftp.getbinaryfile("ERRALL.LS", tmp_file_name, 1024)
    end

    work_error_file(tmp_file_name, 
                    robot_config_data["name"], 
                    db)

    File.delete(tmp_file_name) if File.exists?(tmp_file_name)

end

def work_error_file (error_file, robot_name, db)

    if File.exist?(error_file) then
        parser = Err_Parser.new(error_file, db)
        parser.parse(robot_name)
    end

end
