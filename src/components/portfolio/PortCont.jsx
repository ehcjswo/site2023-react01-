import React, { useState } from 'react';

const PortCont = () => {
    const [foodType, setFoodType] = useState('korea');

    const changeImageNames = (type) => {
        setFoodType(type);
    };
    return (
        <section id="portSection" className="port__wrap Nanum5">
            <p>세계적으로 유명하고 대표적인 음식 종류</p>
            <div className="port__inner container">
                <div className="port_btn">
                    <span className='button portBtn1' onClick={() => changeImageNames('korea')}>한식</span>
                    <span className='button portBtn2' onClick={() => changeImageNames('china')}>중식</span>
                    <span className='button portBtn3' onClick={() => changeImageNames('japan')}>일식</span>
                    <span className='button portBtn4' onClick={() => changeImageNames('american')}>양식</span>
                </div>
                <div className="port__conts">
                    <div className="port mb20">
                    <figure className="port__header">
                        <img
                        src={`./assets/images/port/${foodType.toLowerCase()}food_1.png`}
                        alt={foodType}
                        />
                    </figure>
                    </div>
                    <div className="port">
                    <figure className="port__header">
                        <img
                        src={`./assets/images/port/${foodType.toLowerCase()}food_2.png`}
                        alt={foodType}
                        />
                    </figure>
                    </div>
                    <div className="port">
                    <figure className="port__header">
                        <img
                        src={`./assets/images/port/${foodType.toLowerCase()}food_3.png`}
                        alt={foodType}
                        />
                    </figure>
                    </div>
                    <div className="port">
                    <figure className="port__header">
                        <img
                        src={`./assets/images/port/${foodType.toLowerCase()}food_4.png`}
                        alt={foodType}
                        />
                    </figure>
                    </div>
                    <div className="port">
                    <figure className="port__header">
                        <img
                        src={`./assets/images/port/${foodType.toLowerCase()}food_5.png`}
                        alt={foodType}
                        />
                    </figure>
                    </div>
                    <div className="port">
                    <figure className="port__header">
                        <img
                        src={`./assets/images/port/${foodType.toLowerCase()}food_6.png`}
                        alt={foodType}
                        />
                    </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PortCont
