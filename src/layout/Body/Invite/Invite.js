

import InviteCard from '../../../features/InviteCard/InviteCard';
import './Invite.scss';
import qrMed from '../../../assets/images/qr-med/qr-code-med.svg';

const Invite = () => {

    return (
        <div className="invite" >
            <InviteCard image={qrMed} text={'Mời bạn bè, nhận ngay điểm thưởng'} />
        </div>
    )
}

export default Invite;