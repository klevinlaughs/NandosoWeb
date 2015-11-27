var ReplyModule = (function () {

    function reply(data, replyMessage) {

        $.ajax({
            method: "PUT",
            datatype: "json",
            data: {
                ID: data.ID,
                name: data.name,
                email: data.email,
                message: data.message,
                date: data.date,
                reply: replyMessage
            },
            url: "/api/comments/" + data.ID,

            error: function () {
                console.log("Could not post comment...");
            }
        });
    }

    return {

        postReply: function(clickID) {
            var commentID = clickID.substring(12);

            var replyArea = document.getElementById("replyArea" + commentID);

            $.ajax({
                type: "GET" ,
                datatype: "json",
                url: "/api/comments/" + commentID,

                success: function (data) {
                    console.log("Successfully retrieved info...");
                    reply(data, replyArea.value);
                }
            });
        },

        toggleReplyBox: function (button) {
            var commentID = button.id.substring(12);
            var divID = "replyDiv" + commentID;
            var replyDiv = document.getElementById(divID);

            if (replyDiv.style.display === "none") {
                replyDiv.style.display = "";
                button.innerHTML = "Hide";
            } else if (replyDiv.style.display === "") {
                replyDiv.style.display = "none";
                button.innerHTML = "Reply";
            }
        }

    }

}());