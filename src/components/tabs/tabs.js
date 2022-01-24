import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './tabs.module.css';

export default function Tabs({ tabs, activeId, onChange }) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, label }) => (
        <span
          key={id}
          className={cn(styles.tab, { [styles.active]: id === activeId })}
          onClick={() => onChange(id)}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string
  })).isRequired,
  activeId: PropTypes.string,
  onChange: PropTypes.func
};