var saveBtn = document.querySelector(".container");
var textEnteredNine = document.getElementById("text-area-9");
var timeBlock = document.getElementsByClassName("time-block");
var hour = document.getElementsByClassName("hour");
var currentDay = document.getElementById("currentDay");


//Save Button Event Handler
    //Event listener for clicks on the save button - onclick event to save
    saveBtn.addEventListener("click", function(event) {
        console.log("saved")
        console.log(event)
        if (event.target.classList[0] !== "fas") {
            return;
        }
        var keyName = "text-area-" + event.target.attributes[1].value; //makes string text-area-#
        var inputValue = document.getElementById(keyName).value
        console.log(inputValue);
        console.log(keyName);
        localStorage.setItem(keyName, inputValue);
        
    })
    //if clicked, save text contents of textEntered in that particular box to local storage
    //load any saved data from local storage to display as text on page, under the correct hour box

    function renderNineEvent() { //COPY THIS FOR ALL TEXT AREAS
        var nineAm = localStorage.getItem("text-area-9");
        console.log(nineAm);
        document.getElementById("text-area-9").value = nineAm;
    }
    renderNineEvent();

    function renderTenEvent() { //COPY THIS FOR ALL TEXT AREAS
        var tenAm = localStorage.getItem("text-area-10");
        console.log(tenAm);
        document.getElementById("text-area-10").value = tenAm;
    }
    renderTenEvent();
    
    function renderElevenEvent() { //COPY THIS FOR ALL TEXT AREAS
        var elevenAm = localStorage.getItem("text-area-11");
        console.log(elevenAm);
        document.getElementById("text-area-11").value = elevenAm;
    }
    renderElevenEvent();

    function renderNoonEvent() { //COPY THIS FOR ALL TEXT AREAS
        var noon = localStorage.getItem("text-area-10");
        console.log(noon);
        document.getElementById("text-area-12").value = noon;
    }
    renderNoonEvent();

    function renderOneEvent() { //COPY THIS FOR ALL TEXT AREAS
        var onePm = localStorage.getItem("text-area-1");
        console.log(onePm);
        document.getElementById("text-area-1").value = onePm;
    }
    renderOneEvent();

    function renderTwoEvent() { //COPY THIS FOR ALL TEXT AREAS
        var twoPm = localStorage.getItem("text-area-2");

        document.getElementById("text-area-2").value = twoPm;
    }
    renderTwoEvent();

    function renderThreeEvent() { //COPY THIS FOR ALL TEXT AREAS
        var threePm = localStorage.getItem("text-area-3");
        document.getElementById("text-area-3").value = threePm;
    }
    renderThreeEvent();

    function renderFourEvent() { //COPY THIS FOR ALL TEXT AREAS
        var fourPm = localStorage.getItem("text-area-4");
        
        document.getElementById("text-area-4").value = fourPm;
    }
    renderFourEvent();

    function renderFiveEvent() { //COPY THIS FOR ALL TEXT AREAS
        var fivePm = localStorage.getItem("text-area-5");
        document.getElementById("text-area-5").value = fivePm;
    }
    renderFiveEvent();



// }
//Function to track time and color-code timeblock classes
    //Display day, month, day in jumbotron using Moment.js
let presentDate = moment().format('dddd - MMMM Do, YYYY');
    currentDay.innerHTML = presentDate;

//Moment.js time interval for each block ("startof function")
var format = 'hh:mm:ss'

//Conditionals for Timeblocks - used moment isBetween, isBefore, and isAfter classes
var nineBlock = moment(), 
    beforeTime = moment('09:00:00', format),
    afterTime = moment('09:59:59', format);

    if (nineBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 9');
        $(".nine-block").addClass("present");
       
    }else if(nineBlock.isAfter(afterTime)) {
        console.log('is after 9')
        $(".nine-block").addClass("past");
     
    }else if(nineBlock.isBefore(beforeTime)) {
        console.log('is before 9')
        $(".nine-block").addClass("future");
       
    };

    var tenBlock = moment(), 
    beforeTime = moment('10:00:00', format),
    afterTime = moment('10:59:59', format);

    if (tenBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 10');
        $(".ten-block").addClass("present");
       
    }else if(tenBlock.isAfter(afterTime)) {
        console.log('is after 10')
        $(".ten-block").addClass("past");
     
    }else if(tenBlock.isBefore(beforeTime)) {
        console.log('is before 10')
        $(".ten-block").addClass("future");
       
    };

    var elevenBlock = moment(), 
    beforeTime = moment('11:00:00', format),
    afterTime = moment('11:59:59', format);

    if (elevenBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 11');
        $(".eleven-block").addClass("present");
       
    }else if(elevenBlock.isAfter(afterTime)) {
        console.log('is after 9')
        $(".eleven-block").addClass("past");
     
    }else if(elevenBlock.isBefore(beforeTime)) {
        console.log('is before eleven')
        $(".eleven-block").addClass("future");
       
    };

    var noonBlock = moment(), 
    beforeTime = moment('12:00:00', format),
    afterTime = moment('12:59:59', format);

    if (noonBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within noon');
        $(".noon-block").addClass("present");
       
    }else if(noonBlock.isAfter(afterTime)) {
        console.log('is after noon')
        $(".noon-block").addClass("past");
     
    }else if(noonBlock.isBefore(beforeTime)) {
        console.log('is before noon')
        $(".noon-block").addClass("future");
       
    };

    var oneBlock = moment(), 
    beforeTime = moment('13:00:00', format),
    afterTime = moment('13:59:59', format);

    if (oneBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 1');
        $(".one-block").addClass("present");
       
    }else if(oneBlock.isAfter(afterTime)) {
        console.log('is after 1')
        $(".one-block").addClass("past");
     
    }else if(oneBlock.isBefore(beforeTime)) {
        console.log('is before 1')
        $(".one-block").addClass("future");
       
    };

    var twoBlock = moment(), 
    beforeTime = moment('14:00:00', format),
    afterTime = moment('14:59:59', format);

    if (twoBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 2');
        $(".two-block").addClass("present");
       
    }else if(twoBlock.isAfter(afterTime)) {
        console.log('is after 2')
        $(".two-block").addClass("past");
     
    }else if(twoBlock.isBefore(beforeTime)) {
        console.log('is before 2')
        $(".two-block").addClass("future");
       
    };

    var threeBlock = moment(), 
    beforeTime = moment('15:00:00', format),
    afterTime = moment('15:59:59', format);

    if (threeBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 3');
        $(".three-block").addClass("present");
       
    }else if(threeBlock.isAfter(afterTime)) {
        console.log('is after 3')
        $(".three-block").addClass("past");
     
    }else if(threeBlock.isBefore(beforeTime)) {
        console.log('is before 3')
        $(".three-block").addClass("future");
       
    };

    var fourBlock = moment(), 
    beforeTime = moment('16:00:00', format),
    afterTime = moment('16:59:59', format);

    if (fourBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 4');
        $(".four-block").addClass("present");
       
    }else if(fourBlock.isAfter(afterTime)) {
        console.log('is after 4')
        $(".four-block").addClass("past");
     
    }else if(fourBlock.isBefore(beforeTime)) {
        console.log('is before 4')
        $(".four-block").addClass("future");
       
    };

    var fiveBlock = moment(), 
    beforeTime = moment('17:00:00', format),
    afterTime = moment('17:59:59', format);

    if (fiveBlock.isBetween(beforeTime, afterTime)) {
        console.log('is within 5');
        $(".five-block").addClass("present");
       
    }else if(fiveBlock.isAfter(afterTime)) {
        console.log('is after 5')
        $(".five-block").addClass("past");
     
    }else if(fiveBlock.isBefore(beforeTime)) {
        console.log('is before 5')
        $(".five-block").addClass("future");
       
    };
    

    //Initializer function to load items on local storage when page is loaded

    // function int() {
    //     renderLastSaved();
    // }
    // init();