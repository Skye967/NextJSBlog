import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from "react-syntax-highlighter/dist/cjs/languages/prism/css";

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css);


function PostContent(props) {
  const { post } = props;

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRendereres = {
    // img: (image) => {
    //   return (
    //     <Image
    //       src={`/images/posts/${post.slug}/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300 }
    //       priority
    //     />
    //   )
    // }

    p: (paragraph) => {
      const { node } = paragraph;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={image.properties.src}
              alt={image.properties.alt}
              width={600}
              height={300}
              priority
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },


    code(code) {
      const { className, children } = code;
      const match = /language-(\w+)/.exec(className || "");

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match[1]}
          children={children}
        />
      );
    }
  }

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown children={post.content} components={customRendereres} />
    </article>
  );
}

export default PostContent;
