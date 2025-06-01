const sqlite3 = require('sqlite3').verbose();

class Model {
    constructor() {
        this.db = new sqlite3.Database('./models/contacts.db');
        this.initializeDB();
    }

    initializeDB() {
        this.db.run(`
            CREATE TABLE IF NOT EXISTS contacts (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                email TEXT NOT NULL,
                name TEXT NOT NULL,
                comment TEXT,
                ip TEXT,
                created_at TEXT,
                country TEXT NOT NULL
            )
        `);
    }
}

module.exports = new Model().db;