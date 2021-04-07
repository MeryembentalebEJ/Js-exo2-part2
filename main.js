let form = document.getElementById('form');
// form.addEventListener('focus', function(event){
    form.addEventListener('blur', function(event){
        console.log(event.target);
        alert('Thank you for your visit')
        console.log(event.target);
    
},true);
