

import './Location.scss';
import Text from '../../../components/Text/Text';

import location1 from '../../../assets/images/coso/coso1.svg';
import location2 from '../../../assets/images/coso/coso2.svg';
import location3 from '../../../assets/images/coso/coso3.svg';
import Link from '../../../components/Link/Link';
import OptionCard3 from '../../../features/OptionCard3/OptionCard3';
import Select from '../../../components/Select/Select';

const Location = () => {

    const locationsArray = [
        {
            name: 'MEDLATEC Ba Đình',
            image: location1,
            location: 'Số 42 - 44 Nghĩa Dũng, Ba Đình, Hà Nội',
            phone: '1900 56 56 56'
        },
        {
            name: 'MEDLATEC Tây Hồ',
            image: location2,
            location: 'Số 99 Trích Sài, Tây Hồ, Hà Nội',
            phone: '1900 56 56 56'
        },
        {
            name: 'MEDLATEC Thanh Xuân',
            image: location3,
            location: 'Số 3 Khuất Duy Tiến, Thanh Xuân, Hà Nội',
            phone: '1900 56 56 56'
        }

    ]

    const cityArray = [{ name: 'Hà Nội', slug: 'hanoi' }, { name: 'Huế', slug: 'hue' }]


    return (
        <div className="location" >
            <div className='location-header'>
                <Text text={'Hệ thống y tế MEDLATEC'} fontWeight={'500'} />
                <Select name={'city'} valueArray={cityArray} />
            </div>
            <div className='location-wrap'>
                {locationsArray.map((location, index) => {
                    return (
                        <div className='location-item' key={index}>
                            <OptionCard3 image={location.image} name={location.name} location={location.location} phone={location.phone} />
                        </div>
                    )
                })}
                <Link url={'https://google.com'} title={'Tất cả'} />
            </div>


        </div>
    )
}

export default Location;