const cardsMenu = document.querySelector('.cards-menu')
const restorant = JSON.parse(localStorage.getItem('restaurant'))
const { image, kitchen, name, price, products, stars, time_of_delivery } = restorant
const restorantTitle = document.querySelector('.restaurant-title')
const rating = document.querySelector('.rating')
const category = document.querySelector('.category')
const minPrice = document.querySelector('.price')

const renderItems = (data) => {
    console.log(data);
    restorantTitle.innerText = `${name}`
    rating.innerText = `${stars}`
    category.innerText = `${kitchen}`
    let minPriceValue = `1000000`

    data.forEach(({ description, id, image, name, price }) => {
        if (price < minPriceValue) { minPriceValue = price }
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML =
            `
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price} ₽</strong>
                </div>
            </div>
            `
        cardsMenu.append(card)
    });
    minPrice.innerText = `От ${minPriceValue} ₽`
}

if (restorant) {
    fetch(`https://onlineintensive-fooddelivery-default-rtdb.firebaseio.com/db/${products}`)
        .then((response) => response.json())
        .then((data) => renderItems(data))
        .catch((error) => console.log(error));


} else {
    window.location.href = '/'
}