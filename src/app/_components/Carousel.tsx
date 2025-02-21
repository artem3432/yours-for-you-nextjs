'use client'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'

const imageSrcs = [
    "https://a.storyblok.com/f/165154/1280x720/1e7f973faf/06_typography-t-shirt-trends.jpg/m/",
    "https://a.storyblok.com/f/165154/1280x720/621f0ef91a/6_t-shirts-for-special-occasions.jpg",
    "https://www.edding.com/fileadmin/_processed_/5/9/csm_favourite-quote-on-t-shirts-step-01_ae55431349.jpg",
]

export default function EmblaCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    return (
        <div className="embla relative">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {imageSrcs.map(x => (
                        <div className="embla__slide" key={x}>
                            <img className='rounded-lg object-cover w-full' src={x} alt="foto2" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='absolute top-1/2 justify-between flex w-full'>
                <button className="embla__prev" onClick={scrollPrev}>
                    <IoIosArrowDropleftCircle className="w-8 h-8" />
                </button>
                <button className="embla__next" onClick={scrollNext}>
                    <IoIosArrowDroprightCircle className="w-8 h-8" />

                </button>
            </div>

        </div>
    )
}
