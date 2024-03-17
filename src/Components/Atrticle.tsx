import React from "react";

type ArticleProps = {
  title: string;
  text?: string[];
};
const Article: React.FC<ArticleProps> = ({ title, text }) => {
  return (
    <article className='article'>
      <h1 className='article__title'>{title}</h1>
      {text &&
        text.map((paragraph, index) => (
          <p className='article__paragraph' key={index}>
            {paragraph}
          </p>
        ))}
    </article>
  );
};

export default Article;
