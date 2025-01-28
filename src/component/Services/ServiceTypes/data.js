import transport from "../../../assets/transport.webp";
import accommodation from "../../../assets/accomodation.jpg";
import guide from "../../../assets/guide.jpg";
import tourPackages from "../../../assets/tourPackages.webp";
import {
  faBus,
  faBed,
  faMapSigns,
  faSuitcaseRolling,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    title: "Transport and Fleet Services",
    desc: "Delivering reliable and efficient transport solutions to ensure a smooth journey, our fleet services cater to all your travel needs with top-notch vehicles and professional drivers, making every trip safe and comfortable.",
    image: transport,
    icon: faBus,
    link: "/transport"
  },
  {
    title: "Accommodation and Stay",
    desc: "Providing a diverse range of accommodation options to suit every traveler's preference, from luxury hotels to cozy homestays, ensuring a restful and enjoyable stay no matter where your journey takes you.",
    image: accommodation,
    icon: faBed,
    link: "/accomodation"
  },
  {
    title: "Tourist Guide Services",
    desc: "Offering expert guide services to enhance your travel experience, our knowledgeable guides provide insightful information, historical context, and local secrets, making every tour an enriching adventure.",
    image: guide,
    icon: faMapSigns,
  link: "/tour"},
  {
    title: "Comprehensive Tour Packages",
    desc: "Crafting bespoke tour packages that cater to your interests and preferences, we take care of all the details, providing a seamless travel experience from start to finish, and creating memories that will last a lifetime.",
    image: tourPackages,
    icon: faSuitcaseRolling,
    link: "/packages"
  },
];

export default data;
