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

        gsap.from(".text2",{
    opacity: 0,
    duration :1,
    y:-50,
    stagger:0.5

})
    })
})

gsap.from("h1",{
    opacity:0,
    x:-200,
    duration:1,
    ease:"ease-in"

})
gsap.from(".destination_img img",{
    rotate:360,
    duration:5,
    repeat:-1,
    ease:"none"
})
gsap.from(".buttons button",{
    opacity:0,
    duration:1,
    y:-50,
    stagger:0.6,
    ease : "bounce"

})
gsap.from(".text2",{
    opacity: 0,
    duration :1,
    y:-50,
    stagger:0.5

})