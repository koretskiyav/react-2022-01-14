import {ReactComponent as Star} from '../icons/star.svg';

import styles from './rate.module.css';

export default function ({value,}) {
    const rate = Math.round(value);
    const stars = [...new Array(5),]
        .map((item, idx) => <Star
            className={[
                styles.icon,
                idx + 1 <= rate ? styles.filled : styles.empty,
            ].join(' ')}
            key={idx}/>);

    return (
        <div className={styles.stars}>{stars}</div>
    );
};