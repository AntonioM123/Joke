const form = document.getElementById('forma');

form.addEventListener('submit', (event)=>{

    const result = document.getElementById('execute');
    console.log(result);

    const number = form.elements['ocijena'];

    let mark = number.value;


    result.textContent = "Vasa ocijena za Mariju je  " + mark;

    event.preventDefault()
});

