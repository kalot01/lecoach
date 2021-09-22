import { useEffect, useState } from "react";
export const Team = () => {
  const query = `
  {
    teamCollection{
      items{
        name,
        job,
        img{
          url
        }
      }
  
    }
  }
  
    `;
  const [teamAPI, setTeamAPI] = useState(null);
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
        setTeamAPI(data.teamCollection.items);
      });
  }, []);

  /* console.log(teamAPI); */

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Notre équipe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          {teamAPI
            ? teamAPI.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img.url} alt="..." className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      {/* We can add some links to facebook and linkedin */}
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
