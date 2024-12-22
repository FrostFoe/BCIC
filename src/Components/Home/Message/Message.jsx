import React from 'react';

const Message = () => {
    return (
        <div className="mt-12 px-4">
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Chairman's Message</h2>
                <div className="flex gap-4">
                    <div className="w-1/2">
                        <img className="object-cover w-full rounded-lg" src="https://i.postimg.cc/T13C4Mkd/chairman.jpg" alt="Chairman" />
                    </div>
                    <div className="w-1/2 text-gray-700">
                        <p>
                            BCIC College, Dhaka is now an icon of excellence in the education sector of the country. We are running our institution with digital applications by implementing the Information and Communications Technology following the Digital Bangladesh Vision 2021.
                        </p>
                        <p className="mt-2">
                            Today BCIC College stands as one of the magnificent institutions in the country, synonymous with academic brilliance. It has been a milestone for measuring academic, co-curricular, and extracurricular excellence.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">Principal's Message</h2>
                <div className="flex gap-4">
                    <div className="w-1/2 text-gray-700">
                        <p>
                            Ever since its inception in 1983, BCIC College, Dhaka has been performing a pioneering role in the field of education. The institution has earned a distinctive position in introducing the National Curriculum and has aptly set a trend for others to follow.
                        </p>
                        <p className="mt-2">
                            The main aim of this institution is to provide the highest quality education to every student. Students' basic knowledge of English is strengthened to prepare them to face global challenges effectively.
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img className="object-cover w-full rounded-lg" src="https://i.postimg.cc/PxJk1cmD/ckk.jpg" alt="Principal" />
                    </div>
                </div>
            </div>

            {/* Our Mission Section */}
            <section id="our-mission" className="pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                            <h1 className="text-3xl font-bold text-center text-blue-800">Our Mission</h1>        
                            </div>
                            <div className="teachers-cont">
                                <p>
                                    The College authority has always been keen to keep all kinds of developing activities
                                    continued. With the flow of development, the college has been constructed as a
                                    three-storied building and the facilities of laboratory rooms, students' common rooms,
                                    and the library room have been increased. From the beginning of the session, there is
                                    access for all students to cultural and sports competitions in keeping with regular class
                                    lessons on a pre-arranged schedule such as general knowledge, science exhibitions,
                                    recitation, music, painting, spelling, extempore speech, essay writing, debating,
                                    wall magazine, football, cricket, badminton, handball, volleyball, and so on.
                                </p>
                                <a href="https://www.bciccollege.edu.bd/details/our-mission" className="main-btn mt-55">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Vision Section */}
            <section id="our-vision" className="pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="section-title mt-50">
                            <h1 className="text-3xl font-bold text-center text-blue-800">Our Vision</h1>    
                            </div>
                            <div className="teachers-cont">
                                <p>
                                    BCIC College Dhaka came into being in July 1991 as a separate institution. From time immemorial
                                    education has been regarded as the main catalyst of the present flourished civilization.
                                    But in the existing education system, commercial purpose and lack of pragmatic education, our
                                    total social system is gripping in the darkness. Keeping it in mind, Bangladesh Chemical Industries
                                    Corporation has established this institution as a stepping stone from the darkness. This institution
                                    is situated in the lap of Mirpur Botanical Garden and Dhaka National Zoo covering 6.16 Acres of land
                                    with congenial and fascinating atmosphere.
                                </p>
                                <a href="https://www.bciccollege.edu.bd/details/our-vision" className="main-btn mt-55">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Message;
