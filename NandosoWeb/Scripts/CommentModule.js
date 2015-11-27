var CommentModule = (function () {
    
    return {
        getComments: function (callback) {
            $.ajax({
                method: "GET",
                dataType: "json", // JSON with padding, access control?,
                //url: "https://Nandosoklau158.azurewebsites.net/api/comments",
                url:"/api/comments",
                success: function (data) {
                    //console.log(data);
                    callback(data);
                }
            });
        },

        postComment: function () {
            var username = document.getElementById("username");
            var email = document.getElementById("email");
            var message = document.getElementById("message");

            var date = new Date();

            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    name: username.value,
                    email: email.value,
                    message: message.value,
                    date: date.toLocaleString()
                },
                //url: "https://Nandosoklau158.azurewebsites.net/api/comments",
                url: "http://localhost:56969/api/comments",
                error: function () {
                    // TODO make jQuery failed post popup
                    console.log("POST FAILED");
                }
            });
        }


    };

})();
