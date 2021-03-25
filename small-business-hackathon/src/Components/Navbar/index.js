import './styles.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="navbar">
            <div className="link-container">
                <Link className="nav-link" to='/'>
                <img className="img-icon" src="https://res.cloudinary.com/gregdusek/image/upload/v1616627358/Hackathon%20files/iconfinder_ic_dashboard_48px_3669363_jsnbjm.svg" alt=""/>
                Dashboard
                </Link>
                <Link className="nav-link" to='/reservations'>
                <img className="img-icon" src="https://res.cloudinary.com/gregdusek/image/upload/v1616627358/Hackathon%20files/iconfinder_calendar-templates_4171942_jxxkxm.svg" alt=""/>
                Reservations</Link>
                <Link className="nav-link" to='/menu'>
                <img className="img-icon" src="https://res.cloudinary.com/gregdusek/image/upload/v1616631213/Hackathon%20files/iconfinder_calendar-o_1608598_3_emw4qq.svg" alt=""/>
                Menu</Link>
                <Link className="nav-link" to='/account'>
                <img className="img-icon" src="https://res.cloudinary.com/gregdusek/image/upload/v1616633802/Hackathon%20files/iconfinder_User_4737448_2_iuhh2p.svg" alt=""/>
                Account</Link>
                <Link className="nav-link" to='/'>
                <img className="img-icon" src="https://res.cloudinary.com/gregdusek/image/upload/v1616627358/Hackathon%20files/iconfinder_logout_4115235_zvdq2d.svg" alt=""/>
                Sign Out</Link>
            </div>
        </div>
    )
}

export default Navbar;