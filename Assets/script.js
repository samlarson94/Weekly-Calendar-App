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

    function renderLastEvent() { //COPY THIS FOR ALL TEXT AREAS
        var nineAm = localStorage.getItem("text-area-9");
        console.log(nineAm);
        document.getElementById("text-area-9").value = nineAm;
    }
    renderLastEvent();
    
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
    beforeTime = moment('01:00:00', format),
    afterTime = moment('01:59:59', format);

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
    beforeTime = moment('02:00:00', format),
    afterTime = moment('02:59:59', format);

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


    ///Start Here

    var oneBlock = moment(), 
    beforeTime = moment('01:00:00', format),
    afterTime = moment('01:59:59', format);

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

    var oneBlock = moment(), 
    beforeTime = moment('01:00:00', format),
    afterTime = moment('01:59:59', format);

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

    var oneBlock = moment(), 
    beforeTime = moment('01:00:00', format),
    afterTime = moment('01:59:59', format);

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
    
    //COPY AND PAST FOR ALL TIMEBLOCKS
    //COPY AND PAST FOR ALL TIMEBLOCKS

    //Initializer function to load items on local storage when page is loaded

    // function int() {
    //     renderLastSaved();
    // }
    // init();