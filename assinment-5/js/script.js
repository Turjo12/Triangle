document.getElementById('calculatetry').addEventListener('click', function(){
    const inputone = document.getElementById('triangleW');
    const previousstring = inputone.value;
    const newNumber = parseInt(previousstring) 
    const inputwo = document.getElementById('trianglei');
    const previousString = inputwo.value;
    const NewNumber = parseInt(previousString);
    const totalnum = 0.5*newNumber*NewNumber
    const displayNumbers = document.getElementById('displayTry');
displayNumbers.innerText = totalnum ;

});
