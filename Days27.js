let btn = document.querySelector("button");
let url1 = " https://dog.ceo/api/breeds/image/random "
btn.addEventListener("click" , async ()  => {
    let link = await getImage();
console.log(url1)
});

async function getImage() {
    try {
        let res = await axios.get(url1);
        console.log(res.data.message);
    } catch (e) {
        console.log("error - " , e);
        return "/" ;
    }
} 
