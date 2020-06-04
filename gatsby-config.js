const siteMetadata = {
    title: `Open Source Lab`,
    siteUrl: `http://localhost`,
    capitalizeTitleOnHome: true,
    logo: `/images/logo_light.png`,
    icon: `/images/logo_light.png`,
    who: `/images/who.jpg`,
    card1: `/images/mentor.svg`,
    card2: `/images/talk.svg`,
    card3: `/images/code.svg`,
    join1: `/images/develop.svg`,
    join2: `/images/mentoring.svg`,
    join3: `/images/opportunities.svg`,
    join4: `/images/career.svg`,
    titleImage: `/images/wall.jpg`,
    introTag: ``,
    description: `OSL, a student-run community with over 20+ members from
    Vidyavardhaka College of Engineering, Mysuru, over the last
    2 years, has helped 100+ passionate students to transform
    into successful & innovative engineers who today work across
    the world in Fortune 500 Companies loving what they do.`,
    author: `Open Source Lab`,
    blogItemsPerPage: 10,
    portfolioItemsPerPage: 10,
    compItemsPerPage: 10,
    darkmode: true,
    switchTheme: true,
    navLinks: [
        {
            name: "HOME",
            url: "/"
        },
        {
            name: "ABOUT US",
            url: "/about"
        },
        {
            name: "MEMBERS",
            url: "/members"
        },
        {
            name: "BLOG",
            url: "/blog"
        },
        {
            name: "CONTACT",
            url: "/contact"
        }
    ],
    footerLinks: [
        {
            name: "PRIVACY POLICY",
            url: "/privacy-policy"
        },
        {
            name: "GitHub",
            url: "https://github.com/osl-vvce"
        }
    ],
    social: [
        {
            name: "Facebook",
            icon: "/images/Facebook.svg",
            url: "https://www.facebook.com/oslvvce"
        },
        {
            name: "Twitter",
            icon: "/images/twitter.png",
            url: "https://twitter.com/osl_vvce"
        },
        {
            name: "Instagram",
            icon: "/images/Instagram.svg",
            url: "https://www.instagram.com/osl_vvce"
        },
        {
            name: "Github",
            icon: "/images/git2.png",
            url: "https://github.com/osl-vvce"
        },
        {
            name: "LinkedIn",
            icon: "/images/linkedin.png",
            url: "https://www.linkedin.com/company/osl-vvce"
        }
    ],
    contact: {
        /* Leave the below value completely empty (no space either) if you don't want a contact form. */
        api_url: "./test.json",
        description: `Hey! Looking for a way to get to us? Contact us using any of the links shared below or just drop by at our place!`,
        mail: "osl@vvce.ac.in",
        phone: "+91 8095699637",
        address: "VVCE Mysore- 570002"
    }
    // this is optional. you can uncomment this if you use disqus
    // disqus: `your-disqus-shortname`
};

const plugins = [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                "gatsby-remark-copy-linked-files",
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 1280
                    }
                }
            ]
        }
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `contents`,
            path: `${__dirname}/contents/`
        }
    },
    {
        resolve: `gatsby-plugin-less`,
        options: {
            strictMath: true
        }
    }
];

if (siteMetadata.disqus) {
    plugins.push({
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: siteMetadata.disqus
        }
    });
}

module.exports = {
    siteMetadata: siteMetadata,
    plugins: plugins
};
