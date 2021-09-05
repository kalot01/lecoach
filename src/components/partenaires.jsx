import { useEffect, useState } from "react";
export const Partenaires = () => {
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
  const [partenairesAPI, setPartenairesAPI] = useState(null);
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
        }

        // rerender the entire component with new data
        setPartenairesAPI(data.partenairesCollection.items);
      });
  }, []);

  console.log(partenairesAPI);

  return (
    <div id="partenaires" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nos Partenaires</h2>
        </div>
        <div className="row">
          {partenairesAPI
            ? partenairesAPI.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <p> {d.name} </p>
                  <img src={d.img.url} alt="..." className="team-img" />
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
