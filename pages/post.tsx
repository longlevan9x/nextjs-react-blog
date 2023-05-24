import Api from "@/libs/api";
import {GetStaticProps} from "next";
import Main from "@/components/layouts/main";

export const getStaticProps: GetStaticProps = async (context) => {
    const resPosts = await Api.getPosts();
    const posts = resPosts.data;

    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
};

export default function PostPage({posts}: any) {
    return (
        <>
            <Main>
                <section className="s-pageheader">
                    <div className="row current-cat">
                        <div className="column">
                            <h1 className="h2">Category: Lifestyle</h1>
                        </div>
                    </div>
                </section>
                <section className="s-bricks with-top-sep">
                    <div className="masonry">
                        <div className="bricks-wrapper h-group">
                            <div className="grid-sizer"></div>
                            <article className="brick entry format-standard animate-this">

                                <div className="entry__thumb">
                                    <a href="single-standard.html" className="thumb-link">
                                        <img src="images/thumbs/masonry/woodcraft-600.jpg"
                                             srcSet="images/thumbs/masonry/woodcraft-600.jpg 1x, images/thumbs/masonry/woodcraft-1200.jpg 2x"
                                             alt=""/>
                                    </a>
                                </div>

                                <div className="entry__text">
                                    <div className="entry__header">
                                        <div className="entry__meta">
                                <span className="entry__cat-links">
                                    <a href="#">Design</a>
                                    <a href="#">Photography</a>
                                </span>
                                        </div>
                                        <h1 className="entry__title"><a href="single-standard.html">Just a Standard
                                            Format Post.</a></h1>
                                    </div>
                                    <div className="entry__excerpt">
                                        <p>
                                            Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit
                                            id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit
                                            nisi officia aute incididunt velit sint in aliqua cillum in consequat
                                            consequat in culpa in anim.
                                        </p>
                                    </div>
                                </div>

                            </article>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column large-12">
                            <nav className="pgn">
                                <ul>
                                    <li>
                                        <a className="pgn__prev" href="#0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                    <li><a className="pgn__num" href="#0">1</a></li>
                                    <li><span className="pgn__num current">2</span></li>
                                    <li><a className="pgn__num" href="#0">3</a></li>
                                    <li><a className="pgn__num" href="#0">4</a></li>
                                    <li><a className="pgn__num" href="#0">5</a></li>
                                    <li><span className="pgn__num dots">…</span></li>
                                    <li><a className="pgn__num" href="#0">8</a></li>
                                    <li>
                                        <a className="pgn__next" href="#0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                 viewBox="0 0 24 24">
                                                <path
                                                    d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </section>
            </Main>
        </>
    )
}