import {PostModel} from "@/models/post";
import PostItemCard from "@/components/posts/item-card";

interface PostListCardProps {
    posts: PostModel[]
}

export default function PostListCard({posts}: PostListCardProps) {
    return (
        <>
            {posts.map((post: any, index: number) => (
                <PostItemCard post={post} key={index}></PostItemCard>
            ))}
        </>
    )
}