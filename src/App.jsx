import { useEffect, useState } from "react";
import "./App.css";
import CardProduct from "./components/CardProduct";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TitleSeparator from "./components/TitleSeparator";
import { news, women, men, unisex } from "./data/products";
import Sping from "./components/Spinner";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allFragances = [...news, ...women, ...men, ...unisex];
  console.log(allFragances);

  return (
    <>
      <Header />
      <Navbar />
      <TitleSeparator text={"NOVEDADES"} />
      <section id="Novedades" className="cards-container">
        {news.map((item, index) => {
          return (
            <CardProduct
              key={index}
              id={item.id}
              category={"news"}
              img={item.img}
              description={item.description}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </section>
      <TitleSeparator text={"MUJER"} />
      <section id="Mujer" className="cards-container">
        {women.map((item, index) => {
          return (
            <CardProduct
              key={index}
              id={item.id}
              img={item.img}
              category={"women"}
              description={item.description}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </section>
      <TitleSeparator text={"HOMBRE"} />
      <section id="Hombre" className="cards-container">
        {men.map((item, index) => {
          return (
            <CardProduct
              key={index}
              id={item.id}
              category={"men"}
              img={item.img}
              description={item.description}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </section>
      <TitleSeparator text={"UNISEX"} />
      <section id="Unisex" className="cards-container">
        {unisex.map((item, index) => {
          return (
            <CardProduct
              key={index}
              id={item.id}
              category={"unisex"}
              img={item.img}
              description={item.description}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
