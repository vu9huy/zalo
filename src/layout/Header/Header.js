


import Icon from '../../components/Icon/Icon';
import Search from '../../features/Search/Search';
import './Header.scss'
import qrCode from '../../assets/icons/qr-code.png'
import menu from '../../assets/icons/menu.png'


const Header = () => {


    return (
        <div className="header" >
            <div className='search-wrap'>
                <Search />
            </div>
            <Icon icon={qrCode} />
            <Icon icon={menu} />
        </div>
    )
}

export default Header;