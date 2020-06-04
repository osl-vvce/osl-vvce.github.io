import React from "react";
import SectionTitle from "../components/sectiontitle";
import Layout from "../components/layout";
import SEO from "../components/seo";
import image from "../../static/images/error.png";
const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <section id="404" className="container" style={{ minHeight: "600px" }}>
            <div className="section-title">
                <img src={image} alt="404 error" width="500" height="500" />
            </div>
        </section>
    </Layout>
);

export default NotFoundPage;
