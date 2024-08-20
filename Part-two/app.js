let iconcart = document.querySelector('.icon-cart');
let closecart = document.querySelector('.close');
let body = document.querySelector('body');
let listProductHTML = document.querySelector('.listProduct');

let listProduct = [];

iconcart.addEventListener('click', () => {
    body.classList.toggle('showcart')
})
closecart.addEventListener('click', () => {
    body.classList.toggle('showcart')
}) 


 

const initApp = () => {
    //get data from json
    fetch('products.json')      
    .then(Response => Response.json())
    .then(data => {
        listProduct= data;
        addDataToHTML();
        
        
    })
}
listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        alert('1');
    }
}) 
initApp();


