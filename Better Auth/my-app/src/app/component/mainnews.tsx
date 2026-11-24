import Image from 'next/image';
import Link from 'next/link';


interface News {

  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  imageAlt: string;

}

const Mainnews = ({ news }: { news: News[] }) => {
  
  const firstnews = news[0]
  const othernews = news.slice(1)

  // const [firstnews,...otherNews] = news

  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-2 gap-3 justify-center mt-[10px] ">
      <Link href={`/news/${firstnews.id}`}>
        <div className="overflow-hidden rounded-[6px] mx-auto shadow-sm w-auto">
          <figure>
            <Image
              src={firstnews.imageUrl}
              alt={firstnews.imageAlt}
              width={400}
              height={300}
            />
          </figure>

          <div className="card-body">
            <p className="text-red-600 font-semibold">{firstnews.category}</p>
            <h2 className="card-title">{firstnews.title} </h2>
            <p>{firstnews.description}</p>
          </div>
        </div>
      </Link>
      <div className="grid gap-2">
        {othernews.slice(0, 4).map((on) => (
          <Link
            key = {on.id}
            href={`/news/${on.id}`}>
            <div
              className="border bg-base-100 border-gray-300 p-5 rounded-[6px]"
              key={on.id}
            >
              <p className="text-red-600 font-semibold">
                {firstnews.category}
              </p>

              {on.title}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Mainnews;