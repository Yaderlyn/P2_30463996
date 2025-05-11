const db = require('./db');

class ContactsModel {
    static addContact(data) {
        const now = new Date().toLocaleString('es-VE', {
            timeZone: 'America/Caracas',
            hour12: false,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
            

        return new Promise((resolve, reject) => {
            const stmt = db.prepare(`
                INSERT INTO contacts 
                (email, name, comment, ip, created_at) 
                VALUES (?, ?, ?, ?, ?)
            `);
            
            stmt.run(
                data.email,
                data.name,
                data.comment,
                data.ip,
                now,
                function(err) {
                    if (err) reject(err);
                    else resolve(this.lastID);
                }
            );
        });
    }

    static getContacts() {
        return new Promise((resolve, reject) => {
            db.all("SELECT * FROM contacts ORDER BY created_at DESC", 
                (err, rows) => {
                    if(err) reject(err);
                    else resolve(rows);
                });
        });
    }
}

module.exports = ContactsModel;