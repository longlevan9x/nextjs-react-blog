import {GetServerSideProps, GetStaticPaths, GetStaticProps} from "next";
import Api from "@/libs/api";
import Main from "@/components/layouts/main";
import Tag from "@/components/common/tag";
import {Simulate} from "react-dom/test-utils";
import {PostModel} from "@/models/post";


export const getServerSideProps: GetServerSideProps = async (context) => {
    context.res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59',
    );

    const postId: any = context.params?.id;

    const props: { post?: PostModel, postContent?: string } = {};

    try {
        const resPost = await Api.getPostDetail(postId);
        const resPostContent = await Api.getPostDetailContent(postId);

        props.post = resPost.data;
        props.postContent = resPostContent.data;
    } catch (e) {
        // @ts-ignore
        console.log(e?.response?.data);
    }

    return {
        props: props,
    }
}

// export const getStaticProps: GetStaticProps = async (context) => {
//     const postId: any = context.params?.id;
//
//     const resPost = await Api.getPostDetail(postId);
//     const resPostContent = await Api.getPostDetailContent(postId);
//
//     return {
//         props: {
//             post: resPost.data,
//             postContent: resPostContent.data
//         },
//         revalidate: 10
//     }
// }
//
// export const getStaticPaths: GetStaticPaths = async () => {
//     // Call an external API endpoint to get posts
//     const res = await Api.getPosts();
//     const posts = res.data;
//
//     // Get the paths we want to prerender based on posts
//     // In production environments, prerender all pages
//     // (slower builds, but faster initial page load)
//     const paths = posts.map((post: any) => ({
//         params: {id: post.id},
//     }));
//
//     // { fallback: false } means other routes should 404
//     return {paths, fallback: true};
// };


export default function PostDetail({post, postContent}: any) {
    return (
        <>
            <Main>
                <section className="s-content s-content--single">
                    <div className="row">
                        <div className="column large-12">
                            <article className="s-post entry format-standard">
                                <div className="s-content__media">
                                    <div className="s-content__post-thumb">
                                        <img src={post?.cover}
                                            //     srcSet="/images/thumbs/single/standard/standard-2100.jpg 2100w,
                                            // /images/thumbs/single/standard/standard-1050.jpg 1050w,
                                            // /images/thumbs/single/standard/standard-525.jpg 525w"
                                             sizes="(max-width: 2100px) 100vw, 2100px" alt={post?.title}/>
                                    </div>
                                </div>
                                <div className="s-content__primary">
                                    <h2 className="s-content__title s-content__title--post">
                                        {post?.title}
                                    </h2>

                                    <ul className="s-content__post-meta">
                                        <li className="date">September 05, 2020</li>
                                        <li className="cat">
                                            <Tag tags={post?.tags}></Tag>
                                        </li>
                                    </ul>

                                    <div dangerouslySetInnerHTML={{__html: postContent}}></div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </Main>
        </>
    )
}

