let current_url = document.location;
document.querySelectorAll(".is-active").forEach(function(e){
    if(e.href == current_url){
    e.classList += " is-current";
    console.log(e)
}
});

console.log("hi")