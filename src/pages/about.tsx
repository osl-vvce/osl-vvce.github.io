import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data, location }) => {
    const aboutData = data.site.siteMetadata.aboutUs
    return (
        <Layout
            seo={{
                title: "About",
            }}
            location={location}
        >
            <div className="container mx-auto px-8 md:px-32">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">About</h2>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full">
                        <img src={aboutData.main} alt="illustration" />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <p className="mb-4 text-lg">
                            OSL, a student-run community with over 20+ members
                            from Vidyavardhaka College of Engineering, Mysuru,
                            over the last 2 years, has helped 100+ passionate
                            students to transform into successful & innovative
                            engineers who today work across the world in Fortune
                            500 Companies loving what they do.
                        </p>
                    </div>
                </div>
                <div className="title py-6 text-center">
                    <h3 className="font-black text-5xl text-color-1">
                        Who we are?
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="w-full">
                        <img src={aboutData.about1} alt="illustration" />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <p className="mb-4">
                            Open Source Lab (also known as OSL ) is a community
                            of passionate college students, who have come
                            together for the cause of promoting and contributing
                            to Free and Open Source. The club envisions to make
                            its members competent to become the leaders of the
                            future with excellence in technical, creative, and
                            intrapersonal skills.
                        </p>
                        <p className="mb-4">
                            Founded in 2017, the club over the years has been
                            renowned as one of the leading student clubs in
                            India, with about 500 active members. It has so far
                            produced a GSoCer, and multiple Grand Finalist teams
                            in SIH. The club is run by the students themselves,
                            with the help of research scholars, alumni, and
                            faculties.
                        </p>
                    </div>
                </div>
                <div className="title py-6 text-center">
                    <h3 className="font-black text-5xl text-color-1">
                        What we do?
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row">
                    <div className="w-full">
                        <img src={aboutData.about2} alt="illustration" />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <p className="mb-4">
                            The club operates by the principle of mentorship and
                            family, where the senior members of the club
                            individually mentor the juniors. The members
                            contribute to Open Source projects of their own
                            interests and also conduct workshops and technical
                            fests to encourage others to work on open source
                            technologies.
                        </p>
                        <p className="mb-4">
                            The club has specialised teams internally such as
                            one focused on Android, Blockchain, IoT,etc.. We
                            believe in the holistic development of its members,
                            and the members besides seeking excellence in
                            technical skills, also engage in talks, debates,
                            sports, cultural activities, yoga sessions etc.
                        </p>
                    </div>
                </div>
                <div className="title py-6 text-center">
                    <h3 className="font-black text-5xl text-color-1">
                        What we have achieved?
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row-reverse">
                    <div className="w-full">
                        <img src={aboutData.about3} alt="illustration" />
                    </div>
                    <div className="w-full flex flex-col justify-center">
                        <p className="mb-4">
                            The club has become one of the forerunners in
                            promoting, and contributing to open source in the
                            country, introducing over a hundred enthusiasts
                            every year to the world of Open source through the
                            various activities it conducts.
                        </p>
                        <p className="mb-4">
                            The club has produced 12 teams who have made it
                            through SIH Grand Finale over the last 3 year. The
                            members have been actively taking part in
                            international conferences, meetups, hackathons, as
                            well as delivering talks and presenting projects at
                            various events. Majority of the club alumni have
                            been placed in core computer science companies, not
                            to mention its active members also get selected for
                            summer schools at global universities, and paid
                            internships at top companies.
                        </p>
                    </div>
                </div>
                <div className="title py-6 text-center">
                    <h3 className="font-black text-5xl text-color-1">
                        Faculty Coordinators
                    </h3>
                </div>
                <div className="flex flex-col md:flex-row justify-center">
                    <div className="w-full text-center">
                        <img
                            src="https://vvce.ac.in/wp-content/uploads/2020/01/Pavan-CS-300x300.jpg"
                            alt="faculty"
                            className="mx-auto"
                        />
                        <h4>Pavan Kumar S P</h4>
                        <h5>Assistant Professor</h5>
                    </div>
                    <div className="w-full text-center">
                        <img
                            src="https://vvce.ac.in/wp-content/uploads/2020/01/Rakesh-CS-300x300.jpg"
                            alt="faculty"
                            className="mx-auto"
                        />
                        <h4>Rakesh K R</h4>
                        <h5>Assistant Professor</h5>
                    </div>
                    <div className="w-full text-center">
                        <img
                            src="https://vvce.ac.in/wp-content/uploads/2020/01/Ambika-CS-300x300.jpg"
                            alt="faculty"
                            className="mx-auto"
                        />
                        <h4>Ambika V</h4>
                        <h5>Assistant Professor</h5>
                    </div>
                    <div className="w-full text-center object-cover">
                        <img
                            src="https://vvce.ac.in/wp-content/uploads/2020/10/IMG-1894-241x300.jpg"
                            alt="faculty"
                            className="mx-auto md:h-40 lg:h-48 xl:h-64"
                        />
                        <h4>Vidya N L</h4>
                        <h5>Assistant Professor</h5>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const querry = graphql`
    query AboutQuery {
        site: site {
            siteMetadata {
                aboutUs {
                    main
                    about1
                    about2
                    about3
                }
            }
        }
    }
`
