

import './Choice.scss';

import option1 from '../../../assets/images/option/option1.svg';
import option2 from '../../../assets/images/option/option2.svg';
import option3 from '../../../assets/images/option/option3.svg';
import option4 from '../../../assets/images/option/option4.svg';
import OptionCard1 from '../../../features/OptionCard1/OptionCard1';
const Choice = () => {
    const choicesArray = [
        {
            title: 'Khám tại viện',
            image: option1
        },
        {
            title: 'Xét nghiệm tại nhà',
            image: option2
        },
        {
            title: 'Khám sức khỏe doanh nghiêp',
            image: option3
        },
        {
            title: 'Lịch hẹn của tôi',
            image: option4
        },

    ]


    return (
        <div className="choice" >
            {choicesArray.map((choice, index) => {
                return (
                    <div className='choice-item' key={index}>
                        <OptionCard1 image={choice.image} text={choice.title} color={'#fff'} />
                    </div>
                )
            })}
        </div>
    )
}

export default Choice;