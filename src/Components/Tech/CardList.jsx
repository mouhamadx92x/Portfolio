import React from "react";
import CardsListCss from "./cardList.module.css";
import Cards from "./Cards";
import { useState } from "react";

const CardList = () => {

const [value1,setvalue1]=useState(0)
const [value2,setvalue2]=useState(0)
const [value3,setvalue3]=useState(0)
  const myProjects = [
    {
      id: 1,
      name: "pro1",
      date: "01/01/2023",
      img: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 2,
      name: "pro2",
      date: "01/01/2023",
      img: "https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 3,
      name: "pro3",
      date: "01/01/2023",
      img: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 4,
      name: "pro4",
      date: "01/01/2023",
      img: "https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 5,
      name: "pro5",
      date: "01/01/2023",
      img: "https://images.pexels.com/photos/1996333/pexels-photo-1996333.jpeg?cs=srgb&dl=pexels-helena-lopes-1996333.jpg&fm=jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
    {
      id: 6,
      name: "pro6 ",
      date: "01/01/2023",
      img: "https://www.treehugger.com/thmb/kaA2K_9wVzTbPIyCRm3-oZuy6k0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/horse.primary-e9a47e1c486c4fb7bf729e05b59cf0df.jpg",
      describe:
        "Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor",
    },
  ];

  return (
    <div className={CardsListCss.container}>
      {myProjects.map((project) => (

        <Cards value={project} />
      ))}
    </div>
  );
};

export default CardList;
