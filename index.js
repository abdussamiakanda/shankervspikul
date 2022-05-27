var inputid = 0;
var blinkid = 0;

function getFocus() {
  document.getElementById('input').focus();
}

function disPlay(){
  document.getElementById('span'+blinkid).innerHTML = document.getElementById('input').value;
}

// const texts = ["Welcome! ", "Enter ", "1 ", "to ", "create ", "a ", "server. ", "Enter ", "2 ", "to ", "join ", "a ", "server."];
const texts = ["Welcome! ", "Enter ", "the ", "password! ", "The ", "password ", "is ", "a ", "group ", "that ", "you're ", "in. ", " "];
const time = [1000, 2000, 2200, 2400, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000];

function welCome() {
  document.getElementById('Texts').innerHTML = `
  <div class="text">
    <div class="left">
      >>
    </div>
    <div class="right">
      <span class="right" id='Welcome'></span>
      <span class="blink" id="Blink1">_</span>
    </div>
  </div>
  `;
  for (let i = 0; i < texts.length; i++) {
    setTimeout(function(){
      let var1 = texts[i].toString() + '';
      document.getElementById('Welcome').innerHTML += var1;
    }, time[i]);
  }
  newLine1();
}

function newLine1(){
  setTimeout(function(){
    inputid = Date.now();
    blinkid = Date.now();
    document.getElementById("Blink1").innerHTML = '';
    document.getElementById("Texts").innerHTML += `
      <div class="text">
        <div class="left">
          >>
        </div>
        <div class="right">
          <span id="span`+blinkid+`"></span>
          <span class="blink" id="`+ blinkid +`">_</span>
        </div>
      </div>
    `;
    getFocus();
  }, 6000);
}

function newLine(){
  inputid = Date.now();
  blinkid = Date.now();
  document.getElementById("Texts").innerHTML += `
    <div class="text">
      <div class="left">
        >>
      </div>
      <div class="right">
        <span id="span`+blinkid+`"></span>
        <span class="blink" id="`+ blinkid +`">_</span>
      </div>
    </div>
  `;
  document.getElementById('input').value = '';
  getFocus();
}

function reply(){
  if (document.getElementById('input').value == '') {
    document.getElementById("Texts").innerHTML += `
      <div class="text">
        <div class="left">
          >>
        </div>
        <div class="right">
          <span>At least enter something?</span>
        </div>
      </div>
    `;
    newLine();
  } else if (document.getElementById('input').value == 'rohinga' || document.getElementById('input').value == 'Rohinga' || document.getElementById('input').value == 'ROHINGA') {
    document.getElementById("Texts").innerHTML += `
      <div class="text">
        <div class="left">
          >>
        </div>
        <div class="right">
          <span>Noice! Here's the audio for you. <a href="https://drive.google.com/uc?export=download&id=1vbpJuoITrzX9pbsnCBiBc5B2c9f61R_C">Click Here!</a></span>
        </div>
      </div>
    `;
    newLine();
  } else {
    document.getElementById("Texts").innerHTML += `
      <div class="text">
        <div class="left">
          >>
        </div>
        <div class="right">
          <span>The password starts with a 'r' and ends with 'a'. There are also 'n' and 'g'.</span>
        </div>
      </div>
    `;
    newLine();
  }
}

setTimeout(function(){
  document.addEventListener("keyup", function(event) {
    if (event.key == 'Enter') {
      event.preventDefault();
      document.getElementById(blinkid).innerHTML = '';
      reply();
    };
  });
}, 6000);
