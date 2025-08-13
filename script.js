let burger = document.querySelector(".burger");
let nav = document.querySelector(".nav-links");

//NAVBAR TOGGLE FOR MOBILE DEVICES
burger.addEventListener("click",()=>{
    console.log("Clicked");
    nav.classList.toggle("show-nav")
    burger.classList.toggle("toggle")
})
/* 

//FETCH DATA FROM A JSON FILE
fetch("./starter-code/data.json")
.then(response =>{
    if(!response.ok){
        throw new Error("Unable to fetch json data");
    }
    return(response.json);
})
.then(data=>{
    //CHECKING THE DATASET PROPERTY FROM HTML TO DETERMINE WHAT PAGE WE ARE ON!
    const page = document.body.dataset.type;
    console.log(page);

    //SWITCH AND CONDITIONAL STATEMENT TO CHECK EACH PAGE DATASET WE ARE ON AND ASSIGN SPECIFIC DATA FROM THE JSON FILE IN EACH OF ITS FUNCTION IN ORDER TO DISPLAY EACH DATA ON THE PAGE DYNAMICALLY BASED ON THE PAGE WE ARE ON!
    switch (page) {
        case 'destination':
            //CHECK IF THE PAGE WE ARE ON IS THE DESTINATION TAB TO ASSIGN IT SPECIFIC DATA TO IT AND ITS FUNCTION
            renderDestination(data.destination);
            break;
            //CHECK IF THE PAGE WE ARE ON IS THE CREW TAB TO ASSIGN IT SPECIFIC DATA TO IT AND ITS FUNCTION
        case 'crew':
            renderCrew(data.crew)
            break;
            //CHECK IF THE PAGE WE ARE ON IS THE TECH TAB TO ASSIGN IT SPECIFIC DATA TO IT AND ITS FUNCTION
        case 'tech':
            renderTech(data.technology)
    }
})
//CATCH ERROR IF OUR JSON DATA FAIL TO FETCH
.catch(error=>{
    console.error("Error fetching data:", error)
})

//FUNCTION DECLARATION FOR THE DESTINATION DATA 
function renderDestination(destinationData){
    console.log(destinationData.name);

}

//FUNCTION DECLARATION FOR THE CREW DATA 
function renderCrew(crewData){

}

//FUNCTION DECLARATION FOR THE TECH DATA
function renderTech(techData){

}

 */