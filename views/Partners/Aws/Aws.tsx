import React from "react";
import { NextPage } from "next";
import { TFunction } from "next-i18next";
import { NextSeo } from "next-seo";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FooterLinks from "@/components/FooterLinks";

import { withTranslation } from "i18n";
import { SSection1, SSection2, SSection3, SSection4, SContainer, SCard, SWrapper } from "@/views/Partners/Aws/style";

type Props = {
  t: TFunction;
};

const Aws: NextPage<Props, any> = ({ t }) => {
  return (
    <div>
      <NextSeo title={t(`common:aws`)} />
      <div>
        <Nav />
        <SSection1>
          <div className='background'>
            <img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/pattern-2.svg" alt="" />
          </div>
          <SContainer>
            <SCard>
              <p className="title">PARTNER</p>
              <h1>API7 for Amazon Web Services</h1>
              <h4>
                <span>
                  Full-Lifecycle API and Microservices Management<br />Container-Native | Hybrid-Ready
                </span>
              </h4>
            </SCard>
            <SCard>
              <p className="box">
                <img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/aws.jpg" alt="" />
              </p>
            </SCard>
          </SContainer>
        </SSection1>
        <SSection2>
          <SContainer>
            <SWrapper>
              <p className="title">Overview</p>
              <p className="logo"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/icn-cloud-1.svg" alt="123" /></p>
              <p>Organizations are attempting to modernize by embracing decentralized architectures, automating workflows, and adopting CI/CD practices. Kong’s Service Control Platform is designed to optimize today’s application modernization needs through intelligent automation across the full lifecycle of APIs and services.</p>
              <p>&nbsp;</p>
              <p>Kong’s plug-in architecture and open-source core make the platform extensible for any use case. Kong accelerates moving mission-critical services to the AWS cloud by reducing disruption to the business during and after migration. Kong also enables AWS services integration to legacy on-premise systems that are not designed to handle cloud-volume requests. Kong works with AWS EKS, Lambda, ECS, RDS, Aurora, ElastiCache and more.</p>
              <div>
                <div className="card"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/AmazonLinux2.svg" alt="123" /></div>
                <div className='card'><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/AWSLambda.svg" alt="123" /></div>
                <div className="card"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/DevOpsCompetency.svg" alt="123" /></div>
              </div>
            </SWrapper>
          </SContainer>
        </SSection2>
        <SSection3>
          <SContainer>
            <p className="title">BENEFITS</p>
            <div className="row">
              <SCard>
                <h3>Performance at Scale</h3>
                <p>Kong provides the industry’s lowest latency and highest scalability to ensure your services always perform at their best. Kong’s lightweight core built for the cloud-native world allows you to optimize performance as your AWS services scale up to thousands of transactions per second.</p>
              </SCard>
              <SCard>
                <div>
                  <p className="box"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/aws1.jpg" alt="" /></p>
                </div>
              </SCard>
            </div>
            <div className="row">
              <SCard>
                <div className="inner">
                  <p className="box"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/aws2.jpg" alt="" /></p>
                </div>
              </SCard>
              <SCard>
                <h3>Flexible and Extensible</h3>
                <p>Kong’s active open source core is developed by a global community of developers focused on the next era of API management. Kong’s plug-in architecture makes it easy for organizations to take advantage of plug-ins sourced from the community, third-party providers, and from Kong’s Enterprise team. See the Kong Hub to learn about Kong’s AWS Lambda and Kong on AWS with Terraform plug-ins.</p>
              </SCard>
              <SCard>
                <div className="inner2">
                  <p className="box"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/aws2.jpg" alt="" /></p>
                </div>
              </SCard>
            </div>
            <div className="row">
              <SCard>
                <h3>Move to Cloud with a Hybrid AWS Solution</h3>
                <p>Kong supports hybrid use cases, for customers who want to move mission-critical services to the AWS cloud but still need to connect with other services remaining in on-premise systems due to business requirements. </p>
              </SCard>
              <SCard>
                <div>
                  <p className="box"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/aws3.jpg" alt="" /></p>
                </div>
              </SCard>
            </div>
          </SContainer>
        </SSection3>
        <SSection4>
          <div className="background"><img src="https://2tjosk2rxzc21medji3nfn1g-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/pattern-2.svg" alt="" /></div>
          <SContainer>
            <div className="col">
              <h2>Learn More About Kong for Amazon Web Services.</h2>
              <div className="button"><span><a href="" target="blank">Learn More</a></span></div>
            </div>
          </SContainer>
        </SSection4>
        <FooterLinks />
        <Footer />
      </div>
    </div>
  );
};

Aws.getInitialProps = async (context) => {
  return {
    namespacesRequired: ["common", "aws"],
  };
};

export default withTranslation("Aws")(Aws as any);
