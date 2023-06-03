document.getElementById('calculatetrys').addEventListener('click', function(){
    const inputone = document.getElementById('rectangleW');
    const previousstring = inputone.value;
    const newNumber = parseInt(previousstring) 
    const inputwo = document.getElementById('rectanglei');
    const previousString = inputwo.value;
    const NewNumber = parseInt(previousstring);
    const totalnum = newNumber*NewNumber
    const displayNumber = document.getElementById('displayrect');
displayNumber.innerText = totalnum ;
});
