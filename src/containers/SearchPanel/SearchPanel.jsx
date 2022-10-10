import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { useEffect } from 'react';


import SearchPanelInfo from '../../components/SearchPanel/SearchPanelInfo/SearchPanelInfo';
import { getApiResource } from '../../utils/network';
import { getPeopleId, getPeopleImage  } from '../../services/getPeopleData';
import { API_SEARCH } from '../../constants/api';

import UiInput  from '../../components/UI/UiInput/UiInput';
import styles from './SearchPanel.module.css';

const SearchPanel = () => {
  const [inputSearchValue, setInputSearchValue] = useState('');
  const [people, setPeople] = useState([])

  const getResponse = async param => {
    const res = await getApiResource(API_SEARCH+param);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img
        }
      });

      setPeople(peopleList);
    }
  }

  useEffect(() => {
    getResponse('');
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedGetResponse = useCallback(
    debounce(value => getResponse(value), 300),
    []
  );

  const handleInputChange = value => {
    setInputSearchValue(value);
    debouncedGetResponse(value); 
  }

  return (
    <>
        <h1 className="header__text">SearchPanel</h1>

        <UiInput 
          type="text"
          value={inputSearchValue}
          handleInputChange={handleInputChange}
          placeholder="Input character's name"
          classes={styles.input__search} 
        />
        <SearchPanelInfo people={people}/>
    </>
  )
}

SearchPanel.propTypes = {}

export default SearchPanel;