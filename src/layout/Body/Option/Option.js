

import './Option.scss';
import BackgroundLard from '../../../components/BackgroundLarg/BackgroundLarg';
import Text from '../../../components/Text/Text';

import goikham1 from '../../../assets/images/goikham/goikham1.svg';
import goikham2 from '../../../assets/images/goikham/goikham2.svg';
import goikham3 from '../../../assets/images/goikham/goikham3.svg';
import goikham4 from '../../../assets/images/goikham/goikham4.svg';
import OptionCard2 from '../../../features/OptionCard2/OptionCard2';
import Link from '../../../components/Link/Link';

const Option = () => {

    const optionsArray = [
        {
            title: 'Gói tiêm chủng dành cho trẻ em',
            image: goikham1,
            price: '3.200.000',
            salePrice: '2.800.000',
            percent: '10'
        },
        {
            title: 'Gói xét nghiệm cơ bản cho Nam',
            image: goikham2,
            price: '2.795.000',
            salePrice: '2.600.000',
            percent: '10'
        },
        {
            title: 'Gói khám tiền hôn nhân cơ bản cho nữ',
            image: goikham3,
            price: '2.770.000',
            salePrice: '2.429.000',
            percent: '12'
        },
        {
            title: 'Gói sàng lọc trước sinh NIPT BASIC',
            image: goikham4,
            price: '2.900.000',
            salePrice: '2.610.000',
            percent: '10'
        },

    ]

    return (
        <div className="option" >
            <div className='option-header'>
                <Text text={'Gói khám'} fontWeight={'500'} />
                <Link url={'https://google.com'} title={'Tất cả'} />
            </div>
            <div className='option-wrap'>
                {optionsArray.map((option, index) => {
                    return (
                        <div className='option-item' key={index}>
                            <OptionCard2 image={option.image} text={option.title} price={option.price} salePrice={option.salePrice} percent={option.percent} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Option;