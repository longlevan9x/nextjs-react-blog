import {GetServerSideProps} from "next";
import Main from "@/components/layouts/main";
import PostList from "@/components/posts/list";
import {PostModel} from "@/models/post";
import Api from "@/libs/api";

interface PostSearchProps {
    posts: PostModel[];
    keyword: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const keyword = context.query?.keyword as string;

    let posts: PostModel[] = [];

    try {
        const resPosts = await Api.getPosts({keyword: keyword});
        posts = resPosts.data;
    } catch (e) {
        // @ts-ignore
        console.log(e?.response?.data);
    }

    return {
        props: {
            posts: posts,
            keyword: keyword
        }
    }
}

export default function PostSearchKeyword({posts, keyword}: PostSearchProps) {
    return (
        <>
            <Main>
                <PostList posts={posts} keyword={keyword}></PostList>
            </Main>
        </>
    )
}