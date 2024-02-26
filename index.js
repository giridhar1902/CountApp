const increase = document.getElementById("increaseBtn");
const reset = document.getElementById("resetBtn");
const decrease = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("Count");


let count = 0;

increase.onclick = function(){
    count ++;
    countLabel.innerHTML = count;
}

decrease.onclick = function(){
    count --;
    countLabel.innerHTML = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.innerHTML = count
}

