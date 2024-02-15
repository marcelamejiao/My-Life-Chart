import { useLocation, NavLink  } from "react-router-dom";

type Props = {
    pathName: string;
    linkText: string
};

const HoverableNavLink = ({ pathName, linkText }: Props) => {
    const location = useLocation();

    return (
        <NavLink
            to={pathName}
            className={`hover:border-b border-orange-400 p-1 ${location.pathname === pathName ? "border-b" : ""}`}>
            {linkText}
        </NavLink>
    );
};

export default HoverableNavLink;