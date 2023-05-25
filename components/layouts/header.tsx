import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layouts/navigation";

const Header = () => {
    const inputChangedHandler = (event: any) => {
        const updatedKeyword = event.target.value;
        // May be call for search result
    }

    return (
        <header className="s-header">
            <div className="row s-header__content">
                <div className="s-header__logo">
                    <Link className="logo" href="/">
                        <Image src="/images/logo.svg" alt="Homepage" width={400} height={400} priority/>
                    </Link>
                </div>
                <Navigation></Navigation>

                <Link className="s-header__toggle-menu" href="#0" title="Menu"><span>Menu</span></Link>
                <div className="s-header__search">
                    <form role="search" method="get" className="s-header__search-form" action="#">
                        <label>
                            <span className="hide-content">Search for:</span>
                            <input type="search" className="s-header__search-field"
                                   onChange={(event) => inputChangedHandler(event)}
                                   placeholder="Type Keywords" defaultValue="" name="s" title="Search for:"
                                   autoComplete="off"/>
                        </label>
                        <input type="submit" className="s-header__search-submit" defaultValue="Search"/>
                    </form>
                    <a href="#0" title="Close Search" className="s-header__overlay-close">Close</a>
                </div>
                <a className="s-header__search-trigger" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M10 18a7.952 7.952 0 004.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0018 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z">
                        </path>
                    </svg>
                </a>
            </div>
        </header>
    );
}
export default Header;