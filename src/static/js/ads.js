var adBlockEnabled = false;
var testAd = document.createElement('div');
testAd.innerHTML = '&nbsp;';
testAd.className = 'adsbox';
document.body.appendChild(testAd);

window.setTimeout(function() {
  if (testAd.offsetHeight === 0 || testAd.length == 0) {
    adBlockEnabled = true;
  } else {
    var flag = document.querySelector('div.BlockerEnabled');
    flag.classList.remove('BlockerEnabled');
  }
  testAd.remove();
}, 100);
