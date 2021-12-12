require "net-ftp"
require_relative "./parser"

def work_robot (robot_ftp, robot_name, db)
    
    Net::FTP.open('example.com') do |ftp|
        ftp.login

        ftp.getbinaryfile("ERRALL.LS", robot_name+'_errorall.ls', 1024)
    end

    parser = Err_Parser.new(robot_name+'_errorall.ls', db)
    parser.parse(robot_name)

end

