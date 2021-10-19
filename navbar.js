function navbar(){
    return`<h3 onclick="location.href='index.html'">Home</h3>
    <div><input type="text" oninput="debounce(inpt,1500)" id="search" placeholder="Search"><button onclick="getData()">Search</button></div>
    <h3 onclick="location.href='recipeDay.html'">Recipe of the Day!</h3>
    <h3 onclick="location.href='latest.html'">Latest Recipe</h3>`
}
 export default navbar; 