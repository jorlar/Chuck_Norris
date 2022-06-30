document.querySelector('.get-jokes').addEventListener('click', getJokes);

async function getJokes(e) {
    e.preventDefault();
    const number = document.querySelector('input[type = "number"]').value;
    const joke = await fetch(`http://api.icndb.com/jokes/random/${number}`);
    const respons = await joke.json()

    let output = '';

    if(respons.type === 'success') {
        
        respons.value.forEach((value)=> {
            output += `<li>${value.joke}</li>`;
        })
        } else {
        output += '<li>Something went wrong</li>'
    }

    document.querySelector('.jokes').innerHTML = output;
       
}