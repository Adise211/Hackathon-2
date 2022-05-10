const search = document.getElementById('searchbtn');
const input = document.getElementById('myinput');
const buy = document.getElementById('buybtn');


const section = document.getElementById('cards');
let allItemsIPicked = JSON.parse(localStorage.getItem("MY_CART")) || [];
// localStorage.removeItem('MY_CART')


// Create shopping cards
async function createShoppingCards () {

  try {


    const data = await fetch('http://localhost:5002/shopping');
    if (data.status !== 200) {
      throw new Error('Not working')
    } else {
      const response = await data.json();


      // ON PAGE
      response.forEach((item, i) => {
        // console.log('test', item);
        const div = document.createElement('div');
        div.classList.add('eachdiv')
        const img = document.createElement('img');
        img.setAttribute('src',item.url)
        const name = document.createElement('p');
        name.innerText = item.item_name;
        const size = document.createElement('p');
        size.innerText = item.item_size;
        const price = document.createElement('p');
        const selectSize = document.createElement('select');
        selectSize.innerHTML = '<option>Size</option> <option name=s>S</option> <option name=m>M</option> <option name=l>L</option> <option name=xl>XL</option>'
        price.innerText = `${item.item_price}.99 $`;   // Notice: I forgot to add .99 inside my database,thus I put it here just for reading.
        const addToCart = document.createElement('button');

        addToCart.innerText = 'Add'
        addToCart.classList.add('addbutton')


        addToCart.addEventListener('click', (e)=> {
          const h5 = document.createElement('h5');
          h5.innerText = 'Added to your cart!'
          div.appendChild(h5)

          let object = {
            Name: item.item_name,
            Size: item.item_size,
            Price: item.item_price,
            Img: item.url
          }

          allItemsIPicked.push(object)
          localStorage.setItem("MY_CART", JSON.stringify(allItemsIPicked))


        })





        div.appendChild(img);
        div.appendChild(name);
        div.appendChild(size);
        div.appendChild(price);
        div.appendChild(selectSize);
        section.appendChild(div);
        div.appendChild(addToCart);





      });
    }

  } catch(err) {
    console.log(err);
  }

}

createShoppingCards();



 //New
function createCards(data) {
  section.innerHTML = ''
  data.forEach((item, i) => {
    // console.log('test', item);
    const div = document.createElement('div');
    div.classList.add('eachdiv')
    const img = document.createElement('img');
    img.setAttribute('src',item.url)
    const name = document.createElement('p');
    name.innerText = item.item_name;
    const size = document.createElement('p');
    size.innerText = item.item_size;
    const price = document.createElement('p');
    const selectSize = document.createElement('select');
    selectSize.innerHTML = '<option>Size</option> <option name=s>S</option> <option name=m>M</option> <option name=l>L</option> <option name=xl>XL</option>'
    price.innerText = `${item.item_price}.99 $`;   // Notice: I forgot to add .99 inside my database,thus I put it here just for reading.
    const addToCart = document.createElement('button');

    addToCart.innerText = 'Add'
    addToCart.classList.add('addbutton')


    addToCart.addEventListener('click', (e)=> {
      const h5 = document.createElement('h5');
      h5.innerText = 'Added to your cart!'
      div.appendChild(h5)

      let object = {
        Name: item.item_name,
        Size: item.item_size,
        Price: item.item_price,
        Img: item.url
      }

      allItemsIPicked.push(object)
      localStorage.setItem("MY_CART", JSON.stringify(allItemsIPicked))


    })





    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(size);
    div.appendChild(price);
    div.appendChild(selectSize);
    section.appendChild(div);
    div.appendChild(addToCart);





  });
}







// SEARCH ITEM
search.addEventListener('click',findItem)
async function findItem(parm) {
  try {

    const value = input.value;
    const data = await fetch(`http://localhost:5002/search?q=${value}`);
    if (data.status !== 200) {
      throw new Error('Not working')
    } else {
      const response = await data.json();
      createCards(response);
    }


  } catch (err) {
    console.log(err);

  }

}
