import { useState } from 'react';
import Card from './Card'; 
import './App.css';

function App() {
  const arr = [
    {
      user: "shadow__320",
      plat: "insta",
      img: "https://i.pinimg.com/736x/cb/35/92/cb359207e219dfd8934c68544be95937.jpg",
      link: "https://www.instagram.com/shadow__320/"
    },
    {
      user: "shadow__320",
      plat: "discord",
      img: "https://i.pinimg.com/736x/cb/35/92/cb359207e219dfd8934c68544be95937.jpg",
      link: "#"
    },
    {
      user: "shadow320-c",
      plat: "Github",
      img: "https://i.pinimg.com/736x/cb/35/92/cb359207e219dfd8934c68544be95937.jpg",
      link: "https://github.com/search?q=shadow320-c&type=users"
    }
  ];

    return (
       <div className="card-container">
       {arr.map((el, index) => (
         <Card 
         key={index} 
         user={el.user} 
         plat={el.plat} 
         img={el.img} 
         link={el.link} 
        />
       ))}
      </div>
    );

}

export default App;
