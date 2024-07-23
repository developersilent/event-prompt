import newZealand from "@/../public/newzeland.jpg";
import france from "@/../public/france.jpg";
import japan from "@/../public/japan.jpg";
import australia from "@/../public/australia.jpg";
import italy from "@/../public/italy.jpg";
import usa from "@/../public/usa.jpg";
import uk from "@/../public/uk.jpg";
import china from "@/../public/china.jpg";
import india from "@/../public/india.jpg";
import germany from "@/../public/germany.jpg";

interface CountryData {
  id: string;
  name: string;
  intro: string;
  capital: string;
  population: string;
  currency: string;
  language: string;
  flag: string;
  urlPath: string;
}

export const countries: CountryData[] = [
  {
    id: "1",
    name: "New Zealand",
    intro:
      "Discover the natural wonders of New Zealand, from the majestic Southern Alps to the pristine beaches and lush rainforests.",
    capital: "Wellington",
    population: "4.9 million",
    currency: "NZD ",
    language: "English, Māori",
    flag: newZealand.src as string,
    urlPath: "/new-zealand",
  },
  {
    id: "2",
    name: "France",
    intro:
      "Explore the rich history and culture of France, from the iconic Eiffel Tower to the charming villages of Provence.",
    capital: "Paris",
    population: "67 million",
    currency: "Euro (EUR)",
    language: "French",
    flag: france.src as string,
    urlPath: "/france",
  },
  {
    id: "3",
    name: "Japan",
    intro:
      "Experience the unique blend of tradition and modernity in Japan, from the ancient temples of Kyoto to the bustling streets of Tokyo.",
    capital: "Tokyo",
    population: "126 million",
    currency: "Japanese Yen",
    language: "Japanese",
    flag: japan.src as string,
    urlPath: "/japan",
  },
  {
    id: "4",
    name: "Australia",
    intro:
      "Discover the diverse landscapes of Australia, from the rugged Outback to the stunning Great Barrier Reef.",
    capital: "Canberra",
    population: "25 million",
    currency: "Australian Dollar",
    language: "English",
    flag: australia.src as string,
    urlPath: "/australia",
  },
  {
    id: "5",
    name: "Italy",
    intro:
      "Indulge in the art, architecture, and cuisine of Italy, from the ancient ruins of Rome to the picturesque canals of Venice.",
    capital: "Rome",
    population: "60 million",
    currency: "Euro (EUR)",
    language: "Italian",
    flag: italy.src as string,
    urlPath: "/italy",
  },
  {
    id: "6",
    name: "United States",
    intro:
      "Explore the diverse landscapes and vibrant cities of the United States, from the Grand Canyon to New York City.",
    capital: "Washington, D.C.",
    population: "331 million",
    currency: "US Dollar (USD)",
    language: "English",
    flag: usa.src as string,
    urlPath: "/united-states",
  },
  {
    id: "7",
    name: "United Kingdom",
    intro:
      "Discover the historic landmarks and scenic countryside of the United Kingdom, from the castles of Scotland to the cliffs of Dover.",
    capital: "London",
    population: "67 million",
    currency: "British Pound",
    language: "English",
    flag: uk.src as string,
    urlPath: "/united-kingdom",
  },
  {
    id: "8",
    name: "China",
    intro:
      "Experience the ancient traditions and modern innovations of China, from the Great Wall to the skyscrapers of Shanghai.",
    capital: "Beijing",
    population: "1.4 billion",
    currency: "Chinese Yuan",
    language: "Mandarin",
    flag: china.src as string,
    urlPath: "/china",
  },
  {
    id: "9",
    name: "India",
    intro:
      "Explore the vibrant culture and diverse landscapes of India, from the palaces of Rajasthan to the beaches of Goa.",
    capital: "New Delhi",
    population: "1.4 billion",
    currency: "INR",
    language: "Hindi, English",
    flag: india.src as string,
    urlPath: "/india",
  },
  {
    id: "10",
    name: "Germany",
    intro:
      "Discover the historic landmarks and scenic countryside of Germany, from the castles of Bavaria to the bustling streets of Berlin.",
    capital: "Berlin",
    population: "83 million",
    currency: "Euro (EUR)",
    language: "German",
    flag: germany.src as string,
    urlPath: "/germany",
  },
];
