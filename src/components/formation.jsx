import { useEffect, useState } from "react";
import parse from "html-react-parser";
import { DateRangePickerCalendar, START_DATE } from "react-nice-dates";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import axios from "axios";

/* import 'react-nice-dates/build/style.css'; */
import "react-nice-dates/build/style.css";

const Formation = (props) => {
  const idForamtion = 0;
  const query = `
  {
    formationCollection(where:{ titre: "La Formation Complète Python"}){
      items{
        titre,
        sousTitre,
        formateur
        prix,
        type,
        dateDebut,
        dateFin
        description{
          json
        }
      }
  
    }
  }    
      `;
  const [loading, setLoading] = useState(true);
  const [formationAPI, setFormationAPI] = useState(null);
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

        setFormationAPI(data.formationCollection.items);
        setLoading(false);
      });
  }, []);

  console.log(loading, "formation api:", formationAPI);
  if (!loading) {
    console.log(formationAPI[idForamtion].description.json);
  }

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/coupons", {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((result) => {
        console.log(result.data);
      });
  }, []);

  const [couponIsValid, setCouponIsValid] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [couponMessage, setCouponMessage] = useState("");
  const [focus, setFocus] = useState(START_DATE);
  const [data, setData] = useState({
    // delete the default data !!
    /* title: loading ? "wait" : formationAPI[0].titre, */
    subtitle: "ou encore des bots d'automatisation.",
    formateur: "Hrigsdf",
    reaminingPlaces: 1998,
    price: 98884.99,
    type: "sdfsdfligne",
    freePlaces: 2,
    description:
      "<div data-purpose='safely-set-inner-html:description:description'><p>Cette formation est entièrement réalisée avec la <strong>version 3</strong> de Python<strong> et régulièrement mise à jour (dernière mise à jour : Avril 2021).</strong></p><p><strong>Avec cette formation vous allez :</strong></p><ul><li><p>Apprendre les bases de Python dans le détail.</p></li><li><p>Apprendre les concepts avancés comme la programmation orientée objet et les environnements virtuels.</p></li><li><p>Utiliser Python pour réaliser différents types de projets (jeux, sites web, applications de bureau, scripts d'automatisation, bot Discord...).</p></li><li><p>Découvrir les bonnes pratiques pour coder comme un professionnel (avec notamment les tests unitaires, les conventions à suivre, l'organisation et la documentation du code).</p></li></ul><p>Cette formation inclue les toutes dernières nouveautés du langage comme les <strong>f-string</strong>, la <strong>nouvelle syntaxe</strong> de l'orienté objet et <strong>les derniers opérateurs</strong> de Python 3.9.</p><p>Cette formation est parfaite pour les débutants complets en programmation ainsi que pour les développeurs qui souhaitent se familiariser avec le langage Python.</p><p><strong>C'est une formation complète</strong> pour devenir développeur : on va voir toute la théorie du langage et comment utiliser Python pour créer des projets professionnels !</p><p>On ne va donc pas s'arrêter à la théorie, et tu auras énormément d'exercices, de quiz et de projets pour tester tes connaissances et les mettre en pratique (<strong>plus de 800 questions de quiz</strong>, dont 2 examens complets de 100 questions à la fin des 2 premières parties).</p><p><strong>◉ La Formation Python la plus avancée</strong></p><p>Dans cette formation Python, tu ne vas pas t'arrêter aux bases du langage.</p><p>Plusieurs parties sont entièrement consacrées aux concepts avancés de Python comme la programmation orientée objet et les tests unitaires.</p><p>Chaque concept de Python est expliqué en détail, avec des vidéos concises qui vont droit au but. Pas de vidéo théorique de 15 minutes dans ce cours !</p><p>On va également voir comment organiser ton code, séparer les différentes parties entre l'API d'un côté et les interfaces de l'autre.</p><p>À la fin de la formation, on va aborder des concepts utilisés dans le milieu professionnel comme les tests unitaires, qui sont indispensables pour décrocher un emploi et développer de façon professionnelle.</p><p><strong>◉ Une vraie expérience pédagogique</strong></p><p>Cette formation Udemy représente une véritable expérience de formation, telle que tu pourrais la retrouver dans un cours en présentiel.</p><p>Dans ce cours, il ne s'agit pas seulement de regarder des vidéos.</p><p>Tu vas pouvoir tester abondamment tes connaissances grâce aux nombreux quiz, exercices pratiques et examens associés à chaque vidéo théorique.</p><p><strong>◉ Une formation qui te montre les forces de Python</strong></p><p>Dans cette formation, j'utilise des bibliothèques qui sont très populaires et utilisées dans le milieu professionnel.</p><p>On ne passera pas du temps à apprendre des bibliothèques qui ne sont pas utilisées par les pro.</p><ul><li><p>Pour le web, on va utiliser <strong>Django</strong>, LE framework le plus puissant, qui est d'ailleurs utilisé par Udemy même !</p></li><li><p>Pour les interfaces graphiques, on va utiliser <strong>Qt for Python</strong> (PySide), qui est la bibliothèque de référence pour les applications de bureau (utilisée par exemple par Spotify ou pour les logiciels d'animation 3D).</p></li><li><p>Pour le traitement de données, on va utiliser <strong>pandas</strong>, la bibliothèque qui permet d'ouvrir des fichiers csv ou excel, de lire les données et les traiter pour faire ce qu'on appelle de la 'science des données'.</p></li></ul><p><strong>◉ Une formation pensée pour les débutants</strong></p><p>Fort de mon expérience d'enseignement en milieu professionnel, j'ai créé cette formation complète avec toujours en tête les étudiants qui vont suivre ce cours.</p><p>Tu retrouveras ainsi de nombreuses parties avec les erreurs courantes à éviter : mon expérience me permet en effet de savoir quelles erreurs tu vas faire, afin de les prévenir et de te les expliquer !</p><p>Cette formation n'est pas une formation comme les autres, j'ai passé plus d'un an à créer le cursus de la formation et à créer les <strong>plus de 400 vidéos </strong>que contient cette formation.</p><p>Il n'y a jamais eu de meilleur moment pour te mettre à Python.</p></div>",
    startDate: new Date("2021-06-27"),
    endDate: new Date("2021-06-30"),
  });

  useEffect(() => {
    // Scroll to the top
    window.scrollTo(0, 0);
    // request data here
  }, []);

  const subscribe = (event) => {
    event.preventDefault();
    // request subscription here
    // if status response is OK
    setData({ ...data, freePlaces: data.freePlaces - 1 });
    // else catch exception
  };

  const handleFocusChange = (newFocus) => {
    setFocus(newFocus || START_DATE);
  };
  function onApplyCouponHandle(ev) {
    setCouponMessage("Vérification...");
    // check if coupon is valid from database/contentful
    const couponIsValid = couponCode == "test";

    if (couponIsValid) {
      setCouponMessage("Coupon appliqué avec succées !");
      setCouponIsValid(true);
      ev.target.disabled = true;
    } else {
      setCouponMessage("Vérifiez votre code");
    }
  }

  return (
    <div>
      <div className="formation-banner">
        <div className="formation-landing-page row">
          <div className="formation-content col-md-8 col-sm-12">
            <div className="formation-title">
              <h1>
                {loading ? "Chargement" : formationAPI[idForamtion].titre}
              </h1>
              <p>
                {loading ? "Chargement" : formationAPI[idForamtion].sousTitre}
              </p>
            </div>

            <div className="formation-formateur">
              <span>Formateur: &nbsp;</span>
              <div>
                {loading ? "Chargement" : formationAPI[idForamtion].formateur}
              </div>
            </div>
            <div className="formation-formateur">
              <span>Type: &nbsp;</span>
              <div>
                {loading ? "Chargement" : formationAPI[idForamtion].type}
              </div>
            </div>
          </div>
          <div className="formation-subscription">
            <span>
              {loading ? "---" : formationAPI[idForamtion].prix}
              <sup> Dt</sup>
            </span>
            {data.freePlaces ? (
              <>
                <a
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={subscribe}
                >
                  S'inscrire <sub>&nbsp;Encore {data.freePlaces} places</sub>{" "}
                </a>
                <div className="couponInputWrapper">
                  <div className="couponInputContainer">
                    <input
                      className="couponInput"
                      disabled={couponIsValid}
                      value={couponCode}
                      placeholder="Ajouter un code coupon"
                      onChange={(ev) => {
                        setCouponCode(ev.target.value);
                      }}
                    ></input>
                    <button
                      className="couponAddButton"
                      onClick={onApplyCouponHandle}
                    >
                      Appliquer
                    </button>
                  </div>
                  {couponMessage ? (
                    <div className="couponMessage">{couponMessage}</div>
                  ) : (
                    <></>
                  )}
                </div>
              </>
            ) : (
              <a className="btn disabled-btn btn-lg " disabled={true}>
                Indisponible
              </a>
            )}
          </div>
        </div>
      </div>
      <hr style={{ width: "50vw" }} />
      <div className="formation-banner">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="formation-title">
              <h1>Description</h1>
            </div>
            <div className="formation-content container">
              {
                /* parse(data.description.replaceAll(". ", ".")) */

                loading
                  ? "---"
                  : documentToReactComponents(
                      formationAPI[idForamtion].description.json
                    )
              }
            </div>
          </div>
          <div className="col-md-4 col-sm-12 formation-date-holder">
            <div className="formation-title">
              <h1>Période de la formation</h1>
            </div>
            <DateRangePickerCalendar
              startDate={
                loading
                  ? new Date("2021-06-20")
                  : new Date(formationAPI[idForamtion].dateDebut)
                /* new Date("2021-09-08T00:00:00.000+01:00") */
              }
              /* {loading ? new Date("2021-06-27") : Date.parse(formationAPI[idForamtion].dateFin)} */
              endDate={
                loading
                  ? new Date("2021-06-27")
                  : new Date(formationAPI[idForamtion].dateFin)
              }
              focus={focus}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formation;
