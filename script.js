function highlight() {
    //Write your code here
 let a = document.getElementsByTagName('strong');
	for(let x=0;x<a.length;x++){
		a[x].style.color = 'green';
	}

}


function return_normal() {
    //Write your code here
  let b = document.getElementsByTagName('strong');
	for(let x=0;x<b.length;x++){
		b[x].style.color = 'black';
	}
}