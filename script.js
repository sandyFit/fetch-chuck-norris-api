const apiUrl = 'https://api.chucknorris.io/jokes/random';
const joke1 = document.querySelector('#joke1');
const joke2 = document.querySelector('#joke2');
const joke3 = document.querySelector('#joke3');
const btn = document.querySelector('button');

const getJokes = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data.value);
    return data.value;
}

const displayJokes = async () => {
    // Get three different jokes
    const jokes = [await getJokes(), await getJokes(), await getJokes()];

    // Update HTML content for each joke element
    joke1.innerHTML = `<p>${jokes[0]}</p>`;
    joke2.innerHTML = `<p>${jokes[1]}</p>`;
    joke3.innerHTML = `<p>${jokes[2]}</p>`;
}

btn.addEventListener('click', displayJokes);

