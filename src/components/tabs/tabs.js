import cn from 'classnames';
import propTypes from 'prop-types';

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
  tabs: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    label: propTypes.string.isRequired
  }).isRequired).isRequired,
  activeId: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired
};
