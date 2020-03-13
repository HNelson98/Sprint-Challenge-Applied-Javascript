// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(response => {
    newTab(response)
    console.log(response)
  })
  .catch(error => {
      console.log(error)
})

function newTab(topic){

    topic.data.topics.forEach(element => {
        
            let tab =
            document.createElement('div'),
        tabsConatainer =
            document.querySelector('.topics');
        tabsConatainer.append(tab);
        tab.classList.add('tab');
        for(i = 0; i < topic.data.topics.length; i++) {
            tab.textContent = element
        }
        return tab
     });

     
};


// var topics = topic.data.topics;
// var x;
//     const tab =
//     document.createElement('div'),
// tabsConatainer =
//     document.querySelector('.topics');
// tabsConatainer.append(tab);
// tab.classList.add('tab');

// for(x of topics){
//     tab.textContent = x
// }

// return tab