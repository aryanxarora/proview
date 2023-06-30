import { Carousel } from "@material-tailwind/react";

export default function Slideshow() {
  return (
    <Carousel className="rounded-xl">
      <img
        src="https://www.macleweb.com/immobilier/large_photo/286172971.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.macleweb.com/immobilier/large_photo/286172972.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.macleweb.com/immobilier/large_photo/286172973.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://www.macleweb.com/immobilier/large_photo/286172974.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
