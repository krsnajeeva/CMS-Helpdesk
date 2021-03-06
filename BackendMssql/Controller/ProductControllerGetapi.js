var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function ()
 {
    router.route('/')
        .get(function (req, res) {
            conn.connect().then(function () {
                var sqlQuery = "SELECT id, ticketNum, staffName, convert(varchar, [createdDate], 101) AS createdDate, convert(varchar, [updatedDate], 101) AS updatedDate, email, attachmentList, notes, status, HDP.programID, HDP.[name] FROM [dbo].[Helpdesk] H LEFT JOIN dbo.HelpDeskProgram HDP  ON HDP.Programid = H.programid";
                var req = new sql.Request(conn);
                req.query(sqlQuery).then(function (recordset) {
                    res.json(recordset.recordset);
                    conn.close();
                })
                    .catch(function (err) {
                        conn.close();
                        res.status(400).send("Error while data");
                    });
            })
                .catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while inserting data");
                });
        });
        return router;
};
module.exports = routes;