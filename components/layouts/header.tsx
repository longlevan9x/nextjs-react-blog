import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/layouts/navigation";
import Search from "@/components/layouts/search";

const Header = () => {
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

                <Search></Search>
            </div>
        </header>
    );
}
export default Header;