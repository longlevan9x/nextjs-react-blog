const PostList = ({posts}: any) => {
    return (
        <section className="s-bricks">
            <div className="masonry">
                <div className="bricks-wrapper h-group">
                    <div className="grid-sizer"></div>
                    <div className="brick entry featured-grid animate-this">
                        <div className="entry__content">
                            <div className="featured-post-slider">
                                <div className="featured-post-slide">
                                    <div className="f-slide">
                                        <div className="f-slide__background"></div>
                                        <div className="f-slide__overlay"></div>
                                        <div className="f-slide__content">
                                            <ul className="f-slide__meta">
                                                <li>September 06, 2020</li>
                                                <li><a href="#">Naruto Uzumaki</a></li>
                                            </ul>
                                            <h1 className="f-slide__title">
                                                <a href="single-standard.html"
                                                   title="A Practical Guide to a Minimalist Lifestyle.">
                                                    A Practical Guide to a Minimalist Lifestyle.
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-post-slide">
                                    <div className="f-slide">
                                        <div className="f-slide__background"></div>
                                        <div className="f-slide__overlay"></div>
                                        <div className="f-slide__content">
                                            <ul className="f-slide__meta">
                                                <li>September 06, 2020</li>
                                                <li><a href="#">Naruto Uzumaki</a></li>
                                            </ul>
                                            <h1 className="f-slide__title">
                                                <a href="single-standard.html"
                                                   title="A Practical Guide to a Minimalist Lifestyle.">
                                                    A Practical Guide to a Minimalist Lifestyle.d
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="featured-post-slide">
                                    <div className="f-slide">
                                        <div className="f-slide__background"></div>
                                        <div className="f-slide__overlay"></div>
                                        <div className="f-slide__content">
                                            <ul className="f-slide__meta">
                                                <li>September 06, 2020</li>
                                                <li><a href="#">Naruto Uzumaki</a></li>
                                            </ul>
                                            <h1 className="f-slide__title">
                                                <a href="single-standard.html"
                                                   title="A Practical Guide to a Minimalist Lifestyle.">
                                                    A Practical Guide to a Minimalist Lifestyle.s
                                                </a>
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="featured-post-nav">
                                <button className="featured-post-nav__prev">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                                    </svg>
                                </button>
                                <button className="featured-post-nav__next">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                         viewBox="0 0 24 24">
                                        <path
                                            d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {posts.map((post: any, index: number) => (
                        <article className="brick entry format-standard animate-this" key={index}>
                            <div className="entry__thumb">
                                <a href="single-standard.html" className="thumb-link">
                                    <img src={post.cover || '/images/eye.png'}
                                         width={600}
                                         height={690}
                                        // srcSet="/images/thumbs/masonry/woodcraft-600.jpg 1x, /images/thumbs/masonry/woodcraft-1200.jpg 2x"
                                         alt={post.title}/>
                                </a>
                            </div>
                            <div className="entry__text">
                                <div className="entry__header">
                                    <div className="entry__meta">
                                            <span className="entry__cat-links">
                                                {post?.tags?.map((tag: string, index1: number) => {
                                                    <a href="#" key={index1}>{tag}</a>
                                                })}
                                            </span>
                                    </div>
                                    <h1 className="entry__title">
                                        <a href="single-standard.html">{post.title}</a>
                                    </h1>
                                </div>
                                <div className="entry__excerpt">
                                    <p>
                                        {post.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
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
    )
}

export default PostList;