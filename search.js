var timerId;
async function getData(){
    let find=document.getElementById("search").value;
    try {
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${find}`)
        let res=await data.json();
        append(res.meals)        
    } catch (error) {
        console.log(`Error:${error}`)
    }
}

async function inpt(){
    let find=document.getElementById("search").value;
    try {
        let data=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${find}`)
        let res=await data.json();
        append(res.meals)             
    } catch (error) {
        console.log(`Error:${error}`)
    }
}
async function search(url){
//console.log(url)
    try {
        let data=await fetch(url)
        let res=await data.json();
        append(res.meals)        
    } catch (error) {
        console.log(`Error:${error}`)
    }
    
}
// let a=setTimeout(inpt,2000);
function append(meal){
    
    let main =document.getElementById("food");
    main.innerHTML=null;
    meal.forEach(element => {
        let div=document.createElement("div");
        div.id="appendFood";
        let fig=document.createElement("figure");
        let img=document.createElement("img");
        img.src=element.strMealThumb;
        fig.append(img);
        let p=document.createElement("h5");
        p.textContent=element.strMeal;
        div.append(fig,p)
        main.append(div)
    });
}
function debounce(func,delay){

    if(timerId){
        clearTimeout(timerId);
    }
    timerId= setTimeout(function(){
         func();
     },delay)
 }
export{search,getData,inpt,debounce}