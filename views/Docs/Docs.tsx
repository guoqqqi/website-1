import React from "react";
import { NextPage } from 'next';
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import { withTranslation } from "../../i18n";
import { SWrapper, SShowBox } from "./style";
import data from "../../data/docs.json";

type Props = {
  t: TFunction;
  list: Section[];
};

const Docs: NextPage<Props, any> = ({ t, list = [] }) => {
  return (
    <SWrapper>
      <NextSeo title={t(`common:docs`)} />
      <div>
        <SShowBox>
          {list.map((item) => (
            <div className="sectionBox" key={item.title}>
              <h2>{item.title}</h2>
              <div className="itemBox">
                {console.log(item.list)}
                {(item.list).map((item) => (
                  <div className="itemBoxList" key={item.title}>
                    <h3>{item.title}</h3>
                    <ul>
                      {item.list.map((item) => (
                        <div key={item.title}>
                          <a href={item.href}>{item.title}</a>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </SShowBox>
      </div>
    </SWrapper>
  );
};

Docs.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data["docs"][lng];

  return {
    namespacesRequired: ["common"],
    list: posts,
  };
};

export default withTranslation("docs")(Docs as any);
