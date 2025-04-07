import Dolce from "../assets/dolce.jpg";
import Invictus from "../assets/invictus.avif";
import Sauvage from "../assets/sauvage.jpg";
import Versace from "../assets/versace.jpg";

//Women
import Belle from "../assets/women/belle.webp";
import Bloom from "../assets/women/bloom.jpg";
import Carolina from "../assets/women/Carolina.avif";
import Chanel from "../assets/women/Chanel.webp";
import Adore from "../assets/women/jadore.webp";
import Yves from "../assets/women/yves.jpg";

//Men
import BadBoy from "../assets/men/BadBoy.webp";
import BlueChanel from "../assets/men/BlueChanel.webp";
import Creed from "../assets/men/Creed.webp";
import Profondo from "../assets/men/profondo.webp";
import YvesMen from "../assets/men/yvesMen.webp";

//Unisex
import Francis from "../assets/unisex/francis.webp";
import Tom from "../assets/unisex/tom.jpg";
import Water from "../assets/unisex/water.jpg";

//Detais
import dolce_gabana1 from "../assets/dolce_gabana1.jpg";
import dolce_gabana2 from "../assets/dolce_gabana2.jpg";
import dolce_gabana3 from "../assets/dolce_gabana3.jpg";
import sauvage1 from "../assets/sauvage1.jpg";
import versace1 from "../assets/versace1.jpg";
import versace2 from "../assets/versace2.jpg";

export const news = [
  {
    id: 1,
    img: Dolce,
    imgs: [dolce_gabana1, dolce_gabana2, dolce_gabana3],
    name: "Dolce & Gabbana Pour Homme",
    description:
      "Una fragancia clásica y sofisticada con notas frescas de cítricos, lavanda y tabaco, perfecta para el hombre elegante y seguro de sí mismo. Su aroma versátil se adapta a cualquier ocasión, desde reuniones de negocios hasta salidas nocturnas, dejando una estela inconfundible de distinción y carisma.",
    price: "1,150.00",
    category: "news",
  },
  {
    id: 2,
    img: Invictus,
    name: "Invictus by Paco Rabanne",
    description:
      "Una esencia energética y moderna con notas marinas, toronja y ámbar gris, diseñada para quienes irradian confianza y poder. Su frescura inigualable y su base cálida hacen de este perfume una opción ideal para el hombre dinámico y competitivo que siempre busca destacar.",
    price: "2,150.00",
    category: "news",
  },
  {
    id: 3,
    img: Sauvage,
    imgs: [sauvage1],
    name: "Sauvage Dior",
    description:
      "Un perfume intenso y versátil con una mezcla fresca de bergamota, pimienta y ambroxan, ideal para cualquier ocasión. Su combinación de especias y notas cítricas lo convierten en un aroma vibrante y masculino, diseñado para el hombre moderno y audaz.",
    price: "2,420.00",
    category: "news",
  },
  {
    id: 4,
    img: Versace,
    imgs: [versace1, versace2],
    name: "Versace Eros",
    description:
      "Versace Eros es una fragancia masculina intensa y seductora, con notas frescas de menta y limón, un corazón aromático de haba tonka y un fondo cálido de madera de cedro y vainilla. Inspirado en el amor y la pasión, este perfume es ideal para quienes buscan un aroma magnético y envolvente que resalte su personalidad irresistible.",
    price: "1,400.00",
    category: "news",
  },
];
export const women = [
  {
    id: 1,
    img: Chanel,
    name: "Chanel No. 5",
    description:
      "Floral aldehídico clásico con notas de jazmín, rosa y vainilla.",
    price: "3,800.00",
    category: "women",
  },
  {
    id: 2,
    img: Adore,
    name: "Dior J'adore",
    description: "Elegante y femenino, combina ylang-ylang, jazmín y pera.",
    price: "3,680.00",
    category: "women",
  },
  {
    id: 3,
    img: Belle,
    name: "Lancôme La Vie Est Belle",
    description:
      "Dulce y gourmand con iris, praliné, vainilla y grosella negra.",
    price: "3,550.00",
    category: "women",
  },
  {
    id: 4,
    img: Carolina,
    name: "Carolina Herrera Good Girl",
    description: "Oriental-floral con almendra, café, cacao y jazmín sambac.",
    price: "3,550.00",
    category: "women",
  },
  {
    id: 5,
    img: Yves,
    name: "Yves Saint Laurent Libre",
    description: "Floral-lavanda con vainilla, flor de azahar y toque cítrico.",
    price: "4,000.00",
    category: "women",
  },
  {
    id: 6,
    img: Bloom,
    name: "Gucci Bloom",
    description: "Intenso floral con nardos, jazmín y raíz de lirio.",
    price: "1,500.00",
    category: "women",
  },
];
export const men = [
  {
    id: 1,
    img: Sauvage,
    name: "Dior Sauvage",
    description: "Fresco y especiado con bergamota, pimienta y ambroxan.",
    price: "2,820.00",
    category: "men",
  },
  {
    id: 2,
    img: BlueChanel,
    name: "Chanel Bleu de Chanel",
    description: "Amaderado-aromático con incienso, jengibre y cítricos.",
    price: "4,750.00",
    category: "men",
  },
  {
    id: 3,
    img: Creed,
    name: "Creed Aventus",
    description:
      "Frutal-amaderado con piña, manzana, musgo de roble y ámbar gris.",
    price: "10,800.00",
    category: "men",
  },
  {
    id: 4,
    img: Profondo,
    name: "Acqua di Giò Profumo (Armani)",
    description: "Acuático-amaderado con incienso, bergamota y pachulí.",
    price: "3,799.09",
    category: "men",
  },
  {
    id: 5,
    img: YvesMen,
    name: "Yves Saint Laurent La Nuit de L'Homme",
    description: "Dulce-especiado con cardamomo, lavanda y vetiver.",
    price: "1,500.00",
    category: "men",
  },
  {
    id: 6,
    img: BadBoy,
    name: "Carolina Herrera Bad Boy",
    description: "Oriental-amaderado con cacao, tonka y pimienta negra.",
    price: "1,500.00",
    category: "men",
  },
];

export const unisex = [
  {
    id: 1,
    img: Tom,
    name: "Tom Ford Black Orchid",
    description:
      "Floral-oriental con trufa, orquídea negra, incienso y chocolate.",
    price: "1,500.00",
    category: "unisex",
  },
  {
    id: 2,
    img: Francis,
    name: "Maison Francis Kurkdjian Baccarat Rouge 540",
    description: "Dulce y ambarado con azafrán, jazmín y ámbar gris.",
    price: "7,190.00",
    category: "unisex",
  },
  {
    id: 3,
    img: Water,
    name: "Byredo Gypsy Water",
    description: "Amaderado-cítrico con incienso, vainilla y enebro.",
    price: "1,500.00",
    category: "unisex",
  },
];
