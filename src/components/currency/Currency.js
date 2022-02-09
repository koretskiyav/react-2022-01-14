import {useContext} from "react";
import {currencyContext} from "../../contexts/currency-context";

export default function Currency ({value}) {

    const { sign } = useContext(currencyContext);
    const currencyValue = (value) ?
        ((sign === '€') ?
            value * 0.87 :
            ((sign === '¥') ?
                value * 115.45 :
                value))?.toFixed(2) :
        '';
    return (
        <span>
            {currencyValue} {sign}
        </span>
    );
}