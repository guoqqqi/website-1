import React from "react";
import { NextSeo } from "next-seo";
import { TFunction } from "next-i18next";
import { NextPage } from "next";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";
import { withTranslation } from "../../i18n";

import { SBlock1, SSection, SBlock2, SButton, SPluginChart } from "./style";

type Props = {
  t: TFunction;
};

const Home: NextPage<Props, any> = ({ t }) => {
  return (
    <>
      <NextSeo title={t("common:homepage")} />
      <Nav />
      <SBlock1>
        <span>{t("home-block1-title")}</span>
        <br />
        <span>{t("home-block1-desc")}</span>
        <div className="mask"></div>
      </SBlock1>
      <SSection>
        <span className="title">{t("home-block2-title")}</span>
        <SPluginChart>
          <div className="left">
            <div className="gif">
              <img
                src="https://static.apiseven.com/2020/07/low-code-api-gateway-example.gif"
                alt="low-code-api-gateway-example"
              />
            </div>
          </div>
          <div className="right">
            <div className="desc">
              <p>{t("home-block2-title2")}</p>
              <p>{t("home-block2-desc1")}</p>
              <p>{t("home-block2-desc2")}</p>
            </div>
            <div className="video-button">
              <SButton>
                <a
                  href="https://static.apiseven.com/2020/07/low-code-api-gateway-example.mp4"
                  target="_blank"
                >
                  {t("home-block2-btn1")}
                </a>
              </SButton>
            </div>
          </div>
        </SPluginChart>
      </SSection>
      <SSection>
        <span className="title">{t("home-block5-title")}</span>
        <span className="desc">{t("home-block5-desc")}</span>
        <img
          className="block-2-img"
          src="https://static.apiseven.com/2020/05/1594881772-Canvas-1.png"
          alt=""
        />
        <div className="feature-list">
          <div className="feature-item">
            <span className="title">{t("home-block5-feature1-title")}</span>
            <img
              src="https://static.apiseven.com/2020/05/mouse-globe.png"
              alt=""
            />
            <span className="desc">{t("home-block5-feature1-desc")}</span>
            <SButton>
              <a
                href="http://www3.apiseven.com/api-%e7%bd%91%e5%85%b3-apache-apisix-%e5%92%8c-kong-%e7%9a%84%e9%80%89%e5%9e%8b%e5%af%b9%e6%af%94/"
                target="_blank"
              >
                {t("home-block5-feature1-button")}
              </a>
            </SButton>
          </div>
          <div className="feature-item">
            <span className="title">{t("home-block5-feature2-title")}</span>
            <img
              src="https://static.apiseven.com/2020/05/laptop-cloud.png"
              alt=""
            />
            <span className="desc">{t("home-block5-feature2-desc")}</span>
            <SButton>
              <a
                href="http://www3.apiseven.com/category/%e7%94%a8%e6%88%b7%e6%a1%88%e4%be%8b/"
                target="_blank"
              >
                {t("home-block5-feature2-button")}
              </a>
            </SButton>
          </div>
          <div className="feature-item">
            <span className="title">{t("home-block5-feature3-title")}</span>
            <img
              src="https://static.apiseven.com/2020/05/plug-cloud.png"
              alt=""
            />
            <span className="desc">{t("home-block5-feature3-desc")}</span>
            <SButton>
              <a
                href="http://www3.apiseven.com/apache-apisix-vs-api7/"
                target="_blank"
              >
                {t("home-block5-feature3-button")}
              </a>
            </SButton>
          </div>
        </div>
      </SSection>
      <SSection>
        <span className="title">{t("home-block3-title")}</span>
        <div className="showcases">
          <div>
            <img
              src="https://static.apiseven.com/2020/05/WechatIMG618.png"
              alt=""
            />
          </div>
          <div>
            <img src="https://static.apiseven.com/2020/05/NASA.png" alt="" />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/%E4%B8%AD%E5%9B%BD%E8%88%AA%E4%BF%A1.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/HelloTalk.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907633-WechatIMG630.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/%E8%85%BE%E8%AE%AF%E4%BA%91-768x273.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588840167-airwallexreview.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907762-WechatIMG2916.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907453-ezgif-3-6c2dbe3cc8cd.png"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://static.apiseven.com/2020/05/1588907670-WechatIMG631.png"
              alt=""
            />
          </div>
        </div>
      </SSection>
      <SBlock2>
        <div>
          <span>{t("home-block4-title")}</span>
          <SButton>
            <a href="http://www3.apiseven.com/form-api7-trial" target="_blank">
              {t("home-block4-button")}
            </a>
          </SButton>
        </div>
      </SBlock2>
      <FooterLinks />
      <Footer />
    </>
  );
};

Home.getInitialProps = async () => ({
  namespacesRequired: ["common", "home"],
});

export default withTranslation('home')(Home);
