import Image from "next/image";

export const ProductCard = ({ name, price, src, alt, description }) => (
    <div className="m-2 max-w-sm rounded overflow-hidden shadow-lg mx-auto w-full min-w-[300px]">
        <Image className="w-full" src={src} alt={alt} />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">
                {description}
            </p>
        </div>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-blue-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{price}€</span>
        </div>
    </div>
);