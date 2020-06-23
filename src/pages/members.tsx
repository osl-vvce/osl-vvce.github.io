import React from "react"
import Layout from "../components/layout"
import { PageProps } from "gatsby"

export default ({ location }: PageProps<{}, {}>) => {
    return (
        <Layout
            seo={{
                title: "Members",
            }}
            location={location}
        >
            <div className="container mx-auto py-12">
                <div className="title py-12 text-center">
                    <h2 className="font-black text-5xl text-color-1">
                        Members Page
                    </h2>
                    <p> Coming Soon</p>
                </div>
                <div style={{ marginBottom: "25vh" }}></div>
            </div>
        </Layout>
    )
}
