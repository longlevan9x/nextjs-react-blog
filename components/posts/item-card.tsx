import {PostModel} from "@/models/post";
import Link from "next/link";
import Tag from "@/components/common/tag";
import Image from "next/image";

interface PostItemCardProps {
    post: PostModel;
}

export default function PostItemCard({post}: PostItemCardProps) {
    return (
        <>
            <article className="brick entry format-standard animate-this">
                <div className="entry__thumb">
                    <Link href={'/post/' + post.id} className="thumb-link">
                        <Image src={post.cover || '/images/eye.png'}
                             width={600}
                             height={690}
                            // srcSet="/images/thumbs/masonry/woodcraft-600.jpg 1x, /images/thumbs/masonry/woodcraft-1200.jpg 2x"
                            //  alt={post.title}
                            alt=""
                        />
                    </Link>
                </div>
                <div className="entry__text">
                    <div className="entry__header">
                        <div className="entry__meta">
                            <span className="entry__cat-links">
                                <Tag tags={post.tags}></Tag>
                            </span>
                        </div>
                        <h1 className="entry__title">
                            <Link href={`post/${post.id}`}>{post.title}</Link>
                        </h1>
                    </div>
                    <div className="entry__excerpt">
                        <p>
                            {post.description}
                        </p>
                    </div>
                </div>
            </article>
        </>
    )
}