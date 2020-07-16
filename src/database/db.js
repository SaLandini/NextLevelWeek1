//import sqlite3
const sqlite3 = require("sqlite3").verbose()

// inicia o obj do data base
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db

//utilazar o obj (Tá comentado por algum motivo) 
// db.serialize(() => {
//     //usando comandos SQL, eu vou:
//     //criar uma tabela
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//         //add dados
//     const query = `
//     INSERT  INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
//     `

//     const values = [
//         "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/89c8441e3ccd9345a150_danielhe4rt_1803801137_112799751//thumb/thumb0-320x180.jpg",
//         "Jorge",
//         "JPAQEDA, ASDjpoasd",
//         "Números: 9,23,456",
//         "Santa Catarina",
//         "Santa City",
//         "Só lixo"
//     ]

//     function afterInsertData(err) {
//         if (err) {
//             return console.log(err)
//         }
//         console.log("Cadastro feito com sucesso")
//         console.log(this)
//     }

//     //db.run(query, values, afterInsertData)

//     //Consultar um dado da tabela
//     db.all(`SELECT * FROM places`, function(err, rows) {
//             if (err) {
//                 return console.log(err)
//             }
//             console.log("Tá aqui os resgistros")
//             console.log(rows)
//         })
//Deletar um dado da tabela ( PRA NÂO BUGAR TUDO)
// db.run(`DELETE FROM places WHERE id = ?`, [], function(err, rows) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log('DELETEI MEU BRODI')
//     console.log(rows)
// })

})