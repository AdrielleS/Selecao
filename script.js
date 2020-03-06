
//função responsável por adicionar/atualizar os valores dos select produtos e marcas
// c - id do select selecionado
// p - id do select a ser modificado
function prox(c,p){
	// pega elemento a partir do id 
	var fi = document.getElementById(c);

	//pega a opção selecionada no select
	var option = fi.options[fi.selectedIndex];

	//gera a instância do proximo select
	var sec = document.getElementById(p);

	// qualSelecionado atribui o valor 1 ou 2 para informar se o select selecionado foi o de categoria ou produto 
	var i = qualSelecionado(c);

	// remove o que estiver dentro do select, evitando que ao mudar uma das opções de roupa para sapato (por exemplo)
	// as informações que estavam no select produto e marca, correspondentes a categoria roupa, não
	// permaneçam como opções quando o selecionado for sapato.
	
	remover(p);

	//verificação responsável pela inclusão dos valores como opção no select de produto e/ou marca
	// 1 - select categoria foi selecionado - opções de produtos deverão ser adicionadas
	if (i ==1) {
		
		if (option.text === "Sapato") {

			//se sapato foi selecionado produto recebe bota e sapatilha como opção
			//isso acontece com os outros
			//chama a função para adicionar a opção informando o (id do select, o value, o text, index)
			addOption(p,'s1','Bota',0);
			addOption(p,'s2','Sapatilha',1);
			
		}else if (option.text === "Roupa") {
			addOption(p,'r1','Vestido',0);
			addOption(p,'r1','Camisa',1);

		}
		// chama a própria função para da sequência a adição de valores (nesse caso no select de marca)
		prox(p,'marca')

		// 2 - select produto selecionado - opções de marcas deverão ser adicionadas
	}else if (i ==2) {
		
		if (option.text === "Bota") {

			addOption(p,'b1','Moleca',0);
			addOption(p,'b2','Vizzano',1);
			
		}else if (option.text === "Sapatilha") {

			addOption(p,'sa1','Moleca2',0);
			addOption(p,'sa2','Vizzano2',1);

		}else if (option.text === "Vestido") {

			addOption(p,'v1','Amaro1',0);
			addOption(p,'v2','Pool1',1);

		}else if (option.text === "Camisa") {
			addOption(p,'ca1','Amaro2',0);
			addOption(p,'ca2','Pool2',1);

		}
		

	}

	
} 


// responsável por atribuir os valores correspondentes as vendas feitas a partir de determinada marca
// (Que corresponde a uma categoria e produto especifico)
// ex:  Sapato Bota Moleca
function valorPorMarcas(){

	//pega o elemnto com id marca
	var m = document.getElementById("marca");
	//um objeto auxiliar
	var option = {};

	//verifica se houve uma seleção de opção no select, caso sim, ele recebe o objeto selecionado
	//caso não, ele recebe na "propriedade" text o valor correspondente a primeira opção de marca do sistema
	if(m.options[m.selectedIndex]){
		option = m.options[m.selectedIndex];
	}else {
		option.text = 'Amaro1';
	}

	//verificação de qual marca a opção se refere retornando um array com valores correspondentes as vendas realizadas
	if (option.text === 'Moleca') {
		return [300,50,100,200]
	}else if(option.text === 'Moleca2'){
		return [100,80,200,400]
	}else if(option.text === 'Vizzano'){
		return [50,600,300,100]
	}else if(option.text === 'Vizzano2'){
		return [59,110,500,200]
	}else if(option.text === 'Amaro1'){
		return [90,100,150,300]
	}else if(option.text === 'Amaro2'){
		return [400,100,20,200]
	}else if(option.text === 'Pool1'){
		return [60,120,250,370]
	}else if(option.text === 'Pool2'){
		return [59,110,200,500]
	}
	else{
		return ['']
	}
}


//função auxiliar que verifica qual select ta sendo utilizado 
// c - id do select
function qualSelecionado(c){
	var r =0;
	if (c === 'categoria' ) {
		r = 1;
	}else if (c === 'produto') {
		r = 2;
	}
	return r;
}

//remove os valores inseridos como opção do select
// p - id do select
function remover(p){
	var aux = document.getElementById(p);
	while(aux.length) {
    	aux.remove(0); // indice zero para poder ser capaz de apagar todas opções do select em questão
	}
}

//Adiciona opções no select
//recebe o (id do select, value,text,index)
function addOption(p,valor,texto,n){

	//pega o elemento com o id p
	var next = document.getElementById(p);

	//cria um elemento da tag option
	var elem = document.createElement('option')

	// o elemento option recebe nos campos value os valores utilizado na entrada da função
	elem.value = valor;
	elem.text  = texto;

	//adiciona no elemento select o elemento na options de index n
	next.add(elem,next.options[n]);

}

//gera o gráfico
function grafico(){
	//pega o valor gerado pela verificação da função para ser usado no data
	var cp = valorPorMarcas();

	//pega o elemento
	var ctxB = document.getElementById("barChart").getContext('2d');
	//criação do gráfico
	var myBarChart = new Chart(ctxB, {
		type: 'bar',
		data: {
			labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
			datasets: [{
				data: cp,
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

	
}


