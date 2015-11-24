var commenthandler = (function () {
    
    return {
        getComments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "jsonp", // JSON with padding, access control?
                url: "https://Nandosoklau158.azurewebsites.net/api/comments",
                success: function (data) {
                    //console.log(data);
                    callback(data);
                }
            });
        }
    }

})();