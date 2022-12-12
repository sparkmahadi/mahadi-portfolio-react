import React from 'react';

const ImageCard = ({ image }) => {
    return (
        <div className="card md:h-80 lg:w-96 mx-auto items-center bg-gray-500 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center p-3">
                <p className='uppercase'>{image?.split('/')[4]?.split('.')[0]?.replace('-', ' ')?.replace('-',' ')}</p>
            </div>
        </div>
    );
};

export default ImageCard;