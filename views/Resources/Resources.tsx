import React, { useEffect } from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";

import { withTranslation } from "../../i18n";
import { SWrapper } from "./style";
import data from "../../data/devcon.json";

type Props = {
  t: TFunction;
  list: Post[];
};

const Resources: NextPage<Props, any> = ({ t, list = [] }) => {
  useEffect(() => {
    for (let i = 0; i < list.length; i++) {
      const changeStyle = () => {
        if (show.className === "active") {
          show.removeAttribute("class");
        } else {
          show.setAttribute("class", "active");
        }
      };
      const show = document.getElementById(`role${i}`);
      show.addEventListener("click", changeStyle);
    }
  }, []);

  return (
    <SWrapper>
      <NextSeo title="资源" />
      <div>
        <Nav />
        <div className="cover">
          <div className="box">
            <h1>Apache APISIX Devcon 2020</h1>
          </div>
        </div>
        <section>
          <div className="container">
            <h2>Videos</h2>
            <ul>
              {list.map((item, index) => (
                <li id={`role${index}`} key={item.title}>
                  <div className="left">
                    <p className="title">{item.title}</p>
                    <p className="speaker">{item.desc}</p>
                  </div>
                  <a className="showButton" id="show" href={`#${item.title}`}>View Description</a>
                  <div className="right" id="stp"><a href={item.path} target="blank">观看视频</a></div>
                  <div className="contentBox" id="contentBox">
                    <div className="content">
                      <p>{item.content}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <FooterLinks />
        <Footer />
      </div>
    </SWrapper>
  );
};

Resources.getInitialProps = async (context) => {
  const { lng = "zh-CN" } = (context.req as any) || {};

  const posts = data["keynotes"][lng];

  return {
    namespacesRequired: ["common"],
    list: posts,
  };
};

export default withTranslation("resources")(Resources as any);
