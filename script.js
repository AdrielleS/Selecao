function prox(c,p){
	var fi = document.getElementById(c);
	var option = fi.options[fi.selectedIndex];
	var sec = document.getElementById(p);
	var i = qualSelecionado(c);

	if (i ==1) {
		sec.disabled = false;
		if (option.text === "Sapato") {

			if (sec.length != 1) {
				remover(p);
				addOption(p,'s0','',0);
				addOption(p,'s1','Bota',1);
				addOption(p,'s2','Sapatilha',2);
			}else{
				addOption(p,'s1','Bota',1);
				addOption(p,'s2','Sapatilha',2);
			}
			
		}else if (option.text === "Roupa") {
			if (sec.length > 1) {
				remover(p);
				addOption(p,'r0','',0);
				addOption(p,'r1','Vestido',1);
				addOption(p,'r1','Camisa',2);
			}else{
				
				addOption(p,'r1','Vestido',1);
				addOption(p,'r1','Camisa',2);
				
			}

		}else{
			sec.disabled =true;
		}

	}else if (i ==2) {
		sec.disabled = false;
		if (option.text === "Bota") {

			if (sec.length > 1) {
				remover(p);
				addOption(p,'b0','',0)
				addOption(p,'b1','Moleca',1);
				addOption(p,'b2','Vizzano',2);
			}else{
				addOption(p,'b1','Moleca',1);
				addOption(p,'b2','Vizzano',2);
				
			}
			
		}else if (option.text === "Sapatilha") {
			if (sec.length > 1) {
				remover(p);
				addOption(p,'sa0','',0)
				addOption(p,'sa1','Moleca2',1);
				addOption(p,'sa2','Vizzano2',2);
			}else{
				addOption(p,'sa1','Moleca2',1);
				addOption(p,'sa2','Vizzano2',2);
				
			}
		}else if (option.text === "Vestido") {
			if (sec.length > 1) {
				remover(p);
				addOption(p,'v0','',0)
				addOption(p,'v1','Amaro1',1);
				addOption(p,'v2','Pool1',2);
			}else{
				
				addOption(p,'v1','Amaro1',1);
				addOption(p,'v2','Pool1',2);
				
			}
		}else if (option.text === "Camisa") {
			if (sec.length > 1) {
				remover(p);
				addOption(p,'ca0','',0)
				addOption(p,'ca1','Amaro2',1);
				addOption(p,'ca2','Pool2',2);
			}else{
				addOption(p,'ca1','Amaro12',1);
				addOption(p,'ca2','Pool2',2);
				
			}
		}else{
				sec.disabled =true;
			}

	}else{
		alert();
	}
	
} 

function valorPorMarcas(){
	var m = document.getElementById("marca");
	var option = m.options[m.selectedIndex];
	if (m.text === 'Moleca') {
		return [50,100,200,300]
	}else if(option.text === 'Moleca2'){
		return [100,20,200,400]
	}else if(option.text === 'Vizzano'){
		return [50,300,100,600]
	}else if(option.text === 'Vizzano2'){
		return [59,110,200,500]
	}else if(option.text === 'Amaro1'){
		return [50,100,300,300]
	}else if(option.text === 'Amaro2'){
		return [100,20,200,400]
	}else if(option.text === 'Pool2'){
		return [60,120,250,370]
	}else if(option.text === 'Pool2'){
		return [59,110,200,500]
	}
	else{
		return ['']
	}
}



function qualSelecionado(c){
	var r =0;
	if (c === 'categoria' ) {
		r = 1;
	}else if (c === 'produto') {
		r = 2;
	}
	return r;
}
function remover(p){
	var aux = document.getElementById(p);
	while(aux.length) {
    	aux.remove(0);
	}
}

function addOption(p,valor,texto,n){
	var next = document.getElementById(p);
	var elem = document.createElement('option')
		elem.value = valor;
		elem.text  = texto;
		next.add(elem,next.options[n]);

}




var cp = valorPorMarcas().slice();
var ctxB = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
	type: 'bar',
	data: {
		labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
		datasets: [{
			data: Object.keys(cp),
				backgroundColor: [
				'#58ACFA',
				'#58ACFA',
				'#58ACFA',
				'#58ACFA'
				],
				borderWidth: 1,
				label: 'Vendas'
				}]
				},
				options: {
					title:{
						display: true,
						text: 'Vendidos por mês'
					},
					scales: {
						yAxes: [{
							ticks: {
								beginAtZero: true
							},
							scaleLabel: {
							labelString: 'Vendas',
							display: true
							}
						}],

						xAxes: [{
							ticks: {
								beginAtZero: true
							},
							scaleLabel: {
							labelString: 'Meses',
							display: true
							}
						}]
					}
				
	}
});