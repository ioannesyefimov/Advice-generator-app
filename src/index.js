
const api_url = "https://api.adviceslip.com/advice";

// async function 
async function generate(url) {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById('advice-hash').innerText = data.slip.id;
    document.getElementById('advice-text').innerText = `${data.slip.advice}`;
}

generate(api_url)
document.querySelector('.btn').onclick = () => {
    generate(api_url);
    console.log('hhee');
};