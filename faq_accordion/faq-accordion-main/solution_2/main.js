/* 

Pseudo-code

FOR EACH question IN the page
    WHEN the question is clicked DO:
        IF the question is currently expanded (aria-expanded === true);
            THEN
                SET this question's aria-expanded to false
                Hide the answer 
        ELSE
            FOR EACH question IN the page 
                SET aria-expanded to false
                Hide its answer

            END FOR 

            SET clicked question's  aria-expanded to true
            Show the answer
        END IF
    END FOR

*/

/*
MY HTML Structure 

<div.questionContainer>
    <section.question>
        h1
        div.buttonIcons
            img
            img
    </section.question>

    <section.answerContainer>
        p#answer$num
    </section.answerContainer>
</div.questionContainer>


*/

const questions = document.querySelectorAll('.question');

function showAnswer(clickedQuestion) {
  const isExpanded = clickedQuestion.getAttribute('aria-expanded') === 'true';
  const answer = clickedQuestion.parentElement.querySelector('.answerContainer');

  if (isExpanded) {
    // Collapse the clicked question
    clickedQuestion.setAttribute('aria-expanded', 'false');
    answer.style.display = 'none';
  } else {
    // Collapse all questions
    questions.forEach((q) => {
      q.setAttribute('aria-expanded', 'false');
      const a = q.parentElement.querySelector('.answerContainer');
      if (a) a.style.display = 'none';
    });

    // Expand clicked question
    clickedQuestion.setAttribute('aria-expanded', 'true');
    answer.style.display = 'block';
  }
}

// Add event listeners to all question elements
questions.forEach((question) => {
  question.addEventListener('click', () => showAnswer(question));
});
