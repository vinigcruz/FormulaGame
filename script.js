const balanceDisplay = document.getElementById('balance');
const betAmountInput = document.getElementById('bet-amount');
const driverSelect = document.getElementById('driver-select');
const raceTrack = document.getElementById('race-track');
const raceResult = document.getElementById('race-result');
const Startbutton = document.getElementById('Start');

let balance = 100;
let raceInProgress = false;
let cars = [];
let intervalId;

function placeBet() {
    if (!raceInProgress) {
        const betAmount = parseInt(betAmountInput.value);
        const selectedDriver = parseInt(driverSelect.value);

        if (betAmount > balance) {
            alert('Insufficient balance!');
            return;
        }

        if (betAmount < 5) {
            alert('Minimum bet amount is R$5!');
            return;
        }

        balance -= betAmount;
        balanceDisplay.textContent = balance;

        // Code to process the bet and start race
        startRace();
    } else {
        alert('Race is already in progress!');
    }
}
function moveCars(){
    intervalId = setInterval(()=>{
        cars.forEach(car => { 
            const moveDistance = Math.random() * 10;
            car.style.marginLeft = (parseFloat(car.style.marginLeft || 0) + moveDistance + 'px' )
       })
       handleRaceResult();
    },50 )

}

Startbutton.addEventListener("click", function(){
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    const car3 = document.getElementById('car3');
    const car4 = document.getElementById('car4');
    const car5 = document.getElementById('car5');

    
    
    if(raceInProgress == true){
        Startbutton.d

    }else{
        cars.push(car1,car2,car3,car4,car5);
    moveCars();
    raceInProgress = true;
    }
   
});
function resetRace(){
    cars.forEach(car => { 
        car.style.marginLeft ='0px' 
   })

}
   
function handleRaceResult() {
    // const selectedDriver = parseInt(driverSelect.value);

    // if (winner === selectedDriver) {
    //     const betAmount = parseInt(betAmountInput.value);
    //     balance += betAmount * 2;
    //     balanceDisplay.textContent = balance;
    //     alert('Congratulations! You won the bet!');
    // } else {
    //     alert('Sorry, you lost the bet.');
    // }
    const winningCar = cars.find(car  => parseFloat(car.style.marginLeft) >= 550)
    if(winningCar) {
        alert("winningCar") 
        resetRace();
        return; 
    }
}
