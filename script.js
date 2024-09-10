// Function to toggle answer visibility
function toggleAnswer(questionNumber) {
  const answer = document.getElementById(`answer-${questionNumber}`);

  // Check if the answer is currently displayed, and toggle its visibility
  if (answer.style.display === "none") {
    answer.style.display = "block"; // Show answer
  } else {
    answer.style.display = "none"; // Hide answer
  }
}
