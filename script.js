

let btncancel=document.getElementById("btn-send-cancel")
let viewform=document.getElementById("conteiner-form")


 function btnCancelMensege(){
   viewform.classList.add('closeform')
 }

 function openMenssege(){
   viewform.classList.remove('closeform')

 }