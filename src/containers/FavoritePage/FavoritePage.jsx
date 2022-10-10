import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import PeopleList from '../../components/PeoplePage/PeopleList/PeopleList';

import styles from './FavoritePage.module.css';



const FavoritePage = () => {
  const [people, setPeople] = useState([])
  const storeData = useSelector(state => state.favoriteReducer);

  useEffect(() => {
    const arr = Object.entries(storeData);
    
    if (arr.length) {
        const res = arr.map(item => {
          return {
            id: item[0],
            ...item[1]
          }
        })

        setPeople(res);
    }
  }, []);

  return (
    <>
      <h1 className="header__text">FavoritePage</h1>
      <PeopleList people={people} />
    </>
  )
}

export default FavoritePage;