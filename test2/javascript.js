function showNextQuestion(){
    let span=document.querySelector("section:not(.d-none)>h5>span");
    let startNumber=span.textContent;
    let startQuestion="q"+startNumber;
    let startSection=document.getElementById(startQuestion);

    let endNumber=++startNumber;
    let endQuestion="q"+endNumber;
    
    startSection.classList.add("d-none");
    let endSection=document.getElementById(endQuestion);
    endSection.classList.remove("d-none");   
}

function showPreviousQuestion(){
    let span=document.querySelector("section:not(.d-none)>h5>span");
    let startNumber=span.textContent;
    let startQuestion="q"+startNumber;
    let startSection=document.getElementById(startQuestion);

    let endNumber=--startNumber;
    let endQuestion="q"+endNumber;
    
    startSection.classList.add("d-none");
    let endSection=document.getElementById(endQuestion);
    endSection.classList.remove("d-none");   
}

function showResults(){
  
    let span=document.querySelector("section:not(.d-none)>h5>span");
    let startNumber=span.textContent;
    let startQuestion="q"+startNumber;
    let startSection=document.getElementById(startQuestion);
    let section=document.getElementById("answers");
    let checkedBtnRadio1 = document.querySelector("[name='btnradio1']:checked");
    let checkedBtnRadio2 = document.querySelector("[name='btnradio2']:checked");
    let checkedBtnRadio3 = document.querySelector("[name='btnradio3']:checked");
    let checkedBtnRadio4 = document.querySelector("[name='btnradio4']:checked");
    let checkedBtnRadio5 = document.querySelector("[name='btnradio5']:checked");
    
    let correct=0;
    if (checkedBtnRadio1.value=='italy'){
        correct++;
    }
    if (checkedBtnRadio2.value=='usa'){
        correct++;
    }
    if (checkedBtnRadio3.value=='russia'){
        correct++;
    }
    if (checkedBtnRadio4.value=='france'){
        correct++;
    }
    if (checkedBtnRadio5.value=='india'){
        correct++;
    }
   
    let correct_ans=document.getElementById("correct");
    correct_ans.innerText="You have answered  "+correct+" questions correctly";
    section.classList.remove("d-none");
    startSection.classList.add("d-none");
}