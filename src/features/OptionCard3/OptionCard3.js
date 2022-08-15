
import Icon from '../../components/Icon/Icon';
import './OptionCard3.scss'
import icon from '../../assets/icons/direct.svg'
import Text from '../../components/Text/Text';

const OptionCard3 = ({ image, color, name, location, phone }) => {

    return (
        <div className="option-card-3" >
            <div className='option-card-3-left'>
                <img src={image} />
            </div>
            <div className='option-card-3-right'>
                <div className='option-card-3-right-top'>
                    <Text text={name} color={color} fontWeight={'600'} />
                    <Icon icon={icon} />
                </div>
                <div className='option-card-3-right-bottom'>
                    <Text text={location} color={color} />
                    <Text text={phone} color={color} />

                </div>
            </div>
        </div>
    )
}

export default OptionCard3;