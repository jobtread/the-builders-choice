(() => {
  const { document, window } = globalThis;

  const toggleNav = document.getElementById('main-nav-toggle');
  toggleNav?.addEventListener('click', () => {
    const linksWrapper = document.getElementById('connect-nav-links');
    linksWrapper?.classList.toggle('open');
    globalThis.console.log('click');
  });

  const accordions = document.querySelectorAll('[data-accordion-header]');

  const setAccordionState = (accordionHdr, expand) => {
    const content = accordionHdr
      .closest('div')
      .querySelector('[data-accordion-content]');
    accordionHdr.setAttribute('aria-expanded', expand);
    content.hidden = !expand;
  };

  const setAllAccordions = (targetClass, expand) => {
    const headers = targetClass
      ? document.querySelectorAll(`.${targetClass}`)
      : accordions;
    headers.forEach(hdr => setAccordionState(hdr, expand));
  };

  // Individual accordion toggles
  accordions.forEach(hdr => {
    hdr.addEventListener('click', () => {
      if (hdr.dataset.singular) setAllAccordions(null, false);
      const expanded = hdr.getAttribute('aria-expanded') === 'true';
      setAccordionState(hdr, !expanded);
    });
  });

  // Generic handler for buttons controlling all accordions
  const buttonActions = {
    close: cls => setAllAccordions(cls, false),
    open: cls => setAllAccordions(cls, true),
    toggle: (cls, btn) => {
      const isSelected = btn.dataset.isSelected === 'true';
      setAllAccordions(cls, !isSelected);
      btn.dataset.isSelected = String(!isSelected);
    }
  };

  document.addEventListener('click', e => {
    const btn = e.target.closest(
      '[data-close-all-accordions],[data-open-all-accordions],[data-toggle-all-accordions]'
    );
    if (!btn) return;

    if (btn.dataset.closeAllAccordions) {
      buttonActions.close(btn.dataset.closeAllAccordions);
    }
    if (btn.dataset.openAllAccordions) {
      buttonActions.open(btn.dataset.openAllAccordions);
    }
    if (btn.dataset.toggleAllAccordions) {
      buttonActions.toggle(btn.dataset.toggleAllAccordions, btn);
    }
  });

  // Define the minimum and maximum possible scores based on the question values:
  // Max Score: Q1 (+1) + Q3 (+2) = 3
  // Min Score: Q2 (-1) = -1
  const MIN_SCORE = -10;
  const MAX_SCORE = 10;
  const SCORE_RANGE = MAX_SCORE - MIN_SCORE; // Total span: 4

  // Get the score display elements
  const scoreDisplay = document.getElementById('score-display');
  const scoreIndicator = document.getElementById('score-indicator');

  /**
   * Calculates the total score and updates the tips visibility by iterating
   * over the hardcoded DOM elements.
   */
  function updateScoreAndTips() {
    let totalScore = 0;

    // Get all question card elements
    const questionCards = document.querySelectorAll(
      '#questions-container > div'
    );

    questionCards.forEach(cardElement => {
      // 1. Find the checkbox input within this card
      const checkbox = cardElement.querySelector('input[type="checkbox"]');

      // 2. Find the tip element for this card
      const tipElement = cardElement.querySelector('.tip-box');

      if (checkbox) {
        const isSelected = checkbox.checked;

        if (isSelected) {
          // Extract score value from the data-value attribute
          const value = parseInt(checkbox.dataset.value, 10);
          totalScore += value;

          // Show the tip
          if (tipElement) {
            tipElement.classList.remove('opacity-0', 'max-h-0');
            tipElement.classList.add('opacity-100', 'max-h-20');
          }
        } else {
          // Hide the tip (score contribution is 0)
          if (tipElement) {
            tipElement.classList.add('opacity-0', 'max-h-0');
            tipElement.classList.remove('opacity-100', 'max-h-20');
          }
        }
      }
    });

    // 3. Update the score text display and color
    scoreDisplay.textContent = totalScore;

    // let textColorClass = 'text-gray-700';
    // let indicatorColor = '#6b7280'; // gray-500

    // if (totalScore > 0) {
    //   textColorClass = 'text-green-600';
    //   indicatorColor = '#10b981'; // green-500
    // } else if (totalScore < 0) {
    //   textColorClass = 'text-red-500';
    //   indicatorColor = '#ef4444'; // red-500
    // }

    // Update text color
    scoreDisplay.classList.remove(
      'text-green-600',
      'text-red-500',
      'text-gray-700',
      'text-indigo-700'
    );
    // scoreDisplay.classList.add(textColorClass);

    // 4. Update the slider graph position

    // Calculate the score's position relative to the range (0% to 100%)
    const scoreNormalized = totalScore - MIN_SCORE;
    let scorePercentage = (scoreNormalized / SCORE_RANGE) * 100;

    // Clamp the percentage just in case (though it shouldn't be necessary with correct MIN/MAX)
    scorePercentage = Math.max(0, Math.min(100, scorePercentage));

    // Apply position and color to the indicator dot
    scoreIndicator.style.left = `${scorePercentage}%`;
    // scoreIndicator.style.backgroundColor = indicatorColor;
  }

  // Initialize the page once the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Get all checkbox input elements on the page
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    // Attach the updateScoreAndTips function to the 'change' event of every checkbox
    checkboxes.forEach(input => {
      input.addEventListener('change', updateScoreAndTips);
    });

    // Call the update function once to set initial score (0) and hide all tips
    updateScoreAndTips();
  });

  const printButton = document.getElementById('printButton');

  // JavaScript function to trigger the browser's print dialog
  function printPage() {
    window.console.log('Print');
    window.print();
  }

  // Attach the function to the button click event
  printButton.addEventListener('click', printPage);
})();
