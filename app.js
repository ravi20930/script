require("dotenv").config()
const mysql = require('mysql2');
const express = require('express')
const app = express()
const multer = require('multer');
const bodyParser = require('body-parser')
const Importer = require('mysql-import')




app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single("sql");

app.post("/db", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send("Something went wrong!" + err);
        }
        let tempFileName = req.file.originalname;
        let nameArray = tempFileName.split(".");
        let database = nameArray[0];

        let DB_HOST='127.0.0.1'
        let DB_PORT='3306'
        let DB_USER='root'
        let DB_PASSWORD='password'

        const importer = new Importer({ DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, database })

        importer.onProgress(progress => {
            var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
            console.log(`${percent}% Completed`);
        });

        importer.import(`uploads/${database}.sql`).then(() => {
            var files_imported = importer.getImported();
            console.log(`${files_imported.length} SQL file imported.`);

            mysql.createConnection({
                user: user,
                password: pass,
                multipleStatements: true
            }).then((connection) => {
                connection.query(`CREATE DATABASE IF NOT EXISTS ${database};`).then(() => {
                    connection.query(
                        `
                        create table ${database}.counts(
                            id integer primary key auto_increment not null,
                             description varchar(100),
                             captured integer,
                             processed integer,
                             anomaly_generated integer,
                             anomaly_audited integer,
                             true_anomaly integer,
                             false_anomaly integer
                         );

                         insert into ${database}.counts ( description, captured, processed, anomaly_generated, anomaly_audited, true_anomaly, false_anomaly )  value (
                            'linear',
                            (select COUNT(*) FROM ${database}.video_uploads where asset_type = 'linear:other-linears' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.video_uploads where is_processed = 1 and asset_type = 'linear:other-linears' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Algorithm = 'linear' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where IsAudited = 1 and Algorithm = 'linear' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Audit_status = 1 and Algorithm = 'linear' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Audit_status = 0 and Algorithm = 'linear' and created_on BETWEEN '2022-03-01' AND '2022-03-31')
                            );
                            
                            insert into ${database}.counts ( description, captured, processed, anomaly_generated, anomaly_audited, true_anomaly, false_anomaly )  value (
                            'fixed',
                            (select COUNT(*) FROM ${database}.video_uploads where asset_type = 'fixed' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.video_uploads where is_processed = 1 and asset_type = 'fixed' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Algorithm = 'fixed' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where IsAudited = 1 and Algorithm = 'fixed' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Audit_status = 1 and Algorithm = 'fixed' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Audit_status = 0 and Algorithm = 'fixed' and created_on BETWEEN '2022-03-01' AND '2022-03-31')
                            );
                            
                            insert into ${database}.counts ( description, captured, processed, anomaly_generated, anomaly_audited, true_anomaly, false_anomaly )  value (
                            'night',
                            (select COUNT(*) FROM ${database}.video_uploads where asset_type = 'electrical-reflective' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.video_uploads where is_processed = 1 and asset_type = 'electrical-reflective' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Algorithm = 'night' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where IsAudited = 1 and Algorithm = 'night' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Audit_status = 1 and Algorithm = 'night' and created_on BETWEEN '2022-03-01' AND '2022-03-31'),
                            (select COUNT(*) FROM ${database}.anomaly_audit where Audit_status = 0 and Algorithm = 'night' and created_on BETWEEN '2022-03-01' AND '2022-03-31')
                            );
                        `
                    )
                })
            })

        }).catch(err => {
            console.error(err);
        });
        res.send(req.file);
    });
});

app.listen(3000, () => {
    console.log("running on 3000");
})