

const FeaturedCard = ({title,rating,count,price,image}) => {
   
    return ( 
        <>
            <div className="border flex flex-col h-full">
                <div id="img" className="h-[140px] w-[240px] border">
                    <img src={image} alt="product image" className="h-[140px] w-[240px] object-scale-down"  />
                </div>
                <div className="flex flex-col">
                    <p className="font-bold">{title}</p>
                    <p>rating: {rating}</p>
                    <p className="text-blue-800 font-medium">price: {price}</p>
                    <p>in stock: {count}</p>
                </div>
            </div>
        </>
     );
}
 
export default FeaturedCard;