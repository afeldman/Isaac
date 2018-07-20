# isaac
This project is named after Isaac Chapek.
FANUC robot controller utilizes a Error log file "ERRALL.LS" containing 100 Errors. This project parse the file and creates a timeline containing all the information

## Dependencie

* vis - timeline visualisation
* electron - GUI
* dotenv - env variable for the local program

## install 

```bash
npm install
```

## start

```bash
npm start
```

# futrue works

I want to buildin a database connection to rethinkdb. So the data get stored into a history. 
To get a deamon running in the back, I want to implement a feed mechanism, too. FANUC robot controllers utilizes error feed information if the package is installed.
Another extension should be the integration of the error database information. FANUC provides a error information documentation. The information should be optional linked into the application.
The last change I want to implement is the integration of the workers work to get the application running.

