//developed by Aleksiandr Chaplinski 
// last update 18.03.2021

const typeAuto = document.querySelector('#type-auto'); 
lightWeightAuto = document.querySelector('#light-weight-auto')
const truckWeight = document.querySelector('#truck-weight');
const passangersSeats = document.querySelector('#passengers-seats');
const trailerWeight = document.querySelector('#trailer-weight');
const wg = document.querySelectorAll('.wg');
const btn = document.querySelector('.btn-smb');
const owner = document.querySelector('#owner');
const resultInner = document.querySelector('.result')
const ownerStatus = document.querySelector("#owner-status")
const pWeight = document.querySelector(".p-weight")
const entityLight = document.querySelectorAll('#ent-wg')
const personLight = document.querySelectorAll('#pers-wg')

owner.addEventListener('change', function() {

	if (this.value=="person"){
		personLight.forEach(function(currentValue){
	  			currentValue.style.display = "inline"
	  		})
		entityLight.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
		
	}
	if (this.value=="entity"){
		personLight.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
		entityLight.forEach(function(currentValue){
	  			currentValue.style.display = "inline"
	  		})	
	} 
	typeAuto.value = "check";
	lightWeightAuto.value = "0";
	resultInner.innerHTML = "&nbsp";	
})


typeAuto.addEventListener('change', function() {
	  	if (this.value=="trailer"){
	  		pWeight.innerHTML = "Масса прицепа"
	  		wg.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
	 		trailerWeight.style.display = "inline"

	 	}
	 	if (this.value=="car"){
	 		pWeight.innerHTML = "Масса авто"
	  		wg.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
	 		lightWeightAuto.style.display = "inline"
	 	}
	 	if (this.value=="truck"){
	 		pWeight.innerHTML = "Масса авто"
	  		wg.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
	 		truckWeight.style.display = "inline"
	 	}

	 	if (this.value=="bus"){
	 		pWeight.innerHTML = "число посадочных мест"
	  		wg.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
	 		passangersSeats.style.display = "inline"
	 	}

	 	if (this.value=="moto"){
	 		pWeight.innerHTML = "Масса авто"
	  		wg.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
	 	}

	 	if (this.value=="truck tractor"){
	 		pWeight.innerHTML = "Масса авто"
	  		wg.forEach(function(currentValue){
	  			currentValue.style.display = "none"
	  		})
	 	}
 	
})


btn.addEventListener('click',function(){
	let result;
	//сумма налога для физического лица
	if (owner.value=="person") {
		//сумма налога на легковоуе авто для физ лица
		if (typeAuto.value=="car") {
			if(lightWeightAuto.value=="1"){
				result = 61
			}
			if(lightWeightAuto.value=="2"){
				result = 81
			}
			if(lightWeightAuto.value=="3"){
				result = 102
			}
			if(lightWeightAuto.value=="4"){
				result = 122
			}
			if(lightWeightAuto.value=="5"){
				result = 142
			}
			if(lightWeightAuto.value=="6"){
				result = 162
			}
			if(lightWeightAuto.value=="7"){
				result = 223
			}
		}
		//Сумма налога на прицеп для физ лица
		if (typeAuto.value=="trailer") {
			if(trailerWeight.value=="19"){
				result = 41
			}
			if(trailerWeight.value=="20"){
				result = 223
			}
			if(trailerWeight.value=="21"){
				result = 41
			}
		}
		//сумма налога на грузовик для физ лица
		if (typeAuto.value=="truck") {
			if(truckWeight.value=="12"){
				result = 162
			}
			if(truckWeight.value=="13"){
				result = 345
			}
			if(truckWeight.value=="14"){
				result = 447
			}
			if(truckWeight.value=="15"){
				result = 508
			}
		}
		//сумма налога на автобус для физ лица
		if (typeAuto.value=="bus") {
			if(passangersSeats.value=="16"){
				result = 244
			}
			if(passangersSeats.value=="17"){
				result = 345
			}
			if(passangersSeats.value=="18"){
				result = 447
			}
		}
		//сумма налога на мотоцикл для физ лица
		if (typeAuto.value=="moto") {
			result = 41
		}
		//сумма налога на седельный тягач для физ лица
		if (typeAuto.value=="truck tractor") {
			result = 406
		}
		// сумма налога для граждан с льготами
		if (ownerStatus.value == "disabled12" | ownerStatus.value == "veteran" | ownerStatus.value == "pensioner"){
			result = result*0.5
		}else if(ownerStatus.value == "disabled3" ){
			result = result- result*0.25
		}
		if (result == undefined | isNaN(result)){
			resultInner.innerHTML = `<p class="result">Проверьте, что вы выбрали все критерии</p>`
		}else{
			resultInner.innerHTML = `<p class="result">Сумма налога составляет ${result} рублей</p>`
		}
	}



	if (owner.value=="entity") {
		//сумма налога на легковое авто для юр лица
		if (typeAuto.value=="car") {
			if(lightWeightAuto.value=="8"){
				result = 162
			}
			if(lightWeightAuto.value=="9"){
				result = 209
			}
			if(lightWeightAuto.value=="10"){
				result = 255
			}
			if(lightWeightAuto.value=="11"){
				result = 325
			}
		}
		//Сумма налога на прицеп для юр лица
		if (typeAuto.value=="trailer") {
			if(trailerWeight.value=="19"){
				result = 116
			}
			if(trailerWeight.value=="20"){
				result = 278
			}
			if(trailerWeight.value=="21"){
				result = 116
			}
		}
		//сумма налога на грузовик для юр лица
		if (typeAuto.value=="truck") {
			if(truckWeight.value=="12"){
				result = 278
			}
			if(truckWeight.value=="13"){
				result = 394
			}
			if(truckWeight.value=="14"){
				result = 510
			}
			if(truckWeight.value=="15"){
				result = 580
			}
		}
		//сумма налога на автобус для юр лица
		if (typeAuto.value=="bus") {
			if(passangersSeats.value=="16"){
				result = 278
			}
			if(passangersSeats.value=="17"){
				result = 394
			}
			if(passangersSeats.value=="18"){
				result = 510
			}
		}
		// сумма налога на мотоцикл для юр лица
		if (typeAuto.value=="moto") {
			result = 70
		}
		//сумма налога на седельный тягач для юр лица
		if (typeAuto.value=="truck tractor") {
			result = 464
		}
		if (result == undefined){
			resultInner.innerHTML = `Проверьте, что вы выбрали все критерии`
		}else{
			resultInner.innerHTML = `Сумма налога составляет ${result} рублей`
		}
		
	}
})


