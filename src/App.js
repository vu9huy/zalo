
import './App.scss';
import BackgroundLarg from './components/BackgroundLarg/BackgroundLarg.js';
import Icon from './components/Icon/Icon';
import Link from './components/Link/Link';
import Percent from './components/Percent/Percent';
import SalePrice from './components/SalePrice/SalePrice';
import Price from './components/Price/Price';
import Select from './components/Select/Select';
// image
import background from './assets/images/qr-med/qr-code-med.svg'
import normalIcon from './assets/icons/feature.svg'
import activeIcon from './assets/icons/feature-active.svg'
import Search from './features/Search/Search';
import LargText from './components/LargText/LargText';
import Text from './components/Text/Text';
import OptionCard1 from './features/OptionCard1/OptionCard1';
import OptionCard2 from './features/OptionCard2/OptionCard2';
import OptionCard3 from './features/OptionCard3/OptionCard3';
import OptionCard4 from './features/OptionCard4/OptionCard4';
import InviteCard from './features/InviteCard/InviteCard';
import PrimaryButton from './features/PrimaryButton/PrimaryButton';
import Choice from './layout/Body/Choice/Choice';
import Banner from './layout/Body/Banner/Banner';
import Option from './layout/Body/Option/Option';
import Location from './layout/Body/Loction/Location';
import News from './layout/Body/News/News';
import Body from './layout/Body/Body';
import Header from './layout/Header/Header';
import Home from './Page/Home/Home';


function App() {

  const cityArray = [{ name: 'Hà Nội', slug: 'hanoi' }, { name: 'Huế', slug: 'hue' }]

  const textColor = '#4D4D4D'

  return (
    <div className="App">
      {/* <BackgroundLarg image={background} /> */}
      {/* <Icon icon={icon} /> */}
      {/* <Link title={'Tất cả'} url={'https://www.google.com/'} /> */}
      {/* <Percent number={'10'} /> */}
      {/* <SalePrice salePrice={'2.429.000'} /> */}
      {/* <Price price={'2.429.000'} /> */}
      {/* <Select name={'city'} valueArray={cityArray} /> */}
      {/* <Text text={'test'} color={'#fff'} fontWeigth={'600'} /> */}
      {/* <LargText text={'dsdsd'} color={'#ccc'} fontWeigth={'600'} /> */}
      {/* <OptionCard1 image={background} text={'Khám tại viện'} color={'#fff'} /> */}
      {/* <Search /> */}
      {/* <LargText text={'dsdsd'} color={'#ccc'} fontWeigth={'600'} /> */}
      {/* <Search /> */}
      {/* <OptionCard2 image={background} text={'Gói tiêm chủng Vaccine dành cho trẻ em dưới 18 tuổi'} color={'#000'} price={'2.000.000'} salePrice={'1.499.000'} percent={'10'} /> */}
      {/* <OptionCard3 image={background} name={'MEDLATEC Ba Đình'} color={textColor} location={'Số 99 Trích Sài, Tây Hồ, Ba Đình, Hà Nội, Việt Nam'} phone={'1900 56 56 56'} /> */}
      {/* <OptionCard4 image={background} title={'Các phương pháp xét nghiệm cúm A và vai trò trong việc kiểm soát bệnh'} /> */}
      {/* <InviteCard image={background} text={'Mời bạn bè, nhận ngay điểm thưởng'} color={textColor} /> */}
      {/* <PrimaryButton normalIcon={normalIcon} activeIcon={activeIcon} text={'Chức năng'} normalColor={'#6E6E6F'} activeColor={'#1943EF'} active={true} /> */}
      <div className='test'>
        <Home />
      </div>
    </div>
  );
}

export default App;
