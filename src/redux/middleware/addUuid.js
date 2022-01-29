import {ADD_REVIEW} from "../constants";
import uuid from "react-uuid";

export default () => (next) => (action) => {
    if(action.type === ADD_REVIEW) {
        action.values.id = uuid();
        action.values.userId = uuid();
    }
    next(action);
};