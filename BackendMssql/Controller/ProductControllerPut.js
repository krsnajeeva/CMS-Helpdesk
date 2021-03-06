var express = require('express');
var router = express.Router();
var sql = require("mssql");
var conn = require("../connection/connect")();

var routes = function () {
    router.route('/:id')
        .put(function (req, res) {
            var _productID = req.params.id;
            conn.connect().then(function () {
                var transaction = new sql.Transaction(conn);
                transaction.begin().then(function () {
                    var request = new sql.Request(transaction);
                    request.input("id", sql.Int, _productID)
                    request.input("ticketNum", sql.VarChar(30), req.body.ticketNum)
                    request.input("staffName", sql.VarChar(30), req.body.staffName)
                    request.input("createdDate", sql.Date, req.body.createdDate)
                    request.input("updatedDate", sql.Date, req.body.updatedDate)
                    request.input("email", sql.VarChar(30), req.body.email)
                    request.input("attachmentList", sql.VarChar(30), req.body.attachmentList)
                    request.input("notes", sql.VarChar(30), req.body.notes)
                    request.input("status", sql.VarChar(30), req.body.status)
                    request.input("programID", sql.Int, req.body.programID)
                    request.execute("sp_UpdateHelpDesk")
                    .then(function () {
                        transaction.commit().then(function (recordSet) {
                            conn.close();
                            res.status(200).send(req.body);
                        }).catch(function (err) {
                            conn.close();
                            res.status(400).send("Error while updating data");
                        });
                    }).catch(function (err) {
                        conn.close();
                        res.status(400).send("Error while procedure");
                    });
                }).catch(function (err) {
                    conn.close();
                    res.status(400).send("Error while request data");
                });
            }).catch(function (err) {
                conn.close();
                res.status(400).send("Error while connecting");
            });
        });
    return router;
};
module.exports = routes;