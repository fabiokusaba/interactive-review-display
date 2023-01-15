const reviewContainer = document.getElementById("review-container");

const reviews = [
    {
        img: "https://images.unsplash.com/photo-1501628989291-ff8dac48ec91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1187&q=80",
        alt: "Profile picture of Maria Clara",
        text: "Eu me encantei pelas praias do Nordeste brasileiro, sua cultura, suas paisagens, tudo perfeito!",
        name: "Maria Clara"
    },

    {
        img:"https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        alt: "Profile picture of Pedro Henrique",
        text: "Viajar o mundo, vivenciar novas culturas, conhecer novas pessoas, estou vivendo um sonho.",
        name: "Pedro Henrique"
    },

    {
        img: "https://images.unsplash.com/photo-1593673953398-6b9b2d227af1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "Profile picture of Marcos Paulo",
        text: "Apaixonado pelo campo, pela roça, pela cultura de interior, como é bom estar em casa.",
        name: "Marcos Paulo"
    }
];

function populateDisplay() {
    reviews.forEach(review => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        cardElement.addEventListener('mouseover', showCard);
        cardElement.addEventListener('mouseleave', blurCard);

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('image-container');
        const imageElement = document.createElement('img');
        imageElement.setAttribute('src', review.img);
        imageElement.setAttribute('alt', review.alt);
        imageContainer.append(imageElement);

        const paragraphElement = document.createElement('p');
        paragraphElement.textContent = review.text;
        const nameContainer = document.createElement('div');
        nameContainer.classList.add('name-container');
        nameContainer.textContent = review.name;

        cardElement.append(imageContainer, paragraphElement, nameContainer);

        reviewContainer.append(cardElement);
    });
}
populateDisplay();

function showCard() {
    this.classList.add('active');
}

function blurCard() {
    this.classList.remove('active');
}