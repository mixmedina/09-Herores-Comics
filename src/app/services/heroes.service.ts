import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes:Heroe[] = [
    {
      nombre: "Aquaman",
      bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
      img: "assets/img/aquaman.png",
      aparicion: "1941-11-01",
      casa:"DC",
      poderes:"",
      valor: 150,
      videoUrl:"https://www.youtube.com/embed/FR1V6iRB02w"
    },
    {
      nombre: "Batman",
      bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
      img: "assets/img/batman.png",
      aparicion: "1939-05-01",
      casa:"DC",
      poderes:"",
      valor: 180,
      videoUrl:"https://www.youtube.com/embed/fWQrd6cwJ0A"
    },
    {	
      nombre:	 "América Chávez",
      bio: 	"Procedente de una dimensión utópica, Miss América -junto con Kamala Khan- es uno de los miembros más populares de los Jóvenes Vengadores. Su enorme determinación, su carisma y sus poderosas habilidades serían una adición muy potente a la propuesta de juego de Marvel’s Avengers.",
      img: 	"assets/img/America.png",
      aparicion: 	"1941-11-01",
      casa:	"Marvel",
      poderes:	"fuerza y resistencia superhumana. Resistente a las balas y el fuego. Capacidad de volar, teletransporte y viaje interdimensional.",
      valor: 230,
      videoUrl:"https://www.youtube.com/embed/zlRRlU-yNCQ"
      },	
      {	
      nombre:	 "Ant-Man",
      bio: 	"Hank Pym revolucionó la ciencia y la física con sus partículas Pym, pero su primer experimento fue toda una aventura: quedó atrapado en un hormiguero. Como Ant-Man, Pym tuvo el honor de ser uno de los miembros fundadores de los Vengadores, siendo uno de los miembros clave de la formación clásica. Desde entonces, ha adoptado toda clase de álter egos, incluyendo el Hombre Gigante, Goliat, Avispa o Chaqueta Amarilla.",
      img: 	"assets/img/Ant-Man.png",
      aparicion: 	"1941-11-01",
      casa:	"Marvel",
      poderes:	"Puede cambiar de tamaño a voluntad y su casco le permite comunicarse con los insectos. Cuando reduce su tamaño a escasos centímetros conserva su fuerza original, mientras que al agrandarse gana fuerza en proporción a su masa. Un científico prodigioso y experto luchador.",
      valor: 112,
      videoUrl:"https://www.youtube.com/embed/42h1BHPf0ag"
      },	
      {	
      nombre:	 "La Avispa ",
      bio: 	"Cuando su padre fue asesinado por un alienígena, Janet van Dyne se asoció con el Dr. Hank Pym para obtener venganza. Aquello fue el principio de una dupla superheroica que acabará cruzando sus destinos con Iron man o Thor, fundando finalmente lo que serán los Vengadores. Es más, fue la propia Janet quien propuso el nombre con el que se conocerán los Héroes más poderosos de la Tierra.",
      img: 	"assets/img/la-avispa.png",
      aparicion: 	"1956-11-01",
      casa:	"Marvel",
      poderes:	"Puede cambiar de tamaño a voluntad y sus alas le permiten volar a velocidades de hasta 65 km/h. Puede emitir descargas bioeléctricas capaces de aturdir a su objetivo.",
      valor: 154.45,
      videoUrl:"https://www.youtube.com/embed/vJvhFl2BmJg"
      },	
      {	
      nombre:	 "Bruja Escarlata",
      bio: 	"Hank Pym revolucionó la ciencia y la física con sus partículas Pym, pero su primer experimento fue toda una aventura: quedó atrapado en un hormiguero. Como Ant-Man, Pym tuvo el honor de ser uno de los miembros fundadores de los Vengadores, siendo uno de los miembros clave de la formación clásica. Desde entonces, ha adoptado toda clase de álter egos, incluyendo el Hombre Gigante, Goliat, Avispa o Chaqueta Amarilla.",
      img: 	"assets/img/bruja.png",
      aparicion: 	"1987-10-12",
      casa:	"Marvel",
      poderes:	"Magneto rescató a Wanda y Pietro Maximoff y los incorporó a su Hermandad de Mutantes. Pese a ello, y gracias a la confianza total del Capitán América, los hermanos Maximoff acabarían formando parte de los Vengadores, creando fuertes vínculos dentro del grupo y, a la vez, siendo una de sus aliadas más poderosas.",
      valor: 1509.2,
      videoUrl:"https://www.youtube.com/embed/jVkf5RRJ6Uw"
      },	
      {	
      nombre:	 "Caballero Luna ",
      bio: 	"El dios egipcio Khonshu dio al mercenario Marc Spector habilidades superhumanas con las que sobrevivir y, eventualmente, combatir el crimen. Las similitudes con Batman, de DC Comics, saltan a la vista, pero también juegan a favor del personaje y lo que puede ofrecer en el juego de Square Enix. Tras ayudar a los Vengadores Secretos en Europa se acabaría incorporando a los Vengadores Costa Oeste.",
      img: 	"assets/img/caballero-luna.png",
      aparicion: 	"1990-07-07",
      casa:	"Marvel",
      poderes:	"Experto luchador, piloto, gimnasta y tirador. Posee varias armas modificadas y un alto nivel de entrenamiento en el uso de armas blancas y de largo alcance.",
      valor: 12356.23,
      videoUrl:"https://www.youtube.com/embed/4a4k9YdMghE"
      },	
      {	
      nombre:	 "La Capitana Marvel",
      bio: 	"Presentada originalmente como Miss Marvel, Carol Danvers es una extraordinaria superhumana con poderes que pueden alcanzar proporciones cósmicas. Su ingreso a los vengadores fue durante una batalla desesperada contra Ultrón. Tras numerosos actos heróicos, el propio Capitán América insistió en que se había ganado el derecho a usar el título de capitana.",
      img: 	"assets/img/capitana.png",
      aparicion: 	"1998-09-22",
      casa:	"Marvel",
      poderes:	"su genética es una combinación de genes humanos y kree. Posee la capacidad de volar o absorber y canalizar energía. Además, dispone de una fuerza y resistencia superhumanas.",
      valor: 1564,
      videoUrl:"https://www.youtube.com/embed/MJIz2gf3Wa8"
      },	
      {	
      nombre:	 "Chica Ardilla",
      bio: 	"La jovencísima Doreen Green (quien trabaja a tiempo parcial como niñera para Jessica Jones y Luke Cage) idolatra a Iron Man al punto en el que decidió emprender su propia carrera como superhéroe.  Con el tiempo, su ayuda fue inestimable para acabar con amenazas del calibre del Dr. Muerte, abriéndole las puertas a los Vengadores Grandes Lagos y, posteriormente, los Nuevos Vengadores.",
      img: 	"assets/img/chica-ardilla.png",
      aparicion: 	"1995-09-09",
      casa:	"Marvel",
      poderes:	"mutante con velocidad, resistencia, fuerza, agilidad y reflejos superhumanos. Puede comunicarse con ardillas y dispone de garras, púas retráctiles y una cola prensil.",
      valor: 150.987,
      videoUrl:"https://www.youtube.com/embed/sJwvBLSptTM"
      },	
      {	
      nombre:	 "Daredevil",
      bio: 	"El héroe de la Cocina del infierno declinó numerosas veces la oportunidad de unirse a los Vengadores, pese a que estaba holgadamente cualificado. Sin embargo, fue a petición expresa de Luke Cage, tras rescatar a su hija en un ataque a la Mansión de los Vengadores, cuando Matt Murdock se unió a los Héroes más poderosos de la Tierra.",
      img: 	"assets/img/aquaman.png",
      aparicion: 	"1992-12-12",
      casa:	"Marvel",
      poderes:	"sentidos intensificados a nivel superhumano. Su sentido ‘radar’ le permite tener una imagen mental de todo lo que le rodea. Atleta y gimnasta a nivel olímpico y experto en artes marciales.",
      valor: 9872.2,
      videoUrl:"https://www.youtube.com/embed/2x6QhG-63r4"
      },	
      {	
      nombre:	 "Deadpool",
      bio: 	"Pese a que Deadpool es uno de los pocos antihéroes que no ha formalizado (todavía) su ingreso a los Vengadores en este listado, su estatus de estrella de Marvel le ha asegurado montones de colaboraciones y alianzas muy inesperadas. El mercenario bocazas da demasiado juego como para no llevarlo a los Vengadores de Square Enix.",
      img: 	"assets/img/Deadpool.png",
      aparicion: 	"2002-01-01",
      casa:	"Marvel",
      poderes:	"factor curativo super acelerado. Fuerza, resistencia y agilidad superhumanos. Inmune a los ataques telepáticos. Experto luchador, domina toda clase de armas.",
      valor: 876.45,
      videoUrl:"https://www.youtube.com/embed/-FRgkJWR2W8"
      },	
      {	
      nombre:	 "Dr. Extraño",
      bio: 	"Stephen Extraño no creía en la magia hasta que el destino y un accidente le llevaron ante el Anciano. Su prodigioso talento y su determinación a la hora de acabar con las amenazas mágicas lo acabarán convirtiendo en el Hechicero Supremo y, más tarde, en miembro fundador de los Defensores.",
      img: 	"assets/img/doctor.png",
      aparicion: 	"1935-09-10",
      casa:	"Marvel",
      poderes:	"Experto cirujano. Maestro con las artes de la magia y poseedor de una amplia colección de artefactos místicos. El Dr. Extraño puede realizar proyecciones astrales, crear ilusiones, es telépata y está adiestrado en las artes marciales.",
      valor: 150,
      videoUrl:"https://www.youtube.com/embed/KREBGtEeW9U"
      },	
      {	
      nombre:	 "Luke Cage",
      bio: 	"Criado en las calles de Harlem, Carl Lucas pasó de ladrón de poca monta a héroe de alquiler y, posteriormente, superhéroe y Vengador. A petición de Steve Rogers (Capitán América) seleccionó a los renovados Nuevos Vengadores.",
      img: 	"assets/img/luke.png",
      aparicion: 	"1997-08-09",
      casa:	"Marvel",
      poderes:	"fuerza, resistencia y longevidad superhumanas. Su piel es casi impenetrable y posee un factor de curación acelerado. Experto luchador y atleta dotado.",
      valor: 3543.34,
      videoUrl:"https://www.youtube.com/embed/slugBUJLTxs"
      },	
      {	
      nombre:	 "Mercurio (Quicksilver)",
      bio: 	"La velocidad encarnada. Al igual que su hermana Wanda, Pietro Maximoff inició una carrera criminal de la mano del mutante Magneto. Con el tiempo, los hermanos Maximoff acabarán uniéndose a los Vengadores, siendo su lealtad  su segunda mayor cualidad (solo por detrás de ser la persona más veloz del planeta).",
      img: 	"assets/img/Mercurio.png",
      aparicion: 	"1986-03-06",
      casa:	"Marvel",
      poderes:	"Su velocidad le permite correr más rápido que la luz e incluso atravesar objetos a nivel molecular. Además, posee longevidad, resistencia y fuerza sobrehumanas.",
      valor: 150.98,
      videoUrl:"https://www.youtube.com/embed/TJGMGdEDkEg"
      },	
      {	
      nombre:	 "Pantera Negra (Black Panther)",
      bio: 	"El Rey de la nación de Wakanda se ha asociado con algunos de los máximos superhéroes de la Tierra, incluyendo los Cuatro Fantásticos, los Vengadores o los Illuminati. Un aliado esencial en las batallas más delicadas, no solo por sus sobresalientes capacidades individuales y para el combate, sino por sus enormes dotes de liderazgo y capacidad estratégica.",
      img: 	"assets/img/Pantera.png",
      aparicion: 	"1965-07-09",
      casa:	"Marvel",
      poderes:	"resistencia, velocidad, sentidos y fuerza superhumanos. Su traje de vibranium le da un extra de resistencia y sus guantes son capaces de generar dagas de energía y disolver otros materiales. Es un genio de la ciencia, la estrategia y las artes marciales.",
      valor: 345.67,
      videoUrl:"https://www.youtube.com/embed/JK-wAfAvJ0g"
      },	
      {	
      nombre:	 "Spider-Woman",
      bio: 	"Los orígenes de Spider-Woman tienen poco que ver con los de Peter Parker: sus poderes son fruto de un experimento genético de sus padres (científicos de Hydra) y fue entrenada por Taskmaster (Supervisor). Afortunadamente, Jessica no tardó en enderezar su vida y convertirse en una heroína. Iron Man y la Avispa la invitaron a formar parte de los Vengadores, aunque su incorporación oficial tendría lugar tras los acontecimientos de la invasión skrull.",
      img: 	"assets/img/spider-woman.png",
      aparicion: 	"1990-01-01",
      casa:	"Marvel",
      poderes:	"puede lanzar descargas eléctricas. Además, cuenta con fuerza, agilidad, velocidad y resistencia superhumana. Es experta luchadora, inmune a los venenos, posee la habilidad de volar y adherirse a las paredes e incluso produce una feromona capaz de atraer a los hombres.",
      valor: 150,
      videoUrl:"https://www.youtube.com/embed/qWQIhvomkRs"
      },	    
      {
      nombre: "Wolverine",
      bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
      img: "assets/img/wolverine.png",
      aparicion: "1976-07-15",
      casa: "Marvel",
      poderes: "",
      valor: 150,
      videoUrl:"https://www.youtube.com/embed/zVErgcoIno8"
    }
  ];

  constructor() {
    console.log("Servicio listo para usar!!!");
  }


  getHeroes():Heroe[]{
    return this.heroes;
  }

  getHeroe( idx: number ){
    return this.heroes[idx];
  }
  

  buscarHeroes( termino:string ):Heroe[]{

    let heroesArr:Heroe[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.heroes.length; i ++ ){

      let heroe = this.heroes[i];

      let nombre = heroe.nombre.toLowerCase();

      if( nombre.indexOf( termino ) >= 0  ){
        heroe.idx = i;
        heroesArr.push( heroe )
      }

    }

    return heroesArr;

  }


}


export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  poderes: string;
  idx?: number;
  valor: number;
  videoUrl: string
};
