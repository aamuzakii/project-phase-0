let listMovies = [
    {   id : 1,
        judul: 'Twist (2021)',
        harga: 100000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/02/29dCusd9PwHrbDqzxNG35WcpZpS-150x225.jpg'
    },
    {   id : 2,
        judul: 'Nobody (2021)',
        harga: 75000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/04/oBgWY00bEFeZ9N25wWVyuQddbAo-150x225.jpg'
    },
    {   id : 3,
        judul: 'Godzilla vs. Kong (2021)',
        harga: 90000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/04/pgqgaUx1cJb5oZQQ5v0tNARCeBp-150x225.jpg'
    },
    {   id : 4,
        judul: 'The Marksman (2021)',
        harga: 120000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/04/tgxUyKCa1rKMdFXgmrAo5GJdBNM-150x225.jpg'
    },
    {   id : 5,
        judul: 'Night of the Sicario (2021)',
        harga: 80000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/04/rgFewciOc5lFXVoUDuboN87vbwO-150x225.jpg'
    },
    {   id : 6,
        judul: 'Lazarus (2021)',
        harga: 80000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/04/7vMSF3CvRjTxymAISxyT8BTmhoB-150x225.jpg'
    },
    {   id : 7,
        judul: 'Friend Zone (2019)',
        harga: 75000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2019/08/meJ7Zb6zZzw00eLTkUaAO1vQA4G-150x225.jpg'
    },
    {   id : 8,
        judul: 'The Last - Naruto the Movie (2014)',
        harga: 90000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2018/06/film-the-last-naruto-the-movie-2014-150x225.jpg'
    },
    {   id : 9,
        judul: 'Scooby-Doo! The Sword and the Scoob (2021)',
        harga: 120000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/02/cjwji8a2Os0Ew3iJyKRlGlQUhXJ-150x225.jpg'
    },
    {   id : 10,
        judul: 'Stand by Me Doraemon 2 (2020)',
        harga: 80000,
        type: 'movies',
        image: 'https://i1.wp.com/terbit21.com/wp-content/uploads/2021/04/mu5t94c8IZU781aMg1E1FKinYG2-150x225.jpg'
    }
]

let purchasedItem = []
let accordionContainer = document.querySelector(".container-fluid");
let tot

function render() {
    accordionContainer.innerHTML = ''
    console.log('is rendering')
    for (let i = 0; i < listMovies.length; i++){
        let accordionItem = document.createElement('div');
        accordionItem.classList.add('card')
        accordionItem.style.width = "18rem";
        accordionItem.style.margin = "15px";
        accordionItem.innerHTML = `<img class="card-img-top" src=${listMovies[i].image} alt="Enigma">
        <div class="card-body">
          <h5 class="card-title">${listMovies[i].judul}</h5>
          <p class="card-text">
              <ul>
                  <li>ID: ${listMovies[i].id}</li>
                  <li>Category: ${listMovies[i].type}</li>
                  <li>Price: Rp.${listMovies[i].harga}</li>
              </ul>
          </p>
          <a href="#" class="btn btn-primary" onclick="addToCart(this, event)">Subscribe</a>
        </div>`;
        accordionContainer.appendChild(accordionItem);
    
    }    
}

render()

function addToCart(clickedElement, event) {
    event.preventDefault()
    swal({
        title: "Added to Your Cart!",
        icon: "success",
        button: "OK",
      });
    let accordionContainer = document.querySelector("#parentPurchase");
    harga = clickedElement.parentElement.children[2].children[2].innerHTML
    judul = clickedElement.parentElement.children[0].innerHTML

    accordionItem = document.createElement('li');
    accordionItem.classList.add('list-group-item')
    accordionItem.innerHTML = `<p>${judul}</p>
                            <p>${harga}</p>
                            <p style="cursor: pointer" onclick="remove(this, event)">Unsubscribe</p>`;
    accordionContainer.appendChild(accordionItem);

    let thisMovie =     
    {   
        id : 0,
        judul: judul,
        harga: harga,
        image: ''
    }
    purchasedItem.push(thisMovie);
    tot = 0
    for (let i = 0; i < purchasedItem.length; i++){
        IntHarga = Number(purchasedItem[i].harga.substr(purchasedItem[i].harga.indexOf('.') + 1))
        tot += IntHarga
    }
    let total = document.querySelector("#total");
    total.innerHTML = `TOTAL: ${tot}`
}

function remove(clickedElement, event) {
    event.preventDefault()
    clickedElement.parentElement.remove()

    purchasedItem = purchasedItem.filter(function(item){
        return item.judul != clickedElement.parentElement.children[0].innerHTML;
    });


    tot = 0
    for (let i = 0; i < purchasedItem.length; i++){
        IntHarga = Number(purchasedItem[i].harga.substr(purchasedItem[i].harga.indexOf('.') + 1))
        tot += IntHarga
    }
    console.log(tot)
    let total = document.querySelector("#total");
    total.innerHTML = `TOTAL: ${tot}`
}







