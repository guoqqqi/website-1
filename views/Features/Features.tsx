import React from "react";
import { NextPage } from 'next';
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { withTranslation } from "../../i18n";
import { SWrapper, SSection, SMenu, SShowBox } from "./style";
import data from "../../data/products/api7/features.json";

type Props = {
  t: TFunction;
  list: Section[];
};

const Features: NextPage<Props, any> = ({ t, list = [] }) => {
  return (
    <SWrapper>
      <NextSeo title={t(`common:features`)} />
      <SSection>
        <div className="background"></div>
        <div className="titleBox">
          <h1>API7 功能展示</h1>
          <p>API7 新一代云原声，高性能，可扩展的微服务 API 网关</p>
        </div>
        <SMenu>
          <ul>
            <li><a href="">API 和服务治理</a></li>
            <li><a href="">安全</a></li>
            <li><a href="">可观测性</a></li>
            <li><a href="">性能和高可用</a></li>
            <li><a href="">运维</a></li>
          </ul>
        </SMenu>
      </SSection>
      <SShowBox>
        {list.map((item) => (
          <div className="sectionBox" key={item.title}>
            <h2>{item.title}</h2>
            <div className="itemBox">
              {(item.list).map((item) => (
                <div className="itemBoxList" key={item.title}>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.list.map((item) => (
                      <li key={item.title}>
                        <a href={item.href}>{item.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </SShowBox>
    </SWrapper>
  );
};

Features.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data["features"][lng];

  return {
    namespacesRequired: ["common"],
    list: posts,
  };
};

export default withTranslation("features")(Features as any);
