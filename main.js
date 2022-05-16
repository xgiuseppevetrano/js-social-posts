// CONSEGNA
// Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.

// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa) (ciclo for mettendo post[i].created = ...)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


/*-----------
    MAIN
-----------*/
// 1. Creo un array di oggetti in cui ognuno rappresenta un post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// 2. Prendo dall'HTML i vari elementi che mi servono
const container = document.querySelector("#container");

// 3. Con un ciclo for creo tutti i vari post
for (let i = 0; i < posts.length; i++) {
    if (posts[i].author.image === null) {
        posts[i].author.image = "https://via.placeholder.com/300x300?text=LF"
    }

    const post = document.querySelector("#tpl-post").content.cloneNode(true);
    post.querySelector(".profile-pic").src = posts[i].author.image;
    post.querySelector(".profile-pic").alt = posts[i].author.name;
    post.querySelector(".post-meta__author").innerHTML = posts[i].author.name;
    post.querySelector(".post-meta__time").innerHTML = posts[i].created;
    post.querySelector(".post__text").innerHTML = posts[i].content;
    post.querySelector(".post__image img").src = posts[i].media;
    post.querySelector(".likes__counter b").innerHTML = posts[i].likes;
    container.append(post);
};

// 4. Creo un evento al click del tasto "Mi piace"
const allPost = document.querySelectorAll(".post");

for (let i = 0; i < allPost.length; i++) {
    const likeBtn = allPost[i].querySelector(".like-button");
    const likesCounter = allPost[i].querySelector(".js-likes-counter");
    likeBtn.addEventListener("click", 
        function () {
            // 4a. SE il bottone contiene la classe like-button--liked
            //     ALLORA la rimuovo e decremento i mi piace
            if (likeBtn.classList.contains("like-button--liked")) {
                likeBtn.classList.remove("like-button--liked");
                likesCounter.innerHTML = --posts[i].likes;

                // 4b. SE il bottone non contiene la classe like-button--liked
                //     ALLORA la aggiungo e incremento i mi piace
            } else {
                likeBtn.classList.add("like-button--liked");
                likesCounter.innerHTML = ++posts[i].likes;
            }
        }
    );
}



