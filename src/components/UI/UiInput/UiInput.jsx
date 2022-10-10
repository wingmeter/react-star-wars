import PropTypes from 'prop-types';
import cn from 'classnames';

import icon from './img/cancel.png';

import '../index.css';
import styles from './UiInput.module.css';

const UiInput = ({
    value,
    handleInputChange,
    placeholder,
    classes,
}) => (
    <div className={cn(styles.wrapper__imput, classes)}>
        <input
            type="text"
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder={placeholder}
            className={styles.input}
        />
        <img 
            onClick={() => value && handleInputChange('')}
            src={icon} 
            alt="cancel"
            className={cn(styles.clear, !value && styles.clear__disabled)}  
        />
    </div>
  )

UiInput.propTypes = {
    value: PropTypes.string,
    handleInputChange: PropTypes.func,
    placeholder: PropTypes.string,
    classes: PropTypes.string
}

export default UiInput;