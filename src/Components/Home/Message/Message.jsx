import React from 'react';

const Message = () => {
    return (
        <div className="mt-12 px-4">
            {/* Our Mission Section */}
            <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        The College authority has always been keen to keep all kinds of developing activities
                        continued. With the flow of development, the college has been constructed as a
                        three-storied building and the facilities of laboratory rooms, students' common rooms,
                        and the library room have been increased. From the beginning of the session, there is
                        access for all students to cultural and sports competitions in keeping with regular class
                        lessons on a pre-arranged schedule such as general knowledge, science exhibitions,
                        recitation, music, painting, spelling, extempore speech, essay writing, debating,
                        wall magazine, football, cricket, badminton, handball, volleyball, and so on.
                    </p>
                </div> 
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Cultivating Creativity in Every Student</h3>
                            <p className="my-4">"At BCIC College, we believe that creativity is the key to success. Our students are given opportunities to explore their talents through various competitions and extracurricular activities, helping them develop into well-rounded individuals."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://i.postimg.cc/T13C4Mkd/chairman.jpg" alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Dr. John Doe</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Founder of BCIC College</div>
                            </div>
                        </figcaption>    
                    </figure>
                    <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                        <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Striving for Academic Excellence</h3>
                            <p className="my-4">"We are committed to providing a high-quality education that meets international standards. Our academic programs are designed to challenge students and prepare them for the global workforce."</p>
                        </blockquote>
                        <figcaption className="flex justify-center items-center space-x-3">
                            <img className="w-9 h-9 rounded-full" src="https://i.postimg.cc/PxJk1cmD/ckk.jpg" alt="profile picture" />
                            <div className="space-y-0.5 font-medium dark:text-white text-left">
                                <div>Jane Smith</div>
                                <div className="text-sm font-light text-gray-500 dark:text-gray-400">Principal, BCIC College</div>
                            </div>
                        </figcaption>    
                    </figure>
                </div>
                <div className="text-center">
                    <a href="https://www.bciccollege.edu.bd/details/our-mission" className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Show more...
                    </a> 
                </div>
            </section>

            {/* Our Vision Section */}
            <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Vision</h2>
                    <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                        BCIC College Dhaka came into being in July 1991 as a separate institution. From time immemorial
                        education has been regarded as the main catalyst of the present flourished civilization.
                        But in the existing education system, commercial purpose and lack of pragmatic education, our
                        total social system is gripping in the darkness. Keeping it in mind, Bangladesh Chemical Industries
                        Corporation has established this institution as a stepping stone from the darkness. This institution
                        is situated in the lap of Mirpur Botanical Garden and Dhaka National Zoo covering 6.16 Acres of land
                        with congenial and fascinating atmosphere.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Message;
