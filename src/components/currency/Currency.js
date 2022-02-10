import {useContext} from "react";
import {currencyContext} from "../../contexts/currency-context";
import {EURO, YEN} from "../../redux/constants";

export default function Currency ({value}) {

    const { sign } = useContext(currencyContext);
    const currencyValue = (value) ?
        ((sign === EURO) ?
            value * 0.87 :
            ((sign === YEN) ?
                value * 115.45 :
                value))?.toFixed(2) :
        '';
    return (
        <span>
            {currencyValue} {sign}
        </span>
    );
}