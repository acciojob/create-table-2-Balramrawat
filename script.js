function createTable() {
    //Write your code here
  let rn=prompt("enter the rows of numbers")
	let cn=prompt("enter the column of numbers")

	if(isNaN(rn) || isNaN(cn) || rn<=0 || cn<=0){
		alert("invalid input..please enter the positive number")
		return;
	}


	let table=document.getElementById("myTable")

	for(let i=0;i<rn;i++){
		let row=table.insertRow()
			for(let j=0;j<cn;j++){
				let cell=row.insertCell();
				cell.innerText=`Row${i} column${j}`
			}	
	}
}
