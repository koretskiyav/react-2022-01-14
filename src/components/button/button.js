import PropTypes from 'prop-types';

import styles from './button.module.css';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
};

const Button = ({ icon, ...props }) => {
  const Icon = icons[icon];
  return (
    <button className={styles.button} {...props}>
      {Icon && <Icon />}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  'data-id': PropTypes.string
};

export default Button;
