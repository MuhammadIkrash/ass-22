let detailDiv = document.getElementById("detail");
let username = localStorage.getItem("username");
detailDiv.innerHTML = `<span class="username">${username}</span> Welcome to Our Store .Explore our products and enjoy shopping experience.`;

function filterProducts() {
    const query = document.getElementById('myinput').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.container > div');

    cards.forEach(card => {
      const name = card.getAttribute('data-name');
      const category = card.getAttribute('data-category');
      const matches = name.includes(query) || category.includes(query);
      card.style.display = matches ? '' : 'none';
    });
  }