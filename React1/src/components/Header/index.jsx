import './style.css'

const Header = (props) => {
return (
    <header className="my-header">
        <h1>{props.titlenav}</h1>
    </header>
)

}

export default Header