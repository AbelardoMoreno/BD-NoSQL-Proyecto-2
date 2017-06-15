/////////////////////////consulta1////////////////////////////////////
//       Elabore una consulta que muestre los animales              //
//             que posean dos características dadas                 //
 //       (Adiestrable, Color, Venenosa, Reproduccion)              //
//////////////////////////////////////////////////////////////////////


MATCH (c:Color{color:'verde'})<-[es_de_color]-(n)-[es_adiestrable]->(v:Adiestrable{adiestrable:'no'}) 
return n, c, v


/////////////////////////consulta2////////////////////////////////////
//			     Dada una característica, mostrar                   //
//			     todas las criaturas que la posean                  //
//          (Adiestrable, Color, Venenosa, Reproduccion)            //
//////////////////////////////////////////////////////////////////////

MATCH (c:Reproduccion{reproduccion:'oviparo'})<-[se_reproduce]-(n) 
return n, c


/////////////////////////consulta3////////////////////////////////////
//                  Dada una criatura, mostrar                      //
//          todas aquellas que comparten su mismo tipo.             //
//////////////////////////////////////////////////////////////////////

MATCH (c:Criatura{nombre:'salamander'})-[l:es_de_tipo]->(t:Tipo)<-[l2:es_de_tipo]-(r:Criatura) 
return r,t

/////////////////////////consulta4////////////////////////////////////
//              	Mostrar cuál es el tipo de criatura             //
//				cuyo promedio de vida media sea el más alto.        //
//////////////////////////////////////////////////////////////////////

MATCH (c:Criatura)-[d:es_de_tipo]->(t:Tipo)
RETURN t, 
       AVG(toFloat(c.tiempo_de_vida)) As promedio_de_vida
    ORDER BY promedio_de_vida DESC
    SKIP 11
    LIMIT 1

/////////////////////////consulta5////////////////////////////////////
//	        Recibiendo por consola el identificador de              //
//      un país origen, destino y de una criatura, determinar       //
// el camino más largo que se puede tomar sin encontrar al animal.  //
//////////////////////////////////////////////////////////////////////

MATCH (d:Region),(cria:Criatura{nombre: 'ghost'})
WHERE NOT (cria)-[:se_encuentra_en]->(d)
WITH d
MATCH path=shortestPath((p1:Region{nombre:'Netherlands'})-[*0..10]->(p2:Region{nombre:'Italy'}))
WHERE path<>d
RETURN path

MATCH (d:Region),(cria:Criatura{nombre: 'ghost'})
WHERE NOT (cria)-[:se_encuentra_en]->(d)
WITH d
MATCH (a:Region), (b:Region)
WHERE a.nombre = 'Netherlands' AND b.nombre= 'Italy'
WITH a,b,d
MATCH p=(a)-[*]-(b)
WHERE NOT ((a)<-[:se_encuentra_en]-(d) OR (d)-[:se_encuentra_en]->(b) )
RETURN p, length(p) ORDER BY length(p) DESC LIMIT 1

MATCH (d:Region),(cria:Criatura{nombre: 'ghost'})
WHERE NOT (cria)-[:se_encuentra_en]->(d)
WITH d
MATCH (a:Region), (b:Region)
WHERE a.nombre = 'Netherlands' AND b.nombre= 'Italy'
WITH a,b,d
MATCH p=(a)-[*]-(b)
WHERE ALL(x IN NODES(p) WHERE SINGLE(y IN NODES(p) WHERE y = x))
RETURN p, length(p) ORDER BY length(p) DESC LIMIT 1

/////////////////////////consulta6////////////////////////////////////
//        Dado el identificador de una criatura, se debe            //
// devolver los dos países más cercanos entre sí, que lo contengan. //
//////////////////////////////////////////////////////////////////////

MATCH (pais1:Region), (pais2:Region), (c:Criatura{nombre:'ghoul'})
MATCH p=(pais1)-[:conectado_con]->(pais2)
WHERE (c)-[:se_encuentra_en]->(pais1) AND (c)-[:se_encuentra_en]->(pais2)
WITH p,reduce(s = 0, r IN rels(p) | s + r.distancia) AS dist
RETURN p, dist ORDER BY dist ASC
LIMIT 1


MATCH (m)<-[c:se_encuentra_en]-(n:Criatura)-[s:se_encuentra_en]->(l)
WITH m,l,n
MATCH (m)<-[c:conectado_con]-(l)
return m,l,n
/////////////////////////explain//////////////////////////////////////
PROFILE MATCH (n:Criatura) WHERE n.lengua='humano' RETURN n