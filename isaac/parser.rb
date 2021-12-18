require 'date'

require_relative "./database"

class Err_Parser 

    def initialize (filename, db=nil)

        if db.instance_of? DB
            @db = db
        else
            @db = Array.new
        end

        @filename = filename

    end

    def parse(table_name="my_first_robot")
    
        line_no = 0

        File.readlines(@filename).each do |line|
            line = line.strip
            if line_no == 0 or line.empty?
                line_no += 1
            else
                line_value = line.split("\"")

                counter = line_value[0].strip.to_i
                date =  DateTime.parse(line_value[1].strip)
                
                reason = line_value[2].strip

                signal = line_value[4].strip
                last_signal = signal.reverse[0, 8].reverse.to_i(2)



                @db.robot(table_name).insert({
                    "no"=>counter, "id"=>date.to_time.to_i, "date"=>date.iso8601, "reason" => reason, "signal"=>signal, "signal_int" => last_signal
                }).run
            end
        end

    end

end
