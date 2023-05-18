// const adviceId = document.getElementById('adviceId');
// const adviceQuote = document.getElementById('adviceQuote');
// const button = document.getElementById('button');

const adviceInfo = () => {
  fetch('https://api.adviceslip.com/advice', { cache: 'no-cache' })
    .then((response) => response.json())
    .then((data) => {
      let advice = data.slip;
      adviceId.innerHTML = `ADVICE #${advice.id}`;
      adviceQuote.innerHTML = `${advice.advice}`;
    });
};

button.addEventListener('click', adviceInfo);





// const rollDice = document.getElementById('rollDice').addEventListener('click', () => {
//     fetch('https://api.adviceslip.com/advice')
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data)
//             const id = document.getElementById('id');
//             const advice = document.getElementById('advice');

//             id.textContent = data.slip.id
//             advice.textContent = data.slip.advice

//         })
//         .catch(err => console.log(err))
// })