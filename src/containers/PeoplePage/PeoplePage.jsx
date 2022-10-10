import { useEffect, useState } from 'react';

import { getApiResource, changeHTTP } from '../../utils/network';
// import { WithErrorApi } from '../../hoc-helpers/withError';
import { API_PEOPLE } from '../../constants/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import  PeopleList from '../../components/PeoplePage/PeopleList';
import { useQueryParams } from '../../hooks/useQueryParams';
import PeopleNavigation from '../../components/PeoplePage/PeopleNavigation/PeopleNavigation';

import styles from './PeoplePage.module.css';

const PeoplePage = () => {
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [errorApi, setErrorApi] = useState(false);
  const [counterPage, setCounterPage] = useState(1);


  const query = useQueryParams();
  const queryPage = query.get('page');
  

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
        const peopleList = res.results.map(({ name, url }) => {
          const id = getPeopleId(url);
          const img = getPeopleImage(id)

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }

  };

  useEffect(() => {
    getResource(API_PEOPLE+queryPage);
  }, []);

  return (
    <>
      {errorApi 
       ? <h2 className="header__text">Error</h2> 
       : (
          <>
          <PeopleNavigation 
          getResource={getResource}
          prevPage={prevPage} 
          nextPage={nextPage}
          counterPage={counterPage}/>
          {people && <PeopleList people={people} />}
          </>
       )}
    </>
  );
};

export default PeoplePage;