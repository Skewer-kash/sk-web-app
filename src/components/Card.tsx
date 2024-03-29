import financed from "@/assets/data/home";
import Image from "next/image";

export default function Card() {
  return (
    <>
      {financed.map((item, index) => (
        <div
          className="py-8 px-8 border border-gray-100 rounded-2xl"
          style={{ backgroundColor: item.color }}
          key={index}
        >
          <Image
            src={item.image}
            alt="icons"
            className="w-14 h-14 mb-6 p-3 bg-white rounded-full"
          />

          <h4 className="text-xl font-semibold mt-6 mb-6">{item.title}</h4>
          <p className="text-base md:text-lg mb-5">{item.content}</p>
        </div>
      ))}
    </>
  );
}
