import React, { useEffect, useState } from "react";
import { NextPage } from 'next';
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { withTranslation } from "../../i18n";
import { SWrapper, SSection, SMenu, SShowBox } from "./style";
import features from "../../data/products/api7/features.json";

type Props = {
  t: TFunction;
  list: Section[];
};

const Features: NextPage<Props, any> = ({ t, list = [] }) => {
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setCurrentHeight(document.documentElement.scrollTop);
    })
  }, [])

  return (
    <SWrapper>
      <NextSeo title={t(`common:features`)} />
      <SSection>
        <div className="background"></div>
        <div className="titleBox">
          <h1>API7 功能展示</h1>
          <p>API7 为您提供生产可用的七层全流量处理平台</p>
        </div>
        <SMenu>
          <ul className={currentHeight > 370 && "newmenu"}>
            {list.map((item, index) => {
              return (
                <li key={index}><a href={`#${item.title}`}>{item.title}</a></li>
              )
            })}
          </ul>
        </SMenu>
      </SSection>
      <SShowBox>
        {list.map((item) => (
          <div className="sectionBox" key={item.title}>
            <h2 id={item.title}>{item.title}</h2>
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
      <div id="footer"></div>
    </SWrapper>
  );
};

Features.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = features[lng];

  return {
    namespacesRequired: ["common"],
    list: posts,
  };
};

export default withTranslation("features")(Features as any);
