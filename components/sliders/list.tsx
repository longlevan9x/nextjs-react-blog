import {SliderModel} from "@/models/slider";
import Link from "next/link";
import SliderItem from "@/components/sliders/item";

interface SliderListProps {
    sliders: SliderModel[];
}

export default function SliderList({sliders}: SliderListProps) {
    return (
        <>
            <div className="brick entry featured-grid animate-this">
                <div className="entry__content">
                    <div className="featured-post-slider">
                        {sliders.map((slider: any, index: number) => (
                            <SliderItem slider={slider} key={index}></SliderItem>
                        ))}
                    </div>
                    <div className="featured-post-nav">
                        <button className="featured-post-nav__prev">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M12.707 17.293L8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
                            </svg>
                        </button>
                        <button className="featured-post-nav__next">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                 viewBox="0 0 24 24">
                                <path
                                    d="M11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}