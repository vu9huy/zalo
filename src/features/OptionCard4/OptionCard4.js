

import Text from '../../components/Text/Text';
import './OptionCard4.scss'


const OptionCard4 = ({ image, color, title }) => {

    return (
        <div className="option-card-4" >
            <div className='option-card-4-left'>
                <img src={image} />
            </div>
            <div className='option-card-4-right'>
                <Text text={title} color={color} />
            </div>
        </div>
    )
}

export default OptionCard4;