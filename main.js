require("dotenv").config()
const mysql = require('mysql2/promise');


let db_name = "";

mysql.createConnection({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
}).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${db_name};`).then(() => {

        // Safe to use sequelize now
        const { Sequelize, Op } = require('sequelize');
        const mSequelize = require('./db');
        const auditor_video_uploads = require('./models/seekright_v3/auditor_video_uploads');
        const sequelize = mSequelize(db_name);

        sequelize.sync().then(console.log("success"));
        console.log("wroking");

        const initModelsSeekrightV3 = require("./models/seekright_v3/init-models");
        initModelsSeekrightV3(sequelize);

        const AuditorVideoUpload = auditor_video_uploads(sequelize, Sequelize);


    })
})

let database = '';

const Importer = require('mysql-import');
const importer = new Importer({host, user, password, database});

// New onProgress method, added in version 5.0!
importer.onProgress(progress=>{
  var percent = Math.floor(progress.bytes_processed / progress.total_bytes * 10000) / 100;
  console.log(`${percent}% Completed`);
});

importer.import('path/to/dump.sql').then(()=>{
  var files_imported = importer.getImported();
  console.log(`${files_imported.length} SQL file(s) imported.`);
}).catch(err=>{
  console.error(err);
});