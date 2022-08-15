import './Percent.scss'

const Percent = ({ number }) => {

    return (
        <div className="percent">
            <span>-{number}%</span>
        </div>
    )
}

export default Percent;