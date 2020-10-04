import { createFilePath } from "gatsby-source-filesystem"
import { GatsbyNode } from "gatsby"
import path from "path"

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
    node,
    getNode,
    actions,
}) => {
    const { createNodeField } = actions
    if (node.internal.type === `Mdx`) {
        const slug = createFilePath({ node, getNode })
        const sourceName = getNode(node.parent).sourceInstanceName
        const prefix = sourceName === "basepages" ? "" : "/" + sourceName

        createNodeField({
            node,
            name: `slug`,
            value: `${prefix}${slug}`,
        })
        createNodeField({
            node,
            name: `sourceName`,
            value: sourceName,
        })
    }
}

export const createPages: GatsbyNode["createPages"] = async ({
    graphql,
    actions,
}) => {
    const { createPage } = actions

    return graphql<any>(`
        query GatsbyNodeQuery {
            all: allMdx {
                edges {
                    node {
                        fields {
                            slug
                            sourceName
                        }
                    }
                }
            }
            blog: allMdx(filter: { fields: { sourceName: { eq: "blog" } } }) {
                edges {
                    node {
                        id
                    }
                }
            }
            events: allMdx(
                filter: { fields: { sourceName: { eq: "events" } } }
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
            member: allMdx(
                filter: { fields: { sourceName: { eq: "member" } } }
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
            portfolio: allMdx(
                filter: { fields: { sourceName: { eq: "portfolio" } } }
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
            limitPost: site {
                siteMetadata {
                    blogItemsPerPage
                    eventItemsPerPage
                    memberItemsPerPage
                    portfolioItemsPerPage
                }
            }
        }
    `).then((result) => {
        result.data.all.edges.forEach(({ node }) => {
            let template = node.fields.sourceName
            createPage({
                path: node.fields.slug,
                component: path.resolve("./src/templates/" + template + ".tsx"),
                context: {
                    slug: node.fields.slug,
                },
            })
        })

        const blogPosts = result.data.blog.edges
        const blogPostsPerPage =
            result.data.limitPost.siteMetadata.blogItemsPerPage
        const numBlogPages = Math.ceil(blogPosts.length / blogPostsPerPage)

        Array.from({ length: numBlogPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/templates/blog-list.tsx"),
                context: {
                    limit: blogPostsPerPage,
                    skip: i * blogPostsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1,
                },
            })
        })

        const eventPosts = result.data.blog.edges
        const eventItemsPerPage =
            result.data.limitPost.siteMetadata.eventItemsPerPage
        const numEventPages = Math.ceil(eventPosts.length / eventItemsPerPage)

        Array.from({ length: numEventPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/events` : `/events/${i + 1}`,
                component: path.resolve("./src/templates/events-list.tsx"),
                context: {
                    limit: eventItemsPerPage,
                    skip: i * eventItemsPerPage,
                    numPages: numBlogPages,
                    currentPage: i + 1,
                },
            })
        })

        const memberItems = result.data.member.edges
        const memberItemsPerPage =
            result.data.limitPost.siteMetadata.memberItemsPerPage
        const numMemberPages = Math.ceil(
            memberItems.length / memberItemsPerPage
        )

        Array.from({ length: numMemberPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/members` : `/members/${i + 1}`,
                component: path.resolve("./src/templates/member-list.tsx"),
                context: {
                    limit: memberItemsPerPage,
                    skip: i * memberItemsPerPage,
                    numPages: numMemberPages,
                    currentPage: i + 1,
                },
            })
        })

        const portfolioItems = result.data.portfolio.edges
        const portfolioItemsPerPage =
            result.data.limitPost.siteMetadata.portfolioItemsPerPage
        const numPortfolioItems = Math.ceil(
            portfolioItems.length / portfolioItemsPerPage
        )

        Array.from({ length: numPortfolioItems }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/portfolio` : `/portfolio/${i + 1}`,
                component: path.resolve("./src/templates/portfolio-list.tsx"),
                context: {
                    limit: portfolioItemsPerPage,
                    skip: i * portfolioItemsPerPage,
                    numPages: numPortfolioItems,
                    currentPage: i + 1,
                },
            })
        })
    })
}
