function showLimitedContent() {
    document.querySelectorAll('.review-description').forEach((element) => {
        const value = element.firstChild.textContent;
        let newValue = value.substr(0, 130);
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
showLimitedContent();
populateValues(5);



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