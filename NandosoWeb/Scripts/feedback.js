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

        var commentDiv = document.createElement("div");
        commentDiv.setAttribute("class", "row comment-block");

        var userCol = createUserCol(comments[i]);
        commentDiv.appendChild(userCol);

        var commentCol = createCommentCol(comments[i]);
        commentDiv.appendChild(commentCol);

        feedbackList.appendChild(commentDiv);
    }
}


function createUserCol(commentObj) {

    var userCol = document.createElement("div");
    userCol.setAttribute("class", "col-xs-2 user-box");
    userCol.setAttribute("style", "text-align:center");
    userCol.innerHTML = commentObj.name;

    return userCol;
}

function createCommentCol(commentObj) {

    var commentCol = document.createElement("div");
    commentCol.setAttribute("class", "col-xs-10 comment-box");
    commentCol.setAttribute("id", "comment" + commentObj.ID);

    var messageDiv = document.createElement("div");
    messageDiv.setAttribute("class", "col-xs-12 comment-box");
    messageDiv.innerHTML = commentObj.message;

    commentCol.appendChild(messageDiv);

    if (!commentObj.reply || commentObj === "") {
        var buttonDiv = createShowReplyDiv(commentObj);
        var replyBox = createReplyBox(commentObj);
        commentCol.appendChild(buttonDiv);
        commentCol.appendChild(replyBox);
    } else {
        var repliedDiv = createRepliedBox(commentObj);
        commentCol.appendChild(repliedDiv);
    }
    return commentCol;

}

function createShowReplyDiv(commentObj) {
    var buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("class", "col-xs-12");
    buttonDiv.style.textAlign = "right";

    var showReplyButton = document.createElement("button");
    showReplyButton.setAttribute("class", "btn btn-default");
    showReplyButton.setAttribute("id", "showReplyBtn" + commentObj.ID);
    showReplyButton.setAttribute("onclick", "ReplyModule.toggleReplyBox(this)");
    showReplyButton.innerHTML = "Reply";
    buttonDiv.appendChild(showReplyButton);

    return buttonDiv;
}

function createReplyBox(commentObj) {
    var replyDiv = document.createElement("div");
    replyDiv.id = "replyDiv" + commentObj.ID;
    replyDiv.setAttribute("class", "col-xs-12 form-group reply-box");
    replyDiv.style.display = "none";

    var textArea = document.createElement("textarea");
    textArea.setAttribute("class", "form-control");
    textArea.setAttribute("row", "5");
    textArea.setAttribute("style", "resize:none");
    textArea.setAttribute("id", "replyArea" + commentObj.ID);
    textArea.setAttribute("placeholder", "What is your response?");
    textArea.setAttribute("required", "");

    var postReplyBtn = createReplyButton(commentObj);

    replyDiv.appendChild(textArea);
    replyDiv.appendChild(postReplyBtn);

    return replyDiv;
}

function createReplyButton(commentObj) {
    var postReplyBtn = document.createElement("button");
    postReplyBtn.id = "postReplyBtn" + commentObj.ID;
    postReplyBtn.innerHTML = "Reply";
    postReplyBtn.setAttribute("class", "btn btn-danger");
    postReplyBtn.type = "submit";
    postReplyBtn.setAttribute("onclick","ReplyModule.postReply(this.id)");

    return postReplyBtn;
}

function createRepliedBox(commentObj) {
    var repliedDiv = document.createElement("div");
    repliedDiv.setAttribute("class", "col-xs-12 replied-box");
    repliedDiv.innerHTML = commentObj.reply;
    return repliedDiv;
}
