console.log("connected")

const element = document.getElementsByClassName("element")[0]
const button = document.getElementsByClassName('btn')[0]

button.addEventListener('click', function(){
if(element.innerText == ""){
    element.innerText = "JavaScript is awesome 🔥"
}else{
    element.innerText = ""
}

    
    console.log("clicked")
})