var nextButtonHTML = '<button type="button" class="minibutton js-next-issue">Next</button>';
var buttonsContainer = document.querySelector('.gh-header-actions');
 
var currentURL = window.location.href;
var parts = currentURL.split('/');
parts[parts.length - 1]--; // next issue - but going back because usually start at the end
var nextURL = parts.join('/');
 
buttonsContainer.innerHTML += nextButtonHTML;
 
var nextButton = buttonsContainer.querySelector('.js-next-issue');
nextButton.addEventListener('click', function () {
  window.location.href = nextURL;
});
