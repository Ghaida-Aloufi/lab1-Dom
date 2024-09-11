
//Q1
let x = document.getElementById("text1")

console.log(x.style.color = 'white');
console.log(x.style.backgroundColor = 'green');

//Q2

let y=document.getElementById("test1")
y.setAttribute("class","p2")




// Q3

let img = document.getElementsByTagName("img")[0]
console.log(img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEOm5WwJq_NDFkqnaJpamwql8hFefcZPuYpA&s");

//Q4
let ul=document.querySelector("ul")
let var1=document.createElement("li")
var1.textContent="HTML"
ul.appendChild(var1)

let var2=document.createElement("li")
var2.textContent="CSS"
ul.appendChild(var2)

let var3=document.createElement("li")
var3.textContent="JS"
ul.appendChild(var3)

ul.setAttribute("class","ul")




//Q5


let table=document.createElement("table")
document.body.appendChild(table)
let row1=document.createElement("tr")
let row2=document.createElement("tr")
let col1=document.createElement("td")
let col2=document.createElement("td")
let col3=document.createElement("td")
let col4=document.createElement("td")
let col5=document.createElement("td")
let col6=document.createElement("td")
col1.innerText="HTML"
col2.innerText="JS"
col3.innerText="CSS"
col4.innerText="SQL"
col5.innerText="API"
col6.innerText="DOM"
table.appendChild(row1)
table.appendChild(row2)
row1.appendChild(col1)
row1.appendChild(col2)
row1.appendChild(col3)
row2.appendChild(col4)
row2.appendChild(col5)
row2.appendChild(col6)

table.setAttribute("class","table")


















