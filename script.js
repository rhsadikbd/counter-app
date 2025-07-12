let count = Number(localStorage.getItem('counterValue')) || 0;

const counter = document.getElementById('counter');
const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');


increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});
decreaseBtn.addEventListener('click', () => {
    if(count > 0){
        count--;
        updateCounter();
    }
});
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});

function updateCounter(){
    counter.textContent = count;
    localStorage.setItem('counterValue', count);
}
updateCounter();
