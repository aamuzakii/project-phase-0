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
    },
    {   id : 11,
        judul: 'Them (2021??? )',
        harga: 100000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BNGZiZTY2ZDEtMDY5MC00MGE1LWI1ZGYtOGE2N2VmNTNlNjUwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY268_CR16,0,182,268_AL_.jpg'
    },
    {   id : 12,
        judul: 'The Nevers (2021??? )',
        harga: 75000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BODEyOWY2ZDctOGI3Zi00YjYwLWIwZDEtMzJlY2VhYTA2N2ViXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 13,
        judul: "Jupiter's Legacy (2021??? )",
        harga: 90000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMDU4MWViOGItZGJjYi00YjczLTk1YmMtY2ZmNmY4YTllNDA0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY268_CR16,0,182,268_AL_.jpg'
    },
    {   id : 14,
        judul: 'Line of Duty (2012??? )',
        harga: 120000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMTExZDZjNTMtNDVmNy00ZTk2LWFiMzUtZDlkZGRlOGU0ZWRmXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_UY268_CR3,0,182,268_AL_.jpg'
    },
    {   id : 15,
        judul: 'The Walking Dead (2010???2022)',
        harga: 80000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc5ZmM0OTQtNDY4MS00ZjMyLTgwYzgtOGY0Y2VlMWFmNDU0XkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 16,
        judul: 'Game of Thrones (2011???2019)',
        harga: 80000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY268_CR7,0,182,268_AL_.jpg'
    },
    {   id : 17,
        judul: 'Invincible (2021??? )',
        harga: 75000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMmE1ODVhMGYtODYyYS00Mjc4LWIzN2EtYWZkZDg1MTUyNDkxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 18,
        judul: "Grey's Anatomy (2005??? )",
        harga: 90000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMjgwNGNkZGYtMWQyYS00YjEzLWFmZTctODUzYWMxOWJkNTAzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {   id : 19,
        judul: 'Shameless (2011???2021)',
        harga: 120000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BZGFiOGY1MjAtNWM2Yy00YzBlLTkwODktMTZiOWMyZmNmZmZhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UY268_CR9,0,182,268_AL_.jpg'
    },
    {   id : 20,
        judul: 'Peaky Blinders (2013??? )',
        harga: 80000,
        type: 'TV-Series',
        image: 'https://m.media-amazon.com/images/M/MV5BMTkzNjEzMDEzMF5BMl5BanBnXkFtZTgwMDI0MjE4MjE@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
]