document.addEventListener('DOMContentLoaded', function () {
  const distanceEntered = document.querySelector('#distance');
  let hoursEntered = document.querySelector('#hours');
  let minsEntered = document.querySelector('#minutes');
  let secsEntered = document.querySelector('#seconds');
  const calcButton = document.querySelector('#calc_button');
  const dropdown = document.querySelector('#dropdown');
  let showResult = document.querySelector('#result');

  function showPace(mins, secs) {
    showResult.innerHTML = `You need to run at a pace of ${Math.floor(mins)} mins ${Math.floor(secs >= 0 && secs < 10) ? "0" : ""}${Math.floor(secs)} secs per ${dropdown.value} to achieve your target time.`; 
}
  
  function calculatePace(time, distance) {
    const pace = time / distance;
    const minsPace = pace / 60;  
    const secsPace = pace % 60;
    return {minsPace, secsPace}
  }

  function getPace() {
      let hoursInSecs = parseInt(hoursEntered.value * 3600);      
      let minsInSecs = parseInt(minsEntered.value * 60);
      let secsInSecs = parseInt(secsEntered.value);
      let timeInSecs = hoursInSecs + minsInSecs + secsInSecs;


      if (dropdown.value === 'km') {
        const {minsPace: minsPaceInKm, secsPace: secsPaceInKm} = calculatePace(timeInSecs, distanceEntered.value)
        showPace(minsPaceInKm, secsPaceInKm);
      } else {
        let milesDistance = distanceEntered.value / 1.609;
        const {minsPace: minsPaceInMiles, secsPace: secsPaceInMiles} = calculatePace(timeInSecs, milesDistance)
        showPace(minsPaceInMiles, secsPaceInMiles);
      }
  

    //  if (secsPaceInKm === 0) {
    //     secsPaceInKm = "00";
    //   }
     
}
  calcButton.addEventListener('click', function(){
      getPace();
  });
});
  


