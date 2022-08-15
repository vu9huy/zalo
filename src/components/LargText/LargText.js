import './LargText.scss';

const LargText = ({ text, color, fontWeigth }) => {

    return (
        <div className="larg-text" style={{ color: color, fontWeigth: fontWeigth }}>
            {text}
        </div>
    )
}

export default LargText;