const cart = () => {

    function handleAdd(id) {
        let newCart = data.find(data=>data.id == id)
        console.log(newCart)
        cart.push(newCart)
        console.log(cart)

        
        
        cart.forEach(cart =>{
            let cartArea = document.getElementById('cartArea')
            let cartItems = document.createElement('div')
            cartItems.classList = ""
            cartItems.innerHTML = `<div key={data.id} className="border flex flex-col h-full">
                    <div id="img" className="h-[140px] w-full my-4">
                        <img ${src={data.image}} alt="product image" className="h-[140px] w-[240px] object-scale-down" />
                    </div>
                    <div className="flex flex-col mx-3">
                        <p className="font-bold h-fit text-nowrap w-full truncate overflow-hidden">{data.title}</p>
                        <p className="w-full text-left">rating: {data.rating.rate}</p>
                        <p className="w-full text-left text-blue-800 font-bold">price: {data.price} <span className="text-black/30 font-light">/each</span></p>
                        <div className="flex bg-blue-700">
                            <div className="mx-1">
                            </div>
                        </div>
                    </div>
                </div>`
            cartArea.appendChild(cartItems)
            console.log(cartItems)
        })
        console.log(cartArea)

    }
    return (
        {}

      );
}
 
export default cart;