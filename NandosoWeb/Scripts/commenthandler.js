var commenthandler = (function () {
    
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
        }


    }

})();

function postComment() {
    $.ajax({
        type: "POST",
        dataType: "json",
        url: "https://Nandosoklau158.azurewebsites.net/api/comments"
    });
}