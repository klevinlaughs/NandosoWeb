var SpecialModule = (function () {

    return {

        getSpecials: function (callback) {
            $.ajax({
                type:"GET",
                datatype: "json",
                url: "/api/specials",
                success: function (data) {
                    callback(data);
                }
            });
        }
    };

}());