
let key = document.querySelectorAll(".keybord>.key>.row>*")
let key2 = document.querySelector(".keybord>.key")
let display = document.getElementById('disply')
let caplock=false;

if( key && key2 && display){

    key.forEach(function(key){
        // console.log(key);
        key.addEventListener('click', function(){
            
            if(this.classList.contains('caps')){
                key2.classList.toggle('upper')
                key.classList.toggle('active')
                caplock ? caplock=false: caplock=true;
            }

             else if(this.classList.contains('back44')){
                    let  letter =  display.innerText
                display.innerText = letter.substring(0,(letter.length-1))
            }else{
                if(caplock){
                    display.innerText += this.dataset.key.toUpperCase()
                }else{
                    display.innerText += this.dataset.key.toLowerCase()
                }
            }
        })
    })
}