import React from "react";

const About = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                About
                <span className="ml-2 inline-block underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600 animate__animated animate__fadeIn animate__delay-1s">
                    BCIC College
                </span>
            </h1>

            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        BCIC College: A Trusted Name for Quality Education
                    </h2>
                    <p className="mb-4">
                        BCIC College is a renowned academic institution operated by Bangladesh Chemical Industries Corporation regulated by the Ministry of Industry, the People’s Republic of Bangladesh.
                    </p>
                    <p className="mb-4">
                    The college lies in the serene and tranquil premises of a 5.16-acre land, contiguous to the National Botanical Garden as well as Dhaka Zoo, from where it is super easy to have access to all advantages of the capital.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8">
                    <img
                        className="w-full rounded-lg"
                        src="https://bciccollege-edu-bd.s3.us-east-2.amazonaws.com/2023/gallery/1696754695364797838_258450790274376_9115313537235051249_n.jpg"
                        alt="Shaheed Minar and College Premises"
                    />
                    <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://bciccollege-edu-bd.s3.us-east-2.amazonaws.com/2023/gallery/1696753536364249437_258453200274135_3393014134078195788_n.jpg"
                        alt="BCIC College Activities"
                    />
                    <img
                        className="w-full rounded-lg"
                        src="https://bciccollege-edu-bd.s3.us-east-2.amazonaws.com/2023/gallery/1696754680363433500_258453986940723_4673719698701879856_n.jpg"
                        alt="BCIC College Activities"
                    />
                    <img
                        className="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://bciccollege-edu-bd.s3.us-east-2.amazonaws.com/2023/gallery/1696754239364673994_258452873607501_2288080878876927415_n%20%281%29.jpg"
                        alt="BCIC College Activities"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
