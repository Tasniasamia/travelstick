import Image from 'next/image';
import React from 'react';

const Team = () => {
    return (
        <div className='container lg:mb-[120px] mb-[60px]'>
            <div className='flex flex-col items-center'>
                <div className="flex gap-2 items-center lg:mb-[24px] mb-[12px]">
                        <Image
                          src="/frame.png"
                          width={24}
                          height={24}
                          className="h-[24px] w-[24px] object-cover"
                          alt="frame"
                        />
                        <h6 className="section-name">Team</h6>
                      </div>
                      <h2 className="section-title text-text_primary lg:pb-[24px] pb-[12px] text">
                      The Experts Behind the Energy
                      </h2>
                      <p className="section-description text-text_secondary lg:mb-[40px] mb-[20px] line-clamp-4 xl:w-[725px] w-full">
                        Whether you’re a homeowner, business, or nonprofit, electricity
                        costs can make up a large portion of your monthly expenses. Even if
                        you don’t produce 100% of the energy you consume, solar will reduce
                        your utility bills, saving you a lot of money. With the cost of
                        solar becoming more affordable it is now more affordable than ever.
                      </p>
                      </div>
        </div>
    );
};

export default Team;