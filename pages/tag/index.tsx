import Main from "@/components/layouts/main";
import {GetStaticProps} from "next";
import Api from "@/libs/api";
import {TagModel} from "@/models/tag";
import Link from "next/link";

interface TagPageProps {
    tags: TagModel[]
}

export const getStaticProps: GetStaticProps = async (context) => {
    let tags = [];
    try {
        const resTag = await Api.getTags();
        tags = resTag.data;
    } catch (e) {
        // @ts-ignore
        console.log(e?.response?.data);
    }

    return {
        props: {
            tags: tags
        },
        revalidate: 10
    }
}

export default function TagPage({tags}: TagPageProps) {
    return (
        <>
            <Main>
                <section className="s-pageheader">
                    <div className="row current-cat">
                        <div className="column">
                            <h2 className="h2">Tags</h2>
                            <span>Bạn có thể tìm các bài viết theo các tags dưới đây:</span>
                        </div>
                    </div>
                </section>
                <section className="s-bricks">
                    <div className="row">
                        {tags.map((tag, index: number) => (
                            <Link href="#" key={index}>
                                <button className=" ">{tag.name}</button>
                            </Link>
                        ))}
                    </div>
                </section>

                <section className="s-content">
                    <div className="row">
                        <div className="column large-12">
                            <div className="s-content__media">
                                <div className="s-content__post-thumb">
                                    <img src="/images/work.png" style={{width: '100%'}} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Main>
        </>
    )
}