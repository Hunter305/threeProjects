async function getImages(){
    let get=await fetch("https://random.dog/woof.json");
    let data=await get.json()
    document.querySelector("img").src=`${data.url}`
    console.log(data.url)
}

document.querySelector("button").addEventListener("click",()=>{
    window.location.reload();
})
getImages()