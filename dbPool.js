const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "x40p5pp7n9rowyv6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "ns37pnhhq5ub06d6",
    password: "a7px1up1fiioc5lg",
    database: "yrusywmzn9fa2n2w"
});

module.exports = pool;
