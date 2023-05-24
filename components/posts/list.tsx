import Link from "next/link";
import {PostModel} from "@/models/post";
import PostItem from "@/components/posts/item";

interface PostListProps {
    posts: PostModel[]
}

export default function PostList({posts}: PostListProps) {
    return (
        <>
            {posts.map((post: any, index: number) => (
                <PostItem post={post} key={index}></PostItem>
            ))}
        </>
    )
}