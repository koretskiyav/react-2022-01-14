import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { orderAnswerSelector, orderErrorSelector } from '../../redux/selectors';
import Button from '../button/button';


function OrderStatus(answer, error){
    const status = answer.answer || answer.error || error.error;
    return( 
       <div> 
           {status}
           <Link to={"/restaurants"}>
                <Button primary block>
                    Вернуться на главную
                </Button>    
           </Link>

       </div> 
    );
};

const mapStateToProps = (state) => ({
    answer: orderAnswerSelector(state),
    error: orderErrorSelector(state),
})

export default connect(mapStateToProps)(OrderStatus);