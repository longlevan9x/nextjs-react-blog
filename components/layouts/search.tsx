import {useState} from "react";
import {useRouter} from "next/router";

export default function Search() {
    const [keyword, setKeyword] = useState('');

    const router = useRouter();

    const search = () => {
        if (!keyword) {
            return;
        }

        return router.push({pathname: '/post/search', query: {keyword}});
    };

    return (
        <>
            <div className="s-header__search">
                <form role="search" method="get" className="s-header__search-form" action="/post/search">
                    <label>
                        <span className="hide-content">Search for:</span>
                        <input type="search" className="s-header__search-field"
                               placeholder="Type Keywords" value={keyword} name="keyword" title="Search for:"
                               onChange={e => setKeyword(e.target.value)}
                               autoComplete="off"/>
                    </label>
                    <input type="submit" onClick={search} className="s-header__search-submit" defaultValue="Search"/>
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
        </>
    )
}