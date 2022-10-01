import React from 'react';
import PriceOption from '../PriceOption/PriceOption';
const pricingOptions = [
    {
        id: 1, name: 'Free', price: '0',
        features: [
            'Awesome features',
            'Extra features',
            'Unneccesary features',
            'Will nver use features',
            'Hidden features'
        ]
    },
    {
        id: 2, name: 'Medium', price: '9.99',
        features: [
            'Awesome features',
            'Extra features',
            'Unneccesary features',
            'Will nver use features',
            'Hidden features'
        ]
    },
    {
        id: 3, name: 'Premium', price: '19.55',
        features: [
            'Awesome features',
            'Extra features',
            'Unneccesary features',
            'Will nver use features',
            'Hidden features'
        ]
    },
]

const Pricing = () => {
    return (
        <div>
            <h2 className='text-5xl font-bold bg-indigo-300 p-12 ml-12 mr-12'>Best Deal of the Town.</h2>
            <div className='grid md:grid-cols-3 gap-3 m-12'>
                {
                    pricingOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;
