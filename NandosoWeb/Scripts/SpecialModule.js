var SpecialModule = (function () {

    return {

        getSpecials: function (callback) {
            $.ajax({
                type:"GET",
                datatype: "json",
                //url: "https://Nandosoklau158.azurewebsites.net/api/specials",
                url: "http://localhost:56969/api/specials",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };

}());