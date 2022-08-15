

import './News.scss';
import Text from '../../../components/Text/Text';

import tintuc1 from '../../../assets/images/tintuc/tintuc1.svg';
import tintuc2 from '../../../assets/images/tintuc/tintuc2.svg';
import tintuc3 from '../../../assets/images/tintuc/tintuc3.svg';
import tintuc4 from '../../../assets/images/tintuc/tintuc4.svg';
import Link from '../../../components/Link/Link';
import OptionCard4 from '../../../features/OptionCard4/OptionCard4';

const News = () => {

    const newsArray = [
        {
            title: 'Các phương pháp xét nghiệm cúm A và vai trò trong việc kiểm soát bệnh',
            image: tintuc1,

        },
        {
            title: 'Chuyên gia giải đáp: Khi nào cần phẫu thuật khối u ung thư?',
            image: tintuc2,

        },
        {
            title: 'Chế độ ăn của người tiểu đường chuẩn theo hướng dẫn của bác sĩ',
            image: tintuc3,

        },
        {
            title: 'Bác sĩ tư vấn: Bà bầu uống gì để tăng nước ối nhanh?',
            image: tintuc4,
        },

    ]

    return (
        <div className="news" >
            <div className='news-header'>
                <Text text={'Tin tức'} fontWeight={'500'} />
                <Link url={'https://google.com'} title={'Tất cả'} />
            </div>
            <div className='news-wrap'>
                {newsArray.map((news, index) => {
                    return (
                        <div className='news-item' key={index}>
                            <OptionCard4 image={news.image} title={news.title} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default News;