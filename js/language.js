var arrLang = {
      'en': {
        'dataGenkiPool': 'Data GenkiPool',
        'rewards': 'Rewards',
        'guide': 'Delegation Guide',
        'service': 'Service',
        'community': 'Community',
        'contact': 'Contact',
        'info': 'More Info',
        'Specifications': 'Specifications',
        'power': 'His Power Is Over 9000!',
        'Radix': 'Delegate with Radix wallet.',
        'download': 'Download',
        'downloadD': 'Download Radix',
        'blockchain': 'Radix Blockchain Explorer.',
        'explorer': 'Explorer',
        'specifications': 'SPECIFICATIONS (GENKI)',
        'rewardG': 'Rewards With GenkiPool',
        'guideD': 'DELEGATION GUIDE',
        'search': 'CLICK STAKE UNSTAKE',
        'selectG': 'ENTER VALIDATE ID',
        'selectW': 'Select Wallet',
        'checkG': 'Check GENKIPOOL',
        'enterP': 'Enter Password',
        'serviceD': 'SERVICE',
        'textService': 'The network infrastructure is made up of three servers, a first server is located in Nuremberg and acts as a validator, the second server is located in Tuusula and acts as a full node that in turn allows a failover in case the validator node All nodes are monitored (third server) 24 hours a day with Grafana, Prometheus, Loki and with sending of alarms by Telegram. Backup is done eventually and before each update.',
        'communityPa': 'Join the community and help to publicize GENKIPOOL by sharing your own images and advertising GENKIPOOL on social networks, ',
        'communityPa2': 'the best images will be published on the web and on social networks, together we will be stronger and we will get more rewards.',
        'contactMe': 'Contact Me',
        'perfil': 'Hi, my name is Luis, I have 8 years of experience as a network administrator and Network Security Assessment, I also have advanced knowledge in Linux and I know how to program in various languages, especially in bash and python.'
      },
      'es': {
        'dataGenkiPool': 'Datos GenkiPool',
        'rewards': 'Recompensas',
        'guide': 'Delegar',
        'service': 'Servicio',
        'community': 'Comunidad',
        'contact': 'Contacto',
        'info': 'Más Información',
        'Specifications': 'Especificaciones',
        'power': 'Su poder es más de 9000!',
        'Radix': 'Delega con Radix.',
        'download': 'Descargar',
        'downloadD': 'Descargar Radix',
        'blockchain': 'Explorar Blockchain Radix.',
        'explorer': 'Explorar',
        'specifications': 'ESPECIFICACIONES (GENKI)',  
        'rewardG': 'Recompensas Con GenkiPool',
        'guideD': 'COMO DELEGAR',
        'search': 'CLICK STAKE UNSTAKE',
        'selectG': 'INTRODUCE VALIDATE ID',
        'selectW': 'Seleccionar Billetera',
        'checkG': 'Verificar GENKIPOOL',
        'enterP': 'Introducir Password',
        'serviceD': 'SERVICIO',
        'textService': 'La infraestructura de red esta formada por tres servidores, un primer servidor se encuentra en Nuremberg y actua como validador, el segundo servidor se encuentra en Tuusula y actua como un nodo completo que a su vez permite realizar un failover en caso de que el nodo validador falle.Todos los nodos son monitoreados (tercer servidor) las 24 horas del día con Grafana, Prometheus, Loki y con envío de alarmas por Telegram. Se realiza backup eventualmente y antes de cada actualización.',
        'communityPa': 'Únete a la comunidad y ayuda a dar a conocer a GENKIPOOL compartiendo tus propias imágenes y publicitando GENKIPOOL en las redes sociales, ',
        'communityPa2': 'las mejores imágenes serán publicadas en la web y en las redes sociales, juntos seremos más fuertes y obtendremos más recompensas.',
        'contactMe': 'Contactame',
        'perfil': 'Hola, mi nombre es Luis, tengo 8 años de experiencia como administrador de redes y como auditor de seguridad de redes informaticas, también tengo conocimientos avanzados en Linux y sé programar en varios lenguajes, especialmente en bash y python.'
        
      }
};

    // Process translation

$(function() {
     $(document).on('change', '#select', function() {  
     	var lang = $(this).children(":selected").attr("id");
        $('.lang').each(function(index, item) {
        	$(this).text(arrLang[lang][$(this).attr('key')]);
        });
      
	if(document.getElementById('Pastake')){
		var element = document.getElementById("Pastake");
		element.parentNode.removeChild(element);
		var selectVal = $(this).children("option:selected").val();
		var Pa = document.createElement('p');
		var Strong = document.createElement('strong');
		var Strong2 = document.createElement('strong');
			
	}
		
	if(document.getElementById('PaReward')){
		var element = document.getElementById("PaReward");
		element.parentNode.removeChild(element);
		var selectVal = $(this).children("option:selected").val();
		var PaR = document.createElement('p');
		var StrongR = document.createElement('strong');
			
	}

	if(selectVal == 'English'){
		
		var TextPa = document.createTextNode("Stake in ");
		var TextStrong = document.createTextNode("GENKIPOOL ");
		var TextPa2 = document.createTextNode("to help Goku beat the ");
		var TextStrong2 = document.createTextNode("banking system.");	
		var TextPaR = document.createTextNode("Earn rewards in the XRD cryptocurrency by downloading the Radix wallet and choosing ");
		var TextPaR2 = document.createTextNode("GenkiPool ");
		var TextPaR3 = document.createTextNode("and 4 more validators that do not exceed 5% stake as your staking nodes.");

	} else {
		var TextPa = document.createTextNode("Delega en ");
		var TextStrong = document.createTextNode("GENKIPOOL ");
		var TextPa2 = document.createTextNode("para ayudar a Goku a vencer al ");
		var TextStrong2 = document.createTextNode("sistema bancario.");
		var TextPaR = document.createTextNode("Gane recompensas en la criptomoneda XRD descargando la billetera Radix y eligiendo a  ");
		var TextPaR2 = document.createTextNode("GenkiPool ");
		var TextPaR3 = document.createTextNode("y a otros 4 validadores más que no superen el 5% de stake como sus nodos de staking.");
				
	}
		
	Pa.appendChild(TextPa);   
	Pa.appendChild(Strong);
	Strong.appendChild(TextStrong);  
	Pa.appendChild(TextPa2);
	Pa.appendChild(Strong2);
	Strong2.appendChild(TextStrong2);
	Pa.setAttribute('id', 'Pastake');  
	Strong.setAttribute('class', 'theme-color');
	Strong2.setAttribute('class', 'theme-color');
						 
	var beforeElement = document.getElementById("separate"); 
		
	var elementParent = beforeElement.parentNode;
	elementParent.insertBefore(Pa, beforeElement.nextSibling);
		
		
	PaR.appendChild(TextPaR);   
	PaR.appendChild(StrongR);
	StrongR.appendChild(TextPaR2);  
	PaR.appendChild(TextPaR3);
	PaR.setAttribute('id', 'PaReward');  
		
						 
	var beforeElement = document.getElementById("titleReward"); 
	var elementParent = beforeElement.parentNode;
	elementParent.insertBefore(PaR, beforeElement.nextSibling);
     });

});












