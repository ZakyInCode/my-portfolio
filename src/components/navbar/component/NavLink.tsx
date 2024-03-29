import Link from "next/link";
import { nav_links } from "../../data/Nav-Link";

const NavLink = () => {
    return (
        <>
            {nav_links.map((item, index) => (
                <Link key={index} href={item.path} className="uppercase">
                    {item.title}
                </Link>
            ))}
        </>
    );
};

export default NavLink;
