


const colorMaker = document.querySelector('#colormaker');
const colorPreview = document.querySelector('#colorPreview');
const colorHistory = document.querySelector('#colorHistory');
const clearHistory = document.querySelector('#clearHistory');


colorMaker.addEventListener('change', function(){
    const selectColor = colorMaker.value;
    colorPreview.style.backgroundColor=selectColor; 
    addColorHistory(selectColor);
});

function addColorHistory(color){
    let li = document.createElement('li');
    li.style.color = color;
    li.textContent = color; 
    colorHistory.appendChild(li);
}

clearHistory.addEventListener('click', function(){
    colorHistory.innerHTML = '';
});