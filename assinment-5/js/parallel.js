document.getElementById('calcul').addEventListener('click', function(){
    const inputone = document.getElementById('parallogramW');
    const previousstring = inputone.value;
    const newNumber = parseInt(previousstring) 
    const inputwo = document.getElementById('peloarai');
    const previousString = inputwo.value;
    const NewNumber = parseInt(previousString);
    const totalnum = newNumber*NewNumber
    const displayNumbers = document.getElementById('displayok');
displayNumbers.innerText = totalnum ;

});
