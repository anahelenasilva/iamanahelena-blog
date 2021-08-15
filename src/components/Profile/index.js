import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Avatar from "../Avatar";

const Profile = () => {
    const { site } = useStaticQuery(
        graphql`
            query MySiteMetadata {
                site {
                    siteMetadata {
                        title
                        position
                        description
                    }
                }
            }
        `
    );

    return (
        <div className="Profile-wrapper">
            <Avatar />
            <h1>{site.siteMetadata.title}</h1>
            <h2>{site.siteMetadata.position}</h2>
            <p>{site.siteMetadata.description}</p>
        </div>
    );

}

export default Profile;