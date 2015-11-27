var ReplyModule = (function () {

    function createDate(timeAsString){
        var dateArray = timeAsString.split("T");

        var date = dateArray[0];
        var time = dateArray[1];

        var dateArray2 = date.split("-");
        var timeArray = time.split(":");

        var date3 = new Date(dateArray2[0], dateArray2[1], dateArray2[2], timeArray[0], timeArray[1], timeArray[2]);

        return date3;
    }


    function reply(data) {

        $.ajax({
            method: "PUT",
            datatype: "json",
            data: {
                ID: data.ID,
                name: data.name,
                email: data.email,
                message: data.message,
                date: data.date,

                //name: obj["name"],
                //email: obj["email"],
                //message: obj["message"],
                //date: date3.toLocaleString(),

                reply: "WORKING!!!"
            },
            url: "http://localhost:56969/api/comments/" + data.ID,

            error: function () {
                console.log("Could not post comment...");
            }
        });
    }

    return {

        postReply: function(clickID) {
            var commentID = clickID.substring(5);
            var divID = "comment" + commentID;
            var commentDiv = document.getElementById(divID);

            var name, email, message;

            $.ajax({
                type: "GET" ,
                datatype: "json",
                url: "http://localhost:56969/api/comments/" + commentID,

                success: function (data) {
                    console.log("Successfully retrieved info...");
                    reply(data);
                }
            });

        }

    }

}());