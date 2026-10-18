var menubox = document.getElementById("menubox")
var sidebar = document.getElementById("sidebar")
var closebar=document.getElementById("closebar")

menubox.addEventListener("click",function(){
    sidebar.style.right=0
})

closebar.addEventListener("click",function(){
    sidebar.style.right="-50%"
})


// product search using js

 var product_container=document.getElementById("product_container")
 var search=document.getElementById("search")
 var productlist=product_container.querySelectorAll("div")

 search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    
    for (count=0; count<productlist.length; count=count+1){
        var productname= productlist[count].querySelector("h2").textContent
        if(productname.toUpperCase().indexOf(enteredValue)<0)
        {
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
 })