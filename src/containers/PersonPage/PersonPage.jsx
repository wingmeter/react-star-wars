import PropTypes from "prop-types";
import { useParams } from "react-router";
import React, { useEffect, useState, Suspense } from "react";
import { useSelector } from "react-redux";

import PersonInfo from "../../components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "../../components/PersonPage/PersonPhoto/PersonPhoto";
// import PersonFillms from '../../components/PersonPage/PersonFilms/PersonFillms';
import PersonLinkBack from "../../components/PersonPage/PersonLinkBack/PersonLinkBack";

import { API_PERSON } from "../../constants/api";
import { getApiResource } from "../../utils/network";
import { getPeopleImage } from "../../services/getPeopleData";

import UiLoading from "../../components/UI/UiLoading/UiLoading";

import styles from "./PersonPage.module.css";

const PersonFillms = React.lazy(() =>
  import("../../components/PersonPage/PersonFilms/PersonFillms")
);

const PersonPage = ({ id }) => {
  const [personId, setPersonId] = useState(null);
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhoto] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);
  const [personFavorite, setPersonFavorite] = useState(false);

  const storeData = useSelector((state) => state.favoriteReducer);

  const params = useParams();

  useEffect(() => {
    (async () => {
      const id = params.id;
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      setPersonId(id);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.height },
          { title: "Mass", data: res.mass },
          { title: "Eye Color", data: res.eye_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Hair Color", data: res.hair_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);
        setPersonPhoto(getPeopleImage(id));

        res.films.length && setPersonFilms(res.films);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />

      <div className={styles.wrapper}>
        <span className={styles.person__name}>{personName}</span>

        <div className={styles.container}>
          <PersonPhoto
            personPhoto={personPhoto}
            personName={personName}
            personId={personId}
            personFavorite={personFavorite}
            setPersonFavorite={setPersonFavorite}
          />

          {personInfo && <PersonInfo personInfo={personInfo} />}

          {personFilms && (
            <Suspense fallback={<UiLoading />}>
              <PersonFillms personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonPage;

// height: "167"
// mass: "75"
// eye_color: "yellow"
// hair_color: "n/a"
// skin_color: "gold"
// birth_year: "112BBY"
// gender: "n/a"
// name: "C-3PO"

// films: (6) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/4/', 'https://swapi.dev/api/films/5/', 'https://swapi.dev/api/films/6/']
