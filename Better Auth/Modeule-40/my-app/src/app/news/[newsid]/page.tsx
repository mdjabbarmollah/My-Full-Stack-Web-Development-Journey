import Newscard from '@/app/component/newscard';
import Link from 'next/link';
import React from 'react';

const Newsdetailspage = async ({ params }) => {
  const { newsid } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsid}`,
  );

  const data = res.json;
  const news = data.data;

  return (
    <Link href={`/news/>${news.id}`}>
      <div>
        <h1>{news.title}</h1>

        {news.map(pa => (
          <Newscard key={pa.id} newsdetailsprops={cd} />
        ))}
        <p>{news.text}</p>
      </div>
    </Link>
  );
};

export default Newsdetailspage;
