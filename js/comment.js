const Form = document.querySelector("#Form");
const commentsContainer = document.querySelector("#comments");
Form.addEventListener("submit", function (e) {
  e.preventDefault();
  const commentInput = Form.elements.comment;
  addComment( commentInput.value);
  commentInput.value = "";
});

const addComment = (comment) => {
const newComment = document.createElement("li");
newComment.append(`${comment}`);
commentsContainer.append(newComment);
};