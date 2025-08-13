fetch("./data.json")
.then(response=>{
    if(!response.ok){
        throw new Error("Error in fetching Data");
    }
    return response.json();
})
.then(data=>{
    jsonData = data.technology;
    techData ("Launch Vehicle");
})
.catch(error=>{
    console.error("Error in fetching:",error);
});

let jsonData = [];
function techData(type) {
    const tech = jsonData.find(tech=>
        tech.name === type);
    if(tech){
        document.getElementById("techName").textContent = tech.name.toUpperCase();
        document.getElementById("techInfo").textContent = tech.description;
        document.getElementById("techImg").src = tech.images.portrait;
    }
    
}
document.querySelectorAll(".text_btn button").forEach(button => {
    button.addEventListener('click',()=>{
        const selected = button.dataset.name;
        console.log(selected);
        techData(selected);
    })
});
