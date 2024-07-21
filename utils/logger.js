const fs = require("fs");

class Logger {
  static log(message) {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp} - ${message}\n`;
    fs.appendFileSync("logs/test.log", logMessage);
    console.log(logMessage);
  }
}

module.exports = Logger;
