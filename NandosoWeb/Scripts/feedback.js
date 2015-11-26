// Run this when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Feedback page loaded...");
    loadComments();
});

function loadComments() {
    console.log("Getting comments...");
    commenthandler.getComments(displayComments);
}

function displayComments(comments) {
    var feedbackList = document.getElementById("feedbackList");

    for(i=0;i<comments.length;i++){
        var row = document.createElement("tr");

        

        var userCol = document.createElement("td");
        var style = document.createAttribute("style");
        style.value = "text-align:center";
        userCol.setAttributeNode(style);
        userCol.innerHTML = comments[i].name;
        row.appendChild(userCol);

        var commentCol = document.createElement("td");

        var messageDiv = document.createElement("div");
        var messageClass = document.createAttribute("class");
        messageClass.value = "col-md-8";
        messageDiv.setAttributeNode(messageClass);

        messageDiv.innerHTML = comments[i].message;

        var buttonDiv = document.createElement("div");
        var buttonDivClass = document.createAttribute("class");
        buttonDivClass.value = "col-md-1";
        buttonDiv.setAttributeNode(buttonDivClass);

        var replyButton = document.createElement("button");
        replyButton.setAttribute("class", "btn btn-default");
        replyButton.innerHTML = "Reply";

        buttonDiv.appendChild(replyButton);
        

        commentCol.appendChild(messageDiv);
        commentCol.appendChild(buttonDiv);

        //var style = document.createAttribute("style");
        //style.value = "text-align:center";
        //commentCol.style = "text-align:center";
        //commentCol.setAttributeNode(style);
        //commentCol.innerHTML = comments[i].message;

        row.appendChild(commentCol);

        feedbackList.appendChild(row);
    }

}