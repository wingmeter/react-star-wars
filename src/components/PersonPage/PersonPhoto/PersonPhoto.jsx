import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import {
  setPersonToFavorite,
  removePersonToFavorite,
} from "../../../store/actions/index";
import iconFavorite from './img/star.png';
import iconFavoriteFill from './img/star (1).png';

import styles from "./PersonPhoto.module.css";

const PersonPhoto = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}) => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(
        setPersonToFavorite({
          [personId]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setPersonFavorite(true);
    }
  }

  return (
    <>
      <div className={styles.container}>
        <img 
          className={styles.photo} 
          src={personPhoto} 
          alt={personName} 
        />

        <img 
          src={personFavorite ? iconFavoriteFill :  iconFavorite}
          onClick={dispatchFavoritePeople}
          className={styles.favorite} 
          alt="iconStar"
        />
      </div>
    </>
  );
};

PersonPhoto.propTypes = {
  personName: PropTypes.string,
  personPhoto: PropTypes.string,
  personId: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
};

export default PersonPhoto;
