
    const card = document.getElementById('animatedCard');

    // Add shake animation class when clicked
    card.addEventListener('click', () => {
      card.classList.add('shake-animation');

      // Remove shake animation after 0.5s
      setTimeout(() => {
        card.classList.remove('shake-animation');
      }, 500);
    });
