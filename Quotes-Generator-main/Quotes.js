 quote= document.getElementById("quotes");
 author = document.getElementById("author")
btn = document.getElementById("btn");



let NewQuotes =() => {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/')
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 
};


window.addEventListener("load", NewQuotes);
btn.addEventListener("click", NewQuotes);
