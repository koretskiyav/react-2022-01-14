import {connect} from "react-redux";
import {
    checkoutErrorSelector,
    checkoutMessageSelector,
} from "../../redux/selectors";
import {backHistory} from "../../redux/actions";

const Message = ({message, error, backHistory}) => {
    return(<div>
        <h1>{message || error}</h1>
            {error ? <button onClick={backHistory}>Back</button> : null}
        </div>

    );
};

const mapStateToProps = (state) => ({
    message: checkoutMessageSelector(state),
    error: checkoutErrorSelector(state),
});

const mapDispatchToProps = {
    backHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(Message);