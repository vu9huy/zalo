

import './Footer.scss'
import home from '../../assets/icons/home.svg';
import homeActive from '../../assets/icons/home-active.svg';
import feature from '../../assets/icons/feature.svg';
import featureActive from '../../assets/icons/feature-active.svg';
import help from '../../assets/icons/help.svg';
import helpActive from '../../assets/icons/help-active.svg';
import time from '../../assets/icons/time.svg';
import timeActive from '../../assets/icons/time-active.svg';
import profile from '../../assets/icons/profile.svg';
import profileActive from '../../assets/icons/profile-active.svg';
import PrimaryButton from '../../features/PrimaryButton/PrimaryButton';


const Footer = () => {


    return (
        <div className="footer" >
            <PrimaryButton normalIcon={home} activeIcon={homeActive} text={'Trang chủ'} normalColor={'#6E6E6F'} activeColor={'#1943EF'} active={false} />
            <PrimaryButton normalIcon={feature} activeIcon={featureActive} text={'Chức năng'} normalColor={'#6E6E6F'} activeColor={'#1943EF'} active={true} />
            <PrimaryButton normalIcon={time} activeIcon={timeActive} text={'Tiến trình'} normalColor={'#6E6E6F'} activeColor={'#1943EF'} active={false} />
            <PrimaryButton normalIcon={profile} activeIcon={profileActive} text={'Cá nhân'} normalColor={'#6E6E6F'} activeColor={'#1943EF'} active={false} />
            <PrimaryButton normalIcon={help} activeIcon={helpActive} text={'Trợ giúp'} normalColor={'#6E6E6F'} activeColor={'#1943EF'} active={false} />
        </div>
    )
}

export default Footer;