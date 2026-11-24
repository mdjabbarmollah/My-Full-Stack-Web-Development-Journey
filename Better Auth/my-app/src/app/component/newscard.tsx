import Image from "next/image";


const Newscard = ({sendsome}) => {

  return (

    <div>
        <div className="overflow-hidden rounded-[6px] mx-auto shadow-sm w-auto ">
              
                 <figure>
                  <Image
                    src={sendsome.imageUrl}
                    alt={sendsome.imageAlt}
                    width={400}
                    height={300}
                  />
                </figure>
      
                <div className="card-body">
      
                  <p className="text-red-600 font-semibold">
                    {sendsome.category}
                  </p>
          
          <h2 className="card-title">
            {sendsome.title}
          </h2>
          
                  <p>
                    {sendsome.description}
                  </p>
      
              </div>
            </div>
    </div>

  );
};

export default Newscard;