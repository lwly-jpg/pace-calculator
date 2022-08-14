let calcButtom = document.getElementById('calc_button');

calcButtom.addEventListener('click', function(){
    let distanceEntered = document.getElementById('distance').value;
    let hoursEntered = document.getElementById('hours').value;
    let minutesEntered = document.getElementById('minutes').value;
    let showResult = document.getElementById('result');
    let timeInMinutes = parseInt(minutesEntered) + (parseInt(hoursEntered) * 60);
    let pace = timeInMinutes / distanceEntered;
    let paceInMinutes = Math.floor(pace);
    let paceInSeconds = Math.round((pace - paceInMinutes) * 60);

    if(paceInSeconds < 10) {
		paceInSeconds = "0" + paceInSeconds;
	}

    showResult.innerHTML = `You need to run at a pace of ${paceInMinutes} mins ${paceInSeconds} secs per km to achieve your target time.`; 
})