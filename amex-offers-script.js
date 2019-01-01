function main() {
  const WAIT_TIME_MS = 3000;
  const offerButtons = document.getElementsByClassName('offer-cta');
  for (let i = 0; i < offerButtons.length; ++i) {
    setTimeout(() => {
      if (offerButtons[i].title == "Add to Card") {
        try {
          console.log('Clicking ' + offerButtons[i]);
          offerButtons[i].click();
        } catch (e) { console.error(e); }
      }
    }, WAIT_TIME_MS)
  }
};

main();