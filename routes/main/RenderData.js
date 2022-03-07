const mysqlConnection = require("../../modules/mysql");
const connection = mysqlConnection.connection;

exports.getUserEvents = async (req, res) => {
    console.log("getUserEvents router called"); // Log
    const userID = req.body.userID;
    console.log("userID: " + userID);

    connection.query(
        `SELECT * FROM 365fret.event WHERE event_key in (SELECT fk_event_key FROM 365fret.event_member WHERE fk_user_id=?)`,
        [userID]
        , (err, response) => {
            if (err) console.log(err);
            else res.send(response);
    })
}