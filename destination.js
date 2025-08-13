fetch("./data.json")
.then(response=>{
    if(!response.ok){
        throw new Error("Error in fetching Data");
    }
    return response.json();
})
.then(data=>{
    jsonData = data.destinations;
    destinationData("Mars");
})
.catch(error=>{
    console.error("Error in fetching:",error);
});
let jsonData = [];


function destinationData(type){
    const destination  = jsonData.find(dest =>
        dest.name === type);
        if (destination) {
            document.getElementById("name").textContent = destination.name;
            document.getElementById("destinationText").textContent = destination.description;
            document.getElementById("destinationDistance").textContent = destination.distance;
            document.getElementById("destinationDuration").textContent = destination.travel;
            document.getElementById("destinationImg").src = destination.images.png;
        }
        
    

}
document.querySelectorAll(".buttons button").forEach(button=>{
    button.addEventListener('click',()=>{
        const selected = button.dataset.name;
        console.log(selected);
        destinationData(selected);
    })
})