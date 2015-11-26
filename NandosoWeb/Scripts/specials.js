// Run this when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Specials page loaded...");
    loadSpecials();
});

function loadSpecials() {
    console.log("Loading specials");
    SpecialModule.getSpecials(displaySpecials);
}

function displaySpecials(specials) {
    var specialsTable = document.getElementById("specialsTable");

    for (i = 0; i < specials.length; i++) {
        var row = document.createElement("tr");

        var itemCol = document.createElement("td");
        itemCol.innerHTML = specials[i].name;
        row.appendChild(itemCol);

        var originalPriceCol = document.createElement("td");
        originalPriceCol.innerHTML = "$" + specials[i].originalPrice.toFixed(2);
        row.appendChild(originalPriceCol);

        var newPriceCol = document.createElement("td");
        var newPrice = specials[i].originalPrice - specials[i].discount;
        newPriceCol.innerHTML = "$" + newPrice.toFixed(2);
        row.appendChild(newPriceCol)

        var discountCol = document.createElement("td");
        discountCol.innerHTML = "$" + specials[i].discount.toFixed(2);
        row.appendChild(discountCol);

        specialsTable.appendChild(row);

    }
}