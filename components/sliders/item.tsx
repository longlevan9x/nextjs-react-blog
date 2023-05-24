import Link from "next/link";
import {SliderModel} from "@/models/slider";

interface SliderProps {
    slider: SliderModel;
}

export default function SliderItem({slider}: SliderProps) {
    return (
        <>
            <div className="featured-post-slide">
                <div className="f-slide">
                    <div className="f-slide__background"
                        // @ts-ignore
                         style={{backgroundImage: 'url(' + slider?.files[0]?.url + ')'}}>
                    </div>
                    <div className="f-slide__overlay"></div>
                    <div className="f-slide__content">
                        <ul className="f-slide__meta">
                            <li>September 06, 2020</li>
                            <li><a href="#">Naruto Uzumaki</a></li>
                        </ul>
                        <h1 className="f-slide__title">
                            <Link href="/"
                                  title="A Practical Guide to a Minimalist Lifestyle.">
                                {slider.title}
                            </Link>
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )
}