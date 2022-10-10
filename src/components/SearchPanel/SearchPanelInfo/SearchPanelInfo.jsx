import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './SearchPanelInfo.module.css'

const SearchPanelInfo = ({ people }) =>  (
    <>
        {people.length 
            ? (
                <ul className={styles.list__container}>
                    {people.map(({ id, img, name }) => 
                        <li key={id} className={styles.list__item}>
                            <Link to={`/people/${id}`}>
                                <img src={img} alt={name} className={styles.person__photo}/>
                                <p className={styles.person__name}>{name}</p>
                            </Link>
                        </li>
                    )}
                </ul>
            )
            : <h2 className={styles.person__comment}>No results</h2> 
        }
    </>
)


SearchPanelInfo.propTypes = {
    people: PropTypes.array,
}

export default SearchPanelInfo