import Text from "../../components/Text/Text";
import './OptionCard1.scss'

const OptionCard1 = ({ image, text, color }) => {

    return (
        <div className="option-card-1" >
            <div className="wrap-option-card-1 background" style={{ backgroundImage: "url(" + image + ")" }}>
                <Text text={text} color={color} />
            </div>
        </div>
    )
}

export default OptionCard1;