 
function bulbToggle(){
    let bulb = document.getElementById('lightbulb');

    if(bulb.src.match('lightoff')){
        bulb.src = 'lighton.jpg';
    } else {
        bulb.src = 'lightoff.jpg'
    }
}















