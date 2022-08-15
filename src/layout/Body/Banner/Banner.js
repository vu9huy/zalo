

import './Banner.scss';
import BackgroundLard from '../../../components/BackgroundLarg/BackgroundLarg';
import banner from '../../../assets/images/banner/banner.svg';
import Text from '../../../components/Text/Text';
import LargText from '../../../components/LargText/LargText';


const Banner = () => {

    return (
        <div className="banner" >
            <Text text={'Ưu đãi dành cho bạn'} fontWeight={'500'} />
            <BackgroundLard image={banner} />
        </div>
    )
}

export default Banner;