
import './Body.scss'
import Banner from "./Banner/Banner";
import Choice from "./Choice/Choice";
import Location from "./Loction/Location";
import News from "./News/News";
import Option from "./Option/Option";
import InviteCard from '../../features/InviteCard/InviteCard';
import Invite from './Invite/Invite';


const Body = () => {


    return (
        <div className="body" >
            <Choice />
            <Banner />
            <Option />
            <Location />
            <News />
            <Invite />
        </div>
    )
}

export default Body;