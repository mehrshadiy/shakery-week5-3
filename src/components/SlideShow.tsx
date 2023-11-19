// @flow
import * as React from 'react';
import Image from 'next/image'
import {ReactElement, useState} from "react";

const images = [
    <Image
        src="/img-1.jpg"
        alt="Picture of the author"
        fill={true}
    />,
    <Image
        src="/img-2.jpeg"
        alt="Picture of the author"
        fill={true}
    />,
    <Image
        src="/img-3.jpg"
        alt="Picture of the author"
        fill={true}
    />,
    <Image
        src="/img-4.jpg"
        fill={true}
        alt="Picture of the author"
    />,
    <Image
        src="/img-5.jpg"
        fill={true}
        alt="Picture of the author"
    />
]

let index = 0

export const SlideShow = () => {

    const [imageIndex, setImageIndex] = useState(0)

    const imageNext = () => {
        if (imageIndex < images.length - 1) {
            setImageIndex(prevState => prevState + 1)
        } else {
            setImageIndex(prevState => 0)
        }
    }
    const imagePrev = () => {
        if (!(imageIndex < 0)) {
            setImageIndex(prevState => prevState - 1)
        } else {
            setImageIndex(prevState => images.length - 1)
        }
        return imageIndex
    }

    const counter = (e:boolean) => {
        let counter = setInterval(imageNext, 1000)
        if (!e){
            clearInterval(counter)
        }
    }
    counter(true)

    return (
        <>
            <div
                className=" mt-28 mx-auto relative w-10/12 aspect-[4/3]">
                <>
                    {images[imageIndex]}
                </>
                <button onClick={imagePrev}
                        className={'bg-black border-2 border-gray-500 text-2xl text-white font-bold flex justify-center items-center absolute left-2 top-1/3 p-3 aspect-square rounded-full'}>
                    {'<'}
                </button>
                <button onClick={imageNext}
                        className={'bg-black border-2 border-gray-500 text-2xl text-white font-bold flex justify-center items-center absolute right-2 top-1/3 p-3 aspect-square rounded-full'}>
                    {'>'}
                </button>
            </div>
        </>
    );
};