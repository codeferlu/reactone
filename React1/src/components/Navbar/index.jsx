import './style.css'
const Navbar = (props) => {
    return (
        <nav className='mynav'>
            <ul>
                {
                    props.links.map(link)   
                }
            </ul>
        </nav>
    )
}
export default Navbar