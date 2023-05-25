import Api from "@/libs/api";
import {GetStaticProps} from "next";
import Main from "@/components/layouts/main";
import {PostModel} from "@/models/post";
import PostList from "@/components/posts/list";

interface PostPageProps {
    posts: PostModel[];
}

export const getStaticProps: GetStaticProps = async (context) => {
    let posts: PostModel[] = [];

    try {
        const resPosts = await Api.getPosts();
        posts = resPosts.data;
    } catch (e) {
        // @ts-ignore
        console.log(e?.response?.data);
    }

    return {
        props: {
            posts,
        },
        revalidate: 10,
    };
};

export default function PostPage({posts}: PostPageProps) {
    return (
        <>
            <Main>
                <PostList posts={posts}></PostList>
            </Main>
        </>
    )
}