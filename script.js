let choice = '';

function answer(type) {
  choice = type;
}

function showResult() {
  let brand = 'New Era';
  if (choice === 'creativo') brand = 'Barbas Hats';
  if (choice === 'elegante') brand = 'Dandy Hats';

  document.getElementById('result').innerHTML = `
    <p>Tu gorra ideal es ${brand}</p>
    <a href="https://wa.me/17207594769">Pedir por WhatsApp</a>
  `;
}
