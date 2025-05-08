const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const toggleAnswer = () => {
    const isExpanded = question.getAttribute('aria-expanded') === 'true';

    // Collapse all questions
    questions.forEach((q) => q.setAttribute('aria-expanded', 'false'));

    // Expand only if not already expanded
    if (!isExpanded) {
      question.setAttribute('aria-expanded', 'true');
    }
  };

  question.addEventListener('click', toggleAnswer);

  question.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); // Prevent scrolling on space
      toggleAnswer();
    }
  });
});
