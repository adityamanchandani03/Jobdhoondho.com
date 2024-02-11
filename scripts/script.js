var navlinks = document.getElementById("navlinks");
function hideMenu() {

    navlinks.style.width = "0";
}
function showMenu() {
    navlinks.style.width = "250px"
}
function onScroll() {
    let logo = document.getElementById('logo');
    let measure = window.scrollY;
    logo.style.top = '1%';
    logo.style.left = '1%';
    logo.style.width = '70px';

    if (measure == 0) {
        logo.style.top = '3%';
        logo.style.left = '2%';
        logo.style.width = '100px';
    }
  
    if(measure == 0 && window.innerWidth < 770){
        logo.style.top = '2%';
        logo.style.left = '2%';
        logo.style.width = '80px';
        logo.style.filter= 'invert()';
    }
    if(window.innerWidth < 770 && measure>0){
        logo.style.top = '1%';
        logo.style.left = '1%';
        logo.style.width = '40px';
        logo.style.filter='none';
       
        logo.style.borderRadius='3px';
    }
   

    // let max = window.innerWidth;
    // // console.log(max);

}
function khul(link){
  document.getElementById(link).style.display='flex';
 
}
function band(link){
    document.getElementById(link).style.display='none';
 
}



let scroll_row= document.getElementById('scroll_row');
function scroll_right(){
  scroll_row.scrollLeft +=500;

}
function scroll_left(){
    scroll_row.scrollLeft-=500;

  }

//   login logic js
let login_value= document.getElementById('body').data;
console.log(login_value);
