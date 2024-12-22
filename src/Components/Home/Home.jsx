import React from 'react';
import Banner from './Banner/Banner';
import Message from './Message/Message';
import 'animate.css';

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8 bg-black text-white">
            <Banner />

            <div className="mt-12 text-center">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white animate__animated animate__fadeIn">
                    Welcome To
                    <span className="inline-block ml-2 underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 animate__animated animate__fadeIn animate__delay-1s">
                        BCIC College
                    </span>
                </h1>

                <p className="text-lg leading-relaxed mx-auto max-w-3xl">
                    <span className="block mb-4 animate__animated animate__fadeInUp animate__delay-2s">
                        Welcome to BCIC College! As we begin this academic year, our focus is on achieving academic excellence with 100% GPA-5 in both SSC and HSC exams. Regular study, class attendance, and active participation in co-curricular activities like sports, debating, and photography are key to your success. We have divided students into four Houses—Ashuganj, Jamuna, Karnafuli, and Shahjalal—to foster leadership and competitiveness through inter-house events. Our goal is to prepare you for success in academics and life, with a focus on education, etiquette, and personal development.
                    </span>
                </p>

            </div>

            <Message />
        </div>
    );
};

export default Home;
