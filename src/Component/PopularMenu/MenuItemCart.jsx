
const MenuItemCart = ({ item }) => {
    const { name, image, price, recipe } = item;
   
    return (
        <div>
            <div className="md:flex md:space-x-4">
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[120px] mb-4" src={image} alt="" />
                <div>
                    <h3 className="uppercase">{name}______________</h3>
                    <p>{recipe}</p>
                </div>
                <p className="text-yellow-500">${price}</p>
            </div>
        </div>
    );
};

export default MenuItemCart;