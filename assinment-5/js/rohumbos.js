document.getElementById('calcu').addEventListener('click', function(){
    const inputone = document.getElementById('rohumbosw');
    const previousstring = inputone.value;
    const newNumber = parseInt(previousstring) 
    const inputwo = document.getElementById('rohumbosi');
    const previousString = inputwo.value;
    const NewNumber = parseInt(previousString);
    const totalnum =0.5*newNumber*NewNumber
    const displayNumbers = document.getElementById('displayoks');
displayNumbers.innerText = totalnum ;

});
