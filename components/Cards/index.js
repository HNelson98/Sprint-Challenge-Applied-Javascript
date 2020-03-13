// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
      newCard(res)
      console.log(res, 'from card res')
 })
  .catch(err => {
      console.log(err)
})

function newCard(article){
    let java = article.data.articles.javascript;
    // console.log(java)
    java.forEach(element => {


    const card = 
        document.createElement('div'),
     headline = 
        document.createElement('div'),
     author =
        document.createElement ('div'),
     picContainer =
        document.createElement ('div'),
     pic =
        document.createElement ('img'),
     by =
        document.createElement ('span'),
     cardConatiner =
        document.querySelector('.cards-container');
    
    cardConatiner.append(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(picContainer);
    author.appendChild(by);
    picContainer.appendChild(pic);

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    picContainer.classList.add('img-container');
    
    headline.textContent = element.headline
    pic.src = element.authorPhoto
    by.textContent = element.authorName
    
    return card
    });
    let boot = article.data.articles.bootstrap;
    
    boot.forEach(element => {


    const card = 
        document.createElement('div'),
     headline = 
        document.createElement('div'),
     author =
        document.createElement ('div'),
     picContainer =
        document.createElement ('div'),
     pic =
        document.createElement ('img'),
     by =
        document.createElement ('span'),
     cardConatiner =
        document.querySelector('.cards-container');
    
    cardConatiner.append(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(picContainer);
    author.appendChild(by);
    picContainer.appendChild(pic);

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    picContainer.classList.add('img-container');
    
    headline.textContent = element.headline
    pic.src = element.authorPhoto
    by.textContent = element.authorName
    
    return card
    });
    let tech = article.data.articles.technology;
    tech.forEach(element => {


    const card = 
        document.createElement('div'),
     headline = 
        document.createElement('div'),
     author =
        document.createElement ('div'),
     picContainer =
        document.createElement ('div'),
     pic =
        document.createElement ('img'),
     by =
        document.createElement ('span'),
     cardConatiner =
        document.querySelector('.cards-container');
    
    cardConatiner.append(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(picContainer);
    author.appendChild(by);
    picContainer.appendChild(pic);

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    picContainer.classList.add('img-container');
    
    headline.textContent = element.headline
    pic.src = element.authorPhoto
    by.textContent = element.authorName
    
    return card
    });
    let jQ = article.data.articles.jquery;
    jQ.forEach(element => {


    const card = 
        document.createElement('div'),
     headline = 
        document.createElement('div'),
     author =
        document.createElement ('div'),
     picContainer =
        document.createElement ('div'),
     pic =
        document.createElement ('img'),
     by =
        document.createElement ('span'),
     cardConatiner =
        document.querySelector('.cards-container');
    
    cardConatiner.append(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(picContainer);
    author.appendChild(by);
    picContainer.appendChild(pic);

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    picContainer.classList.add('img-container');
    
    headline.textContent = element.headline
    pic.src = element.authorPhoto
    by.textContent = element.authorName
    
    return card
    });
    let node = article.data.articles.node;
    node.forEach(element => {


    const card = 
        document.createElement('div'),
     headline = 
        document.createElement('div'),
     author =
        document.createElement ('div'),
     picContainer =
        document.createElement ('div'),
     pic =
        document.createElement ('img'),
     by =
        document.createElement ('span'),
     cardConatiner =
        document.querySelector('.cards-container');
    
    cardConatiner.append(card);
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(picContainer);
    author.appendChild(by);
    picContainer.appendChild(pic);

    card.classList.add('card')
    headline.classList.add('headline');
    author.classList.add('author');
    picContainer.classList.add('img-container');
    
    headline.textContent = element.headline
    pic.src = element.authorPhoto
    by.textContent = element.authorName
    
    return card
    });
    // return card
}


