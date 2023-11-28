
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

function displayData(data) {
  const card = document.createElement('div');
  card.classList.add('data-card');
  card.innerHTML = `
    <h2>${data.title}</h2>
    <p>${data.body}</p>
  `;
  document.body.appendChild(card);
}

fetchData();
