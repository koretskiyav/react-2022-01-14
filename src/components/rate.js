import {ReactComponent as Star} from '../icons/star.svg';

export default function Rate({ rating }) {
    if (rating <= 0 || rating > 5) return (<div/>);

    let starArray = [];
    for (let i = 0; i < rating; i++) {
        starArray.push(<Star/>);
    }
    return starArray;
}