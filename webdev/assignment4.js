var tabBTS = document.getElementById('tabBTS');
var tabCheckout = document.getElementById('tabCheckout');

var contentBTS = document.getElementById('contentBTS');
var contentCheckout = document.getElementById('contentCheckout');

tabBTS.onclick = function() {
  tabBTS.classList.add('active');

  tabCheckout.classList.remove('active');

  contentBTS.classList.remove('hidden');

  contentCheckout.classList.add('hidden');
}

tabCheckout.onclick = function() {

  document.querySelector('.active').classList.remove('active');

  deactivateAllTabs();

  tabCheckout.classList.add('active');

  hideAllContent();

  contentCheckout.classList.remove('hidden');
}

// HELPER FUNCTIONS!

// function to deativate all tabs
function deactivateAllTabs() {
  var allTabs = document.getElementsByClassName('tab');

  for (var i = 0; i < allTabs.length; i++) {
    allTabs[i].classList.remove('active');
  }
}

// function to hide all content windows
function hideAllContent() {
  var allContent = document.getElementsByClassName('content');

  for (var i = 0; i < allContent.length; i++) {
    allContent[i].classList.add('hidden');
  }
}

var total = 0;
var totalStr = document.getElementById('total');
var listStr = document.getElementById('list');
var numItem;
/*var but1 = document.getElementById('but1');
var but2 = document.getElementById('but2');
var but3 = document.getElementById('but3');

document.getElementById('select1').addEventListener('change',function(event) {
    
    console.log(event.currentTarget.value);
    numItem = event.currentTarget.value;
    //listStr.innerHTML += event.currentTarget.value + ' @ 60 per shoe';
});

but1.addEventListener('click',function(event) {
    if(numItem == undefined || numItem == "question") {
        document.getElementById('message').innerHTML = "Please select a number of shoes";
    }
    else {
        total = total + numItem * 60;
        totalStr.innerHTML = "Total cost: " + total;
        listStr.innerHTML += numItem + ' @ '+ but1.value + ' per '+ but1.dataset.species + '</br>';
        document.getElementById('message').innerHTML = numItem + " " + but1.dataset.species + ' added to cart';
    } 
});*/
//change button id to class butt
//query selector iterate through all
var buttAll = document.querySelectorAll('.butt');
var selectAll = document.querySelectorAll('.select');

for(var i = 0; i < selectAll.length; i++) {
    selectAll[i].addEventListener('change',function(event) {
        console.log(event.currentTarget.value);
        numItem = event.currentTarget.value;
    });
}

for(var i = 0; i < buttAll.length; i++) {
    buttAll[i].addEventListener('click',function(event) {
    
            total = total + numItem * event.currentTarget.value;
            totalStr.innerHTML = "Total cost: " + total;
            listStr.innerHTML += numItem + ' @ '+ event.currentTarget.value + ' per '+ event.currentTarget.getAttribute("data-item") + '</br>';
            //document.querySelector('.message').innerHTML = numItem + " " + event.currentTarget.getAttribute("data-item") + ' added to cart';
        
    });
}

for(var i = 0; i < buttAll.length; i++) {
buttAll[i].addEventListener('click',function(event) {
    if(event.currentTarget.getAttribute("data-select") == "1" && (numItem == undefined || numItem == "question")) {
        document.getElementById('messg1').innerHTML = "Please select a number of shoes";
    }
    if(event.currentTarget.getAttribute("data-select") == "2" && (numItem == undefined || numItem == "question")) {
        document.getElementById('messg2').innerHTML = "Please select a number of shoes";
    }
    if(event.currentTarget.getAttribute("data-select") == "3" && (numItem == undefined || numItem == "question")) {
        document.getElementById('messg3').innerHTML = "Please select a number of shoes";
    }
    else if(event.currentTarget.getAttribute("data-select") == "1") {
        document.getElementById('messg1').innerHTML = numItem + " " + event.currentTarget.getAttribute("data-item") + ' added to cart';
    }
    else if(event.currentTarget.getAttribute("data-select") == "2") {
        document.getElementById('messg2').innerHTML = numItem + " " + event.currentTarget.getAttribute("data-item") + ' added to cart';
    }
    else if(event.currentTarget.getAttribute("data-select") == "3") {
        document.getElementById('messg3').innerHTML = numItem + " " + event.currentTarget.getAttribute("data-item") + ' added to cart';
    }
});
}