require 'rethinkdb'
include RethinkDB::Shortcuts

class DB

    def initialize(database_config)

        db = database_config["db"]

        r.connect(:host=>database_config["host"], 
                  :port=>database_config["port"],
                  :user=>database_config["user"],
                  :passwd=>database_config["passwd"]).repl
       
        if r.db_list().contains(db).run then
            @db = r.db(db)
        else
            @db = r.db_create(db)
        end
       
    end

    def robot(robot_name)
        if @db.table_list().contains(robot_name).run then
            table = @db.table(robot_name)
        else
            table = @db.table_create(robot_name)
        end
        return table
    end

end
