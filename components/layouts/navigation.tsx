import Link from "next/link";
import {usePathname} from "next/navigation";

const navigations = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Blog',
        path: '/post',
    },
    {
        title: 'Tag',
        path: '/tag',
    },
];

export default function Navigation() {
    const pathname = usePathname();

    return (
        <>
            <nav className="s-header__nav-wrap">
                <h2 className="s-header__nav-heading h6">Site Navigation</h2>
                <ul className="s-header__nav">
                    {navigations.map((nav, index: number) => (
                        <li className={(pathname === nav.path) ? 'current' : ''} key={index}>
                            <Link href={nav.path} title={nav.title}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>
                <Link href="#0" title="Close Menu" className="s-header__overlay-close close-mobile-menu">Close</Link>
            </nav>
        </>
    )
}