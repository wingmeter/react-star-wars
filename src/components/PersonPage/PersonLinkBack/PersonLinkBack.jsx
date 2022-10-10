import { useNavigate } from 'react-router-dom';
import styles from './PersonLinkBack.module.css';
import arrow from './img/icons8-back-arrow-50.png';

const PersonLinkBack = () => {
    const navigate = useNavigate();
    
    const handleGoBack = e => {
        e.preventDefault();
        navigate(-1);
    }

  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
        href="#"
        onClick={handleGoBack}
        className={styles.link}
    >
        <img src={arrow} alt="goBack" className={styles.link__img} />
        <span>Go back</span>
    </a>
  )
}

export default PersonLinkBack;