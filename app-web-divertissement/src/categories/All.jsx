import { useState } from 'react'
import { createPortal } from "react-dom"
import ModalContent from '../components/ModalContent'
import inception from '../assets/inception.jpeg'
import shawshank from '../assets/Shawshank-Featured.jpg'
import pulpfiction from '../assets/pulpfiction.jpg'
import thedarknight from '../assets/thedarknight.jpeg'
import notime from '../assets/no_time_to_die.jpg'
import spider from '../assets/sp-1.jpg'
import shangchi from '../assets/Shang-Chi.jpg'
import french from '../assets/The-French-Dispatch.jpg'
import dune from '../assets/dune.jpg'
import matrix from '../assets/matrix.jpg'
import breakingbad from '../assets/breaking.jpg'
import gameofthrones from '../assets/gameoft.jpg'
import strangerthings from '../assets/stranger-things.jpg'
import thewire from '../assets/thewire.jpg'
import peakyblinders from '../assets/peaky.jpg'
import westworld from '../assets/westworld.jpg'
import theoffice from '../assets/theoffice.webp'
import thewitcher from '../assets/thewitcher.jpg'
import narcos from '../assets/narcos.jpg'
import better from '../assets/better.jpg'
import { IoSearchOutline } from "react-icons/io5";
import { GoBookmark } from "react-icons/go";
import { MdOutlineLocalMovies } from "react-icons/md";

export default function All() {
  const  allCategory = [
    { id: 1, photo: inception, title: 'Inception', category: "movie", ageRating:"10+", year: 2019, genre:"SF/Action", synopsis: "Dom Cobb est un voleur expérimenté – le meilleur qui soit dans l’art périlleux de l’extraction : sa spécialité consiste à s’approprier les secrets les plus précieux d’un individu, enfouis au plus profond de son subconscient, pendant qu’il rêve et que son esprit est particulièrement vulnérable. Très recherché pour ses talents dans l’univers trouble de l’espionnage industriel, Cobb est aussi devenu un fugitif traqué dans le monde entier qui a perdu tout ce qui lui est cher...", realisateur: "Christopher Nolan",},
    { id: 2, photo: shawshank, title: 'The Shawshank Redemption', category: "movie", ageRating: "7+", year: 1994, genre:"Thriller/Policier", synopsis: "Red, condamné à perpétuité, et Andy Dufresne, un gentil banquier injustement condamné pour meurtre, se lient d'une amitié inattendue qui va durer plus de vingt ans. Ensemble, ils découvrent l'espoir comme l'ultime moyen de survie. Sous des conditions terrifiantes et la menace omniprésente de la violence, les deux condamnés à perpétuité récupèrent leurs âmes et retrouvent la liberté dans leurs cœurs.", realisateur:"Frank Darabont"},
    { id: 3, photo: pulpfiction, title: 'Pulp Fiction', category: "movie", ageRating: "12+", year: 1994, genre:"Crime/Thriller", synopsis: "Trois destins improbables s'entremêlent au ceur de ma jungle hollywoodienne dans cette odyssée graphique, sanglante et burlesque signée Quentin Tarantino.", realisateur: "Quentin Tarantino"},
    { id: 4, photo: thedarknight, title: 'The Dark Knight', category: "movie", ageRating: "7+", year: 2008, genre:"Action/Crime", synopsis: "Dans ce nouveau volet, Batman augmente les mises dans sa guerre contre le crime. Avec l'appui du lieutenant de police Jim Gordon et du procureur de Gotham, Harvey Dent, Batman vise à éradiquer le crime organisé qui pullule dans la ville. Leur association est très efficace mais elle sera bientôt bouleversée par le chaos déclenché par un criminel extraordinaire que les citoyens de Gotham connaissent sous le nom de Joker.", realisateur:"Christopher Nolan"},
    { id: 5, photo: notime, title: 'No Time to Die', category: "movie", ageRating: "12+", year: 2021, genre:"Action/Aventure", synopsis: "Dans NO TIME TO DIE, Bond a quitté les services secrets et coule des jours heureux en Jamaïque. Mais sa tranquillité est de courte durée car son vieil ami Felix Leiter de la CIA débarque pour solliciter son aide : il s'agit de sauver un scientifique qui vient d'être kidnappé. Mais la mission se révèle bien plus dangereuse que prévu et Bond se retrouve aux trousses d'un mystérieux ennemi détenant de redoutables armes technologiques…", realisateur: "Cary Joji Fukunaga"},
    { id: 6, photo: spider, title: 'Spider-Man: No Way Home', category: "movie", ageRating: "7+", year: 2008, genre:"Action/SF", synopsis: "Pour la première fois dans son histoire cinématographique, Spider-Man, le héros sympa du quartier est démasqué et ne peut désormais plus séparer sa vie normale de ses lourdes responsabilités de super-héros. Quand il demande de l'aide à Doctor Strange, les enjeux deviennent encore plus dangereux, le forçant à découvrir ce qu'être Spider-Man signifie véritablement.", realisateur: "Jon Watts"},
    { id: 7, photo: shangchi, title: 'Shang-Chi and the Legend of the Ten Rings', category: "movie", ageRating: "7+", year: 2021, genre:"Action/Aventure", synopsis: "Shang-Chi va devoir affronter un passé qu’il pensait avoir laissé derrière lui lorsqu’il est pris dans la toile de la mystérieuse organisation des dix anneaux.", realisateur: "Destin Daniel Cretton"},
    { id: 8, photo: french, title: 'The French Dispatch', category: "movie", ageRating: "7+", year: 2021, genre:"Comédie/Romance", synopsis: "The French Dispatch met en scène un recueil d’histoires tirées du dernier numéro d’un magazine américain publié dans une ville française fictive du 20e siècle.", realisateur: "Wes Anderson"},
    { id: 9, photo: dune, title: 'Dune', category: "movie", ageRating: "7+", year: 2021, genre:"SF/Aventure", synopsis: "L'histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur la planète la plus dangereuse de l'univers – la seule à même de fournir la ressource la plus précieuse au monde, capable de décupler la puissance de l'humanité. Tandis que des forces maléfiques se disputent le contrôle de cette planète, seuls ceux qui parviennent à dominer leur peur pourront survivre…", realisateur: "Denis Villeneuve"},
    { id: 10, photo: matrix, title: 'The Matrix Resurrections', category: "movie", ageRating: "7+", year: 2021, genre:"Action/SF", synopsis: "MATRIX RESURRECTIONS nous replonge dans deux réalités parallèles – celle de notre quotidien et celle du monde qui s’y dissimule. Pour savoir avec certitude si sa réalité propre est une construction physique ou mentale, et pour véritablement se connaître lui-même, M. Anderson devra de nouveau suivre le lapin blanc. Et si Thomas... Neo... a bien appris quelque chose, c’est qu’une telle décision, quoique illusoire, est la seule manière de s’extraire de la Matrice – ou d’y entrer... Bien entendu, Neo sait déjà ce qui lui reste à faire...", realisateur: "Lana Wachowski"},
    { id: 11, photo: breakingbad, title: 'Breaking Bad', category: 'series', ageRating: '16+', year: 2008, genre: 'Crime/Drama', synopsis: "Walter White, 50 ans, est professeur de chimie dans un lycée du Nouveau-Mexique. Pour subvenir aux besoins de Skyler, sa femme enceinte, et de Walt Junior, son fils handicapé, il est obligé de travailler doublement. Son quotidien déjà morose devient carrément noir lorsqu'il apprend qu'il est atteint d'un incurable cancer des poumons. Les médecins ne lui donnent pas plus de deux ans à vivre.", realisateur: "Vince Gilligan"},
    { id: 12, photo: gameofthrones, title: 'Game of Thrones', category: 'series', ageRating: '18+', year: 2011, genre: 'Action/Drama', synopsis: "Il y a très longtemps, à une époque oubliée, une force a détruit l'équilibre des saisons. Dans un pays où l'été peut durer plusieurs années et l'hiver toute une vie, des forces sinistres et surnaturelles se pressent aux portes du Royaume des Sept Couronnes. La confrérie de la Garde de Nuit, protégeant le Royaume de toute créature pouvant provenir d'au-delà du Mur protecteur, n'a plus les ressources nécessaires pour assurer la sécurité de tous. Après un été de dix années, un hiver rigoureux s'abat sur le Royaume avec la promesse d'un avenir des plus sombres. Pendant ce temps, complots et rivalités se jouent sur le continent pour s'emparer du Trône de Fer, le symbole du pouvoir absolu.", realisateur: "D.B. Weiss, David Benioff"},
    { id: 13, photo: strangerthings, title: 'Stranger Things', category: 'series', ageRating: '14+', year: 2016, genre: 'Drama/Fantasy', synopsis: "A Hawkins, en 1983 dans l'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d'amitié avec la demoiselle tatouée du chiffre 11 sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…", realisateur: "Matt Duffer, Ross Duffer"},
    { id: 14, photo: thewire, title: 'The Wire', category: 'series', ageRating: '16+', year: 2002, genre: 'Crime/Drama', synopsis: "Quand la police s'efforce de démanteler un réseau tentaculaire de trafic de drogue et du crime à Baltimore.", realisateur: "David Simon (II), Ed Burns (II)"},
    { id: 15, photo: peakyblinders, title: 'Peaky Blinders', category: 'series', ageRating: '16+', year: 2013, genre: 'Crime/Drama', synopsis: "En 1919, à Birmingham, soldats, révolutionnaires politiques et criminels combattent pour se faire une place dans le paysage industriel de l'après-Guerre. Le Parlement s'attend à une violente révolte, et Winston Churchill mobilise des forces spéciales pour contenir les menaces.", realisateur: "Steven Knight"},
    { id: 16, photo: westworld, title: 'Westworld', category: 'series', ageRating: '18+', year: 2016, genre: 'Drama/Sci-Fi', synopsis: "À Westworld, un parc d'attractions dernier cri, les visiteurs paient des fortunes pour revivre le frisson de la conquête de l'Ouest. Dolores, Teddy et bien d'autres sont des androïdes à apparence humaine créés pour donner l'illusion et offrir du dépaysement aux clients. Pour ces derniers, Westworld est l'occasion de laisser libre cours à leurs fantasmes. Cet univers bien huilé est mis en péril lorsqu'à la suite d'une mise à jour, quelques robots commencent à adopter des comportements imprévisibles, voire erratiques.", realisateur: "Jonathan Nolan, Lisa Joy"},
    { id: 17, photo: theoffice, title: 'The Office', category: 'series', ageRating: '12+', year: 2005, genre: 'Comedy', synopsis: "Le quotidien d'un groupe d'employés de bureau dans une fabrique de papier en Pennsylvanie. Michael, le responsable régional, pense être le mec le plus drôle du bureau. Il ne se doute pas que ses employés le tolèrent uniquement parce que c'est lui qui signe les chèques. S'efforçant de paraître cool et apprécié de tous, Michael est en fait perçu comme étant pathétique...", realisateur: "Greg Daniels, Paul Lieberstein, Ricky Gervais"},
    { id: 18, photo: thewitcher, title: 'The Witcher', category: 'series', ageRating: '18+', year: 2019, genre: 'Action/Adventure', synopsis: "Adaptation Live de la saga littéraire du Sorceleur.Le sorceleur Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes", realisateur: "Lauren Schmidt Hissrich" },
    { id: 19, photo: narcos, title: 'Narcos', category: 'series', ageRating: '18+', year: 2015, genre: 'Biography/Crime', synopsis: "Loin d’un simple biopic de Pablo Escobar, Narcos retrace la lutte acharnée des États-Unis et de la Colombie contre le cartel de la drogue de Medellín, l’organisation la plus lucrative et impitoyable de l’histoire criminelle moderne. En multipliant les points de vue — policier, politique, judiciaire et personnel — la série dépeint l’essor du trafic de cocaïne et le bras de fer sanglant engagé avec les narcotrafiquants qui contrôlent le marché avec violence et ingéniosité.", realisateur: "Carlo Bernard, Chris Brancato, Doug Miro"},
    { id: 20, photo: better, title: 'Better Call Saul', category: 'series', ageRating: '16+', year: 2015, genre: 'Crime/Drama', synopsis: "Six ans avant de croiser le chemin de Walter White, Saul Goodman, connu sous le nom de Jimmy McGill, est un avocat qui peine à joindre les deux bouts, à Albuquerque, au Nouveau-Mexique. Pour boucler ses fins de mois, il n'aura d'autres choix que se livrer à quelques petites escroqueries. Chemin faisant, il va faire des rencontres qui vont se révéler déterminantes dans son parcours : Nacho Varga, ou encore Mike Ehrmantraut, un criminel spécialisé dans le 'nettoyage', qui deviendra son futur homme de main.", realisateur: "Vince Gilligan, Peter Gould"},
  ]
  
  const [inputValue, setInputValue] = useState('');
  const [selectedFilm, setSelectedFilm] = useState(null);

  const filteredAllCategory = allCategory.filter((all) => (
    inputValue.length === 0 || (inputValue.length >= 4 && all.title.toLowerCase().includes(inputValue.toLowerCase()))
  ));

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const openModal = (film) => {
    console.log('Selected Film:', film);
    setSelectedFilm(film);
  };

  const closeModal = () => {
    setSelectedFilm(null);
  };

  return (
    <div className="m-6 pb-10">
      <div className="flex items-center gap-4 text-[18px] m-4">
        <p className="text-[25px] text-slate-50"><IoSearchOutline /></p>
        <form action="">
          <input
            value={inputValue}
            onChange={handleChange}
            type="text"
            placeholder="Search movies or series TV"
            className="w-96 outline-none bg-transparent text-slate-200"
          />
        </form>
      </div>

      <div className="flex flex-wrap">
      <h1 className="text-3xl text-slate-200 w-full ml-2">
        {inputValue.length > 0 ? (filteredAllCategory.length > 0 ? `Found ${filteredAllCategory.length} result(s)` : "Not found") : "All"}
      </h1>
        {filteredAllCategory.map((datas) => (
          <div
            key={datas.id}
            className=" mobile-responsive flex-shrink-0 lg:w-[23rem]  xl:w-[22rem] sm:w-[47%] md:w-[20rem] ml-2 mr-2 transition-transform transform hover:scale-105"
          >
            <div className="text-slate-50 relative flex justify-end p-2 top-14 mr-1">
              <div className="w-[30px] h-[30px] rounded-[50%] text-center flex items-center justify-center bg-black opacity-60">
                <button><GoBookmark className=" p-1 text-2xl" /></button>
              </div>
            </div>
            <img
              onClick={() => openModal(datas)}
              className="rounded-lg w-full lg:h-48"
              key={datas.id}
              src={datas.photo}
              alt=""
            />
            <ul className="flex items-center text-slate-200 opacity-45 pt-1 text-sm">
              <li>{datas.year}</li>
              <li className='relative top-1 ml-1 mr-1'>°</li>
              <li className="flex items-center gap-1 rounded-sm"><span><MdOutlineLocalMovies /></span>{datas.category}</li>
              <li className='relative top-1 ml-1 mr-1'>°</li>
              <li>{datas.ageRating}</li>
              <li className='relative top-1 ml-1 mr-1'>°</li>
              <li>{datas.genre}</li>
            </ul>
            <h2 className='text-slate-200 font-semibold'>{datas.title}</h2>
          </div>
        ))}
        {selectedFilm && createPortal(<ModalContent closeModal={closeModal} film={selectedFilm} />, document.body)}
      </div>
    </div>
  );
};