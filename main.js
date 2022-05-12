function showLimitedContent() {
    document.querySelectorAll('.review-description').forEach((element) => {
        const value = element.firstChild.textContent;
        let newValue = value.substr(0, 100);
        newValue = newValue + ' ...';
        element.firstChild.textContent = newValue;
    });
}

function populateValues(amount) {
    const reviews = document.querySelector('#reviews');
    const child = reviews.children[0];
    for (let i = 0; i < amount; i++) {
        const copy = child.cloneNode(true);
        reviews.appendChild(copy);
    }
}

console.log('Loaded');
//populateValues(5);

document.addEventListener('DOMContentLoaded', function () {
    elems = document.querySelectorAll('.modal');
    instances = M.Modal.init(elems);
});

{/*
<div class="review col s12 m6 l4 xl3">
    <div class="review-image">
        <img class="center-align" src="./images/13_pro_max.jpg">
    </div>
    <div class="review-text"><span>Название</span></div>
    <div class="review-description"><span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Aliquid asperiores repudiandae ex eaque consequatur porro minus dolore sint a non
            laudantium
            tempora excepturi, ducimus sunt eum nesciunt at eveniet magnam!</span></div>
    <div class="review-rating"><span>Оценка</span></div>
</div>
*/}

const reviews = [
    {
        name: 'iphone 13 pro max',
        description: `I really like iphone 13 pro max. I really like iphone 13 pro max. I really like iphone 13 pro max. I really like iphone 13 pro max. I really like iphone 13 pro max.`,
        rating: 4.5,
        imgSrc: 'https://www.bite.lv/sites/default/files/products/2022-03/apple_iphone_13_pro_max_green.png',
    },
    {
        name: 'iphone 12 pro max',
        description: `Iphone 12 pro max is meh, it's okay`,
        rating: 3,
        imgSrc: 'https://www.tradeinn.com/f/13782/137821847/apple-iphone-12-pro-max-128gb-6.7.jpg',
    },
    {
        name: 'iphone SE',
        description: `Iphone SE is amazing shit`,
        rating: 5,
        imgSrc: 'https://cdn.tet.lv/tetveikals-prd-images/full_size/products/iphone-se-black-2-up-us-en-screen-5e981b19ac186.png',
    },
    {
        name: 'prestigio',
        description: `my camera doesnt work`,
        rating: 1,
    },
];

const reviewFunction = (element) => {
    const divReviewParameter = document.createElement('div');
    divReviewParameter.classList.add('review', 'col', 's12', 'm6', 'l4', 'xl3');

    const reviewImage = document.createElement('div');
    reviewImage.classList.add('review-image');

    const revImg = document.createElement('img');
    revImg.classList.add('center-align');
    if (element.imgSrc === undefined) {
        revImg.src = 'https://e7.pngegg.com/pngimages/709/358/png-clipart-price-toyservice-soil-business-no-till-farming-no-rectangle-pie.png';
    } else {
        revImg.src = element.imgSrc;
    };
    

    const reviewText = document.createElement('div');
    const reviewTextSpan = document.createElement('span');
    reviewText.classList.add('review-text');
    reviewTextSpan.innerText = element.name;

    const reviewDescription = document.createElement('div');
    const reviewDescriptionSpan = document.createElement('span');
    reviewDescription.classList.add('review-description');
    reviewDescriptionSpan.innerText = element.description;

    const reviewRating = document.createElement('div');
    const reviewRatingSpan = document.createElement('span');
    reviewRating.classList.add('review-rating')
    reviewRatingSpan.innerText = element.rating;

    divReviewParameter.append(reviewImage, reviewText, reviewDescription, reviewRating);
    reviewImage.appendChild(revImg);
    reviewText.appendChild(reviewTextSpan);
    reviewDescription.appendChild(reviewDescriptionSpan);
    reviewRating.appendChild(reviewRatingSpan);

    const reviewList = document.querySelector('#reviews');
    reviewList.appendChild(divReviewParameter);
}

reviews.forEach(reviewFunction);






showLimitedContent();


//for Submit in a html create-review-form

/* //this will submit only if the value is not default
$("#submitBtn").click(function () {
    if ($("#valueText").val() === "ENTER VALUE")
    {
        alert("please insert a valid value");
        return false;
    }
});

//this will put default value if the field is empty
$("#valueText").blur(function () {
    if(this.value == ''){ 
        this.value = 'ENTER VALUE';
    }
}); 

 //this will empty the field is the value is the default one
 $("#valueText").focus(function () {
    if (this.value == 'ENTER VALUE') {
        this.value = ''; 
    }
}); */