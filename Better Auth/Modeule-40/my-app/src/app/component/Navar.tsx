import Link from 'next/link';

interface typesceript {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navar = async () => {
  try {
    const res = await fetch('https://news-api-v2.vercel.app/api/categories');

    if (!res.ok) {
      return (
        <div className="flex gap-3 items-center justify-center max-w-5xl mx-auto">
          <Link href={'/'}>Home</Link>
        </div>
      );
    }

    const processdatabox = await res.json();
    const navbar: typesceript[] = processdatabox.data || [];
    const filterNavas = navbar.filter(n => n.scrapable);

    return (
      <div className="flex gap-3 items-center justify-center max-w-5xl mx-auto">
        <Link href={'/'}>Home</Link>

        {filterNavas.map((elements, i) => (
          <Link key={i} href={elements.slug}>
            {elements.title}
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error('API Error:', error);
    return (
      <div className="flex gap-3 items-center justify-center max-w-5xl mx-auto">
        <Link href={'/'}>Home</Link>
      </div>
    );
  }
};

export default Navar;
