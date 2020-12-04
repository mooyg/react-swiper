import React from 'react';
import './MiniSwiper.css'

interface Props {
    images: string[],
    index: number
}

const MiniSwiper = (props: Props) => {
    const {images} = props
    const {index} = props
    return (
        <div className={'miniswiper'}>
            {index === 0 ? (
                <img className={'miniswiper__image previous' } src={images[images.length - 1]} alt={''}/>

            ) : (
                <img className={'miniswiper__image previous'} src={images[index - 1]} alt={''}/>

            )}
            <img id={'current'} className={'miniswiper__image'} src={images[index]} alt={''}/>
            {index === images.length - 1 ? (
                <img className={'miniswiper__image previous'} src={images[0]} alt={''}/>
            ) : (
                <img className={'miniswiper__image previous '} src={images[index + 1]} alt={''}/>
            )}
        </div>
    );
};

export default MiniSwiper;
