import './Icon.scss'

const Icon = ({ icon }) => {

    return (
        <div className="icon">
            <img src={icon} />
        </div>
    )
}

export default Icon;