
import Icon from '../../components/Icon/Icon';
import './Search.scss';

import searchIcon from '../../assets/icons/search.svg';
const Search = () => {


    return (
        <div className="search">
            <input type='text' className='search-input' placeholder='Tìm kiếm' />
            <Icon icon={searchIcon} />
        </div>
    )
}

export default Search;

