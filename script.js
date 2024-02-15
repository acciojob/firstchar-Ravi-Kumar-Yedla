function firstChar(text) {
  // your code here
	for(let r of text){
		if(r !== ''){
			return r;
		}
		else{
			return '';
		}
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
