// Run this when the document is loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Feedback page loaded...");
    loadComments();
});

function loadComments() {
    console.log("Getting comments...");
    CommentModule.getComments(displayComments);
}

function displayComments(comments) {
    var feedbackList = document.getElementById("feedbackList");

    for (i = comments.length - 1 ; i >= 0 ; i--) {

        var row = document.createElement("tr");

        var userCol = createUserCol(comments[i]);

        var commentCol = createUserCol(comments[i]);

        row.appendChild(commentCol);

        feedbackList.appendChild(row);
    }
}


function createUserCol(commentObj) {

    var userCol = document.createElement("td");
    userCol.setAttribute("style", "text-align:center");
    userCol.innerHTML = commentObj.name;
    row.appendChild(userCol);

    return userCol;
}

function createCommentCol(commentObj) {

    var commentCol = document.createElement("td");
    commentCol.setAttribute("class", "row");
    commentCol.setAttribute("id", "comment" + commentObj.ID);

    var messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "col-xs-11");
    messageDiv.innerHTML = commentObj.message;

    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "col-xs-1");

    var replyButton = document.createElement("button");
    replyButton.setAttribute("class", "btn btn-default");
    replyButton.setAttribute("id", "reply" + commentObj.ID);
    replyButton.setAttribute("onclick", "ReplyModule.postReply(this.id)");
    replyButton.innerHTML = "Reply";

    buttonDiv.appendChild(replyButton);

    commentCol.appendChild(messageDiv);
    commentCol.appendChild(buttonDiv);

}