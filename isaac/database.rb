require 'rethinkdb'
include RethinkDB::Shortcuts

class DB

    def initialize (host="127.0.0.1", port="28015", db="fanuc_robot")
        r.connect(:host=>"localhost", :port=>28015).repl
        begin
            @db = r.db(db)
        rescue RethinkDB::ReqlOpFailedError
            @db = r.db_create(db)
        end
    end

    def robot(robot_name)
        begin
            table = @db.table(robot_name)
        rescue => exception
            table = @db.table_create(robot_name)
        end
        table
    end

end
