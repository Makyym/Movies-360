import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { RiMovie2AiLine } from "react-icons/ri";

const activeLink = ({ isActive}) => {
    return clsx(s.link, isActive && s.active);
};

const Navigation = () => {
    return (
        <div className={s.navDiv}>
        <h3>
            <RiMovie2AiLine />
            Screen360
        </h3>
        <nav>
            <NavLink to="/" className={activeLink}>
                Home
            </NavLink>
            <NavLink to="/movies" className={activeLink}>
                Search
            </NavLink>
            <NavLink to="/favorites" className={activeLink}>
                Favorites
            </NavLink>
        </nav>
        </div>
    )
}

export default Navigation