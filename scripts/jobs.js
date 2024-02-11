var filters = document.getElementById("filters");
if(window.innerWidth <=770 ){
window.onload = filters.style.width = "0";
}
function hidefilter() {

    filters.style.width = "0";
}
function showfilter() {
    filters.style.width = "400px";
}