import img1 from "../assets/images/poster1.jpg";
import img2 from "../assets/images/poster2.jpg";
import img3 from "../assets/images/poster3.jpg";
import img4 from "../assets/images/poster4.jpg";
import img5 from "../assets/images/poster5.jpg";
import img6 from "../assets/images/poster6.jpg";
import img7 from "../assets/images/poster7.jpg";
import img8 from "../assets/images/poster8.jpg";
import img9 from "../assets/images/poster9.jpg";
import imgNodata from "../assets/images/poster6.jpg";

export const getImage = (imgName) => {
  switch (imgName) {
    case "poster1.jpg":
      return img1;
    case "poster2.jpg":
      return img2;
    case "poster3.jpg":
      return img3;
    case "poster4.jpg":
      return img4;
    case "poster5.jpg":
      return img5;
    case "poster6.jpg":
      return img6;
    case "poster7.jpg":
      return img7;
    case "poster8.jpg":
      return img8;
    case "poster9.jpg":
      return img9;
    default:
      return imgNodata;
  }
};
