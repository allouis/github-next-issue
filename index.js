
var nextButtonHTML = '<button type="button" class="minibutton js-next-issue">Next</button>';
var buttonsContainer = document.querySelector('.gh-header-actions');
 
var currentURL = window.location.pathname;
var parts = currentURL.split('/');
parts[parts.length - 1]--; // next issue - but going back because usually start at the end
var nextURL = window.location.origin + parts.join('/') + '?fromNextButton';

function goToNextIssue () {
  window.location.href = nextURL;
}
 
if (window.location.search.indexOf('fromNextButton') !== -1) {
  if (document.querySelectorAll('.state.state-open').length === 0) {
    goToNextIssue();
  }
}

buttonsContainer.innerHTML += nextButtonHTML;
 
var nextButton = buttonsContainer.querySelector('.js-next-issue');
nextButton.addEventListener('click', goToNextIssue);
