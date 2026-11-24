import Mainnews from './component/mainnews';
import Marque from './component/marque';
import Mostread from './component/mostread';
import Newscard from './component/newscard';

type SectionsResponse = {
  success: boolean;
  count: number;
  cachedAt: string;
  data: Section[];
};

type Section = {
  title: string;
  curationId: string;
  curationType: string;
  link: string | null;
  count: number;
  articles: Article[];
};

type Article = {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl: string;
  imageAlt: string;
  category: string;
  type: string;
  isLive: boolean;
  firstPublished: string | null;
  lastPublished: string | null;
  source: string;
};

export default async function Home() {
  const res = await fetch('https://api.api-store.workers.dev/api/bazardor');

  const processdata: SectionsResponse = await res.json();

  const homenews = processdata.data;

  const targetdnews = homenews[0].articles;

  const othersection = homenews.slice(1);

  return (
    <div>
      <Marque />
      <div className=" grid-cols-3 grid max-w-7xl mx-auto gap-3">
        <div className="col-span-2">
          {/* main section  */}
          <Mainnews news={targetdnews} />

          <div className="grid  gap-5 mt-5">
            {/* other section  */}

            {othersection.map(os => (
              <div
                className="border-b-2 pb-1 border-red-900  grid-cols-2"
                key={os.curationId}
              >
                <h1 className='font-bold'>{os.title}</h1>
                {
                  os.articles.map((news) =>
                  
                  (<Newscard key={news.id} sendsome={news} />
                
                 ))}
              </div>
            )
          )
            }
          </div>
          <div>
            <Mostread/>
          </div>
        </div>
      </div>
    </div>
  );
}
