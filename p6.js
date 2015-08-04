setClickHandler("DecToRom", toRomanNum);
setClickHandler("RomToDec", toDecimalNum);

var romanNumerals = {
		"I":1,
		"IV":4,
		"V":5,
		"IX":9,
		"X":10,
		"XL":40,
		"L":50,
		"XC":90,
		"C":100,
		"CD":400,
		"D":500,
		"CM":900,
		"M":1000
	};
var decimalNumbers = {
		1:"I",
		4:"IV",
		5:"V",
		9:"IX",
		10:"X",
		40:"XL",
		50:"L",
		90:"XC",
		100:"C",
		400:"CD",
		500:"D",
		900:"CM",
		1000:"M"
};
function toRomanNum(){
	var romanNum="";
	var clear = " ";
	var getDecimal = getInput("Numbers");
	var decArray = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
	for (var i=0; getDecimal!=0; i++){
		while (getDecimal>=decArray[i]){
		getDecimal-=decArray[i];
		romanNum+=decimalNumbers[decArray[i]];
		}
	}
	setHTML("NumOutput" , romanNum)
	console.log(romanNum);


}
function toDecimalNum(){
	var decNum=0;
	var getRoman = getInput("Numbers");
	var romArray = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
	for (var i=0; i<getRoman.length; i++){
		if (getRoman.length - i == 1){
			decNum+=romanNumerals[getRoman.substring(i,i+1)];
			//getRoman=getRoman.substring(0,getRoman.length);
		}
		else if (romanNumerals[getRoman.substring(i,i+2)]!= null){
				decNum += romanNumerals[getRoman.substring(i,i+2)];
				i++;
				//getRoman=getRoman.substring(1,getRoman.length);
		}
		else {	
			decNum+=romanNumerals[getRoman.substring(i,i+1)];
			//getRoman=getRoman.substring(0,getRoman.length);
		}
	}
	setHTML("NumOutput" , decNum);
	console.log(decNum);




}