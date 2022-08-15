import './Price.scss'

const Price = ({ price }) => {

    return (
        <div className="price">
            <span>{price}đ</span>
        </div>
    )
}

export default Price;