
const CompTwo = ({ item, setfunction }) => {
    const { author, author_img, cover, posted_date, reading_time, title, price, credit } = item
    return (
        <div>
            <div className="container mx-auto">
                <div className="cart-container">
                    <div className="card border-spacing-0 ">

                        <div className="card-wrapper  p-6 bg-slate-200 rounded-lg">
                            <div className="card-img">
                                <img className="rounded-lg w-80 mx-auto" src={cover} alt="" />
                            </div>
                            <div className="card-text">
                                <h2 className=" font-bold text-[20px] py-6">{title}</h2>
                                <p className="py-3 text-base font-medium">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                <div className="price-item flex justify-between">
                                    <div className="price-item flex">
                                        $<h3>Price : {price}</h3>
                                    </div>
                                    <div className="cradit-item flex">
                                        <h3>Credit : {credit}hr</h3>
                                    </div>
                                </div>
                                <button className="min-w-full bg-[#2F80ED] py-2 text-base font-normal text-white my-3 rounded-xl" onClick={() => setfunction(item)}>Select</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompTwo;