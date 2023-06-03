document.getElementById('calc').addEventListener('click', function(){
    const inputone = document.getElementById('pentaw');
    const previousstring = inputone.value;
    const newNumber = parseInt(previousstring) 
    const inputwo = document.getElementById('pentai');
    const previousString = inputwo.value;
    const NewNumbers = parseInt(previousString);
    const totalnums =0.5*newNumber*NewNumbers
    const displayNumberss = document.getElementById('displas');
displayNumberss.innerText = totalnums ;

});
