import { v4 as uuidv4 } from "uuid";
import headphones from "../../public/graphics/headphones.png";
import night from "../../public/graphics/night.png";
import book from "../../public/graphics/open-book.png";
import plant from "../../public/graphics/plant.png";
import sofa from "../../public/graphics/sofa.png";
import soundWave from "../../public/graphics/sound-wave.png";
import toolBox from "../../public/graphics/tool-box.png";
import workInProgress from "../../public/graphics/work-in-progress.png";
export const data = [
  {
    id: uuidv4(),
    heading: "2024 >>",
    desc: "This semester you're gonna get all A's. This is your semester.",
    img: headphones,
    altText: "headphones-img",
    rowReverse: false,
  },
  {
    id: uuidv4(),
    heading: "Have fun!",
    desc: "You have that banger schedule this year and you're gonna stick to it and win.",
    img: plant,
    altText: "plant-img",
    rowReverse: true,
  },
  {
    id: uuidv4(),
    heading: "Productivity asf",
    desc: "School?? Too easy.",
    img: workInProgress,
    altText: "work-in-progress-img",
    rowReverse: false,
  },
];
