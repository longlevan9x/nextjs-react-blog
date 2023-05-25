import PostListCard from "@/components/posts/list-card";
import {PostModel} from "@/models/post";

interface PostListProps {
    posts: PostModel[];
    keyword?: string
}

export default function PostList({posts, keyword}: PostListProps) {
    return (
        <>
            <section className="s-pageheader">
                <div className="row current-cat">
                    <div className="column">
                        <h1 className="h2">
                            {!keyword && 'List post'}
                            {keyword && 'List post: ' + keyword}
                        </h1>
                    </div>
                </div>
            </section>
            <section className="s-bricks with-top-sep">
                <div className="masonry">
                    <div className="bricks-wrapper h-group">
                        <div className="grid-sizer"></div>
                        <PostListCard posts={posts}></PostListCard>
                    </div>
                </div>
                <div className="row is-hidden">
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
        </>
    )
}