import styles from './restaurant.module.css';
import Rating from './rating';


const Restaurant = ({name, reviews}) => {
  const average = parseInt(reviews.reduce((total, {rating}) => total + rating, 0) / reviews.length * 10); // в процентах 0 - 100%
  // rating * 20 - перевод в проценты

  return (
    <div className={styles.restaurant}>

      <div className={styles.header}>
        <h1 className={styles.title}>{name}</h1>
        {average ? <Rating rating={average}/> : 'unrated'}
      </div>

        {
          reviews.map( ({id, user, text, rating}) => (
              <div key={id} className={styles.reviewer}>
                <p>{text}</p>
                <h3>{user}</h3>
                <div>{<Rating rating={rating * 20}/>}</div>
              </div>
          ))
        }

    </div>
  );
};

export default Restaurant;