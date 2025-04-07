import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import { men, news, unisex, women } from "../data/products";
import CardProduct from "../components/CardProduct";

const Search = () => {
  const [results, setResults] = useState([]);

  const { query } = useParams();
  useEffect(() => {
    setResults(
      [men, news, unisex, women]
        .flat()
        .filter(
          (obj) =>
            obj.name.toLowerCase().includes(query.toLowerCase()) ||
            obj.description.toLowerCase().includes(query.toLowerCase())
        )
    );
  }, [query]);

  console.log(results);
  return (
    <>
      <Header />
      <Navbar />
      <section className="cards-container" style={{ marginTop: "20px" }}>
        {/* <Spinner /> */}
        {results.length != 0 ? (
          results.map((item, index) => {
            return (
              <CardProduct
                key={index}
                name={item.name}
                category={item.category}
                description={item.description}
                id={item.id}
                img={item.img}
                price={item.price}
              />
            );
          })
        ) : (
          <p
            style={{
              fontSize: "larger",
              width: "calc(92vw)",
              textAlign: "center",
            }}
          >
            No encontramos perfumes que coincidan con tu búsqueda. 🌸 Intenta
            con otro aroma o palabra clave.
          </p>
        )}
      </section>
    </>
  );
};

export default Search;
