/* eslint-disable react/prop-types */

const Comthree = ({click,credit,reamining}) => {
 
    return (
        <div>
            <div className="cart-item bg-slate-200 p-6 rounded-lg">
                <div className="cart-hour-part">
                    <h3 className="text-[#2F80ED] font-bold text-[14px] pb-4 border-b border-black">Credit Hour Remaining {reamining} hr</h3>
                </div>
                <div className="cart-courch-name pt-4 pb-6 border-b border-black">
                    <h3 className="text-xl font-bold">Course Name</h3>
                        <ul type="1" className="list-decimal">
                            {
                               click.map( (clickData) => <li key={clickData.id}>{clickData.title}</li> )
                            }
                            
                        </ul>
                </div>
                <div className="cart-total-hour py-4 border-b border-black">
                    <h4 className="text-base font-medium">Total Credit Hour: {credit}</h4>
                </div>
                <div className="cart-total-price pt-4">
                    <h5 className="text-lg font-bold ">Total Price : 48000 USD</h5>
                </div>
            </div>
        </div>
    );
};

export default Comthree;