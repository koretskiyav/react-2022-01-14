import {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import {loadReviews, loadUsers} from '../../redux/actions';
import {
    reviewsErrorSelector,
    reviewsLoadedSelector,
    reviewsLoadingSelector,
    usersErrorSelector,
    usersLoadedSelector,
    usersLoadingSelector
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
    reviews,
    restId,
    reviewsLoading,
    reviewsLoaded,
    reviewsError,
    usersLoading,
    usersLoaded,
    usersError,
    loadReviews,
    loadUsers,
}) => {
    useEffect(() => {
        if (!usersLoading && !usersLoaded) loadUsers();
    }, [usersLoading, usersLoaded,]);
    useEffect(() => {
        if (!reviewsLoading && !reviewsLoaded) loadReviews(restId);
    }, [restId, reviewsLoading, reviewsLoaded,]);

    if (usersLoading || reviewsLoading) return <Loader/>;
    if (!usersLoaded || !reviewsLoaded || usersError || reviewsError) {
        return <p>Не удалось загрузить отзывы о ресторане. Обновите страницу или возвращайтесь завтра :(</p>;
    }

    return (
        <div className={styles.reviews}>
            {reviews.map((id) => (
                <Review key={id} id={id}/>
            ))}
            <ReviewForm restId={restId}/>
        </div>
    );
};

Reviews.propTypes = {
    restId:  PropTypes.string,
    reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
    reviewsLoading: reviewsLoadingSelector(state, props),
    reviewsLoaded:  reviewsLoadedSelector(state, props),
    reviewsError:   reviewsErrorSelector(state, props),
    usersLoading:   usersLoadingSelector(state),
    usersLoaded:    usersLoadedSelector(state),
    usersError:     usersErrorSelector(state),
});

const mapDispatchToProps = {
    loadReviews,
    loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
