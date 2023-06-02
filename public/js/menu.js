const menu = [{
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "/images/item-1.webp",
    desc: `Fluffy gluten-free buttermilk pancakes, leading to a fine and tender crumb. `,
  },
  {
    id: 2,
    title: "iced caramel latte",
    category: "coffee",
    price: 13.99,
    img: "/images/item-2.webp",
    desc: `Containing espresso coffee, steamed and frothed milk, and caramel sauce. `,
  },
  {
    id: 3,
    title: "orange juice",
    category: "juice",
    price: 5.99,
    img: "/images/item-3.webp",
    desc: `Orange juice, freshly peeled with a sweet-tart taste.`,
  },
  {
    id: 4,
    title: "spanish omelet",
    category: "breakfast",
    price: 16.99,
    img: "/images/item-4.jpg",
    desc: `Dig into the most popular breakfast in Spain. `,
  },
  {
    id: 5,
    title: "watermelon juice",
    category: "juice",
    price: 6.99,
    img: "/images/item-5.webp",
    desc: `Watermelon Juice that's refreshing, naturally sweet and satisfying! `,
  },
  {
    id: 6,
    title: "raspberry chocolate cake",
    category: "cake",
    price: 9.99,
    img: "/images/item-6.jpg",
    desc: `Classic chocolate cake with rasberry puree. `,
  },
  {
    id: 7,
    title: "chocolate cake",
    category: "cake",
    price: 10.99,
    img: "/images/item-7.webp",
    desc: `Enjoy flavour notes with a sice of tasty chocolate cake. `,
  },
  {
    id: 8,
    title: " latin coffee",
    category: "coffee",
    price: 5.99,
    img: "/images/item-8.jpg",
    desc: `Enjoy flavour notes that are chocolatey, nutty and with a slight citrus overtone. `,
  },
  {
    id: 9,
    title: "bubble tea",
    category: "tea",
    price: 7.99,
    img: "/images/item-9.jpg",
    desc: `A well balanced and sweet milky beverage with a slight twist, boba pearls. `,
  },

  {
    id: 10,
    title: "orriental coffee",
    category: "coffee",
    price: 4.99,
    img: "/images/item-10.webp",
    desc: `A Cup of coffee in an oriental style. `,
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menu) {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });

  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {

  const categories = menu.reduce(
    function (values, item) {

      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  const categoryBtns = categories.map(function (category) {
      return `<button type = "button" class="filter-btn" data-id=${category}>
  ${category} 
  </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {

      const category = e.currentTarget.dataset.id;

      const menuCategory = menu.filter(function (menuItem) {

        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}