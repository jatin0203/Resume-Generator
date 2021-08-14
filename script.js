function addWE(){
    let weContainer = document.getElementById('work-experience');

    let newDiv = document.createElement('div');
    newDiv.classList.add('container-fluid');
    newDiv.classList.add('flex-container');
    newDiv.classList.add('mt-1');
    newNode1 = document.createElement('textarea')
    newNode1.setAttribute('placeholder','Enter Duration and Company');
    newNode1.setAttribute('rows','3');
    newNode1.classList.add('form-control')
    newNode1.setAttribute('id','yearWE')

    newNode2 = document.createElement('textarea')
    newNode2.setAttribute('placeholder','Enter Your Work Experience');
    newNode2.setAttribute('rows','3');
    newNode2.classList.add('form-control')
    newNode2.classList.add('weF')
    // newNode2.setAttribute('id','yearWE')

    newDiv.appendChild(newNode1)
    newDiv.appendChild(newNode2)
    const weButton = document.getElementById('weButton');

    weContainer.insertBefore(newDiv,weButton);
}

// add language button
function addL(){
    let lContainer = document.getElementById('lang');

    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('mt-1');
    newNode.setAttribute('placeholder','Enter Language');
    newNode.setAttribute('rows','1');
    newNode.classList.add('lF')
    const qButton = document.getElementById('lButton');

    lContainer.insertBefore(newNode,lButton);
}
// add qualification Button

function addQ(){
    let qContainer = document.getElementById('qualifications');

    let newDiv = document.createElement('div');
    newDiv.classList.add('container-fluid');
    newDiv.classList.add('flex-container');
    newDiv.classList.add('mt-1');
    newNode1 = document.createElement('textarea')
    newNode1.setAttribute('placeholder','Enter Duration and University');
    newNode1.setAttribute('rows','3');
    newNode1.classList.add('form-control')
    newNode1.setAttribute('id','yearQ')

    newNode2 = document.createElement('textarea')
    newNode2.setAttribute('placeholder','Enter Your Qualifications');
    newNode2.setAttribute('rows','3');
    newNode2.classList.add('form-control')
    newNode2.classList.add('qF')
    // newNode2.setAttribute('id','yearWE')

    newDiv.appendChild(newNode1)
    newDiv.appendChild(newNode2)
    const weButton = document.getElementById('qButton');

    qContainer.insertBefore(newDiv,qButton);
}

// Adding new textarea on hitting return key  + shift key
// [...document.getElementsByClassName('weF')].forEach(textArea => textArea.addEventListener('keydown',(e)=> e.shiftKey && e.key === 'Enter' && addWE()))



// Adding Values to the resume
function generate(){
    const nameF = document.getElementById('nameF');
    const titleF = document.getElementById('titleF');
    const addressF = document.getElementById('addressF');
    const phoneF = document.getElementById('phoneF');
    const emailF = document.getElementById('emailF');
    const fbF = document.getElementById('fbF');
    const instaF = document.getElementById('instaF');
    const liF = document.getElementById('liF');
    const profileF = document.querySelector('.profileF')


    const resumeName = document.querySelector('.profile-text>.name');
    const resumeTitle = document.querySelector('.profile-text>.title');
    const resumeAddress = document.getElementById('resumeAddress');
    const resumePhone = document.getElementById('resumePhone');
    const resumeEmail = document.getElementById('resumeEmail');
    const resumeFb = document.getElementById('resumeFb');
    const resumeInsta = document.getElementById('resumeInsta');
    const resumeLi = document.getElementById('resumeLi');
    const resumeProfile = document.querySelector('.self-info') 

    
    resumeName.innerText=nameF.value;
    resumeTitle.innerText=titleF.value;
    resumeAddress.innerText =addressF.value;
    resumePhone.innerText = phoneF.value;
    resumeEmail.innerText = emailF.value;
    resumeFb.innerText = fbF.value;
    resumeInsta.innerText = instaF.value;
    resumeLi.innerText = liF.value;

    resumeProfile.innerText = profileF.value;

    // Languages

    let languages = document.querySelectorAll('.lF');

    const languagesList = document.querySelector('.languages>ul')

    languagesList.innerHTML = [...languages].map(language => `<li>${language.value}</li>`).join('')


}

// Printing Cv
function printCV(){
    // var divContents = document.querySelector(".resume").innerHTML;
    // var a = window.open('', '', 'height=500, width=500');
    // a.document.write('<html>');
    // a.document.write('<body > <h1>Div contents are <br>');
    // a.document.write(divContents);
    // a.document.write('</body></html>');
    // a.document.close();
    // a.print();

    window.print()
}