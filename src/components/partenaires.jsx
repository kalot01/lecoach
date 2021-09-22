import { useEffect, useState } from "react";
export const Partenaires = () => {
  // const query = `
  // {
  //   partenairesCollection{
  //     items{
  //       name,
  //       img{
  //         url
  //       }
  //     }
  //   }
  // }
  //   `;
  // const [partenairesAPI, setPartenairesAPI] = useState(null);
  // useEffect(() => {
  //   window
  //     .fetch(`https://graphql.contentful.com/content/v1/spaces/4zfn01dlewbo/`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         // Authenticate the request
  //         Authorization: "Bearer QXCGAEP4XobMDiuPrVlM45OQCKMLU9OBHwGXAJB3eEA",
  //       },
  //       // send the GraphQL query
  //       body: JSON.stringify({ query }),
  //     })
  //     .then((response) => response.json())
  //     .then(({ data, errors }) => {
  //       if (errors) {
  //         console.error(errors);
  //       }

  //       // rerender the entire component with new data
  //       setPartenairesAPI(data.partenairesCollection.items);
  //     });
  // }, []);

  // console.log(partenairesAPI);

  return (
    <div id="partenaires" className="text-center">
      <div className="container partenaire-container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Nos Partenaires</h2>
        </div>
        {/* <div className="row"> */}
        {/* {partenairesAPI
            ? partenairesAPI.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <p> {d.name} </p>
                  <img src={d.img.url} alt="..." className="team-img" />
                </div>
              ))
            : "Loading..."} */}
        <div class="uk-position-relative uk-visible-toggle uk-light " tabindex="-1" data-uk-slideshow="ratio: 7:3; autoplay: true; min-height: 300; max-height: 400">
          <ul class="uk-slideshow-items partenaire-carousel">
            <li>
              <img src="img/melkart.png" alt="" data-uk-cover />
            </li>
            <li>
              <img src="img/melkart.png" alt="" data-uk-cover />
            </li>
            <li>
              <img src="img/melkart.png" alt="" data-uk-cover />
            </li>
          </ul>

          <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-previous uk-slideshow-item="previous"></a>
          <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" data-uk-slidenav-next uk-slideshow-item="next"></a>

        </div>
        {/* </div> */}
      </div>
    </div>
  );
};
