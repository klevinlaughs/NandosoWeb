var SpecialModule = (function () {

    return {

        getSpecials: function (callback) {
            $.ajax({
                type:"GET",
                datatype: "json",
                url: "https://Nandosoklau158.azurewebsites.net/api/specials",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };

}());