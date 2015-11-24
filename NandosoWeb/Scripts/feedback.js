// Run this when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Feedback page loaded...");
    getComments();
});

function getComments() {
    console.log("Getting comments...");
    commenthandler.getComments(displayComments);
}

function displayComments(comments) {
    var feedbackList = document.getElementById("feedbackList");

    for(i=0;i<comments.length;i++){
        var row = document.createElement("tr");

        var userCol = document.createElement("td");
        userCol.attributes['style'] = 'text-align:center';
        userCol.style = "text-align:center";
        userCol.innerHTML = comments[i].name;
        row.appendChild(userCol);

        var commentCol = document.createElement("td");
        commentCol.style = "text-align:center";
        commentCol.innerHTML = comments[i].message;
        row.appendChild(commentCol);

        feedbackList.appendChild(row);
    }

}