var db = connect('127.0.0.1:27017/ProyectoCriaturas');

use ProyectoCriaturas;

db.criaturas.remove({});

db.criaturas.drop();

db.createCollection("criaturas",{autoIndexId: true});

db.criaturas.insert([{
	"_id":"a01",
	"nombre":"acromantula",	
	"clasificacion":"beast",
	"tipo":"aracnido",
	"alimentacion":["carnivoro"],
	"region":["island of borneo","south-east asia","asia"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"funcion":"proteger deposito de tesoros",
	"habitos":["viven en grander colonias", "comer los cuerpos de los otros miembros de la colonia cuando mueren"],
	"caracteristicas":[{
			apariencia:"mezcla entre araña y bestia",
			tamano:"15 pies",
			adiestrable:"no",
			venenosa:"si",
			mordida:"envenenamiento",		
			color:"negro"
			}],
	"otros":[{
			lengua:"humano"
			}]
},
{
	"_id":"a02",
	"nombre":"ashwinder",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["global"],
	"designacion":"XXX",
	"reproduccion":"oviparo",
	"tiempo_de_vida":0.001,
	"habitos":["colocan sus huevos en esquinas oscuras"],
	"caracteristicas":[{
			apariencia:"de serpiente delgada",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",		
			color:"gris"
			}],
	"otros":[{
			lengua:"parseltongue"
			}]
				
},
{
	"_id":"a03",
	"nombre":"augurey",
	"nombre_original":"irish phoenix",
	"clasificacion":"beast",
	"tipo":"ave",
	"alimentacion":["insectos","hadas","moscas"],
	"region":["great britain","ireland","northern europe","europe"],
	"designacion":"XX",
	"reproduccion":"oviparo",
	"funcion":"pronostico del tiempo",
	"habitos":["timido","canta cuando va a llover"],
	"caracteristicas":[{
			apariencia:"ave delgada con apariencia macabra",		
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"negro"		
			}],
	"otros":[{
			habilidades_unicas:["predecir el clima"]		
			}]
	
},
{
	"_id":"a04",
	"nombre":"bandicoot",
	"clasificacion":"beast",
	"tipo":"bestia",
	"designacion":"non-magical",
	"region":["australia","oceania"],
	"habitos":["emite un sonido distintivo al agitarse"],
	"caracteristicas":[{
			apariencia:"roedor pequeño con orejas puntiagudas y hocico alargado",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"marron"
			}]
},
{
	"_id":"a05",
	"nombre":"basilisk",
	"nombre_original":"king of serpents",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["vertebras de animales"],
	"region":["global"],
	"designacion":"XXXXX",
	"reproduccion":"huevos de gallina colocados debajo de un sapo",
	"tiempo_de_vida":10800,
	"caracteristicas":[{
			apariencia:"serpiente enorme",
			tamano:"50 pies",
			adiestrable:"no",
			venenosa:"si",
			mordida:"muerte despues de pocos minutos",					
			color:"verde"
			}],
	"otros":[{
			lengua:"parseltongue",
			habilidades_unicas:["ojos que matan instantaneamente al que los mira", "piel que refleja hechizos"]
			}]
	
},
{
	"_id":"a06",
	"nombre":"bat",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["insectos","frutas"],
	"region":["global"],
	"reproduccion":"mamifero",
	"caracteristicas":[{
			apariencia:"murcielago pequeño",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}]
	
},
{
	"_id":"a07",
	"nombre":"bicorn",
	"nombre_original":"bihorn",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["esposos de corazon amable y devotos"],
	"reproduccion":"mamifero",
	"caracteristicas":[{
			apariencia:"parecidos a las vacas, con 2 cuernos"
			}]
},
{
	"_id":"a08",
	"nombre":"billywig",
	"clasificacion":"beast",
	"tipo":"insecto",
	"region":["australia"],
	"designacion":"XXX",
	"caracteristicas":[{
			apariencia:"insecto volador de color vivido",
			tamano:"0.5 pulgadas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"mareo y levitacion",
			color:"azul"
			}],
	"otros":[{
			"habilidades_unicas":["muy veloz"]
	}]
	
},
{
	"_id":"a09",
	"nombre":"blast-ended skrewt",
	"nombre_original":"bang-ended scoots",
	"clasificacion":"beast",
	"tipo":"criatura",
	"region":["hogwarts castle"],
	"habitos":"matarse entre ellos",
	"caracteristicas":[{
			apariencia:"mezcla entre maticore y fire crab",
			tamano:"10 pies",
			adiestrable:"si",
			olor:"pescado podrido",
			color:"palido"
			}],
	"otros":[{			
			habilidades_unicas:["armadura gris y brillante que refleja hechizos"]
	}]
	
},
{
	"_id":"a10",
	"nombre":"bowtruckle",
	"clasificacion":"beast",
	"tipo":"planta",
	"alimentacion":["insectos"],
	"region":["england","germany","scandinavia","europe"],
	"designacion":"XX",
	"caracteristicas":[{
			apariencia:"planta pequeña con dedos largos y afilados",
			tamano:"8 pulgadas",
			color:"verde"
			}]	
},
{
	"_id":"a11",
	"nombre":"bundimun",
	"clasificacion":"beast",
	"tipo":"planta",
	"alimentacion":["tierra"],
	"region":["global"],
	"designacion":"XXX",
	"caracteristicas":[{
			apariencia:"hongos verdes con ojos",
			olor:"putrefacto",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:["secreciones pudren edificios"]
	}]
	
},
{
	"_id":"a12",
	"nombre":"centaur",
	"clasificacion":"beast",
	"tipo":"humanoide",
	"region":["bosques"],
	"designacion":"XXXX",
	"reproduccion":"mamifero",
	"habitos":["territorial","sentido del honor"],
	"caracteristicas":[{
			apariencia:"criatura magica cuya cabeza, torso y brazos parecen ser humanos, combinados con el cuerpo de un caballo",
			tamano:"7 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			lengua:"humano",
			habilidades_unicas:["predecir el futuro","magia curativa","arqueria","astronomia"]
	}]
	
},
{
	"_id":"a13",
	"nombre":"chicken",
	"nombre_original":"rooster",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["alpiste"],
	"region":["global"],
	"designacion":"non-magical",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"ave con alas, no puede volar",
			tamano:"varia",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}]
},
{
	"_id":"a14",
	"nombre":"chimaera",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["greece","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"animal con sed de sangre con cabeza de leon, cuerpo de cabra y cola de dragon",
			tamano:"large",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}]
	
},
{
	"_id":"a15",
	"nombre":"chizpurfle",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["magia"],
	"region":["global"],
	"designacion":"XX",
	"habitos":["atacan objetos magicos como varitas y calderos", "a falta de objetos magicos, atacan items Muggle que usan electricidad"],
	"caracteristicas":[{
			apariencia:"parasito muy pequeño parecido a un cangrejo",
			tamano:"1/21 pulgadas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}]

},
{
	"_id":"a16",
	"nombre":"clabbert",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["pequeños lagartos","aves"],
	"region":["global"],
	"designacion":"XX",
	"caracteristicas":[{
			apariencia:"criatura que parece una mexcla entre una rana y un mono",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:"alerta cuando se acercan los muggles",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}]
	
},
{
	"_id":"a17",
	"nombre":"cockatrice",
	"clasificacion":"beast",
	"tipo":"bestia",
	"caracteristicas":[{
			apariencia:"criatura magica parecia a un gallo con cola de lagarto"
			}]
},
{
	"_id":"a18",
	"nombre":"crup",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["casi todo"],
	"region":["england","europe"],
	"designacion":"XXX",
	"reproduccion":"mamifero",
	"habitos":["leales a magos","feroces hacia muggles"],
	"caracteristicas":[{
			apariencia:"perro parecido a un jack russell terrier con la cola separada",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}]
	
},
{
	"_id":"a19",
	"nombre":"demiguise",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["plantas"],
	"region":["far east"],
	"designacion":"XXXX",
	"caracteristicas":[{
			apariencia:"criatura pacifica parecida a un mono con ojos negros grandes y pelo largo y sedoso",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			habilidades_unicas:["invisibilidad","ver el futuro"]
	}]
	
},
{
	"_id":"a20",
	"nombre":"diricawl",
	"nombre_original":"dodo",
	"clasificacion":"beast",
	"tipo":"ave",
	"region":["mauritius","africa"],
	"designacion":"XX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"ave de forma redonda, con plumas esponjosas sin capacidad de volar",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			habilidades_unicas:["desaparecer y aparecer en otro lugar"]
	}]
	
},
{
	"_id":"a21",
	"nombre":"dog",
	"nombre_original":"hound",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["global"],
	"designacion":"non-magical",
	"reproduccion":"mamifero",
	"caracteristicas":[{
			apariencia:"parecidos a un lobo",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}]
	
},
{
	"_id":"a22",
	"nombre":"doxy",
	"nombre_original":"biting fairy",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["europe","north america"],
	"designacion":"XXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"criatura pequeña, parecida a un hada",
			adiestrable:"no",
			venenosa:"si",
			mordida:"venenosa",
			color:"negro"
			}]
	
},
{
	"_id":"a23",
	"nombre":"antipodean opaleye",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["ovejas","canguros","animales grandes"],
	"region":["new zealand","australia"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"considerado el dragon mas hermoso, con escamas de perla y ojos brillantes multi-color",
			tamano:"40 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"perla"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a24",
	"nombre":"catalonian fireball",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["catalonia","spain","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"dragon con 2 cuernos en la cabeza y un hocico con forma extraña",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a25",
	"nombre":"chinese fireball",
	"nombre_original":"liondragon",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["mamiferos","cerdos","humanos"],
	"region":["china","asia"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["agresivo"],
	"caracteristicas":[{
			apariencia:"dragon escalarta con piel suave y spikes dorados alrededor de su cara con ojos extremadamente protuberantes",
			tamano:"25 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"escarlata"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego en forma de hongo","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a26",
	"nombre":"common welsh green",
	"nombre_original":"welsh green",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["ovejas","mamiferos"],
	"region":["wales", "europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["evitar contacto humano"],
	"caracteristicas":[{
			apariencia:"dragon de color verde con dos cuernos puntiagudos en el tope de su cabeza",
			tamano:"18 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a27",
	"nombre":"hebridean black",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["ciervo","vacas"],
	"region":["hebrides islands","scotland","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["agresivo"],
	"caracteristicas":[{
			apariencia:"dragon con escamas oscuras y duras, con una cola con una punta en forma de flecha",
			tamano:"30 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"oscuro"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a28",
	"nombre":"hungarian horntail",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["ovejas","cabras","humanos"],
	"region":["hungary","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["agresivo"],
	"caracteristicas":[{
			apariencia:"dragon con escamas negras y apariencias parecida a un lagarto. tiene ojos amarillos y cuernos bronce",
			tamano:"50 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"negro"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a29",
	"nombre":"norwegian ridgeback",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["mamiferos"],
	"region":["norway","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"dragon parecido a un hungarian horntail, excepto por los border negros en su espalda y texturas negras en sus escamas",
			tamano:"35 pies",
			adiestrable:"no",
			venenosa:"si",
			mordida:"venenosa",
			color:"marron"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a30",
	"nombre":"peruvian vipertooth",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["cabras","vacas","humanos"],
	"region":["peru","south america","america"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"dragon cuyas escamas son suaves y de color cobre, tiene cuernos pequeños en su cabeza",
			tamano:"15 pies",
			adiestrable:"no",
			venenosa:"si",
			mordida:"venenosa",
			color:"cobre"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a31",
	"nombre":"portuguese long-snout",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["geres","portugal","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"dragon algo parecido al catalonian fireball, con un cuello puntiagudo y piel escamosa pero con un hocico mas grande y cuernos mas puntiagudos",
			tamano:"20 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a32",
	"nombre":"romanian longhorn",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["romania","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["desollar sus presas con los cuernos antes de rostizarlos"],
	"caracteristicas":[{
			apariencia:"dragon con escamas verde oscuro y dos cuernos largos dorados",
			tamano:"40 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a33",
	"nombre":"swedish short-snout",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["sweden","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["prefiere vivir en areas inhabitadas"],
	"caracteristicas":[{
			apariencia:"dragon con escamas azul plata y una flama de color azul",
			tamano:"22 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"azul"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego azul","volar","piel que resiste hechizos"]
			
			}]
	
},
{
	"_id":"a34",
	"nombre":"dragon",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["mamiferos"],
	"region":["global"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"habitos":["altamente agresivo"],
	"caracteristicas":[{
			apariencia:"reptil gigante con alas que respita fuego",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			habilidades_unicas:["respirar fuego azul","volar","piel que resiste hechizos"]
			}]
	
},
{
	"_id":"a35",
	"nombre":"ukrainian ironbelly",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["ukraine","europe"],
	"designacion":"XXXXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"dragon bipedo, de color gris metalico con alas inmensas, talones largos y escamas tan duras como el acero",
			tamano:"60 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"gris"
			}],
	"otros":[{
			habilidades_unicas:["dragon mas grande existente","respirar fuego","volar","piel que resiste hechizos"]
			
	}]
	
},
{
	"_id":"a36",
	"nombre":"dugbog",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["animales pequeños","mandrake"],
	"region":["america","north america","south america", "europe"],
	"designacion":"XXX",
	"habitos":["merodear pantanos"],
	"caracteristicas":[{
			apariencia:"criatura habita pantanos paerico a un pedazo de tronco muerto cuando no se mueve",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"marron"
			}]
},
{
	"_id":"a37",
	"nombre":"erkling",
	"clasificacion":"beast",
	"tipo":"duende",
	"alimentacion":["niños"],
	"region":["black forest","bavaria","germany","europe"],
	"designacion":"XXXX",
	"habitos":["disparar dardos a sus victimas"],
	"caracteristicas":[{
			apariencia:"criatura elfica con cara puntiaguda mas altos que los gnomos",
			tamano:"3 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			lengua:"humano",
			habilidades_unicas:["sonido agudo que trae a los niños"]
			
	}]
	
},
{
	"_id":"a38",
	"nombre":"erumpent",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["africa"],
	"designacion":"XXXX",
	"reproduccion":"mamifero",
	"habitos":["no ataca a menos que se provoque"],
	"caracteristicas":[{
			apariencia:"bestia enorme parecida a un rinoceronte",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			habilidades_unicas:["piel gruesa capaz de repeler maldiciones y encantos","cuerno puede atravesar piel y metal", "machos explotan al reproducirse"]
			
	}]
	
},
{
	"_id":"a39",
	"nombre":"fairy",
	"clasificacion":"beast",
	"tipo":"humanoide",
	"region":["global"],
	"designacion":"XX",
	"reproduccion":"oviparo",
	"habitos":["vanidoso"],
	"caracteristicas":[{
			apariencia:"criatura pequeña parecida a un humano con alas parecidas a las de un insecto",
			tamano:"5 pulgadas",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}]	
},
{
	"_id":"a40",
	"nombre":"fire crab",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["fiji","oceania"],
	"designacion":"XXX",
	"caracteristicas":[{
			apariencia:"es una criatura cangrjo parecida a una tortuga, tiene 6 patas y un caparazon lleno de joyas con diferentes colores",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"gris"
			}],
	"otros":[{
			habilidades_unicas:["dispara llamas por su parte trasera"]
			
	}]
	
},
{
	"_id":"a41",
	"nombre":"flesh-eating slug",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["great britain","europe"],
	"caracteristicas":[{
			apariencia:"criatura magica muy similar a un caracol comun",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			habilidades_unicas:["baba tiene efecto corrosivo"]
			
	}]
	
},
{
	"_id":"a42",
	"nombre":"flitterby",
	"clasificacion":"beast",
	"tipo":"insecto",
	"region":["scotland","great britain","europe"],
	"habitos":["tararean al volar"],
	"caracteristicas":[{
			apariencia:"tienen alas brillantes de color naranja",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"naranja"
			}]
	
},
{
	"_id":"a43",
	"nombre":"flobberworm",
	"clasificacion":"beast",
	"tipo":"insecto",
	"alimentacion":["plantas", "lechugas","repollo"],
	"designacion":"X",
	"tiempo_de_vida":0.001,
	"habitos":["hacer nada"],
	"caracteristicas":[{
			apariencia:"gusano pequeño, sin dientes y marrón",
			tamano:"10 pulgadas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"marron"
			}]
},
{
	"_id":"a44",
	"nombre":"flying seahorses",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["scotland","black lake","europe"],
	"caracteristicas":[{
			apariencia:"parecidos a los caballos de mar regulares",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"amarillo"
			}],
	"otros":[{
			habilidades_unicas:["volar"]
			
	}]
	
},
{
	"_id":"a45",
	"nombre":"fwooper",
	"clasificacion":"beast",
	"tipo":"ave",
	"region":["africa"],
	"designacion":"XXX",
	"caracteristicas":[{
			apariencia:"ave con plumas muy brillantes",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			habilidades_unicas:["generan sonidos que vuelven loco a las personas"]
			
	}]
	
},
{
	"_id":"a46",
	"nombre":"ghoul",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["insectos"],
	"designacion":"XX",
	"caracteristicas":[{
			apariencia:"criatura fea que parece un ogro",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}]
	
},
{
	"_id":"a47",
	"nombre":"chameleon ghoul",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["insectos"],
	"designacion":"XX",
	"caracteristicas":[{
			apariencia:"criatura fea que parece un ogro",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			habilidades_unicas:["disfrazarse como cualquier objeto"]
			
	}]
	
},
{
	"_id":"a48",
	"nombre":"dung beetle",
	"clasificacion":"beast",
	"tipo":"insecto",
	"region":["egypt","africa"],
	"caracteristicas":[{
			apariencia:"escarabajo conocido por estar compuesto parcialmente por materia fecal",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}]		
},
{
	"_id":"a49",
	"nombre":"giant squid",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["black lake","scotland","europe"],
	"caracteristicas":[{
			apariencia:"enorme con muchos tentaculos",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}]
	
	
},
{
	"_id":"a50",
	"nombre":"glumbumble",
	"clasificacion":"beast",
	"tipo":"insecto",
	"region":["northern europe","europe"],
	"designacion":"XXX",
	"caracteristicas":[{
			apariencia:"insecto volador, peludo y gris",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"gris"
			}]
			
	
},
{
	"_id":"a51",
	"nombre":"gnome",
	"nombre_original":"garden gnome",
	"clasificacion":"beast",
	"tipo":"duende",
	"alimentacion":["plantas","raices","gusanos"],
	"region":["northern europe","north america","america","europe"],
	"designacion":"XX",
	"caracteristicas":[{
			apariencia:"criatura magica con apariencia humanoide de color marrón, con cabezas muy grandes",
			tamano:"1 pie",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"marron"
			}],
	"otros":[{
			lengua:"humano"
					
			}]
	
},
{
	"_id":"a52",
	"nombre":"golden snidget",
	"clasificacion":"beast",
	"tipo":"ave",
	"designacion":"XXXX",
	"caracteristicas":[{
			apariencia:"ave dorada pequeña con alas que rotan",
			tamano:"1 pulgada",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"amarillo"
			}],
	"otros":[{
			otro:"tiene una clasificacion XXXX no por ser peligroso, sino para evitar que sea capturado por los magos, ya que esta protegido por estar en peligro de extincion"			
	}]
	
},
{
	"_id":"b01",
	"nombre":"aquavirius maggot",
	"tipo":"mitico",
	"caracteristicas":[{
			apariencia:"criatura que supuestamente parece un cerebro",
			color:"palido"
			}],
	"otros":[{
			otro:"critura mitica, no se sabe si de verdad existe o existio, nombrado por Luna Lovegood"
			}]
	
},
{
	"_id":"b02",
	"nombre":"harpy",
	"tipo":"mitico",
	"caracteristicas":[{
			apariencia:"criatura de la mitologia romana y griega, representada como un monstruo con forma de ave y cara de humano"
			}],
	"otros":[{
			otro:"criatura mitica, no se sabe si de verdad existe o existio, un equipo de quidditch toma su nombre The Holyhead Harpies"}]
	
},
{
	"_id":"b03",
	"nombre":"fire slug",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["brazil","south america","america"],
	"caracteristicas":[{
		apariencia:"criatura magica muy similar a un caracol comun pero con fuego",
		adiestrable:"no",
		venenosa:"no",
		mordida:"ninguna"
	}],
	"otros":[{
		habilidades_unicas:["baba tiene efecto corrosivo"]
	}]
},
{
	"_id":"b04",
	"nombre":"blibbering humdinger",
	"tipo":"mitico",
	"otros":[{
			otro:"criatura mitica, no se sabe si de verdad existe o existio, nombrado por Luna Lovegood"
			}]
	
},
{
	"_id":"b05",
	"nombre":"crumple-horned snorkack",
	"nombre_original":"kacky snorgle",
	"tipo":"mitico",
	"region":["sweden","europe"],
	"caracteristicas":[{
			apariencia:"criatura mitica con cuerno"
			}],
	"otros":[{
			otro:"criatura mitica, no se sabe si de verdad existe o existio, nombrado por Luna Lovegood"
			}]
	
},
{
"_id": "a53",
	"nombre": "graphorn",
	"clasificacion":"beast",
	"tipo": "bestia",
	"region":["europe"],
	"designacion":"XXXX",
	"funcion":"utilizados como soportes por lo Trolls de montaña",
	"habitos": ["se encuentran principalmente en las montañas","usa los tentáculos de su boca para agarrar comida y llevarsela a su boca"],
	"caracteristicas": [{
						apariencia:"grande y jorobado, tiene 2 cuernos dorados y camina en 4 patas. Su boca tiene una especie de tentáculos",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						propiedades:["sus cuernos son utilizados para hacer pociones"],
						color:"gris"			
						}],
	"otros":[{
		habilidades_unicas:["sus tentáculos los usa para mostrar afecto"]
	}]
}])

db.criaturas.insert([{
	"_id":"a54",
	"nombre":"griffin",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["carne cruda"],
	"region":["greece","europe"],
	"designacion":"XXXX",
	"funcion":"utilizados para proteger tesoros",
	"habitos":["grandes depredadores en su hábitat natural"],
	"caracteristicas":[{
			apariencia:"patas delanteras, alas y cabeza de un águila, y el cuerpo, patas traseras y la cola de un león",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna"
			}]	
},
{
	"_id":"a55",
	"nombre":"grindylow",
	"clasificacion":"beast",
	"tipo":"demonio",
	"alimentacion":["algas","peces","humanos"],
	"region":["great britain","ireland","europe"],
	"designacion":"XX",
	"habitos":["agresivos hacia las brujas,brujos y muggles","utilizados como mascotas por Merpeople"],
	"caracteristicas":[{
			apariencia:"dientes verdes, cuernos pequeños y dedos largos y delgados",
			"tamano":"5 pies",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}]
},
{
	"_id":"a56",
	"nombre":"hidebehind",
	"clasificacion":"beast",
	"tipo":"humanoide",
	"alimentacion":["humanos"],
	"region":["unite states of america","america","north america"],
	"designacion":"XXXX",
	"habitos":["cambio de forma","cazadores de humanos"],
	"caracteristicas":[{
			apariencia:"parecido a un oso flaco",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"plateado"
			}]	
},
{
	"_id":"a57",
	"nombre":"hippocampus",
	"nombre_original":"proviene de las palabras 'hippos' y 'kampos'",
	"clasificacion":"beast",
	"tipo":"criatura",
	"region":["greece","mediterrean sea","europe"],
	"designacion":"XXX",
	"reproduccion":"oviparo",
	"caracteristicas":[{
			apariencia:"cabeza de caballo con cuerpo de pez gigante",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"azul"
			}]	
},
{
	"_id":"a58",
	"nombre":"hippogriff",
	"nombre_original":"proviene de las palabras 'hippos' y 'griffin'",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["insectos","pájaros","mamíferos pequeños","lombrices"],
	"region":["europe"],
	"designacion":"XXX",
	"reproduccion":"oviparo",
	"funcion":"pueden ser usados como transporte, aunque es ilegal",
	"habitos":["construyen nidos en el suelo donde colocan un solo huevo","dan zarpazos al suelo en busca de lombrices"],
	"caracteristicas":[{
			apariencia:"la cabeza, las alas y las garras delanteras de un águila gigante y el cuerpo, patas traseras y cola de caballo",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}]	
},
{
	"_id":"a59",
	"nombre":"hoo-hoo",
	"clasificacion":"beast",
	"tipo":"ave",
	"region":["japan","asia"]	
},
{
	"_id":"a60",
	"nombre":"horklump",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["lombrices de tierra"],
	"region":["scandinavia","northern europe","scotland","europe"],
	"designacion":"X",
	"funcion":"utilizados como comida por los gnomos",
	"habitos":["propagan sus raíces por todo el subsuelo"],
	"caracteristicas":[{
			apariencia:"se asemejan a hongos rosados ??carnosos cubiertos en una dispersión escasa de cerdas negras gruesas",
			propiedades:["curativas","despertar de sueños mágicos","herbicida"],
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"rosado"
			}]
},
{
	"_id":"a61",
	"nombre":"horned serpent",
	"clasificacion":"beast",
	"tipo":"criatura",
	"region":["united states of america","america","north america"],
	"designacion":"XXXXX",
	"caracteristicas":[{
			apariencia:"parecido a una serpiente gigante",
			adiestrable:"no",
			mordida:"ninguna",
			propiedades:["sus cuernos son utilizados para hacer varitas mágicas"],
			venenosa:"si"
			}]
},
{
	"_id":"a62",
	"nombre":"imp",
	"clasificacion":"beast",
	"tipo":"duende",
	"alimentacion":["insectos"],
	"region":["britain","ireland","europe"],
	"designacion":"XX",
	"habitos":["no presentan amenaza alguna si no son molestados","les gusta hacerle bromas a la gente que pase cerca de ellos"],
	"caracteristicas":[{
			apariencia:"parecidos a un pequeño duende",
			"tamano":"6 pulgadas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"gris"
			}]	
},
{
	"_id":"a63",
	"nombre":"jarvey",
	"nombre_original":"talking ferret",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["moles","voles","ratas","gnomos"],
	"region":["great britain","ireland","north america","america","europe"],
	"designacion":"XXX",
	"funcion":"utilizados para eliminar plagas de gnomos",
	"habitos":["vive bajo el suelo","buenos cazando gnomos"],
	"caracteristicas":[{
			apariencia:"parecido a un gran hurón",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			lengua:"humano"
			}]	
},
{
	"_id":"a64",
	"nombre":"jobberknoll",
	"clasificacion":"beast",
	"tipo":"ave",
	"alimentacion":["insectos"],
	"region":["northern europe","north america","europe","america"],
	"designacion":"XX",
	"reproduccion":"oviparo",
	"funcion":"sus plumas son usadas para crear truth serums y memory potions",
	"habitos":["no hace ningún sonido"],
	"caracteristicas":[{
			apariencia:"ave pequeña",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"azul"
			}],
	"otros":[{
			habilidades_unicas:["al morir suelta un grito largo que consiste en todos los sonidos que ha escuchado pero pronunciados al reves"]
			}]
},
{
	"_id":"a65",
	"nombre":"kappa",
	"clasificacion":"beast",
	"tipo":"demonio",
	"alimentacion":["sangre humana"],
	"region":["japan","asia"],
	"designacion":"XXXX",
	"habitos":["viven en aguas poco profundas"],
	"caracteristicas":[{
			apariencia:"parecida a un mono cubierto de escamas con las manos palmeadas y una depresión llena de agua en la parte superior de su cabeza",
			"tamano":"1.30 metros",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			habilidades_unicas:["no atacan a las personas si se lanza un pepino con el nombre de la persona"]
			}]
	
},
{
	"_id":"a66",
	"nombre":"kelpie",
	"clasificacion":"beast",
	"tipo":"demonio",
	"alimentacion":["humanos"],
	"region":["great britain","ireland","europe"],
	"designacion":"XXXX",
	"habitos":["cambiar de forma","Seduce a los incautos para que lo monten y, después, los lleva directamente al fondo del rio o del lago, donde los devora y deja que las vísceras floten hasta la superficie"],
	"caracteristicas":[{
			apariencia:"frecuentemente aparece como un caballo con crines de junco",
			adiestrable:"no",
			venenosa:"no",
			propiedades:["su cabello es utilizado en la creación de varitas"],
			mordida:"ninguna"
			}]	
},
{
	"_id":"a67",
	"nombre":"knarl",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["flores"],
	"region":["northern europe","north america","america","europe"],
	"designacion":"XXX",
	"habitos":["si se le deja comida piensan que es una trampa y atacan a la persona que lo hizo"],
	"caracteristicas":[{
			apariencia:"parecido a un puercoespín",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["sus púas tienen usos mágicos"],
			color:"marron"
			}]
},
{
	"_id":"a68",
	"nombre":"kneazle",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["global"],
	"designacion":"XXX",
	"reproduccion":"mamifero",
	"funcion":"son excelentes mascotas",
	"habitos":["independiente","agresivo"],
	"caracteristicas":[{
			apariencia:"pelaje moteado, sus orejas y cola son como las de un león",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			habilidades_unicas:["detectar y desconfiar de personas sospechosas","pueden guiar a sus dueños a casa con seguridad"]
			}]
	
},
{
	"_id":"a69",
	"nombre":"leprechaun",
	"nombre_original":"clauricorn",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["vegetación"],
	"region":["ireland","europe"],
	"designacion":"XXX",
	"habitos":["viven en los bosques y zonas boscosas","disfrutan atraer a los Muggles a sí mismos"],
	"caracteristicas":[{
			apariencia:"parecido a un duende",
			"tamano":"6 pulgadas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:[" tienen la capacidad de crear oro que desaparece"]
			}]
	
},
{
	"_id":"a70",
	"nombre":"lethifold",
	"nombre_original":"'lethum', que en latín significa 'muerte, destrucción, ruina', y 'doblar', que se refiere al aspecto de capa de la criatura.",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["humanos"],
	"region":["tropical"],
	"designacion":"XXXXX",
	"habitos":["se desliza por el suelo en una forma desconocida","ataca a sus presas de noche","digiere y ahoga a sus víctimas"],
	"caracteristicas":[{
			apariencia:"se asemeja al de un manto negro",
			adiestrable:"no",
			mordida:"ninguna",
			venenosa:"no",
			color:"negro"
			}]
},
{
	"_id":"a71",
	"nombre":"lobalug",
	"clasificacion":"beast",
	"tipo":"criatura",
	"region":["north sea"],
	"designacion":"XXX",
	"funcion":"es utilizado por la Merpeople como arma",
	"caracteristicas":[{
			apariencia:"caño de goma y un saco de veneno",
			"tamano":"10 pulgadas",
			adiestrable:"no",
			venenosa:"si",
			mordida:"ninguna",
			propiedades:["veneno usado en pociones"]
			}]	
},
{
	"_id":"a72",
	"nombre":"Mackled Malaclaw",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["crustáceos"],
	"region":["europe"],
	"designacion":"XXX",
	"funcion":"su cola es usada en pociones",
	"habitos":["vive a lo largo de las costas rocosas"],
	"caracteristicas":[{
			apariencia:"parecido a una langosta",
			"tamano":"12 pulgadas",
			adiestrable:"no",
			venenosa:"si",
			mordida:"hace que la víctima tenga mala suerte por una semana",
			color:"gris"
			}],
	"otros":[{
			habilidades_unicas:["nunca debe comerse, ya que su carne no es apta para el consumo humano y puede producir fiebre alta y una erupción verdosa de aspecto desagradable"]
			}]
	
},
{
	"_id":"a73",
	"nombre":"Manticore",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["humanos"],
	"region":["greece","europe"],
	"designacion":"XXXXX",
	"habitos":["canta suavemente mientras se devora los cuerpos de sus vítimas"],
	"caracteristicas":[{
			apariencia:"cabeza humanoide, cuerpo de león y una cola de escorpión",
			adiestrable:"no",
			venenosa:"si",
			mordida:"muerte instantánea"
			}],
	"otros":[{
			lengua:"humano"
			}]
	
},
{
	"_id":"a74",
	"nombre":"merpeople",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["global"],
	"designacion":"XXXX",
	"habitos":["viven bajo el agua"],
	"caracteristicas":[{
			apariencia:"mitad humana, mitad pez",
			"tamano":"6 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"gris"
			}],
	"otros":[{
			lengua:"Mermish",
			habilidades_unicas:["pueden crear música","son seres con cierta inteligencia"]
			}]
	
},
{
	"_id":"a75",
	"nombre":"merrow",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["ireland","europe"],
	"designacion":"XXXX",
	"caracteristicas":[{
			apariencia:"parecida a los merpeople, pero un poco mas feos",
			adiestrable:"no",			
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			lengua:"Mermish"
			}]	
},
{
	"_id":"a76",
	"nombre":"selkie",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["scotland","europe"],
	"designacion":"XXXX",
	"habitos":["viven bajo el agua","cubren su piel para salir del agua en busca de humanos a los cuales enamorar"],
	"caracteristicas":[{
			apariencia:"parecida a los merpeople, pero un poco mas feos",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			lengua:"Mermish"
			}]	
},
{
	"_id":"a77",
	"nombre":"siren",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["greece","europe"],
	"designacion":"XXXX",
	"habitos":["viven bajo el agua"],
	"caracteristicas":[{
			apariencia:"tienen una belleza llamativa, son mitad humana mitad pez",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}],
	"otros":[{
			lengua:"Mermish",
			habilidades_unicas:["cantan cacniones que atraen a los navegantes y hacen que estos choquen y naufraguen"]
			}]
	
},
{
	"_id":"a78",
	"nombre":"moke",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["great britain","ireland","europe"],
	"designacion":"XXX",
	"caracteristicas":[{
			apariencia:"Lagartija con piel verde metalico",
			tamano:"10 pulgadas",
			adiestrable:"no",
			mordida:"ninguna",
			venenosa:"no",
			propiedades:["su piel es utilizada en joyas y bolsas para monedas"],
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:["encogerse a voluntad"]
			}]	
},
{
	"_id":"a79",
	"nombre":"mooncalf",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["global"],
	"designacion":"XX",
	"funcion":"estiércol utilizado para que las plantas crezcan mucho más rápido",
	"habitos":["salen de su escondite cuando hay luna llena"],
	"caracteristicas":[{
			apariencia:"piel suave y cuatro patas largas y delgadas que terminan en unos pies largos y planos",
			venenosa:"no",
			adiestrable:"no",
			mordida:"ninguna",
			color:"gris"
			}]
},
{
	"_id":"a80",
	"nombre":"murtlap",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["crustáceos"],
	"region":["britain","europe"],
	"designacion":"XXX",
	"funcion":"el montículo de su espalda es utilizado de aderezo y comido para mejorar la resistencia a ciertos hechizos oscuros",
	"caracteristicas":[{
			apariencia:"parecido a una rata con un montículo en su espalda",
			adiestrable:"no",
			mordida:"ninguna",
			venenosa:"no",
			propiedades:["curativas"]
			}]
},
{
	"_id":"a81",
	"nombre":"niffler",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["britain","europe"],
	"designacion":"XXX",
	"reproduccion":"mamifero",
	"funcion":"utilizados por goblins para excavar tesoros",
	"habitos":["viven en madrigueras bajo tierra","pueden causar destrozos si son dejados solos"],
	"caracteristicas":[{
			apariencia:"aspecto de roedores, hocico parecido al de un ornitorrinco y pelaje negro",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"negro"
			}],
	"otros":[{
			habilidades_unicas:["buenos buscando objetos brillantes"]
			}]
},
{
	"_id":"a82",
	"nombre":"nogtail",
	"clasificacion":"beast",
	"tipo":"demonio",
	"region":["europe","russia","north america","south america","america"],
	"designacion":"XXX",
	"habitos":["entran en las granjas a amamantar a cerdos sanos y así infectan la granja","su única debilidad son los perros blancos","rápidos y difíciles de atrapar"],
	"caracteristicas":[{
			apariencia:"parecida a un demonio que se asemeja a un cochinillo, pero atrofiado por los estrechos ojos negros, una cola gruesa y dura y largas piernas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}]	
},
{
	"_id":"a83",
	"nombre":"nundu",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["east africa","africa"],
	"designacion":"XXXXX",
	"funcion":"Eldon Elsrickle lo utilizó para proteger su casa",
	"habitos":["se mueve silenciosamente pese a su gran tamano","dificil de ser doblegado"],
	"caracteristicas":[{
			apariencia:"mamífero gigante similar a un leopardo",
			adiestrable:"no",
			venenosa:"si",
			mordida:"si",
			olor:"su aliento causa enfermedades que pueden aniquilar poblaciones enteras",
			color:"amarillo"
			}],
	"otros":[{
			habilidades_unicas:["aliento extremadamente peligroso"]
			}]
	
},
{
	"_id":"a84",
	"nombre":"occamy",
	"nombre_original":"su nombre viene del nombre del filósofo inglés Occam",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["ratas","aves","monos"],
	"region":["far east","india"],
	"designacion":"XXXX",
	"reproduccion":"oviparo",
	"habitos":["muy agresivo","protectora de sus huevos que están hechos de la plata más pura y suave"],
	"caracteristicas":[{
			apariencia:"criatura serpentina de cuerpo emplumado y dos patas con alas",
			tamano:"4 metros y medio",
			adiestrable:"no",
			venenosa:"no",
			mordida:"si"
			}],
	"otros":[{
			habilidades_unicas:["puede crecer o encogerse mágicamente para adaptarse al espacio"]
			}]
},
{
	"_id":"a85",
	"nombre":"owl",
	"clasificacion":"beast",
	"tipo":"ave",
	"alimentacion":["mamíferos","insectos","peces","aves"],
	"region":["global"],
	"designacion":"XX",
	"reproduccion":"oviparo",
	"funcion":"usado como compañía y para enviar correos y paquetes",
	"habitos":["no hacen nidos, sino que buscan abrigo en árboles, cuevas, etc","nocturnos","su vuelo hace que sean ideales para la entrega de cartas"],
	"caracteristicas":[{
			apariencia:"buho común y corriente",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			lengua:"pueden entender a las personas mágicas",
			habilidades_unicas:["pueden encontrar al receptor de una carta sin saber la dirección"]
			}]
	
},
{
	"_id":"a86",
	"nombre":"phoenix",
	"clasificacion":"beast",
	"tipo":"ave",
	"alimentacion":["plantas"],
	"region":["egypt","india","china"],
	"designacion":"XXXX",
	"reproduccion":"oviparo",
	"tiempo_de_vida":"indefinido",
	"habitos":["coloca sus nidos en la cima de las montañas","criatura amable"],
	"caracteristicas":[{
			apariencia:"pájaro rojo, del tamano de un cisne, con una gran cola dorada, pico y garras del mismo color",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["curativas","invulnerable al Avada Kedavra","sus plumas pueden ser usadas en varitas"],
			color:"escarlata"
			}],
	"otros":[{
			otro:"El phoenix gana una calificación de XXXX no porque sea agresivo, sino porque muy pocos magos han logrado domesticarla",
			habilidades_unicas:["estalla en llamas cuando su cuerpo comienza a decaer y resurge de las cenizas como un polluelo","sus lágrimas pueden curar heridas","pueden cargar varias veces su peso","puede aparecer y desaparecer","su canto puede aumentar el valor de los puros de corazon y difundir temor a los impuros"]
			}]
},
{
	"_id":"a87",
	"nombre":"pixie",
	"clasificacion":"beast",
	"tipo":"duende",
	"region":["england","europe"],
	"designacion":"XXX",
	"habitos":["volar","les gusta levantar gente agarrandolos de las orejas y dejándolos en los topes de los arboles","traviesos"],
	"caracteristicas":[{
			apariencia:"parecidos a unos duendecillos de rostro puntiagudo y de colo azul eléctrico",
			tamano:"8 pulgadas",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"azul"
			}],
	"otros":[{
			lengua:"solo se pueden comunicar con otros pixies"
			}]
	
},
{
	"_id":"a88",
	"nombre":"plimpy",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["caracoles de agua"],
	"region":["deep lakes"],
	"designacion":"XXX",
	"habitos":["habita en lagos profundos","no es peligroso"],
	"caracteristicas":[{
			apariencia:"pez pequeño y redondo con dos patas que terminan en dos pies palmeados",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}]	
},
{
	"_id":"a89",
	"nombre":"pogrebin",
	"clasificacion":"beast",
	"tipo":"demonio",
	"alimentacion":["humanos"],
	"region":["russia"],
	"designacion":"XXX",
	"habitos":["se siente atraído por los humanos, y goza de arrastrarse hacia ellos","atacan a los humanos si los siguen por largo tiempo"],
	"caracteristicas":[{
			apariencia:"cuerpo peludo y una cabeza gris de gran tamano",
			tamano:"1 pie",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"gris"
			}]	
},
{
	"_id":"a90",
	"nombre":"porlock",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["england","southern ireland","europe"],
	"designacion":"XX",
	"funcion":"resguardar los caballos",
	"habitos":["viven en el cesped","desconfían de los humanos"],
	"caracteristicas":[{
			apariencia:"guardian de caballos con nariz grande, brazos pequeños que terminan en cuatro dedos regordetes, y caminan en dos pezuñas. Cubiertos de diamantes en bruto y con pelo lanudo",
			tamano:"2 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna"
			}]	
},
{
	"_id":"a91",
	"nombre":"puffskein",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["de todo (barrendero)"],
	"region":["global"],
	"designacion":"XX",
	"funcion":"son mascotas muy útiles y cariñosas",
	"habitos":["criatura dócil","emite ronroneos cuando está contento"],
	"caracteristicas":[{
			apariencia:"De forma esférica y cubierto por un pelaje suave color crema",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["su cabello es utilizado en pociones"],
			color:"crema"
			}],
	"otros":[{
			habilidades_unicas:["de vez en cuando, una lengua muy larga, rosada y fina sale de las profundidades del Puffskein y se desliza por toda la casa para buscar alimento"]
			}]
	
},
{
	"_id":"a92",
	"nombre":"appaloosa puffskein",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["de todo (barrendero)"],
	"region":["united states of america","america"],
	"designacion":"XX",
	"funcion":"son mascotas muy útiles y cariñosas",
	"habitos":["criatura dócil","emite ronroneos cuando está contento"],
	"caracteristicas":[{
			apariencia:"De forma esférica y cubierto por un pelaje suave",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["su cabello es utilizado en pociones"]
			}],
	"otros":[{
			habilidades_unicas:["de vez en cuando, una lengua muy larga, rosada y fina sale de las profundidades del Puffskein y se desliza por toda la casa para buscar alimento"]
			}]
},
{
	"_id":"a93",
	"nombre":"fanged puffskein",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["de todo (barrendero)"],
	"region":["global"],
	"designacion":"XX",
	"funcion":"son mascotas muy útiles y cariñosas",
	"habitos":["criatura dócil","emite ronroneos cuando está contento"],
	"caracteristicas":[{
			apariencia:"De forma esférica y cubierto por un pelaje suave, además de tener colmillos",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["su cabello es utilizado en pociones"]
			}],
	"otros":[{
			habilidades_unicas:["de vez en cuando, una lengua muy larga, rosada y fina sale de las profundidades del Puffskein y se desliza por toda la casa para buscar alimento"]
			}]
},
{
	"_id":"a94",
	"nombre":"pygmy puff",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["de todo (barrendero)"],
	"region":["england","europe"],
	"designacion":"XX",
	"funcion":"son mascotas muy útiles y cariñosas",
	"habitos":["criatura dócil","emite ronroneos cuando está contento"],
	"caracteristicas":[{
			apariencia:"De forma esférica y cubierto por un pelaje suave",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["su cabello es utilizado en pociones"],
			color:"rosado"
			}],
	"otros":[{
			habilidades_unicas:["de vez en cuando, una lengua muy larga, rosada y fina sale de las profundidades del Puffskein y se desliza por toda la casa para buscar alimento"]
			}]	
},
{
	"_id":"a95",
	"nombre":"quintaped",
	"nombre_original":"Hairy MacBoons",
	"clasificacion":"beast",
	"tipo":"bestia",
	"alimentacion":["humanos"],
	"region":["isle of drear"],
	"designacion":"XXXXX",
	"habitos":["se encuentra mar adentro","hostiles"],
	"caracteristicas":[{
			apariencia:"Su cuerpo achatado está cubierto con grueso pelo castaño rojizo, igual que sus cinco patas de pies deformes",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"castaño"
			}]
},
{
	"_id":"a96",
	"nombre":"ramora",
	"nombre_original":"nombre proveniente de la palabra remora, que en latín significa 'demora'",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["indian ocean"],
	"designacion":"XX",
	"funcion":"se dice que son los guardianes de la gente del mar",
	"habitos":["usar su disco de succión para atrapar y viajar junto a animales acuáticos mucho mas grandes, así como tambien a embarcaciones"],
	"caracteristicas":[{
			apariencia:"parecido a los demas peces, solo que como característica mas distintiva poseen una aleta dorsal primera modificada, que forma un disco de succión",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"plateado"
			}],
	"otros":[{
			habilidades_unicas:["capaces de anclar los barcos en su lugar"]
			}]
	
},
{
	"_id":"a97",
	"nombre":"rat",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["global"],
	"funcion":"cuando están muertas sirven de alimento a dragones",
	"reproduccion":"mamifero",
	"tiempo_de_vida":48,
	"caracteristicas":[{
			apariencia:"parecido a un ratón pero de mayor tamano",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["cola y bazo son usados en pociones"],
			color:"negro"
			}]	
},
{
	"_id":"a98",
	"nombre":"red cap",
	"clasificacion":"beast",
	"tipo":"duende",
	"region":["northern europe","europe"],
	"designacion":"XXX",
	"habitos":["viven en hoyos de antiguos campos de batalla o en cualquier otro lugar donde se haya derramado sangre humana","son menos peligrosos durante su temporada de apareamiento, ya que se interesan más en atacarse que cualquier invasor de su territorio"],
	"caracteristicas":[{
			apariencia:"criaturas pequeñas con parecido a un enano, con ojos rojos y uñas largas y afiladas",
			tamano:"3-4 pies",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"verde"
			}],
	"otros":[{
			habilidades_unicas:["si da con un Muggle en una noche oscura, tratará de golpearlo con su maza hasta matarlo"]
			}]
	
},
{
	"_id":"a99",
	"nombre":"re' em",
	"clasificacion":"beast",
	"tipo":"bestia",
	"region":["north america","asia"],
	"designacion":"XXXX",
	"reproduccion":"mamifero",
	"caracteristicas":[{
			apariencia:"similar a un buey gigante con una piel dorada",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["La sangre da una enorme fuerza al bebedor durante un tiempo limitado"],
			color:"dorado"
			}]	
},
{
	"_id":"b06",
	"nombre":"runespoor",
	"clasificacion":"beast",
	"tipo":"reptil",
	"region":["africa"],
	"designacion":"XXXX",
	"reproduccion":"oviparo",
	"habitos":["la cabeza derecha se dedica a planificar, decide dónde tiene que ir la serpiente y qué debe hacer a continuación","la cabeza del medio es la soñadora","la cabeza izquierda es la critica y evalúa los esfuerzos de las otras dos con un siseo continuo e irritante. Sus colmillos son extremadamente venenosos","no suele tener mucho tiempo de vida ya que las cabezas se atacan entre si"," es habitual que a una Runespoor le falte la cabeza derecha porque las otras dos se unen para morderla cuando critica demasiado"],
	"caracteristicas":[{
			apariencia:"serpiente de gran tamano y con 3 cabezas",
			tamano:"7 pies",
			adiestrable:"no",
			venenosa:"si",
			mordida:"muerte",
			propiedades:["sus huevos son valiosos en la producción de pocions para estimular la agilidad mental"],
			color:"naranja"
			}],
	"otros":[{
			lengua:"parseltongue",
			habilidades_unicas:["pone huevos a través de la boca"]
			}]
},
{
	"_id":"b07",
	"nombre":"salamander",
	"clasificacion":"beast",
	"tipo":"reptil",
	"alimentacion":["fuego"],
	"region":["global"],
	"designacion":"XXX",
	"tiempo_de_vida":"viven tanto como las llamas que los engendraron",
	"habitos":["puede sobrevivir fuera de las llamas que lo engendraron por hasta seis horas si se alimentan de pimienta"],
	"caracteristicas":[{
			apariencia:"pequeña lagartija de fuego que se alimenta de llamas",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			propiedades:["regenerativas","curativas"],
			color:"varia"
			}],
	"otros":[{
			habilidades_unicas:["la sangre de la salamandra tiene poderosas propiedades regenerativas y curativas","la putrefacción es una enfermedad que puede afectar a las salamandras"]
			}]
	
},
{
	"_id":"b08",
	"nombre":"sasquatch",
	"nombre_original":"big foot",
	"clasificacion":"beast",
	"tipo":"criatura",
	"region":["pacific northwest"],
	"habitos":["habita regiones boscosas"],
	"caracteristicas":[{
			apariencia:"criatura grande, bípeda, parecida a un simio, cubierta de pelo castaño y peludo",
			adiestrable:"no",
			venenosa:"no",
			mordida:"ninguna",
			color:"castaño"
			}]
},
{
	"_id":"b09",
	"nombre":"sea serpent",
	"clasificacion":"beast",
	"tipo":"criatura",
	"region":["atlantic ocean","pacific ocean","medterranean ocean"],
	"designacion":"XXX",
	"habitos":["Se levanta en jorobas fuera del agua cuando nada"],
	"caracteristicas":[{
			apariencia:"cabeza de caballo y un cuerpo parecido a una serpiente",
			tamano:"100 pies",
			adiestrable:"no",
			mordida:"ninguna",
			venenosa:"no"
			}]	
},
{
	"_id":"b10",
	"nombre":"selma",
	"clasificacion":"beast",
	"tipo":"criatura",
	"alimentacion":["peces","humanos"],
	"region":["freshwater norwegian lakes"],
	"habitos":["es una criatura muy feroz y peligrosa"],
	"caracteristicas":[{
			apariencia:"similar a una sea serpent",
			adiestrable:"no",
			venenosa:"no",
			mordida:"si"
			}]	
},
{
	"_id":"b11",
	"nombre":"gulping plimpies",
	"tipo":"mitico",
	"habitos":["se dice que solo pueden ser ahuyentados por gurdyroots"],
	"caracteristicas":[{
			apariencia:"parecidos a los plimpy ya que son de su misma raza"
			}],
	"otros":[{
			otro:"criatura mitica, no se sabe si de verdad existe o existio, nombrabo por Luna Lovegood"}]
	
},
{
	"_id":"b12",
	"nombre":"cat",
	"tipo":"criatura",
	"region":["global"],
	"designacion":"non-magical",
	"funcion":"son mascotas muy cariñosas",
	"caracteristicas":[{
			apariencia:"pequeña lagartija de fuego que se alimenta de llamas",
			adiestrable:"si",
			venenosa:"no",
			mordida:"ninguna",
			color:"varia"
			}],
	"otros":[{
			habilidades_unicas:["son capaces de detectar dementores","muy inteligentes"]
			}]
	
},
{
	"_id":"b13",
	"nombre":"grim",
	"clasificacion":"no-being",
	"tipo":"demonio",
	"region":["great britain"],
	"habitos":["es una criatura peligrosa que toma la forma de un perro muy grande,negro y espectral"],
	"caracteristicas":[{
			apariencia:"toma la forma de un perro negro de tamano gigante, parecido a un oso, y se considera espectral. Tiene un par de ojos amarillos que pueden brillar de una manera ominosa",
			adiestrable:"no",
			venenosa:"no",
			color:"negro"
			}],
	"otros":[{
			habilidades_unicas:["se dice que si se ve uno causa la muerte instantáneamente"]
			}]
},
{
	"_id":"b14",
	"nombre":"heliopath",
	"tipo":"mitico",
	"habitos":["se dice que galopa y quema cualquier cosa en su camino"],
	"caracteristicas":[{
			apariencia:"espíritu de fuego",
			color:"fuego"
			}],
	"otros":[{
			otro:"criatura mitica, no se sabe si de verdad existe o existio, nombrabo por Luna Lovegood"}]
	
},
{
	"_id":"b15",
	"nombre":"hydra",
	"tipo":"mitico",
	"caracteristicas":[{
			apariencia:"criatura con forma de serpiente y con nueve cabezas"
			}],
	"otros":[{
			otro:"no se sabe si realmente existen hydras en la serie de Harry Potter, ya que no se mencionan en Fantastic Beasts and Where to Find Them. Es posible que sean míticas; sin embargo, como las Cockatrices también se omiten, es ciertamente posible que las hydras existen."
		}]
	
}])

db.criaturas.insert([{
  _id:"d01",
nombre:"shrake",
clasificacion:"beast",
tipo:"pez",
region:["atlantic ocean"],
designacion:"XXX",
funcion:"busca y destruye las redes de pesca de los muggles.",
caracteristicas:[{
        apariencia:"la criatura está cubierta de espinas",
        adiestrable:"no",
        venenosa:"no",
        mordida:"ninguna"
        }]
},
{
    _id:"d02",
  nombre:"snake",
  clasificacion:"beast",
  tipo:"reptil",
  alimentacion:["various"],
  region:["various"],
  designacion:"various",
  reproduccion:"oviparo",
  caracteristicas:[{
          apariencia:"es un reptil largo, delgado, sin piernas",
          adiestrable:"si",
          tamano:"various",
          venenosa:"varia",
          mordida:"various",
          olor:"varia",
          color:"varia"
          }],
  otros:[{
    lengua:"parseltongue"
    }]

},
{
    _id:"d03",
	nombre:"sphinx",
	clasificacion:"beast",
	tipo:"bestia",
	designacion:"XXXX",
	funcion:"se ha utilizado durante siglos para guardar tesoros",
	habitos:["decir rompecabezas, acertijos y enigmas"],
	caracteristicas: [{
						apariencia:"el cuerpo de un león muy grande: grandes patas con garras y una larga cola amarillenta que terminaba en un penacho de color marrón. Su cabeza, sin embargo, su cabeza es la de una mujer.",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"marron"
						}],
	otros:[{
			lengua:"humano"
			}]
},
{
    _id:"d04",
	nombre:"streeler",
	clasificacion:"beast",
	tipo:"insecto",
	region:["africa","europe","asia", "north america"],
	designacion:"XXX",
	caracteristicas:[{
						apariencia:"cambia de color cada hora,tienen picos agudos en sus conchas, que inyectan veneno",
						tamano:"largo",
						adiestrable:"si",
						venenosa:"si",
						mordida:"ninguna",
						color:"varia"
						}]
},
{
    _id:"d05",
	nombre:"swooping evi",
	clasificacion:"beast",
	tipo:"insecto",
	alimentacion:["puede alimentarse de cerebros humanos"],
	designacion:"unknown",
	funcion:"secreta veneno que, cuando se diluye adecuadamente, puede ser utilizado para borrar los malos recuerdos.",
	caracteristicas:[{
						apariencia:"parece un cruce entre un reptil y una mariposa Cuando no está volando con sus alas puntiagudas, se encoge en un capullo espinoso verde",
						tamano:"extremadamente grande",
						venenosa:"si",
						adiestrable:"no",
						mordida:"ninguna",
						color:"azul"
						}]
},
{
    _id:"d06",
	nombre:"tebo",
	clasificacion:"beast",
	tipo:"bestia",
	region:["african","congo","zaire"],
	designacion:"XXXX",
	funcion:"su piel es muy dura, es usada para hacer ropa y escudos",
	caracteristicas: [{
						apariencia:"como un jabali",
						color:"ceniza"
						}],
	otros:[{
			habilidades_unicas:"puede hacerse invisible"
			}]
},
{
    _id:"d07",
	nombre:"three-headed dog",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["carne"],
	region:["greece","ireland"],
	designacion:"unknown",
	reproduccion:"mamifero",
	tiempo_de_vida: "180",
	habitos:["incapacidad de resistirse a quedarse dormido con música"],
	caracteristicas:[{
						apariencia:"Es un enorme perro que tiene tres cabezas",
						tamano:"mas de 2 metros",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"marron"
						}]
},
{
    _id:"d08",
	nombre:"toad",
	clasificacion: "beast",
	tipo:"reptil",
	region:["global"],
	designacion:"non-magical",
	reproduccion:"oviparo",
	funcion:"no tienen habilidades mágicas pero son útiles para realizar hechizos o probar pociones",
	caracteristicas: [{
						apariencia:"reptil de cuatro patas que generalmente son verdes",
						tamano:"pequeños",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"varia"
						}]
},
{
    _id:"d09",
	nombre:"trolls",
	clasificacion:"beast",
	tipo:"humanoide",
	alimentacion:["pescado","carne humana"],
	region:["europe"],
	designacion:"XXXX",
	funcion:"Los bigotes de Troll tienen propiedades mágicas, y algunas veces se usan como núcleos de varitas",
	habitos: [ "muy violentos"],
	caracteristicas: [{
						apariencia:"criaturas humanoides com olos gigantes, pesan hasta una tonelada. Sus pies tienen dos dedos , ambos con uñas gigantes.",
						tamano:" generalmente una altura de cerca de doce pies",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						olor:"mal olor",
						color:"varia"
						}],
	otros:[{
			lengua:"troll"
			}]
},
{
    _id:"d10",
	nombre:"forest troll",
	nombre_original:"troglodytarum sylvaticum",
	clasificacion:"beast",
	tipo:"humanoide",
	alimentacion:["pescado","carne humana"],
	region:["forbidden forest","forests"],
	designacion:"XXXX",
	funcion:"Los bigotes de Troll tienen propiedades mágicas, y algunas veces se usan como núcleos de varitas",
	habitos: [ "muy violentos"],
	caracteristicas: [{
						apariencia:"es una sub-especie del troll por lo que comparte la apareciencia caracteristicas estos, tiene la piel verde pálido, y algunos especímenes tienen el pelo fino como el straggly que es verde o marrón.",
						tamano:" generalmente una altura de cerca de doce pies",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						olor:"mal olor",
						color:"verde"
						}],
	otros:[{
			lengua:"troll"
			}]
},
{
    _id:"d11",
	nombre:"mountain troll",
	nombre_original:"troglodytarum alpinum",
	clasificacion: "beast",
	tipo:"humanoide",
	alimentacion:["pescado","carne humana"],
	region:["mountains"],
	designacion:"XXXX",
	funcion:"Los bigotes de Troll tienen propiedades mágicas, y algunas veces se usan como núcleos de varitas",
	habitos:["muy violentos"],
	caracteristicas: [{
						apariencia:"es una sub-especie del troll por lo que comparte la apareciencia caracteristicas estos, ademas se representan como calvo y gris pálido",
						tamano:" generalmente una altura de cerca de doce pies",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						olor:"mal olor",
						color:"gris"
						}],
	otros:[{
			lengua:"troll"
			}]
},
{
    _id:"d12",
	nombre:"river troll",
	clasificacion:"beast",
	tipo:"humanoide",
	alimentacion:["pescado","carne humana"],
	region:["beneath bridges","rivers"],
	designacion:"XXXX",
	funcion:"Los bigotes de Troll tienen propiedades mágicas, y algunas veces se usan como núcleos de varitas",
	habitos: ["custodiar puentes", "muy violentos"],
	caracteristicas: [{
						apariencia:"es una sub-especie del troll por lo que comparte la apareciencia caracteristicas estos, ademas tiene cuernos cortos, piel morada, y es peludo",
						tamano:" generalmente una altura de cerca de doce pies",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						olor:"mal olor",
						color:"morado"
						}],
	otros:[{
			lengua:"troll"
			}]
},
{
    _id:"d13",
	nombre:"thunderbird",
	clasificacion:"beast",
	tipo:"ave",
	alimentacion:["carnivoro"],
	region:["arizona", "united states","america"],
	designacion:"XXXX",
	reproduccion:"oviparo",
	funcion:"las plumas pueden ser usadas como nucleo de varitas, igual que el fenix",
	caracteristicas: [{
						apariencia:"se describe como tener una cabeza que es similar a la de un águila O, en el mundo mágico, similar al de un Hippogriff.poseen alas múltiples y poderosas",
						tamano:"es un gran ave, de tamano parecido al al fenix",
						color:"varia"
						}],
	otros:[{
			habilidades_unicas:"Puede crear tormentas mientras vuela, y puede sentir el peligro"
			}]
},
{
    _id:"d14",
	nombre:"unicorns",
	nombre_original:"nombre original criatura",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["vegetariano"],
	region:["northern europe","forbidden forest"],
	designacion:"XXXX",
	reproduccion:"mamifero",
	funcion:"Varias partes del Unicornio - el cuerno y el pelo de la cola en particular - se utilizan en pociones. El pelo del unicornio en general se utiliza para los núcleos de varitas. El pelo de la cola también se puede utilizar como vinculante en vendas debido a su increíble fuerza. La sangre de un unicornio puede usarse para mantener vivo a una persona que está cerca de la muerte ( pero tendrás sólo una vida media, una vida maldita, desde el momento en que la sangre toca tus labios)",
	habitos:["prefieren que los toque una mujer"],
	caracteristicas: [{
						apariencia:"Es una criatura blanca, equina con un solo cuerno en su frente.",
						tamano:"igual de grandes que un caballo",
						propiedades:["sangre curativa"],
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna",
						color:"blanco"
						}],
	otros:[{
			habilidades_unicas:"son muy rapidos y sus cascos no hacen casi sonido al caminar"
			}]
},
{
    _id:"d15",
	nombre:"werewolf",
	nombre_original:"werewolf wolf-form",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["carnivoros"],
	region:["global"],
	designacion:"XXXXX",
	reproduccion:"es una enfermedad magica que se contagia a travez de la mordida cuando es hombre lobo",
	tiempo_de_vida:"1200",
	habitos:["solo ataca seres humanos"],
	caracteristicas:[{
						apariencia:"Los hombres lobos se pueden distinguir fácilmente de los lobos regulares por su hocico más corto, ojos más como humanos y forma humanoide , la cola tufted, y su sentido de caza hacia los seres humanos",
						tamano:"un poco mas alto que el tamano humano",
						adiestrable:"no",
						venenoso:"no",
						mordida:"convierte a una persona en hombre lobo,, cualquier mordedura o rasguño de un hombre-lobo  dejara cicatrices",
						olor:"olor a perro",
						color:"varia"
						}],
	otros:[{
			lengua:"aullidos",
			habilidades_unicas:"cambiar de forma entre humano y hombre lobo cuando hay luna llena"
			}]
},
{
    _id:"d16",
	nombre:"winged horse",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["various"],
	region:["global"],
	designacion:"varia",
	funcion:"transporte y competir en carreras",
	caracteristicas: [{
						apariencia:"generalmente comparten caracteristicas equinas y alas",
						tamano:"various",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						olor:"various",
						color:"varia"
						}],
	otros:[{
			habilidades_unicas:"volar y otras dependiendo de la especie"
			}]
},
{
    _id:"d17",
	nombre:"abraxan",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["whisky de malta"],
	region:["france"],
	designacion:"XXXX",
	reproduccion:"mamifero",
	funcion:"empujar carruajes",
	caracteristicas: [{
						apariencia:"caracteristicas equinas y alas",
						tamano:"mas grande que el tamano normal de un caballo, mas similar a un elefante",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"blanco"
						}]
},
{
    _id:"d18",
	nombre:"aethonan",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["various"],
	region:["great britain" ,"ireland"],
	designacion:"varia",
	funcion:"transporte y competir en carreras",
	caracteristicas: [{
						apariencia:"generalmente comparten caracteristicas equinas y alas",
						tamano:"tamano de un caballo",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"castaño"
						}],
	otros:[{
			habilidades_unicas:"extremadamente fuerte"
			}]
},
{
    _id:"d19",
	nombre:"granian",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["various"],
	designacion:"varia",
	funcion:"transporte y competir en carreras",
	caracteristicas: [{
						apariencia:"generalmente comparten caracteristicas equinas y alas",
						tamano:"tamano de un caballo",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"gris"
						}],
	otros:[{
			habilidades_unicas:"volar muy rapido"
			}]
},
{
    _id:"d20",
	nombre:"thestral",
	clasificacion:"beast",
	tipo:"bestia",
	alimentacion:["carnivoro"],
	region:["forbidden forest"],
	designacion:"XXXX",
	funcion:"son usados para tirar carruajes o transporte, El cabello de la cola Thestral es una sustancia poderosa y difícil de manejar, se utilizó para crear la varita más poderosa conocida por los magos, la Varita de sauco.",
	tiempo_de_vida: "tiempo de vida promedio",
	caracteristicas: [{
						apariencia:"caballos alados con un cuerpo esquelético, cara con rasgos reptiles, y alas anchas y coriáceas que se asemejan a un murciélago",
						tamano:"tamano de un caballo",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						color:"negro"
						}],
	otros:[{
			habilidades_unicas:"visibles sólo para aquellos que han sido testigos de la muerte al menos una vez,tienen un sentido del olfato extraordinario y reconocerán fácilmente el olor de la sangre y la carne fresca, aunque la fuente del olor esté más bien distanciada. También tienen un sentido muy útil de la dirección. El Thestral puede entender exactamente donde sus jinetes necesitan ir."
			}]
},
{
    _id:"d21",
	nombre:"yeti",
	clasificacion:"beast",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["tibet"],
	designacion:"XXXX",
	habitos: ["ataca a cualquier cosa que vea"],
	caracteristicas: [{
						apariencia:"es un humanoide cubierto de nieve blanco que puede estar relacionado con el troll.",
						tamano:"15 pies de altura",
						color:"blanco",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
            }]

},
{
    _id:"d22",
	nombre:"curupira",
	clasificacion:"being",
	alimentacion:["omnivoro"],
	tipo:"humanoide",
	alimentacion:["de que se alimenta"],
	region:["brazilian forests", "brazil"],
	reproduccion:"mamifero",
	habitos: ["ferozmente protectores de cualquier otra criatura mágica"],
	caracteristicas: [{
						apariencia:"son enanos del bosque pelirrojos,los pies de los Curupiras están orientados hacia atrás en relación con sus cuerpos.",
						tamano:"enanos",
						color:"rojo",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humana"
			}]
},
{
    _id:"d23",
	nombre:"dwarf",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	reproduccion:"mamifero",
	caracteristicas:[{
						apariencia:"es una criatura humanoide corta y fornida",
						tamano:"enano",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humana"
			}]
},
{
    _id:"d24",
	nombre:"giant",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["europe","north america"],
	reproduccion:"mamifero",
	habitos: ["no tiene paciencia","muy violentos"],
	caracteristicas: [{
						apariencia:"Algunos pueden parecer como humanoides grandes y peludos, mientras que otros se parecen a personas de talla gigantesca, y algunos pueden incluso tener rasgos bestiales (es decir, molares afilados que sobresalen).",
						tamano:"entre 20 y 25 pies de altura",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"gigante y pueden parender idiomas humanos",
			habilidades_unicas:"extraordinaria fuerza, magia ineficaz contra ellos"
			}]
},
{
    _id:"d25",
	nombre:"goblins",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["carne","hongos","raices"],
	region:["europe","north america"],
	reproduccion:"mamifero",
	funcion:"controlan gran parte de la economia del mundo magico",
	tiempo_de_vida: "tiempo de vida promedio",
	habitos:["creen que los objetos que fabrican no se venden solo se presta, y estos deben ser devueltos a los goblins "],
	caracteristicas:[{
						apariencia:"son cortos y de piel clara, ya que pasan muy poco tiempo fuera. Tienen dedos y pies muy largos, cabezas en forma de cúpula y son ligeramente más grandes que los elfos domésticos. Algunos tienen ojos oscuros y oblicuos, y algunos goblins incluso usan sombreros puntiagudos.",
						tamano:"48 pulgadas",
						color:"blanco",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"Gobbledegook y humano",
			habilidades_unicas:"poseen una gran inteligencia, pueden hacer magia sin necesitar varitas, pueden diferenciar objetos falsos y son herreros"
			}]
},
{
    _id:"d26",
	nombre:"hag",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["niños","higado crudo"],
	region:["russia","europe"],
	caracteristicas:[{
						apariencia:" un ser salvaje que parece una fea, vieja bruja pero tiene más verrugas.",
						tamano:"tamano humanos",
						color:"palido",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			habilidades_unicas:"poseen magia rudiminetaria"
			}]
},
{
    _id:"d27",
	nombre:"half-giant",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["global"],
	reproduccion:"mamifero",
	funcion:"mestizo",
	caracteristicas: [{
						apariencia:"Un medio gigante es el descendiente de un gigante y un humano. Los medio gigantes serán mucho más altos y más grandes que los humanos ordinarios",
						tamano:"mas altos que un humano ordinario",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"piel resistente a hechizos y gran fuerza"
			}]
},
{
    _id:"d28",
	nombre:"half-goblin",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["global"],
	reproduccion:"mamifero",
	funcion:"mestizo",
	caracteristicas:[{
						apariencia:"Un medio duende es el hijo de un goblin y un humano. Los medio goblins son mucho más cortos que los seres humanos ordinarios",
						tamano:"mas pequeños un humano ordinario",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"gran inteligencia"
			}]
},
{
    _id:"d29",
	nombre:"half-veela",
	clasificacion: "being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["global"],
	reproduccion:"mamifero",
	funcion:"mestizo",
	caracteristicas: [{
						apariencia:"Medio-Veela son considerablemente más hermosos que los seres humanos promedio",
						tamano:"altura de un humano ordinario",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"encanto"
			}]
},
{
    _id:"d30",
	nombre:"half-breed",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["various"],
	region:["global"],
	reproduccion:"mamifero",
	funcion:"mestizo",
	habitos:["various"],
	caracteristicas: [{
						apariencia:"Mestizo es un termino que se le a los seres que no son 100% humanos ya que estan emparentados con otra especie, su apariencia casi siempre es de un ser humano pero muestra caracteristicas de la especie con la que esta parentada como tamano mañor al de un humano comun, colmillos o tendencias",
						tamano:"various",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"suelen mostrar habilidades unicas de los tipos de especie que lo conforman"
			}]
},
{
    _id:"d31",
	nombre:"house-elf",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["yumboes","erklings"],
	reproduccion:"mamifero",
	funcion:"sirven a los magos",
	habitos:["inmensamente devoto y leal al designado como su amo."],
	caracteristicas:[{
						apariencia:" tienen brazos y piernas delgados y cabezas y ojos demasiado grandes. Han apuntado, con orejas de murciélago y voces altas y chirriantes. En lugar de la ropa convencional, elfos domésticos usan artículos desechados como fundas de almohada y toallas de té.",
						adiestrable:"si",
						tamano:"entre 2 o 3 pies de altura",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"pueden usar magia sin varita"
			}]
},
{
    _id:"d32",
	nombre:"human",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["global"],
	reproduccion:"mamifero",
	tiempo_de_vida:1200,
	caracteristicas: [{
						apariencia:"Los seres humanos vienen en varias formas y tamanos, y son una de las especies más variables en el mundo en términos de físico.",
						tamano:"various",
						olor:"various",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"se dice que son los seres más inteligentes de la Tierra."
			}]
},
{
    _id:"d33",
	nombre:"ogre",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["scotland"],
	reproduccion:"mamifero",
	caracteristicas:[{
						apariencia:" los Ghouls se describen como parecidos a los ogros viscosos, de dientes de buck. De esto se puede asumir que los Ogros tienen una semejanza pasajera con los Ghouls, pero sin la piel viscosa o los dientes de buck.",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
					}],
	otros:[{
			lengua:"humano"
			}]
},
{
    _id:"d34",
	nombre:"pukwudgie",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["united states of america", "north america"],
	reproduccion:"mamifero",
	tiempo_de_vida:3600,
	habitos: ["son muy gruñón y se quejan de muchas cosas que tienen que hacer, incluso si realmente quieren hacerlo"],
	caracteristicas:[{
						apariencia:"son criaturas cortas, grises, de orejas grandes, distantemente relacionadas con el duende europeo.",
						tamano:"entre 2 o 3 pies de altura",
						color:"gris",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano"
      			}]
},
{
    _id:"d35",
	nombre:"vampire",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["sangre","pasteles"],
	region:["black forest","romania","transylvania","scotland","england","wales","united states of america"],
	reproduccion:"omnivoro",
	habitos:["por morder a la gente en el cuello y chupar su sangre.","odian el ajo"," odian la luz solar"],
	caracteristicas:[{
						apariencia:"Por lo general son pálidos y delgados, con colmillos afilados para perforar la garganta.",
						tamano:"son altos",
						mordida:"chupar sangre",
						color:"palido",
						adiestrable:"no",
						venenosa:"no"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"chupar sangre"
			}]
},
{
    _id:"d36",
	nombre:"veela",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["bulgaria"],
	reproduccion:"mamifero",
	funcion:"pelo de Veela es una sustancia mágica, conveniente como núcleo para la fabricación de la varita",
	habitos:["danza"],
	caracteristicas:[{
						apariencia:"Parecen ser humanos jóvenes y hermosos. Su aspecto y especialmente su danza es mágicamente seductora para casi todos los seres masculinos, cuando Veela se enoja, se convierten en algo más parecido a las arpías: sus rostros se convierten en crueles cabezas de pájaro, mientras las largas alas escamosas salen de sus hombros",
						tamano:"igual que un humano",
						olor:"cual es su olor",
						color:"blanco",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"Muy hermosa que Puede encantar a los seres humanos,Mientras que si se enojan, se transforman en criaturas como arpias capaces de lanzar bolas de fuego"
			}]
},
{
    _id:"d37",
	nombre:"werewolf",
	nombre_original:"werewolf human-form",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["global"],
	reproduccion:"mamifero",
	tiempo_de_vida:1200,
	habitos:["tendencias extrañas"],
	caracteristicas: [{
						apariencia:"Los hombres lobos en forma humana se ven exactamente igual que un humano promedio excepto que muchas veces tienen cicatrices en la cara",
						tamano:"tamano humano",
						mordida:" cualquier mordedura o rasguño dejara cicatrices a los humanos",
						olor:"olor a perro",
						color:"varia",
						adiestrable:"no",
						venenosa:"no"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"cambiar de forma entre humano y hombre lobo cuando hay luna llena"
			}]
},
{
    _id:"d38",
	nombre:"yumboes",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro"],
	region:["africa"],
	reproduccion:"mamifero",
	funcion:"servir a los magos",
	habitos:["tienden a robar alimentos de los seres humanos como venganza"],
	caracteristicas:[{
						apariencia:"son una especie de elfo doméstico africano. Son criaturas rencorosas.",
						tamano:"entre 2 o 3 pies",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"pueden usar magia sin varita y pueden desaparecer a voluntad"
			}]
},
{
    _id:"d39",
	nombre:"banshee",
	nombre_original:"gaelic spelling beannsidhe",
	clasificacion:"spirit",
	tipo:"espiritu",
	region:["ireland","scotland"],
	caracteristicas:[{
						apariencia:"tienen la apariencia de una mujer con el pelo largo del piso negro, una cara esquelética, y la piel verde.",
						tamano:"similar al tamano humano",
						color:"negro",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"El grito de un banshee es fatal para los oídos"
			}]
},
{
    _id:"d40",
	nombre:"caipora",
	clasificacion:"spirit",
	tipo:"espiritu",
	region:["amazona","brazil"],
	funcion:"protegen los terrenos de Castelobruxo escuela de magia",
	habitos:["emergem bajo la cobertura de la noche para vigilar a los estudiantes y las criaturas que viven en el bosque."],
	caracteristicas:[{
						apariencia:"son espíritus pequeños y peludos que son extraordinariamente traviesos.",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano"
			}]
},
{
    _id:"d41",
	nombre:"ghost",
	clasificacion:"spirit",
	tipo:"espiritu",
	region:["global"],
	reproduccion:"muerte",
	funcion:"Son aquellos magos o brujas fallecidos con 'asuntos inconclusos', ya sea en forma de temor, culpa, arrepentimiento o adhesión abierta al mundo material que se niegan a pasar a la siguiente dimensión",
	caracteristicas:[{
						apariencia:"En su estado paranormal, los fantasmas son incapaces de tener mucha influencia física. Son visibles, y aparecen como una aparición de plata grisácea de sus antiguos seres (vivos).Su aspecto también puede convertirse en llamas azules.",
						tamano:"el mismo tamano que tenian cuando estaban vivos",
						color:"plateado",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"son ingrávidos y pueden volar en cualquier dirección y atravezar objetos y paredes. Los fantasmas no pueden ser destruidos"
			}]
},
{
    _id:"d42",
	nombre:"gytrash",
	clasificacion:"spirit",
	tipo:"espiritu",
	alimentacion:["carnivoro","carne humana"],
	region:["scotland","england"],
	habitos:["cazan en manadas"],
	caracteristicas:[{
						apariencia:"es un perro blanco grande, vicioso, nocturno, posiblemente un fantasma animal. tiene una cola bifurcada.",
						tamano:"similar al tamano de un perro",
						color:"blanco"
						}],
	otros:[{
			habilidades_unicas:"posee un gran olfato"
			}]
},
{
    _id:"d43",
	nombre:"inferius",
	clasificacion:"spirit",
	tipo:"no-muerto",
	alimentacion:["carne humana"],
	region:["great britain","haiti"],
	reproduccion:"son creados por un mago oscuro",
	funcion:"son cuerpos reanimados por un mago oscuro para servir a cualquier orden",
	habitos:["se esconden en lugares oscuros debido a que odian la luz"],
	caracteristicas:[{
						apariencia:" es una marioneta espeluznante. Los Inferi son seres delgados y esqueléticos que se parecen mucho a los zombis. Siendo cadáveres humanos, tienen apariencias individuales basadas en los humanos de donde fueron creados.",
						tamano:"various",
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguna",
						olor:"carne descompuesta"
						}],
	otros:[{
			lengua:"aun muertos algunos pueden hablar lenguaje humano",
			habilidades_unicas:"son inmunes a los daños corporales como cortar, y tienen una gran fuerza física, suficiente para matar a un ser humano o arrastrarlos lejos."
			}]
},
{
    _id:"d44",
	nombre:"zombie",
	clasificacion:"spirit",
	tipo:"no-muerto",
	alimentacion:["carne humana"],
	region:["south of united states of america","haiti"],
	caracteristicas:[{
						apariencia:"Pueden ser identificados por su piel grisácea",
						tamano:"various",
						olor:"olor a carne descompuesta",
						color:"gris",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}]
},
{
    _id:"d45",
	nombre:"boggart",
	clasificacion:"no-being",
	tipo:"espiritu",
	region:["global"],
	funcion:"son usados para enfrentar los temores",
	habitos:["aficionados a esconderse en espacios oscuros y confinados"],
	caracteristicas:[{
						apariencia:"cambia de forma y toma la forma del peor temor del espectador. Debido a su capacidad de cambio de forma, nadie sabe lo que un boggart parece cuando está solo, ya que instantáneamente se convierte en uno de los peores temores cuando uno primero lo ve.",
						tamano:"igual al ser que imitan",
						adiestrable:"no",
						venenosa:"no",
						mordida:"efectos de la mordida",
						olor:"various",
						color:"varia"
						}],
	otros:[{
			lengua:"pueden imitar el lenguaje del ser que imitan",
			habilidades_unicas:"cambia de forma, pueden imitar las habilidades de lo que imitan pero no tendran la misma fuerza o poder magico que el original"
			}]
},
{
    _id:"d46",
	nombre:"dementor",
	clasificacion:"no-being",
	tipo:"espiritu",
	alimentacion:["emociones y recuerdos felices"],
	region:["azkaban","islandia"],
	designacion:"extant",
	explicacion_designacion:"apesar de ser criaturas muy peligrosas no estan calificados como XXXX o XXXXX por trabajar para el ministerio como guardias de azkaban",
	habitos:["suelen cazar a su victima en grupo"],
	caracteristicas:[{
						apariencia:"Los dementores tienen una forma humanoid, están cubiertos de oscuros mantos con capucha de telas largas arrugadas, que los hacen muy parecidos a los fantasmas. Su cuerpo es gris y se ve carcomido, como un cadáver en descomposición, y su respiración suena ruidosa, como si tratara de aspirar más que aire fuera de una habitación. Sus manos son resplandecientes, grisáceas, viscosas y con costra. Parecen exudarse frío. El rostro de un Dementor tiene los orificios vacíos de los ojos, cubiertos de piel con costra. Hay un gran agujero grande en el que debe estar la boca, no tienen ojos",
						tamano:"3 metros",
						adiestrable:"no",
						venenosa:"no",
						mordida:"el beso del dementor es capas de succionar el alma de su victima y dejarlo como una concha vacia",
						color:"negro"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"pueden  sentir emoción y salud física y / o mental para rastrear los movimientos de sus presas, parecen aspirar toda la luz y la felicidad del aire,  hacen que la oscuridad se cierre por todas partes y que la víctima se sienta increíblemente fría. Succionan toda la emociones positiva y felices de su victimas, y su beso puede succionar el alma "
			}]
},
{
    _id:"d47",
	nombre:"poltergeist",
	nombre_original:"indestructible spirit of chaos",
	clasificacion:"no-being",
	tipo:"espiritu",
	region:["global"],
	funcion:"molestar a los vivos",
	habitos:["vandalismo"],
	caracteristicas:[{
						apariencia:"generalmente no tienen una forma física, con una excepción notable siendo Peeves, el poltergeist que frecuentan el castillo de Hogwarts",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguno"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"pueden volar y a diferencia los fantasmas aun siendo espiritus pueden tocar y mover objetos fisicos"
			}]
},
{
    _id:"d48",
	nombre:"blood-sucking bugbear",
	clasificacion:"unknown",
	alimentacion:["sangre","chickens"],
	region:["scotland"],
	caracteristicas:[{
						adiestrable:"no",
						venenosa:"no",
						mordida:"chupar sangre"
						}]
},
{
    _id:"d49",
	nombre:"dukuwaqa",
	clasificacion:"unknown",
	tipo:"humanoide",
	region:["fiji","pacific ocean"],
	funcion:"mascota del equipo nacional de Quidditch de Fiji.",
	habitos:["conducta agresiva si es movido de u habita natural"],
	caracteristicas: [{
						apariencia:"tiene aspecto de un tiburon humanoide",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguno"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"posee la capacidad de transformarse de un hombre en un tiburón"
			}]
},
{
    _id:"d50",
	nombre:"genie",
	clasificacion:"unknown",
	region:["ivorian coast","africa"],
	funcion:"mascota del equipo de Quidditch Nacional de Costa de Marfil",
	caracteristicas:[{
						adiestrable:"si",
						venenosa:"no",
						mordida:"ninguno"
						}],
	otros:[{
			habilidades_unicas:"Son capaces de deslizarse sobre la superficie del agua"
			}]
},
{
    _id:"d51",
	nombre:"gorgon",
	clasificacion:"unknown",
	tipo:"reptil",
	caracteristicas:[{
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			habilidades_unicas:"convertir a cualquiera que lo vea en piedra."
			}]
},
{
    _id:"d52",
	nombre:"hinkypunk",
	clasificacion:"unknown",
	tipo:"espiritu",
	region:["europe"],
	designacion:"extant",
	habitos:["emiten esporadicamente ruidos de gruñidos y gritos.", "atraer a los viajeros por las noches hacia pantanos traicioneros o humedales bajo el disfraz de un ser útil, portador de lámpara"," traviesos que se complacen en incomodar a gente mágica y gente no mágica por igual"],
	caracteristicas: [{
						apariencia:" es corto y robusto en apariencia, sin ojos, oídos, boca o nariz aparentes. Su forma translúcida y nublada da la impresión de que se componen enteramente de humo.Tienen formas de cuerpo maggoty, con dos brazos sobresalientes y una gruesa, pierna de apoyo, y posee una linterna.",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna",
						color:"varia"
						}],
	otros:[{
			habilidades_unicas:"volar, tomar objetos fisicos y pueden impulsar bolas de fuego lejos de sus lámparas, causando daño serio."
			}]
},
{
    _id:"d53",
	nombre:"sasabonsams",
	clasificacion:"unknown",
	alimentacion:["sangre"],
	region:["nigeria"],
	funcion:"mascota del equipo de Quidditch Nacional de Nigeria",
	habitos:["se vuelven locos por el olor de la sangre"],
	caracteristicas:[{
						adiestrable:"no",
						venenosa:"no",
						mordida:" puede infectar y alterar a su victima"
						}]
},
{
    _id:"d54",
	nombre:"sprite",
	clasificacion:"unknown",
	designacion:"extant",
	region:["globla","lagos"],
	caracteristicas:[{
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguno"
						}]
},
{
    _id:"d55",
	nombre:"wood nymphs",
	clasificacion:"unknown",
	region:["europe","north america"],
	funcion:"Según Fleur Delacour, se utilizan entre las decoraciones de Navidad en la Academia de Magia de Beauxbatons, donde cantan a los estudiantes.",
	caracteristicas:[{
						apariencia:"son criaturas pequeñas, posiblemente relacionadas con hadas  o duendes",
						tamano:"pequeñas como las hadas",
						adiestrable:"si",
						venenosa:"no",
						mordida:"no"
						}],
	otros:[{
			lengua:"humano"
			}]
},
{
    _id:"d56",
	nombre:"wrackspurt",
	clasificacion:"spirit",
	tipo:"espiritu",
	region:["global"],
	habitos:["viaja a través de los oídos de las personas, hasta llegar al cerebro"],
	caracteristicas:[{
						apariencia:"es un ser invisible",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			habilidades_unicas:"invisible"
			}]
},
{
    _id:"d57",
	nombre:"uro",
	clasificacion:"beast",
	tipo:"bestia",
	region:["north america","desert"],
	designacion:"XXXX",
	reproduccion:"mamifero",
	funcion:" Si alguien bebe sangre de Uro, adquiere una fuerza inmensa",
	caracteristicas:[{
						apariencia:"un buey gigante con pellejo dorado",
						tamano:"mucho mas grande que un buey comun",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna",
						color:"dorado"
						}],
	otros:[{
			otro:"el motivo de su designacion es que quedan muy pocos ejemplares debido a su valiosa sangre y piel dorada"
			}]
},
{
    _id:"d58",
	nombre:"summat",
	caracteristicas:[{
						apariencia:"es tan aburrida y simple como un Gusarajo",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}]
},
{
    _id:"d59",
	nombre:"nargle",
	habitos:["se dice que infesta el muérdago."],
	caracteristicas:[{
						apariencia:"su existencia aún no está comprobada",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}]
},
{
    _id:"d60",
	nombre:"plimpy puff",
	caracteristicas:[{
						apariencia:"Es una pequeña criatura que tiene el aspecto de una pequeña bola de pelusa",
						tamano:"es muy pequeña",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna",
						color:"rosado"
						}]
},
{
    _id:"d61",
	nombre:"half-vampire",
	clasificacion:"being",
	tipo:"humanoide",
	alimentacion:["omnivoro","sangre"],
	region:["global"],
	reproduccion:"mamifero",
	funcion:"mestizo",
	habitos:["odia la luz solar"],
	caracteristicas:[{
						apariencia:"Un medio vampiro es el hijo de un vampiro y un humano. Los medio vampiros suelen ser palidos y con colmillos igual que los vampiros pero en menor grado debido a su sangre humana",
						tamano:"como un humano ordinario",
						color:"varia",
						adiestrable:"no",
						venenosa:"no",
						mordida:"ninguna"
						}],
	otros:[{
			lengua:"humano",
			habilidades_unicas:"chupar sangre"
			}]
}])

db.criaturas.createIndex({"clasificacion":1});

db.dropUser("Ministro");
db.dropUser("Scamander");
db.dropUser("Mago");

//////////////////creacion de usuarios///////////////////////////////
//crear usuario Ministro con privilegios de admin, dueño y lectura y escritura, dbOwner ya contiene todos esos privilegios
db.createUser(
   {
     user: "Ministro",
     pwd: "1234",
     roles:
       [
         { role: "dbOwner", db: "ProyectoCriaturas" }
       ]
   }
);

//crear usuario Scamander con privilegios de lectura y escritura
db.createUser(
   {
     user: "Scamander",
     pwd: "1234",
     roles:
       [
         { role: "readWrite", db: "ProyectoCriaturas" }
       ]
   }
);

//crear usuario Mago con privilegios de lectura
db.createUser(
   {
     user: "Mago",
     pwd: "1234",
     roles:
       [
         { role: "read", db: "ProyectoCriaturas" }
       ]
   }
);