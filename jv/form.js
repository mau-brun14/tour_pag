var input = document.getElementsByClassName('controls');
for(var i=0; i<inputs.length; i++){
	inputs[i].addEventListener('keyup', function());
		if(this.value.legth>=1)
		{
			this.nextElementSibling.classList.add('fijar');
			
		}
		else{
			this.nextElementSibling.classList.remove('fijar');
		}
}