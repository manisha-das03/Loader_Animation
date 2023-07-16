var percent1= document.querySelector('.percent');
var count=0;
var per=0;
var percentage=setInterval(animate,120);
function animate(){
    if(count==100 && per==100){
        clearInterval(percentage);
    }
    else{
        per=per+1;
        count=count+1;
        percent1.textContent=count+'%';
    }
}