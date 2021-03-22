import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { withTranslation } from "../../i18n";
import { SWrapper } from "./style";
import blogData from "../../data/blog.json"
import usercaseData from "../../data/usercase.json"
import PostListCard from "./components/PostListCard";

type Props = {
  t: TFunction;
  type: "usercases" | "blog";
  list: Post[];
};

const PostList: NextPage<Props, any> = ({ t, type, list = [] }) => {
  return (
    <SWrapper>
      <NextSeo title={t(`common:${type}`)} />
      <div style={{borderTop: "2px solid #F7FAFC"}}>
        <PostListCard />
        <div className="slogan">
          <p>
            {t("about:about-box-desc4")}
          </p>
        </div>
      </div>
    </SWrapper>
  );
};

PostList.getInitialProps = async (context) => {
  const { pathname } = context;
  let type = pathname.slice(1);

  if (type === "usercases") {
    type = "usercase";
  }

  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = type === "blog" ? blogData[lng] : usercaseData[lng];

  return {
    namespacesRequired: ["common", "about"],
    type,
    list: posts,
  };
};

export default withTranslation("postlist")(PostList as any);
