
// Get the items from local store:
let myCart = JSON.parse(localStorage.getItem("MY_CART")) || [];

// console.log(myCart);
let sum = 0;

const buySection = document.getElementById('theitems');
const showTotal = document.getElementById('total');
const clear = document.getElementById('clear');
const body = document.body;
console.log(body);


myCart.forEach((item) => {

    const theDiv = document.createElement('div')
    theDiv.classList.add('one')
    const pImg = document.createElement('img');
    pImg.setAttribute('src', item.Img)

    const pName = document.createElement('p');
    pName.innerText = item.Name;
    // const pSize= document.createElement('p');
    // pSize.innerText = item.Size;
    const pPrice = document.createElement('p');
    // put the size the user choose
    pPrice.innerText = `${item.Price}$`;

    theDiv.appendChild(pImg)
    theDiv.appendChild(pName)
    theDiv.appendChild(pPrice)

    buySection.appendChild(theDiv)




    sum += item.Price


});




if (sum) {
  showTotal.innerText = `Total price: ${sum} $`
  console.log(sum);
}

clear.addEventListener('click', () => {
  localStorage.removeItem('MY_CART')
  buySection.remove();
  const pEmpty = document.createElement('p');
  pEmpty.innerText = 'Your cart is empty! go to the store to add some items'
  pEmpty.style.color = 'red'
  body.appendChild(pEmpty)
  showTotal.innerText = '0$'
  clear.remove();

})
