let listMovies = [
    {   id : 11,
        judul: 'Them (2021– )',
        harga: 100000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BNGZiZTY2ZDEtMDY5MC00MGE1LWI1ZGYtOGE2N2VmNTNlNjUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY268_CR16,0,182,268_AL_.jpg'
    },
    {   id : 12,
        judul: 'The Nevers (2021– )',
        harga: 75000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BODEyOWY2ZDctOGI3Zi00YjYwLWIwZDEtMzJlY2VhYTA2N2ViXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 13,
        judul: "Jupiter's Legacy (2021– )",
        harga: 90000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMDU4MWViOGItZGJjYi00YjczLTk1YmMtY2ZmNmY4YTllNDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY268_CR16,0,182,268_AL_.jpg'
    },
    {   id : 14,
        judul: 'Line of Duty (2012– )',
        harga: 120000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMTExZDZjNTMtNDVmNy00ZTk2LWFiMzUtZDlkZGRlOGU0ZWRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY268_CR3,0,182,268_AL_.jpg'
    },
    {   id : 15,
        judul: 'The Walking Dead (2010–2022)',
        harga: 80000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 16,
        judul: 'Game of Thrones (2011–2019)',
        harga: 80000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg'
    },
    {   id : 17,
        judul: 'Invincible (2021– )',
        harga: 75000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 18,
        judul: "Grey's Anatomy (2005– )",
        harga: 90000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 19,
        judul: 'Shameless (2011–2021)',
        harga: 120000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BZGFiOGY1MjAtNWM2Yy00YzBlLTkwODktMTZiOWMyZmNmZmZhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UY268_CR9,0,182,268_AL_.jpg'
    },
    {   id : 20,
        judul: 'Peaky Blinders (2013– )',
        harga: 80000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg'
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







