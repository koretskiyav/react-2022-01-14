import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './button.module.css';

import { ReactComponent as PlusIcon } from '../../icons/plus.svg';
import { ReactComponent as MinusIcon } from '../../icons/minus.svg';

const icons = {
  plus: PlusIcon,
  minus: MinusIcon,
};

const Button = ({ icon, ...props }) => {
  const Icon = icons[icon];
  const classes = cn([
    styles.button,
    props.type === 'small' && styles.buttonSmall,
  ]);
  return (
    <button className={classes} {...props}>
      {Icon && <Icon />}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.string,
};

export default Button;
