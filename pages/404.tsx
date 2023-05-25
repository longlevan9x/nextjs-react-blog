import Main from "@/components/layouts/main";
import styles from '@/styles/notfound.module.css';
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Main>
                <section className={styles.page_404}>
                    <div className="container">
                        <div className="row">
                            <div className="" style={{width: '100%'}}>
                                <div className="">
                                    <div className={styles.four_zero_four_bg}>
                                        <h1 className=" ">404</h1>
                                    </div>
                                    <div className={styles.contant_box_404}>
                                        <h3 className="h2">
                                            Look like you're lost
                                        </h3>
                                        <p>the page you are looking for not avaible!</p>
                                        <Link href="/" className={styles.link_404}>Go to Home</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Main>
        </>
    );
}