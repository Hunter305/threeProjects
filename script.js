fetch('https://animechan.vercel.app/api/random')
    .then(response => response.json())
    .then((quote) => {
        document.getElementById("name").innerText=`${quote.anime}`;
        document.getElementById("character").innerText=`${quote.character}`;
        document.getElementById("quote").innerText=`"${quote.quote}"`;
    }
)

document.querySelector("button").addEventListener("click",function(){
    window.location.reload()
})


fetch("https://api.jikan.moe/v4/anime")
.then(res=>res.json())
.then(data=>console.log(data.data[0]))