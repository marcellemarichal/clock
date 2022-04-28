const hourHand = document.querySelector('.hand.hours')
const minuteHand = document.querySelector('.hand.minutes')
const secondHand = document.querySelector('.hand.seconds')

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty('--rotation', rotationPercentage *360)

}

const setClock = () => {
    const currentDate = new Date();

    const secondsPercentage = currentDate.getSeconds() /60;
    const minutesPercentage = (secondsPercentage + currentDate.getMinutes()) /60;
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) /12;

    setRotation(secondHand, secondsPercentage)
    setRotation(minuteHand, minutesPercentage)
    setRotation(hourHand, hoursPercentage)

};

setClock();

setInterval(setClock, 1000);

