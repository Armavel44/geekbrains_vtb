let rootElem = document.getElementById('root');

let form = document.createElement('form');
rootElem.appendChild(form);
form.setAttribute('id', 'form-content');

let formElem = document.getElementById('form-content');
formElem.style.paddingLeft = formElem.style.paddingRight;

let postName = document.createElement('input');
let descr = document.createElement('textarea');
let imageUrl = document.createElement('input');
let sourceUrl = document.createElement('input');
let submit = document.createElement('input');
let postNameText = document.createElement('label');
let descrText = document.createElement('label');
let imageText = document.createElement('label');
let sourceText = document.createElement('label');

formElem.setAttribute('name', 'main-form')
postName.setAttribute('name', 'post-name');
descr.setAttribute('id', 'description');
imageUrl.setAttribute('id', 'image-url');
sourceUrl.setAttribute('id', 'source-url');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Create a card');
submit.setAttribute('class', 'submit-button');

postNameText.innerText = 'Name the post:';
formElem.appendChild(postNameText)
postNameText.appendChild(postName);
descrText.innerText = 'Add description:';
formElem.appendChild(descrText);
descrText.appendChild(descr);
imageText.innerText = 'Give the image source:';
formElem.appendChild(imageText);
imageText.appendChild(imageUrl);
sourceText.innerText = 'Add source:';
formElem.appendChild(sourceText);
sourceText.appendChild(sourceUrl);

formElem.appendChild(submit);
function formSubmit() {
    let postNameValue = postName.value;
    let descrValue = description.value;
    let imageValue = imageUrl.value;
    let srcValue = sourceUrl.value;

    let cardElem = document.createElement('div');
    let imgElem = document.createElement('img');
    let nameElem = document.createElement('p');
    let descrElem = document.createElement('p');
    let srcElem = document.createElement('a');

    imgElem.setAttribute('src', imageValue);
    imgElem.classList.add('avatar');
    nameElem.innerText = postNameValue;
    descrElem.innerText = descrValue;
    srcElem.setAttribute('href', srcValue);
    srcElem.setAttribute('target', '_blank')
    srcElem.innerText = 'link';

    cardElem.appendChild(imgElem);
    cardElem.appendChild(nameElem);
    cardElem.appendChild(descrElem);
    cardElem.appendChild(srcElem);
    
    rootElem.appendChild(cardElem);

    console.log('123');
}

document.getElementById('form-content').onsubmit = function() { formSubmit(); return false };