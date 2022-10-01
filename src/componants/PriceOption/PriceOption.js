import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;

    return (
        <div className='bg-indigo-300 rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-6xl font-bold text-white'>{option.price}</span>
                    <span className='text-md text-gray-200'>/mon</span>
                </h3>

                <p className='text-2xl my-2'>{option.name}</p>
            </div>

            <div>
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
                <button className='bg-green-500 mt-4 py-2 font-bold w-full text-white rounded'>Buy Now</button>

            </div>
        </div>
    );
};

export default PriceOption; 