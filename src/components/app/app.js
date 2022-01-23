import {PureComponent} from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import PropTypes from "prop-types";

export default class App extends PureComponent {
    static propTypes = {
        restaurants: PropTypes.array.isRequired
    }

    render() {
        const {restaurants} = this.props;

        return (
            <div>
                <Header/>
                <Restaurants restaurants={restaurants}/>
            </div>
        );
    }
}
