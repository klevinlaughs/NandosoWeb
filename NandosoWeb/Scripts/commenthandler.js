﻿var commenthandler = (function () {
    
    return {
        getComments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json", // JSON with padding, access control?
                url: "https://Nandosoklau158.azurewebsites.net/api/comments",
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

            console.log(username.value);
            console.log(email.value);
            console.log(message.value);

            $.ajax({
                type: "POST",
                dataType: "json",
                data: {
                    name: username.value,
                    email: email.value,
                    message: message.value,
                    date: date.toLocaleString()
                },
                url: "https://Nandosoklau158.azurewebsites.net/api/comments",
                error: function () {
                    // TODO make jQuery failed post popup
                    console.log("POST FAILED");
                }
            });
        }


    };

})();

function postComment() {
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    var date = new Date();

    console.log(username.value);
    console.log(email.value);
    console.log(message.value);

    $.ajax({
        type: "POST",
        dataType: "json",
        data:{
            name: username.value,
            email: email.value,
            message: message.value,
            date: date.toLocaleString()
        },
        url: "https://Nandosoklau158.azurewebsites.net/api/comments",
        error: function () {
            // TODO make jQuery failed post popup
            console.log("POST FAILED");
        }
    });
}