(function(){
	// console.log('hello');
	var cardList = {  
	   "VISA":{  
	      "cardPattern":"/^4/",
	      "cardNumberLength":16,
	      "cvv":"required",
	      "cvvLength":3,
	      "imgUrl": 'img/visa.png',
	      "displayText":"Visa"
	   },
	   "MASTERCARD":{  
	      "cardPattern":"/^5[1-5]/",
	      "cardNumberLength":16,
	      "cvv":"required",
	      "cvvLength":3,
	      "imgUrl": 'img/master.png',
	      "displayText":"Master"
	   },
	   "MAESTRO":{  
	      "cardPattern":"/^(50|63|66|5[6-8]|6[8-9]|600[0-9]|6010|601[2-9]|60[2-9]|61|620|621|6220|6221[0-1])/",
	      "cardNumberLength":19,
	      "cvv":"optional",
	      "cvvLength":4,
	      "imgUrl": 'img/maestro.png',
	      "displayText":"Maestro"
	   }
	};
	var type = '';
	// localStorage.removeItem('LOCAL_DATA')
	if(localStorage.getItem('LOCAL_DATA')){
		var objList = JSON.parse(localStorage.getItem('LOCAL_DATA'));
		var element = '';
		console.log(objList);
		Object.keys(objList).forEach(function(key) {
		  var value = objList[key];
			console.log(key, value);
			var temp = '<li class="js-myList-wrapper">'+
					'<div class="edit-delete-wrap clearfix">'+
						'<span class="pull-left">'+value.type+'</span>'+
						'<div class="edit-delete pull-right">'+
							'<a class="js-edit">Edit</a>'+ 
							'<a class="js-delete">'+
								'<img class="delete-img" src="img/delete.png" />'+
							'</a>'+ 
						'</div>'+
					'</div>'+
					'<div class="details-wrap clearfix">'+
						'<span class="pull-left">'+value.type+'</span>'+
						'<p class="pull-left">'+value.number+'</p>'+
					'</div>';
					console.log(temp);
					element += temp;
		});
		document.getElementById("js-my-list").innerHTML = element;
	}
	// console.log(cardList);
	document.getElementById("cardNum").oninput =  function(e) {
		var x = document.getElementById("cardNum");
		// console.log(x.value);
		// x.value = x.value.toUpperCase();
		for (var key in cardList) {
			if (cardList.hasOwnProperty(key)) {

			    var patt = new RegExp(cardList[key].cardPattern.substring(1,cardList[key].cardPattern.length-1));
			    // console.log(cardList[key].cardPattern);
			    // console.log(patt);
			    // console.log(x.value);
			    var result = patt.test(x.value);
			    // console.log('result');
			    // console.log(result);
			    if (result) {
			    // console.log(patt);
			        // document.getElementById("numCText").innerHTML += key + ' ';
			        type = key;
			    }
			}
		}
		// console.log(e.target.closest(".input-group").classList.add(cardList[type].displayText));
		e.target.closest(".input-group").classList.remove('Visa');
		e.target.closest(".input-group").classList.remove('Master');
		e.target.closest(".input-group").classList.remove('Maestro');
		if((type=='VISA' || type=='MASTERCARD' || type=='MAESTRO' ) && cardList[type].displayText) {
			e.target.closest(".input-group").classList.add(cardList[type].displayText);
			

			// if (cardList[type]) {
			// 	var objList = type + ' '+ cardList[type].cardNumberLength + ' '+ cardList[type].cvv + ' '+ cardList[type].cvvLength + ' ';+ cardList[type].displayTextp + ' ';
			// }
			if(cardList[type].cvv == 'required'){
				document.getElementById("fCVV").required = true;
			} else {
				document.getElementById("fCVV").required = false;
			}
			if (e.target.value.length >=cardList[type].cardNumberLength){document.getElementById("fMM").focus()}
		}
	}

	document.getElementById("fMM").oninput =function(e){if (e.target.value.length >=2){document.getElementById("fYY").focus()}}
	document.getElementById("fYY").oninput =function(e){if (e.target.value.length >=4){document.getElementById("fCVV").focus()}}
	document.getElementById("fCVV").oninput =function(e){
		// if(cardList[type].cvv == 'required'){
		// 	e.target.required = true;
		// } else {
		// 	e.target.required = false;
		// }
		if (e.target.value.length >=3){document.getElementById("fbtn").focus()}
	}
	
	// code for collapsable section
	var classname = document.getElementsByClassName("js-edit");
	var classnameDl = document.getElementsByClassName("js-delete");

	var myFunction = function() {
	    this.closest(".js-myList-wrapper").classList.toggle("active");
	};
	var myFunctionDl = function() {
	    // this.closest(".js-myList-wrapper").classList.remove("active");
	    this.closest(".js-myList-wrapper").classList.add("hide");
	};

	var obj = [];
	var saveField = function() {
		// this.preventDefault();
	  // console.log('in save');
	  var number = document.getElementById("cardNum").value;
	  var month = document.getElementById("fMM").value;
	  var year = document.getElementById("fYY").value;
	  var cvv = document.getElementById("fCVV").value;
	  obj.push({
			'type': type,
			'number': number,
			'month': month,
			'year': year
	  });
	  // console.log(obj);
	  localStorage.setItem('LOCAL_DATA', JSON.stringify(obj));
	  // return false;a
	}
    document.getElementById('fbtn').addEventListener('click', saveField, false);
	for (var i = 0; i < classname.length; i++) {
	    classname[i].addEventListener('click', myFunction, false);
	}

	Array.from(classname).forEach(function(element) {
      element.addEventListener('click', myFunction);
    });
	Array.from(classnameDl).forEach(function(element) {
      element.addEventListener('click', myFunctionDl);
    });


	// Immediate Invoking Function Expression Ends Here
})();
	
function myFunctionMMYY() {
  var mh = document.getElementById("fMM").value;
  var yr = document.getElementById("fYY").value;
  var cm = new Date().getMonth()+1;
  var cy = new Date().getFullYear();
  // var cy = cy.substring(2, 4);
  // console.log(mh);
  // console.log(yr);
  // console.log(cm);
  // console.log(cy);
  if (mh && yr && mh != '' && yr != '') {

    if (yr >= cy) {
      if ( yr == cy && cm > mh) {
        document.getElementById("numError").style.color = 'red';
        document.getElementById("numError").innerHTML = ' Enter correct month';
      } else {
        document.getElementById("numError").innerHTML = 'Awesome!';
        document.getElementById("numError").style.color = 'green';
      } 
    } else {
        document.getElementById("numError").style.color = 'red';
      document.getElementById("numError").innerHTML = ' Enter correct year';
      
    }
  }
}

