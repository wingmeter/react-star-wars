import { useLocation } from 'react-router-dom';
import img from './img/cbimage.png';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  let location = useLocation();

  return (
      <>
          <img src={img} alt="notFound" className={styles.img} />
          <p className={styles.text} >No match for <u>{location.pathname}</u></p>
      </>
  )
}

export default NotFoundPage;