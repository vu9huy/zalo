import './SalePrice.scss'

const SalePrice = ({ salePrice }) => {
    return (
        <div className="saleprice">
            <span>{salePrice}đ</span>
        </div>
    )
}

export default SalePrice;