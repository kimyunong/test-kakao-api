let searchBar = document.getElementById("search-bar");

let searchButton = document.getElementById("search-button");

let bookBar = document.getElementById("book-bar");

console.log("북박스 어디감??",bookBar);

let keyword = [];

let resultHTML="";



const searCh = () =>{

    keyword = searchBar.value

    console.log("검색키워드",keyword);

    getAPI()

}

searchButton.addEventListener("click",searCh);
  


let getAPI= () =>{


$.ajax({

    method: "GET",  // 전송방식

    url: "https://dapi.kakao.com/v3/search/book?target=title", // 전송주소

    data: { query: `${keyword}` }, //보낼 데이터
    
    headers: { Authorization : "KakaoAK dfcec3806ad7ae9b20c7e6d06cfbabb1" } 
})

    .done(function (result) {  // 요청에 대한 응답 
    
        
        
        console.log("어디있니?",result);    // <- ????

        render(result);

    }); 

   
    
}

const render = (result) => { 
    
        
        for(let i=0; i < result.documents.length; i++){

            resultHTML +=

            `<div id="box-bar">
                <div class="book-box">
                    <p>${result.documents[i].title}</p>
                    <p><img src="${result.documents[i].thumbnail}"/></p>
                </div>
            </div>`;
            };          
    

            bookBar.innerHTML = resultHTML;
            console.log("결과",resultHTML);
       
}