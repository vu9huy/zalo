import Percent from "../../components/Percent/Percent";
import Price from "../../components/Price/Price";
import SalePrice from "../../components/SalePrice/SalePrice";
import Text from "../../components/Text/Text";


import './OptionCard2.scss'

const OptionCard2 = ({ image, text, color, price, salePrice, percent }) => {

    return (
        <div className="option-card-2" >
            <div className="option-card-2-top background" style={{ backgroundImage: "url(" + image + ")" }}>
                <Percent number={percent} />
            </div>
            <div className="option-card-2-bottom background" >
                <Text text={text} color={color} />
                <Price price={price} />
                <SalePrice salePrice={salePrice} />
            </div>
        </div>
    )
}

export default OptionCard2;