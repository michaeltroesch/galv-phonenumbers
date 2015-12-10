function largestPhoneNumber(arr){
	var formattedNumbers = [],
		summedNumbers = [],
		maximum = 0,
		marker = 0;

	for(var i=0; i<arr.length; i++){
		formattedNumbers[i] = arr[i].split("-").join("");
	}

	for(var i=0; i<formattedNumbers.length; i++){
		summedNumbers[i] = 0;
	}
	                                       
	for(var i=0; i<formattedNumbers.length; i++){
		for(var j=0; j<formattedNumbers[i].length; j++){
			summedNumbers[i] += parseInt(formattedNumbers[i].charAt(j), 10);
		}
	}

	for(var i=0; i<summedNumbers.length; i++){
		if(summedNumbers[i] > maximum){
			maximum = summedNumbers[i];
			marker = i;
		}
	}

	return arguments[0][marker];
}
