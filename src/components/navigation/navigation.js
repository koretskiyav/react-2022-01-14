import Tabs from "../tabs";
import styles from './navigation.module.css';
export const BASKET_TABS = 'BASKET_TABS';

function Navigation({tabs, onChangeTabs, activeId}) {
    return (
        <div className={styles.navigation}>
            <Tabs tabs={tabs} onChange={onChangeTabs} activeId={activeId} />
            <div className={styles.basket}>
                <span
                    className={(activeId === BASKET_TABS) ? styles.active : ''}
                    onClick={() => onChangeTabs(BASKET_TABS)}
                >Basket</span>
            </div>
        </div>
    );
}

export default Navigation;