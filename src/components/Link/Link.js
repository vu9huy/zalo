import './Link.scss'

const Link = ({ title, url }) => {

    return (
        <div className="link">
            <a href={url}>{title}</a>
        </div>
    )
}

export default Link;