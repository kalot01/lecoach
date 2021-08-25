import { Header } from "./header";
import { Features } from "./features";
import { About } from "./about";
import { Services } from "./services";
import { Partenaires } from "./partenaires";
import { Testimonials } from "./testimonials";
import { Team } from "./Team";
import { Media } from "./medias";
import { useEffect, useState } from "react";
import JsonData from "../data/data.json";
import React from "react";

const Cockpit = (props) => {
  const query = `
  {
    partenairesCollection{
      items{
        name,
        img{
          url
        }
      }
    }
  }
    `;
  const [page, setPage] = useState(null);
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/4zfn01dlewbo/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer QXCGAEP4XobMDiuPrVlM45OQCKMLU9OBHwGXAJB3eEA",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
          console.log("goooo");
        }

        // rerender the entire component with new data
        setPage(data.partenairesCollection.items);
      });
  }, []);

  console.log(page);

  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team />
      <Media data={landingPageData.Media} />
      <Partenaires />
    </>
  );
};

export default Cockpit;
