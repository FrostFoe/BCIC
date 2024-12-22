import React from 'react';

const Message = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl text-white text-fono text-center mb-4'>Chairman's Message</h1>
                <div className='flex'>
                    {/* Principal Message */}

                    <div className='w-1/2'>
                        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img class="object-cover w-full h-96" src="https://i.postimg.cc/T13C4Mkd/chairman.jpg" alt="avatar" />


                        </div>
                    </div>

                    <div className='w-1/2'>
                        <p className='text-white text- font-fono'>
                            BCIC College, Dhaka is now an icon of excellence in the education sector of the country. We are
                            running our institution with the digital applications by implementing the Information and Communications
                            Technology following the Digital Bangladesh Vision 2021
                            Today BCIC College stands as one of the magnificent institutions in the country and has become synonymous
                            with academic brilliance. Our School & College is consistently scoring 100% successful result in Education Board.
                            This BCIC College bears testimony to the mission and vision of the demand of new era. It has been a milestone for
                            measuring academic, co-curricular and extracurricular excellence possessing a positive sense of responsibility to the society.

                            It unfolds the mission of BCIC College from its inception. United we might strive the tough goals and break all shackles on the way to important</p>
                    </div>

                </div>

            </div>
            {/* chairman message */}
            <div>
                <h1 className='text-2xl text-white text-fono text-center mb-4'>Principal's Message</h1>
                <div className='flex justify-between items-center'>
                    {/* Left content */}
                    <div className='w-1/2'>
                        <p className='text-white font-fono'>
                            Ever since its inception in 1983, BCIC College, Dhaka has been performing a pioneering role in the field of education. The institution has earned a distinctive position in introducing National Curriculum and aptly set a trend for many others to follow

                            Throughout its path of progress, the eminent teachers, students and the parents have worked like a team and contributed a lot to the enhancement and remarkable progress of this institution.

                            Today, BCIC College has four impressive mansions with 4500 plus students and a team of 120 qualified, experienced and dedicated teachers pursuing Primary, Secondary and Higher Secondary courses of study under the Board of Intermediate and Secondary Education, Dhaka. For the precision output very department of BCIC College is managed digitally with the high-end software.

                            The main aim of this institution is to provide the highest quality education to each and every student. To realize this goal, students' basic knowledge of English is made strong and built up in such a way that they can easily, rather effectively, face the challenges of the competitive world.

                            Taking education from this institution, the young learners spread themselves throughout the world and contribute to the development of the world because BCIC College is making future leaders by digital applications.


                        </p>
                    </div>

                    {/* Right content */}
                    <div className='w-1/2 flex justify-center'>
                        <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <img className="object-cover w-full h-96" src="https://i.postimg.cc/PxJk1cmD/ckk.jpg" alt="avatar" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Message;