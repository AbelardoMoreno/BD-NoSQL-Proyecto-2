#Abelardo Moreno
#David Fernandez
#Alberto Suarez

from pymongo import MongoClient
from neo4j.v1 import GraphDatabase, basic_auth
from py2neo import authenticate, Graph
from py2neo import Node, Relationship
import itertools
import random
import pprint


#Conexion con MongoDB
client = MongoClient()
db=client.ProyectoCriaturas

#se guarda la coleccion "criaturas"
collection= db.criaturas

#conexion con Neo4j
#authenticate("localhost:7474", "neo4j", "neo4j")
sgraph = Graph("http://localhost:7474/db/data/")

#se limpia la BD de neo
sgraph.run("MATCH (n) detach delete n")

#driver = GraphDatabase.driver("bolt://localhost:7687")
# basic auth with: driver = GraphDatabase.driver('bolt://localhost', auth=basic_auth("<user>", "<pwd>"))
#session = driver.session()


criaturas_lista=[]
clasificacion= set([])
tipo=set([])
designacion=set([])
reproduccion=set([])
adiestrable=set([])
venenosa=set([])
color=set([])

#obtenemos las criaturas, clasificacion, tipos, designacion, reproduccion, adiestrable, venenosa y color
for collection in collection.find():
	
	criaturas_lista.append(collection)
	clasificacion.add(collection.get("clasificacion",'unknown'))#si la criatura no tiene clasificacion, se coloca unknown por defecto
	tipo.add(collection.get("tipo",'unknown'))
	designacion.add(collection.get("designacion",'unknown'))
	reproduccion.add(collection.get("reproduccion",'unknown'))
	for i in range(len(criaturas_lista)):
		if "caracteristicas" in criaturas_lista[i]:
		
			c = criaturas_lista[i]["caracteristicas"][0]
		
		else:
			c={}
		adiestrable.add(c.get("adiestrable",'unknown'))
		venenosa.add(c.get("venenosa",'unknown'))
		color.add(c.get("color",'unknown'))

#transformar los sets a listas
clasificacion_lista= list(clasificacion)
tipo_lista=list(tipo)
designacion_lista=list(designacion)
reproduccion_lista=list(reproduccion)
adiestrable_lista=list(adiestrable)
venenosa_lista=list(venenosa)
color_lista=list(color)

#crear listas para los nodos
criaturas_nodos=[]
clasificacion_nodos=[]
tipo_nodos=[]
designacion_nodos=[]
reproduccion_nodos=[]
adiestrable_nodos=[]
venenosa_nodos=[]
color_nodos=[]

#se preparan los nodos de clasificacion
for i in range(len(clasificacion_lista)):
	
	nodo=Node("Clasificacion",clasificacion=clasificacion_lista[i])
	clasificacion_nodos.append(nodo)

#se preparan los nodos de tipo
for i in range(len(tipo_lista)):
	
	nodo=Node("Tipo",tipo=tipo_lista[i])
	tipo_nodos.append(nodo)

#se preparan los nodos de designacion
for i in range(len(designacion_lista)):
	
	nodo=Node("Designacion",designacion=designacion_lista[i])
	designacion_nodos.append(nodo)

#se preparan los nodos de reproduccion
for i in range(len(reproduccion_lista)):
	
	nodo=Node("Reproduccion",reproduccion=reproduccion_lista[i])
	reproduccion_nodos.append(nodo)

#se preparan los nodos de adiestrable
for i in range(len(adiestrable_lista)):
	
	nodo=Node("Adiestrable",adiestrable=adiestrable_lista[i])
	adiestrable_nodos.append(nodo)

#se preparan los nodos de venenosa
for i in range(len(venenosa_lista)):
	
	nodo=Node("Venenosa",venenosa=venenosa_lista[i])
	venenosa_nodos.append(nodo)

#se preparan los nodos de color
for i in range(len(color_lista)):
	
	nodo=Node("Color",color=color_lista[i])
	color_nodos.append(nodo)

#se preparan los nodos de criaturas
for i in range(len(criaturas_lista)):
	if "caracteristicas" in criaturas_lista[i]:
		
		c = criaturas_lista[i]["caracteristicas"][0]
		
	else:
		c={}
	
	if "otros" in criaturas_lista[i]:
		
		o = criaturas_lista[i]["otros"][0]
		
	else:
		o={}
	
	#propiedades que tendra el nodo criatura
	nodo=Node("Criatura",nombre=criaturas_lista[i].get("nombre",""),
						 nombre_original=criaturas_lista[i].get("nombre_original",""),
						 alimentacion=criaturas_lista[i].get("alimentacion",""),
						 funcion=criaturas_lista[i].get("funcion",""),
						 tiempo_de_vida=criaturas_lista[i].get("tiempo_de_vida",""),
						 habitos=criaturas_lista[i].get("habitos",""),
						 apariencia=c.get("apariencia",""),
						 tamano=c.get("tamano",""),
						 mordida=c.get("mordida",""),
						 propiedades=c.get("propiedades",""),
						 olor=c.get("olor",""),
						 lengua=o.get("lengua",""),
						 habilidades_unicas=o.get("habilidades_unicas",""),
						 otros=o.get("otros",""))
						 
						 
						 
	criaturas_nodos.append(nodo)

#creacion de los nodos criatura,clasificacion, tipo, designacion, reproduccion, adiestrable, venenosa y color
for j in range(len(clasificacion_lista)):
    sgraph.create(clasificacion_nodos[j])

for j in range(len(criaturas_lista)):
    sgraph.create(criaturas_nodos[j])

for j in range(len(tipo_lista)):
    sgraph.create(tipo_nodos[j])

for j in range(len(designacion_lista)):
    sgraph.create(designacion_nodos[j])

for j in range(len(reproduccion_lista)):
    sgraph.create(reproduccion_nodos[j])

for j in range(len(adiestrable_lista)):
    sgraph.create(adiestrable_nodos[j])

for j in range(len(venenosa_lista)):
    sgraph.create(venenosa_nodos[j])

for j in range(len(color_lista)):
    sgraph.create(color_nodos[j])

#creacion de las relaciones entre criaturas y clasificacion
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	rela=criaturas_lista[i].get("clasificacion","unknown")
	for j in range(len(clasificacion_lista)):
		if clasificacion_lista[j]==rela:
			clasificacion_relacion = clasificacion_nodos[j]    
			relacion = Relationship(criatura_relacion, "es_de_clasificacion", clasificacion_relacion)
			sgraph.create(relacion)

#creacion de las relaciones entre criaturas y tipo
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	rela=criaturas_lista[i].get("tipo","unknown")
	for j in range(len(tipo_lista)):
		if tipo_lista[j]==rela:
			tipo_relacion = tipo_nodos[j]    
			relacion = Relationship(criatura_relacion, "es_de_tipo", tipo_relacion)
			sgraph.create(relacion)

#creacion de las relaciones entre criaturas y designacion
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	rela=criaturas_lista[i].get("designacion","unknown")
	for j in range(len(designacion_lista)):
		if designacion_lista[j]==rela:
			designacion_relacion = designacion_nodos[j]    
			relacion = Relationship(criatura_relacion, "es_de_designacion", designacion_relacion)
			sgraph.create(relacion)

#creacion de las relaciones entre criaturas y reproduccion
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	rela=criaturas_lista[i].get("reproduccion","unknown")
	for j in range(len(reproduccion_lista)):
		if reproduccion_lista[j]==rela:
			reproduccion_relacion = reproduccion_nodos[j]    
			relacion = Relationship(criatura_relacion, "se_reproduce", reproduccion_relacion)
			sgraph.create(relacion)

#creacion de las relaciones entre criaturas y adiestrable
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	if "caracteristicas" in criaturas_lista[i]:
		
		c = criaturas_lista[i]["caracteristicas"][0]
		
	else:
		c={}
	rela=c.get("adiestrable","unknown")
	for j in range(len(adiestrable_lista)):
		if adiestrable_lista[j]==rela:
			adiestrable_relacion = adiestrable_nodos[j]    
			relacion = Relationship(criatura_relacion, "es_adiestrable", adiestrable_relacion)
			sgraph.create(relacion)

#creacion de las relaciones entre criaturas y venenosa
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	if "caracteristicas" in criaturas_lista[i]:
		
		c = criaturas_lista[i]["caracteristicas"][0]
		
	else:
		c={}
	rela=c.get("venenosa","unknown")
	for j in range(len(venenosa_lista)):
		if venenosa_lista[j]==rela:
			venenosa_relacion = venenosa_nodos[j]    
			relacion = Relationship(criatura_relacion, "es_venenosa", venenosa_relacion)
			sgraph.create(relacion)

#creacion de las relaciones entre criaturas y color
for i in range(len(criaturas_lista)):
	criatura_relacion = criaturas_nodos[i]
	if "caracteristicas" in criaturas_lista[i]:
		
		c = criaturas_lista[i]["caracteristicas"][0]
		
	else:
		c={}
	rela=c.get("color","unknown")
	for j in range(len(color_lista)):
		if color_lista[j]==rela:
			color_relacion = color_nodos[j]    
			relacion = Relationship(criatura_relacion, "es_de_color", color_relacion)
			sgraph.create(relacion)

region_nodos=[]
paises=["Spain","Portugal","France","Belgium","Luxembourg",
        "Netherlands","Germany","Denmark","Poland","Italy",
		"Greece","Sweden","Austria","Hungary","Croatia",
		"Romania","Turkey","Bulgaria","Andorra","Monaco",
		"Vatican City","San Marino","Switzerland","Czech Republic","Slovenia",
		"Slovakia","Liech","Lux","Serbia","Macedonia",
		"Armenia","Georgia","Azerbaijan","Finland","Estonia",
		"Norway","Lithuania","Latvia","Belarus","Ukraine",
		"Moldova"]
contadores=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
verificar=0

#creacion de los paises de europa
for i in paises:
	nodo=Node("Region",nombre=i)
	region_nodos.append(nodo)
	sgraph.create(nodo)

#agregar criaturas a paises de forma random
for i in range(len(criaturas_lista)):
	lista=[]
	verificar=0
	rango=random.randint(0,10)
	for j in range(rango):
		numero=random.randint(0,40)
		if((numero not in lista) and (contadores[numero] <10)):
			lista.append(numero)
			contadores[numero]=contadores[numero]+1
			criatura_random= criaturas_nodos[i]
			paises_random= region_nodos[numero]
			insert= Relationship(criatura_random, "se_encuentra_en", paises_random)
			sgraph.create(insert)
			verificar=verificar+1
	if(verificar<1):
		numero2=random.randint(0,40)
		criatura_random= criaturas_nodos[i]
		paises_random= region_nodos[numero2]
		insert= Relationship(criatura_random, "se_encuentra_en", paises_random)
		sgraph.create(insert)

#relaciones entre paises
for i in range(40):
	km=random.randint(1,100)
	insert1=Relationship(region_nodos[i], "conectado_con", region_nodos[i+1], distancia=km)
	sgraph.create(insert1)
	insert2=Relationship(region_nodos[i+1], "conectado_con", region_nodos[i], distancia=km)
	sgraph.create(insert2)

km=random.randint(1,100)
insert1=Relationship(region_nodos[3], "conectado_con", region_nodos[10], distancia=km)
sgraph.create(insert1)
insert2=Relationship(region_nodos[10], "conectado_con", region_nodos[3], distancia=km)
sgraph.create(insert2)

km=random.randint(1,100)
insert1=Relationship(region_nodos[5], "conectado_con", region_nodos[0], distancia=km)
sgraph.create(insert1)
insert2=Relationship(region_nodos[0], "conectado_con", region_nodos[5], distancia=km)
sgraph.create(insert2)

km=random.randint(1,100)
insert1=Relationship(region_nodos[23], "conectado_con", region_nodos[40], distancia=km)
sgraph.create(insert1)
insert2=Relationship(region_nodos[40], "conectado_con", region_nodos[23], distancia=km)
sgraph.create(insert2)

km=random.randint(1,100)
insert1=Relationship(region_nodos[15], "conectado_con", region_nodos[8], distancia=km)
sgraph.create(insert1)
insert2=Relationship(region_nodos[8], "conectado_con", region_nodos[15], distancia=km)
sgraph.create(insert2)

km=random.randint(1,100)
insert1=Relationship(region_nodos[3], "conectado_con", region_nodos[37], distancia=km)
sgraph.create(insert1)
insert2=Relationship(region_nodos[37], "conectado_con", region_nodos[3], distancia=km)
sgraph.create(insert2)

km=random.randint(1,100)
insert1=Relationship(region_nodos[15], "conectado_con", region_nodos[4], distancia=km)
sgraph.create(insert1)
insert2=Relationship(region_nodos[4], "conectado_con", region_nodos[15], distancia=km)
sgraph.create(insert2)