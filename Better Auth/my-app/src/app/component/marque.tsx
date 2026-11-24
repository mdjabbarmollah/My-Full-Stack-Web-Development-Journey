import Link from 'next/link';
import MarqueeText from 'react-marquee-text';
import 'react-marquee-text/dist/styles.css';

interface Headlines {
  id: string;
  title: string;
}
const Marque = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
  const processdata = await res.json();
  const headlines: Headlines[] = processdata.data;

  return (
    <div className="bg-red-700 text-white font-bold  ">
      <div className="max-w-7xl mx-auto flex">
        <div className="bg-red-800 flex items-center justify-center px-[10px] font-bold ">
          সর্বশেষ
        </div>

        <MarqueeText direction="right" duration={15} className="py-1">
          {headlines.map(h => (

            <Link href={`/news/${h.id}`} key={h.id}>
              <span>{h.title}</span>
              <span className="mx-5">•</span>
            </Link>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marque;
