import './Text.scss'

const Text = ({ text, color, fontWeight }) => {

    return (
        <div className="text" style={{ color: color, fontWeight: fontWeight }}>
            {text}
        </div>
    )
}

export default Text;