let detailDiv = document.getElementById("detail");
let username = localStorage.getItem("username");
detailDiv.innerHTML = `<span class="username">${username}</span> Welcome to Our Store .Explore our products and enjoy shopping experience.`;

function filterProducts() {
  const query = document.getElementById('myinput').value.toLowerCase().trim();
  const cards = document.querySelectorAll('.container > div');

  cards.forEach(card => {
    const name = card.getAttribute('data-name').toLowerCase();
    const category = card.getAttribute('data-category').toLowerCase();
    const matches = name.includes(query) || category.includes(query);
    card.style.display = matches ? '' : 'none';
  });
}

const items = [
  { title: "Mango", category: "fruit", price: "$1.50", img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=400", "data-name": "Mango", "data-category": "fruit" },
  { title: "Strawberry", category: "fruit", price: "$2.00", img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=400", "data-name": "Strawberry", "data-category": "fruit" },
  { title: "Watermelon", category: "fruit", price: "$3.00", img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400", "data-name": "Watermelon", "data-category": "fruit" },
  { title: "Banana", category: "fruit", price: "$0.99", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400", "data-name": "Banana", "data-category": "fruit" },
  { title: "Grapes", category: "fruit", price: "$2.50", img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=400", "data-name": "Grapes", "data-category": "fruit" },
  { title: "Pineapple", category: "fruit", price: "$1.75", img: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=400", "data-name": "Pineapple", "data-category": "fruit" },
  { title: "Broccoli", category: "vegetable", price: "$1.20", img: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=400", "data-name": "Broccoli", "data-category": "vegetable" },
  { title: "Carrot", category: "vegetable", price: "$0.80", img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400", "data-name": "Carrot", "data-category": "vegetable" },
  { title: "Potato", category: "vegetable", price: "$1.00", img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400", "data-name": "Potato", "data-category": "vegetable" },
  { title: "Spinach", category: "vegetable", price: "$1.30", img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400", "data-name": "Spinach", "data-category": "vegetable" },
  { title: "Bell Pepper", category: "vegetable", price: "$0.90", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=400", "data-name": "Bell Pepper", "data-category": "vegetable" },
  { title: "Cucumber", category: "vegetable", price: "$0.75", img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=400", "data-name": "Cucumber", "data-category": "vegetable" },
  { title: "Orange", category: "fruit", price: "$1.20", img: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400", "data-name": "Orange", "data-category": "fruit" },
  { title: "Kiwi", category: "fruit", price: "$1.80", img: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=400", "data-name": "Kiwi", "data-category": "fruit" },
  { title: "Papaya", category: "fruit", price: "$2.20", img: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?w=400", "data-name": "Papaya", "data-category": "fruit" },
  { title: "Peach", category: "fruit", price: "$1.60", img: "https://images.unsplash.com/photo-1595743825637-cdafc8ad4173?w=400", "data-name": "Peach", "data-category": "fruit" },
  { title: "Blueberry", category: "fruit", price: "$3.50", img: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400", "data-name": "Blueberry", "data-category": "fruit" },
  { title: "Pomegranate", category: "fruit", price: "$2.80", img: "https://plus.unsplash.com/premium_photo-1668076515507-c5bc223c99a4?w=400", "data-name": "Pomegranate", "data-category": "fruit" },
  { title: "Cherry", category: "fruit", price: "$4.00", img: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=400", "data-name": "Cherry", "data-category": "fruit" },
  { title: "Lemon", category: "fruit", price: "$0.60", img: "https://images.unsplash.com/photo-1568569350062-ebfa3cb195df?w=400", "data-name": "Lemon", "data-category": "fruit" },
  { title: "Coconut", category: "fruit", price: "$2.00", img: "https://images.unsplash.com/photo-1546039907-7fa05f864c02?w=400", "data-name": "Coconut", "data-category": "fruit" },
  { title: "Avocado", category: "fruit", price: "$1.90", img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=400", "data-name": "Avocado", "data-category": "fruit" },
  { title: "Potato", category: "vegetable", price: "$0.50", img: "https://images.unsplash.com/photo-1590165482129-1b8b27698780?w=400", "data-name": "Potato", "data-category": "vegetable" },
  { title: "Onion", category: "vegetable", price: "$0.60", img: "https://images.unsplash.com/photo-1508747703725-719777637510?w=400", "data-name": "Onion", "data-category": "vegetable" },
  { title: "Garlic", category: "vegetable", price: "$0.40", img: "https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400", "data-name": "Garlic", "data-category": "vegetable" },
  { title: "Cauliflower", category: "vegetable", price: "$1.40", img: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=400", "data-name": "Cauliflower", "data-category": "vegetable" },
  { title: "Eggplant", category: "vegetable", price: "$1.10", img: "https://images.unsplash.com/photo-1613881553903-4543f5f2cac9?w=400", "data-name": "Eggplant", "data-category": "vegetable" },
  { title: "Zucchini", category: "vegetable", price: "$0.95", img: "https://images.unsplash.com/photo-1692956475726-d4a90d0dfbdf?w=400", "data-name": "Zucchini", "data-category": "vegetable" },
  { title: "Mushroom", category: "vegetable", price: "$2.10", img: "https://images.unsplash.com/photo-1550824730-05ededc35e7a?w=400", "data-name": "Mushroom", "data-category": "vegetable" },
  { title: "Sweet Corn", category: "vegetable", price: "$0.70", img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400", "data-name": "Sweet Corn", "data-category": "vegetable" },
  { title: "Peas", category: "vegetable", price: "$1.15", img: "https://plus.unsplash.com/premium_photo-1663844169467-ddb73a03afdc?w=400", "data-name": "Peas", "data-category": "vegetable" },
  { title: "Cabbage", category: "vegetable", price: "$0.85", img: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=400", "data-name": "Cabbage", "data-category": "vegetable" },
];
// document.addEventListener("DOMContentLoaded", function () {
//   const cardContainer = document.getElementById('container');
//   let card = "";
//   items.forEach(c => {
//     card += `<div data-name="${c['data-name']}" class='ProductCard' data-category="${c['data-category']}">
//           <img src="${c.img}" alt="${c.title}"  />
//           <h4>${c.category}</h4>
//           <h2>${c.title}</h2>
//           <span>${c.price}</span>
//           <button data-name="${c['data-name']}" data-category="${c['data-category']}" id='cardBtn'>Add To Card</button>
//         </div>` ;
//   });
//   cardContainer.innerHTML = card;

//   // 
  

// })

document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById('container');
    const cardNumDisplay = document.getElementById('cardNum');
    
    // Initialize cart from localStorage or empty array
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cardNumDisplay.innerText = cart.length;

    // Render Products
    let cardHTML = "";
    items.forEach(c => {
        cardHTML += `
        <div data-name="${c['data-name']}" class='ProductCard' data-category="${c['data-category']}">
            <img src="${c.img}" alt="${c.title}" />
            <h4>${c.category}</h4>
            <h2>${c.title}</h2>
            <span>${c.price}</span>
            <button class="add-btn" data-title="${c.title}" data-price="${c.price}" data-img="${c.img}">Add To Cart</button>
        </div>`;
    });
    cardContainer.innerHTML = cardHTML;

    // Add event listener to the container (Event Delegation)
    cardContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-btn')) {
            const product = {
                title: e.target.getAttribute('data-title'),
                price: parseFloat(e.target.getAttribute('data-price').replace('$', '')),
                img: e.target.getAttribute('data-img'),
                quantity: 1
            };

            // Check if item exists
            const existingItem = cart.find(item => item.title === product.title);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push(product);
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            cardNumDisplay.innerText = cart.reduce((acc, item) => acc + item.quantity, 0);
            alert(`${product.title} added to cart!`);
        }
    });

    // Make Cart Icon Clickable to go to checkout
    document.querySelector('.cardIcon').style.cursor = "pointer";
    document.querySelector('.cardIcon').onclick = () => {
        window.location.href = "card.html";
    };
});

