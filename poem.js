async function  poem(){
    let get =await fetch("https://poetrydb.org/author")
    let data = await get.json()
    let arr=data.authors
    for(let i=0;i<arr.length;i++){
        document.querySelector(".temp").innerHTML+=`<div class="col">
        <div class="card">
            <div class="card-body">
              <a href="https://en.wikipedia.org/wiki/${arr[i]}" target="_blank">${arr[i]}</a>
            </div>
        </div>
    </div>`
    }
    
}


poem()
