var saveBtn = document.getElementById("save-btn");
var textEntered = document.getElementById("text-area");
var timeBlock = document.getElementsByClassName("time-block");
var hour = document.getElementsByClassName("hour");
var currentDay = document.getElementById("currentDay");
//Save Button Event Handler
    //Listen for clicks on the save button
    //if clicked, save text contents of textEntered to local storage
    //load any saved data from local storage to display on page, under the correct hour

//Function to track time and color-code timeblock classes
    //Display day, month, day in jumbotron using Moment.js
let presentDate = moment().format('dddd - MMMM Do, YYYY');
    currentDay.innerHTML = presentDate;
    //Moment.js time interval for each block ("startof function")
var format = 'hh:mm:ss'

//Conditionals for Timeblocks - use moment isBetween, isBefore, and isAfter classes
var nineBlock = moment(), 
    beforeTime = moment('09:00:00', format),
    afterTime = moment('09:59:59', format);

    if (nineBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 9');
        timeBlock.className = "present";
        //change class
    }else if(nineBlock.isAfter(afterTime)) {
        console.log('is after 9')
        timeBlock.className = "after";
    }else if(nineBlock.isBefore(beforeTime)) {
        console.log('is before 9')
        timeBlock.className = "before";
    };
