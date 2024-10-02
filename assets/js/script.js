
$(document).ready(function() {
    $("#btn1").click(function() {
      $("#form1").show(300);
      $("#form2").hide(300);
      $("#form3").hide(300);
      $("#form4").hide(300);
      $("#form5").hide(300);
    });
    $("#btn2").click(function() {
      $("#form2").show(300);
      $("#form1").hide(300);
      $("#form3").hide(300);
      $("#form4").hide(300);
      $("#form5").hide(300);
    });
    $("#btn3").click(function() {
      $("#form3").show(300);
      $("#form1").hide(300);
      $("#form2").hide(300);
       $("#form4").hide(300);
      $("#form5").hide(300);
    });
    $("#btn4").click(function() {
        $("#form4").show(300);
        $("#form1").hide(300);
        $("#form2").hide(300);
        $("#form3").hide(300);
        $("#form5").hide(300);
      });
      $("#btn5").click(function() {
        $("#form5").show(300);
        $("#form1").hide(300);
        $("#form2").hide(300);
        $("#form3").hide(300);
        $("#form4").hide(300);
      });
  });
  function imagepreview(simg){
    var myDIV=document.getElementById("myDIV");
    var simg=document.getElementById("simg");
    myDIV.src=simg.src;
    
        }

        const form = document.getElementById('form');
const error = document.getElementById('error');
const fullname = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('text');
const thanks = document.getElementById('thanks');

email.oninvalid = invalid;
fullname.oninvalid = invalid;  
text.oninvalid = invalid;  
form.onsubmit = submit;

function invalid(event){
    error.removeAttribute('hidden');
 }

function submit(event){
    // form.setAttribute('hidden', '');
    alert('your data has been received . thanks!');
    thanks.removeAttribute('hidden');
    event.preventDefault();
 }

