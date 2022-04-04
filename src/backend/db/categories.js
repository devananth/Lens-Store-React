import { v4 as uuid } from "uuid";
// import "../../../public/Assets";
/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "DSLR",
    brands: ["Canon", "Nikon", "Sony", "Panasonic"],
    description:
      "DSLR camera allows you to see the exact image you're shooting directly through the viewfinder, allowing you to visualize and capture your scenes better.",
    image:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1647842871/LensStore/Categories/cameraSales_onqshx.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Tripods",
    brands: ["DIGITEK", "Photron"],
    description:
      "Tripods are used for both motion and still photography to prevent camera movement and provide stability.",
    image:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1647842880/LensStore/Categories/tripods_jpxmud.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Lens",
    brands: ["Canon", "Nikon", "Sony", "Panasonic"],
    description:
      "Lens is a tool used to bring light to a fixed focal point, it lens directs light to a digital sensor",
    image:
      "https://res.cloudinary.com/dhshzqkzm/image/upload/v1647842872/LensStore/Categories/lens_wclqky.jpg",
  },
];
