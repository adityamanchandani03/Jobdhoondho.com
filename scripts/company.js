let experi_list= document.getElementsByClassName('check-btn-li');

function click_me(Id){

     let click = document.getElementById(Id);
     if(click.value==0){

         
         click.style.color='black';
         click.style.border='1px solid black';
         click.style.backgroundColor='rgba(128, 128, 128, 0.177)';
         click.value='1';
         
        }
        else{
            click.style.color='#000000be';
            click.style.border='1px solid  #000000a6';
            click.style.background='transparent';
            click.value='0';
        }
     
       
     
}