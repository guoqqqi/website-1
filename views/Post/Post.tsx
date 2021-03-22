import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Head from "next/head";
import { TFunction } from "next-i18next";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import gfm from "remark-gfm";

import { withTranslation } from "../../i18n";
import {
  SSection1,
  SSection2,
  SBox1,
  SBox2,
  SInner,
  SArticle,
} from "./style";

type Props = {
  t: TFunction;
  isSimple?: boolean;
  content: string;
  data: {
    title: string;
    avatar: string;
    author: string;
    date: Date;
    href: string;
  };
};

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter showLineNumbers={true} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};

const Page: NextPage<Props, any> = ({ t, content, data = {}, isSimple }) => {
  const [shareUrl, setShareUrl] = useState('');
  useEffect(() => {
    setShareUrl(`${window.location.href}`);
    if (!/(usercase|blog)/.test(window.location.pathname)) {
      return;
    }

    (window as any).disqus_config = function () {
      this.page.url = window.location.href;
      this.page.identifier = window.location.href.split("/").pop();
    };

    (function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://apiseven.disqus.com/embed.js";
      s.setAttribute("data-timestamp", `${+new Date()}`);
      (d.head || d.body).appendChild(s);
    })();
  }, []);

  if (isSimple) {
    return (
      <SBox2 style={{ maxWidth: 1200, padding: "0 25px" }}>
        <h2 style={{ textAlign: "center", marginTop: 30, marginBottom: 20 }}>
          {data.title}
        </h2>
        <SArticle>
          <ReactMarkdown
            escapeHtml={false}
            source={content}
            plugins={[gfm]}
            renderers={{ code: CodeBlock }}
          />
        </SArticle>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p style={{ marginBottom: 0 }}>
            <b>SUPPORTED BY</b>
          </p>
          <a href="https://www.apiseven.com/" target="_blank">
            <img
              style={{ width: 100 }}
              src="https://static.apiseven.com/2020/05/Jietu20200312-103300-removebg-preview.png"
              alt=""
            />
          </a>
        </div>
      </SBox2>
    );
  }

  return (
    <>
      <NextSeo
        title={data.title || t("common:job")}
        description={(content || "").trim().substring(0, 140)}
      />
      <Head>
        <script
          type="text/javascript"
          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5fd9eee22eecfc00"
        ></script>
      </Head>
      <div>
        {content === undefined && <h2>{t("common:notFound")}</h2>}
        {content !== undefined && (
          <div>
            <SSection1>
              <SBox1>
                <h1>{data.title}</h1>
                <SInner>
                  <div className="left">
                    <img src={data.avatar} alt="" />
                    <div>
                      <p>
                        <a href={data.href}>{data.author}</a>
                      </p>
                      <p>
                        {t("common:updatedAt")}&nbsp;
                        {new Date(data.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <div className="right">
                    <ul>
                      <li><a href={`https://twitter.com/intent/tweet?text=${shareUrl}`}><svg><path d="M22.05 7.54a4.47 4.47 0 0 0-3.3-1.46 4.53 4.53 0 0 0-4.53 4.53c0 .35.04.7.08 1.05A12.9 12.9 0 0 1 5 6.89a5.1 5.1 0 0 0-.65 2.26c.03 1.6.83 2.99 2.02 3.79a4.3 4.3 0 0 1-2.02-.57v.08a4.55 4.55 0 0 0 3.63 4.44c-.4.08-.8.13-1.21.16l-.81-.08a4.54 4.54 0 0 0 4.2 3.15 9.56 9.56 0 0 1-5.66 1.94l-1.05-.08c2 1.27 4.38 2.02 6.94 2.02 8.3 0 12.86-6.9 12.84-12.85.02-.24 0-.43 0-.65a8.68 8.68 0 0 0 2.26-2.34c-.82.38-1.7.62-2.6.72a4.37 4.37 0 0 0 1.95-2.51c-.84.53-1.81.9-2.83 1.13z"></path></svg></a></li>
                      <li><a href=""><svg><path d="M10.76 20.9v-8.57H7.89v8.58h2.87zm-1.44-9.75c1 0 1.63-.65 1.63-1.48-.02-.84-.62-1.48-1.6-1.48-.99 0-1.63.64-1.63 1.48 0 .83.62 1.48 1.59 1.48h.01zM12.35 20.9h2.87v-4.79c0-.25.02-.5.1-.7.2-.5.67-1.04 1.46-1.04 1.04 0 1.46.8 1.46 1.95v4.59h2.87v-4.92c0-2.64-1.42-3.87-3.3-3.87-1.55 0-2.23.86-2.61 1.45h.02v-1.24h-2.87c.04.8 0 8.58 0 8.58z"></path></svg></a></li>
                      <li><a href=""><svg><path d="M23.2 5H5.8a.8.8 0 0 0-.8.8V23.2c0 .44.35.8.8.8h9.3v-7.13h-2.38V13.9h2.38v-2.38c0-2.45 1.55-3.66 3.74-3.66 1.05 0 1.95.08 2.2.11v2.57h-1.5c-1.2 0-1.48.57-1.48 1.4v1.96h2.97l-.6 2.97h-2.37l.05 7.12h5.1a.8.8 0 0 0 .79-.8V5.8a.8.8 0 0 0-.8-.79"></path></svg></a></li>
                      <li><a href=""><svg><path d="M19 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 0 0 .7.03l5.67-4.12 5.66 4.13a.5.5 0 0 0 .71-.03.5.5 0 0 0 .12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v13.64l-5.16-3.67a.49.49 0 0 0-.68 0z"></path></svg></a></li>
                    </ul>
                  </div>
                </SInner>
              </SBox1>
            </SSection1>
            <SSection2>
              <SBox2>
                <SArticle>
                  <ReactMarkdown
                    escapeHtml={false}
                    source={content}
                    plugins={[gfm]}
                    renderers={{ code: CodeBlock }}
                  />
                </SArticle>
                <div id="disqus_thread"></div>
              </SBox2>
            </SSection2>
          </div>
        )}
      </div>
    </>
  );
};

Page.getInitialProps = async (context) => {
  // https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
  const { slug = [] } = context.query;

  const { lng = "zh-CN" } = (context.req as any) || {};

  try {
    let fileData = null;

    if (slug.length === 1) {
      fileData = await import(`../../_posts/page/${lng}/${slug[0]}.md`);
    }

    if (slug.length === 2) {
      fileData = await import(`../../_posts/${slug[0]}/${lng}/${slug[1]}.md`);
    }

    const { data, content } = matter(fileData.default);
    return {
      namespacesRequired: ["common"],
      data,
      content,
      isSimple: ["luarocks"].includes(slug[0]),
    };
  } catch (error) {
    return {
      namespacesRequired: ["common"],
      content: undefined,
    };
  }
};

// TODO: typing
export default withTranslation("post")(Page as any);
