document.addEventListener('DOMContentLoaded', ()=>{

    //by default , submit button is disabled
    document.querySelector('#submit').disabled = true;
    
    document.querySelector('#items').onkeyup = ()=>
{
    if(document.querySelector('#items').value.length>0)
    document.querySelector('#submit').disabled = false;
    else
    document.querySelector('#submit').disabled = true;
}

    document.querySelector('form').onsubmit = function(){

        let item = document.querySelector('#items').value;
        console.log(item);
        

       let li = document.createElement('li');
        li.innerHTML = item;
        
        document.querySelector('#task').append(li);
        
        document.querySelector('#items').value = '';

        document.querySelector('#submit').disabled = true;

        

        return false;


    }
});