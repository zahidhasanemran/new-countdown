const givenDate = new Date("March 19, 2022 00:00:00").getTime(); // return miliseconds from present time to given time 

const generateTime = () => {
    
    const presentTime = new Date().getTime(); // return miliseconds from present 
    const marginTime = givenDate - presentTime; // return diffrence from given time to present time 
    
    // hide if it timeout and show a red notice 
    if(marginTime < 0){
        document.querySelector('.alert').style.display = 'block';
        document.querySelector('.container').style.display = 'none';
    }

    /*
    The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result.
    If the passed argument is an integer, the value will not be rounded.
    ref: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_floor2
    */

    /*
        1 second = 1k miliseconds
        1 minute = 60k miliseconds 
        1 hour   = 360k miliseconds

    */
    let days = Math.floor(marginTime / (1000 * 60 * 60 * 24))
    // devide total miliseconds with days 
    let hours = Math.floor(marginTime % (1000 * 60 * 60 * 24) / (1000*60*60));
    // divide the total milliseconds with days that will return milliseconds and we will divide it with hours(1000*60*60) that make the result in minute from milliseconds 
    let minutes = Math.floor(marginTime % (1000*60*60) / (1000*60))
    // divide the total milliseconds with hours that will return milliseconds and we will divide it with minute(1000 * 60) that make the result in minute from milliseconds 
    let seconds = Math.floor( marginTime % (1000*60) / 1000 ); 
    // divide the total milliseconds with minute that will return milliseconds and we will divide it with 1000 that make the result in seconds from milliseconds 

    days <= 99 ? days = `0${days}` : days;
    hours <= 9 ? hours = `0${hours}` : hours;
    minutes <= 9 ? minutes = `0${minutes}` : minutes;
    seconds <= 9 ? seconds = `0${seconds}` : seconds;


    document.querySelector('#days').textContent = days;
    document.querySelector('#hours').textContent = hours;
    document.querySelector('#minutes').textContent = minutes;
    document.querySelector('#seconds').textContent = seconds;



}

generateTime();

setInterval(() => {
    generateTime()
}, 1000);








