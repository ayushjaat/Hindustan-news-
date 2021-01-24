// 8850c967f70e49fe9885d3045e8dc5aa

let newsAccordion = document.getElementById('accordionExample');

let source = 'bbc-news';
let apiKey = '8850c967f70e49fe9885d3045e8dc5aa'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}', true);

xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles)
    let newshtml = "";
    articles.forEach(function(element, index) {
      let news = `
       <div class="accordion-item">
         <h2 class="accordion-header" id="heading${index}">
        <button class="accordion-button collasped" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
      <b>Breaking News ${index+1}:</b>                  ${element['title']}
         </button>
          </h2>
            <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                        ${element['content']}.<a href ="${element['url']}" target ="_blank"> Read more here</a>
                        </div>
                      </div>
                    `;
      newshtml += news;
    })

    newsAccordion.innerHTML = newshtml;
  }
  else {
    console.log("some error occurs.")
  }
}
xhr.send()
