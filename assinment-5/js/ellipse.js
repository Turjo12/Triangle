document.getElementById('cal').addEventListener('click', function(){
    const inputone = document.getElementById('eleiw');
    const previousstring = inputone.value;
    const newNumber = parseInt(previousstring) 
    const inputwo = document.getElementById('eleii');
    const previousString = inputwo.value;
    const NewNumbers = parseInt(previousString);
    const totalnums =newNumber*NewNumbers
    const displayNumberss = document.getElementById('displasdd');
displayNumberss.innerText = totalnums ;

});
