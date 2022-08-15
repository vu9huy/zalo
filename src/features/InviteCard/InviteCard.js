

import Text from '../../components/Text/Text';
import './InviteCard.scss'


const InviteCard = ({ image, text, color }) => {

    return (
        <div className="invite-card" >
            <div className='invite-card-left'>
                <img src={image} />
            </div>
            <div className='invite-card-right'>
                <Text text={text} color={color} />
                <Text text={'+ 1 MEDPoint'} color={'#1943EF'} fontWeight={'700'} />
            </div>
        </div>
    )
}

export default InviteCard;