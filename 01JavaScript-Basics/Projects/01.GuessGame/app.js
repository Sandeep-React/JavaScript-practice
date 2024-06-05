// console.log("comment")

const btn = document.getElementsByClassName('btn')[0];
const form = document.getElementsByClassName('border')[0]
const notice = document.getElementById('notice')
const score = document.getElementsByClassName('score')[0]

const randomNum = parseInt(Math.random()*10+1)

let count = 0

console.log(randomNum)

btn.addEventListener('click', function(e){
    e.preventDefault()
    const num = document.getElementById('num').value
    console.log(num)
   
    if(randomNum > num)  {
        
        notice.innerText = "Try bigger number 🙌"
        form.style.borderColor ="red"
        count++
        score.innerText = count
    }else if(randomNum == num){
        
        notice.innerText = "Congrats you win 🎁"
        form.style.borderColor ="Green"
        score.innerText.count
    }else{
        
        notice.innerText = "Try smaller number 🙌"
        form.style.borderColor ="red"
        count ++
        score.innerText = count
    }
    form.reset()
})  