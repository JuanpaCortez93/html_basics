const form = document.getElementById('form');
const fullname = form.fullname;
const sex = form.sex;
const terms = form.terms;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(fullname.value.length > 15){
        alert('Invalid');
    }else if (fullname.value === ''){
        alert('Invalid');
    }


    if(sex[0].checked === false && sex[1].checked === false){
        alert('Select a genre');
    }   

    if(terms.checked === false){
        alert('Accept terms and conditions');
    }

    
      
});
