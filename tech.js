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

        gsap.from(".text3",{
    opacity: 0,
    duration :1,
    y:-50,
    stagger:0.5

})
gsap.from(".tech_image img",{
    opacity:0,
    x:200,
    duration:2,
    ease:"ease-in"
})
    })
    
});

gsap.from("h2",{
    opacity:0,
    x:-100,
    duration:1.5,
    ease:"ease-in"
})
gsap.from(".text3",{
    opacity: 0,
    duration :1,
    y:-50,
    stagger:0.5

})
gsap.from(".text_btn button",{
    opacity:0,
    duration:1,
    y:-50,
    stagger:0.6,
    ease : "bounce"

})
gsap.from(".tech_image img",{
    opacity:0,
    x:200,
    duration:2,
    ease:"ease-in"
})