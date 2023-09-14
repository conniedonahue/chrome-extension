//possible conditions:
// - on click
// - every time page reload event DOMCONTENTLOADS 

// document.addEventListener("readystatechage", () => {
//   console.log("ReadyState: ", document.readyState);
// })

    if(window.location.href.includes("watch")){
      const delayedFunc = setTimeout(() => {
        console.log('RUNNING FUNCTION--------------------------------------');
        // define const owner and obtain HTML element using ID
        const owner = document.getElementById('owner');
        // create new button element LS Button
        const LSButton = document.createElement('button');
        LSButton.innerHTML = 'Like AND Subscribe';
        // append button to owner
        owner.appendChild(LSButton);

        // grab existing like and subscribe buttons
        let subscribeBtn = document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m');
        let likeBtn = document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--segmented-start');
        console.log('Sub Button: ',subscribeBtn);
        console.log('Like Button: ',likeBtn);
        if (document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--segmented-start') && document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m')){
            clearTimeout(delayedFunc);
          }
        // add eventlistener on button click
        if(likeBtn && subscribeBtn){
          LSButton.addEventListener('click',() => {   
              subscribeBtn.click();
              likeBtn.click();
          })
        }
      }, 3000);
    }

  

// if (document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--tonal.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--icon-leading.yt-spec-button-shape-next--segmented-start') && document.querySelector('.yt-spec-button-shape-next.yt-spec-button-shape-next--filled.yt-spec-button-shape-next--mono.yt-spec-button-shape-next--size-m')){
//   clearTimeout(delayedFunc);
// }
// when button is clicked, auto click like and subscribe
// id="subscribe-button"
// .yt-spec-button-shape-next yt-spec-button-shape-next--filled yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m 
// .yt-spec-button-shape-next yt-spec-button-shape-next--tonal yt-spec-button-shape-next--mono yt-spec-button-shape-next--size-m yt-spec-button-shape-next--icon-leading yt-spec-button-shape-next--segmented-start
//possibly change color, text


//idea: setTimeout (functionality, 400ms)

// // Alternative to load event
// document.onreadystatechange = () => {
//   if (document.readyState === "complete") {
//    // 
//   }
// };
