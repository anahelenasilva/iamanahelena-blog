import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Avatar from "../Avatar";
import * as S from "./styled"

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
        <S.ProfileWrapper>
            <Avatar />
            <S.ProfileAuthor>{site.siteMetadata.title}</S.ProfileAuthor>
            <S.ProfilePosition>{site.siteMetadata.position}</S.ProfilePosition>
            <S.ProfileDescription>{site.siteMetadata.description}</S.ProfileDescription>
        </S.ProfileWrapper>
    );

}

export default Profile;