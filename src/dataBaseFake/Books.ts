import amalgama from "../assets/species/Amalgama.png";
import pangolin from "../assets/species/Pan_Agon_Glin.jpg";
import elLider from "../assets/ElLider.jpg";

export const BOOKS_OCASO = [
  {
    date: "600.000",
    books: [
      {
        isAvalible: true,
        title: "La Raiz",
        labels: ["Ciencia Ficcion", "Antologia Mitos"],
        icon: "libro",
        saga: "",
        urlRead:
          "https://drive.google.com/file/d/1bhwZrGxOHvXFtD_dhB_kSEhh_TKs6pca/view",
        description:
          "Historia corta que narra los acontecimientos que vivieron los Plestri al descubrir que no estaban solos. En esta historia se presenta al unión de los sectores exteriores para poder defenderse de una amenaza capaz de saltar entre galaxias.",
      },
    ],
  },
  {
    date: "700.000",
    books: [
      {
        isAvalible: true,
        title: "El Sector Muerto: El Fracaso de los antiguos",
        labels: ["Ciencia Ficcion", "Mutantes"],
        icon: "jeringa",
        saga: "",
        urlRead:
          "https://www.amazon.com/-/es/J-J-Jabs-ebook/dp/B0FJ437FJ3/ref=sr_1_1?__mk_es_US=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=389W8FTU1XMU1&dib=eyJ2IjoiMSJ9.M3C4nt9-Ou1kFEGKzi0OvB66YfQlRdyluiJOYllqoDo.-nvsbV9wiBJOePCTyDS3QyBBQ0d6xcdyy2Qb06UJ3ho&dib_tag=se&keywords=sector+muerto&qid=1781296692&s=books&sprefix=sector+muerto%2Cstripbooks-intl-ship%2C244&sr=1-1",
        description:
          "En un Imperio donde crear vida es una herejía, el genetista Betho recibe la misión de terraformar planetas mediante criaturas diseñadas para sobrevivir a cualquier entorno.",
        img: amalgama,
      },
    ],
  },
  {
    date: "700.002",
    books: [
      {
        title: "Nueva Vida",
        isAvalible: false,
        icon: "jeringa",
        labels: ["Ciencia Ficcion", "Mutantes"],
        saga: "",
        description:
          "Betho intenta continuar su vida, cayendo en las reptantes acciones de los Sormiess quienes le han pedido repetir su error nuevamente.",
      },
    ],
  },
  {
    date: "700.002",
    books: [
      {
        title: "La Ultima",
        icon: "libro",
        labels: ["Genesis"],
        saga: "",
        description: "Origen de la Nueva Forja y su gente.",
      },
    ],
  },
  {
    date: "700.200",
    books: [
      {
        title: "La Senda",
        isAvalible: false,
        icon: "pangolin",
        labels: ["Genesis"],
        saga: "",
        description:
          "Historia de trasfondo sobre los Pan Agon Glin y sus creencias.",
      },
    ],
  },
  {
    date: "700.302",
    books: [
      {
        title: "Migajas del Pasado",
        isAvalible: false,
        icon: "pangolin",
        saga: "",
        labels: ["Ciencia Ficción", "Recuentos de la vida", "Cozy"],
        description:
          "Una exploración arqueológica en un planeta muerto por la radiación de su estrella revelará tener vestigios de vida, los protocolos de conservación biológica exigen una revisión profunda del territorio para evitar la pérdida del pasado de quienes no pudieron llegar al presente, pero algo mas se oculta entre las ruinas.",
        img: pangolin,
      },
    ],
  },
  {
    date: "700.314",
    books: [
      {
        title: "Zona Gris",
        isAvalible: false,
        icon: "mantis",
        saga: "Los Cinco Anillos",
        labels: ["Ciencia Ficción", "Aventura", "Acción"],
        description:
          "El trabajo de Lar-ry le lleva a comprar implantes que le permiten pensar con libertad y comprender el mundo a su alrededor. Esto le trae el peso de la libertad, donde el y su gente solo son inferiores en una galaxia mucho mas oscuridad de lo que el creía.",
        img: elLider,
      },
    ],
  },
];
