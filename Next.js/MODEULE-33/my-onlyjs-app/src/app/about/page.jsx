import Image from "next/image";

const aboutus = () => {
  return (
    <div>
      <h2>
        Now i am creating a  about us page.
      </h2>
      <Image src="/swis.jpg" alt="Swis Image" width={900} height={500} className="h-[400px]" />
      
      <Image src="https://plus.unsplash.com/premium_photo-1670148434900-5f0af77ba500"
        alt="Description"
        width={500} height={500} /> 
      <Image src="https://images.unsplash.com/photo-1751225750479-43ad27b94fa0" alt="disf" width={454} height={354} />
    </div>
  )
}
export default aboutus;