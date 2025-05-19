const items = [
    {
        id: 0,
        name: 'Mersedes',
        price: 500500,
        imageSrc: './images/mers.jpg',
    },
    {
        id: 1,
        name: 'Honda',
        price: 155000,
        imageSrc: './images/honda.jpg',

    },
    {
        id: 2,
        name: 'Audi',
        price: 352000,
        imageSrc: './images/Audi.jpg',

    },
    {
        id: 3,
        name: 'Suzuki',
        price: 3352000,
        imageSrc: './images/suzuki.jpg',

    },
]

let cart = []

function showItems() {
    const container = document.getElementById('containerAuto')
    container.innerHTML = ''
    items.forEach((item) => {
        const wrapToCard = document.createElement('div')
        wrapToCard.className = 'card-wrap'

        const card = document.createElement('div')
        card.className = 'item-card'

        const cardInfo = document.createElement('div')
        cardInfo.className = 'card-info'

        const itemText = document.createElement('span')
        itemText.textContent = item.name
        itemText.className = 'item-text'

        const itemPrice = document.createElement('span')
        itemPrice.textContent = 'Цена: ' + item.price + ' руб.'
        itemPrice.className = 'item-price'

        const itemImage = document.createElement('img')
        itemImage.src = item.imageSrc
        itemImage.className = 'item-img'

        const actionButton = document.createElement('button')
        actionButton.textContent = 'Добавить'
        actionButton.onclick = () => {
            addItem(item.id)
        }
        cardInfo.appendChild(itemText)
        cardInfo.appendChild(itemPrice)

        card.appendChild(cardInfo)
        card.appendChild(actionButton)

        wrapToCard.appendChild(card)
        wrapToCard.appendChild(itemImage)


        container.appendChild(wrapToCard)
    })

    //отобразить элементы из массива в окне браузера клиента
}

function addItem(id) {
    const itemInCart = cart.find((item) => item.id === id)
    if (itemInCart) {
        itemInCart.quantity++
    } else {
        const newItem = items.find((item) => item.id === id)
        cart.push({
            ...newItem, quantity: 1
        })
    }

    console.log(itemInCart)
    updateCart()
}

function deleteFromCart(id) {
    const itemCart = cart.find((item) => item.id === id)
    if (itemCart && (itemCart.quantity > 1)) {
        itemCart.quantity--
    } else {
        const filteredArr = cart.filter((cartItem) => cartItem.id !== id)
        cart = filteredArr
    }

    updateCart()
}


// function increaseQuantity(id) {

// }


// function decreaseQuantity(id) {
//     const cartItem = cart.find((item) => item.id === id)
//     deleteFromCart(id)
//     updateCart()
// }

function updateCart(id) {
    const container = document.getElementById('cart-item')
    const total = document.createElement('div')
    total.className = 'total'
    container.innerHTML = ''

    let totalPrice = 0

    cart.forEach((cartItem) => {
        totalPrice += cartItem.price * cartItem.quantity

        const wrapToCard = document.createElement('div')
        wrapToCard.className = 'card-wrap'

        const card = document.createElement('div')
        card.className = 'item-card'

        const cardInfo = document.createElement('div')
        cardInfo.className = 'card-info'

        const itemText = document.createElement('span')
        itemText.textContent = cartItem.name
        itemText.className = 'item-text'

        const itemPrice = document.createElement('span')
        itemPrice.textContent = 'Цена: ' + cartItem.price + ' руб.'
        itemPrice.className = 'item-price'

        const itemImage = document.createElement('img')
        itemImage.src = cartItem.imageSrc
        itemImage.className = 'item-img'

        const actionButton = document.createElement('button')
        actionButton.textContent = 'Удалить'
        actionButton.onclick = () => {
            deleteFromCart(cartItem.id)
        }
        
        const quantity = document.createElement('span')
        quantity.textContent = 'Кол-во: ' + cartItem.quantity + 'шт'


        // const decreaseButton = document.createElement('button')
        // decreaseButton.textContent = 'Удалить'
        // decreaseButton.onclick = () => decreaseQuantity(cartItem.id)

        cardInfo.appendChild(itemText)
        cardInfo.appendChild(itemPrice)
        cardInfo.appendChild(quantity)

        card.appendChild(cardInfo)
        card.appendChild(actionButton)

        wrapToCard.appendChild(card)
        wrapToCard.appendChild(itemImage)

        container.appendChild(wrapToCard)
        container.appendChild(total)
    })
    total.textContent = 'Всего: ' + totalPrice + ' у.е.'
}



showItems()
