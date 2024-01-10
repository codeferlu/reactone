import './style.css'

const Footer = (props) => {
    return (
        <footer className="my-footer">
            <p>Hola desde Footer y mañana es {props.day}</p>
        </footer>
    )
}

export default Footer