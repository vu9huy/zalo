

import Icon from '../../components/Icon/Icon';
import Text from '../../components/Text/Text';
import './PrimaryButton.scss'


const PrimaryButton = ({ normalIcon, activeIcon, text, normalColor, activeColor, active }) => {

    return (
        <div className="primary-button" >
            {active || <div className='primary-button-normal'>
                <div className='primary-button-icon'>
                    <Icon icon={normalIcon} />
                </div>
                <div className='primary-button-text'>
                    <Text text={text} color={normalColor} />
                </div>
            </div>}
            {!active || <div className='primary-button-active'>
                <div className='primary-button-icon'>
                    <Icon icon={activeIcon} />
                </div>
                <div className='primary-button-text'>
                    <Text text={text} color={activeColor} />
                </div>
            </div>}

        </div>
    )
}

export default PrimaryButton;