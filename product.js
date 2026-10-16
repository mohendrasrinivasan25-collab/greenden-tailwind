var menubox = document.getElementById("menubox")
var sidebar = document.getElementById("sidebar")
var closebar=document.getElementById("closebar")

menubox.addEventListener("click",function(){
    sidebar.style.right=0
})

closebar.addEventListener("click",function(){
    sidebar.style.right="-50%"
})