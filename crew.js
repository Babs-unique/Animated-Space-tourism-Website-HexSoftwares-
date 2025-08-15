fetch("./data.json")
.then(response=>{
    if(!response.ok){
        throw new Error("Error in fetching Data");
    }
    return response.json();
})
.then(data=>{
    jsonData = data.crew;
    crewData("Anousheh Ansari")
})
.catch(error=>{
    console.error("Error in fetching:",error);
});

let jsonData = [];


function crewData(type){
    const crew = jsonData.find(crew =>
        crew.name === type);
        if (crew) {
            document.getElementById("name").textContent = crew.name;
            document.getElementById("role").textContent = crew.role;
            document.getElementById("crewInfo").textContent = crew.bio;
            document.getElementById("crewImg").src = crew.images.png;
        }
        
        
    

}
document.querySelectorAll(".radios button").forEach(button=>{
    button.addEventListener('click',()=>{
        const selected = button.dataset.name;
        console.log(selected);
        crewData(selected);


                gsap.from(".text3",{
    opacity: 0,
    duration :1,
    y:-50,
    stagger:0.5

})
gsap.from(".crew-image img",{
    opacity:0,
    x:200,
    duration:2,
    ease:"ease-in"
})
    })
})

gsap.from("h3",{
    opacity:0,
    x:-200,
    duration:2,
    ease:"ease-in"

})
gsap.from(".text3",{
    opacity: 0,
    duration :1,
    y:-50,
    stagger:0.5

})
gsap.from(".crew-image img",{
    opacity:0,
    x:200,
    duration:2,
    ease:"ease-in"
})