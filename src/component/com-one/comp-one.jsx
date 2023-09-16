
const CompOne = () => {
    const [item, setItem] = useState([])
    const [click, setClick] = useState([])
    const [credit, setcredit] = useState(0)
    const [reamining , setreamining] = useState(0)
    console.log(reamining)
    useEffect(() => {
        fetch('blog.json')
            .then(ref => ref.json())
            .then(data => setItem(data))
    }, [])

    const setfunction = (set) => {
        const noRepet = click.find((item) => item.id === set.id)
        let count = set.credit;
        if (noRepet) {
            toast("already add")
            return
        }
        else {
            click.forEach(data => {
                count += data.credit
            })
            if(count > 20){
                toast("it's full")
                return
            }
            else{

                setcredit(count)

            }
            const reamining =20 - count
            setreamining(reamining)



            setClick([...click, set])
        }

    }

    return (
        <>
            <div className="title-text text-center my-9">
                <h1 className="font-bold text-4xl">Course Registration</h1>
            </div>
            <div className="home-wrapper flex justify-between container mx-auto">
                <div className="w-4/5  grid grid-cols-3 gap-6">
                    {
                        item.map(item => <CompTwo key={item.id} item={item} setfunction={setfunction}></CompTwo>)
                    }
                </div>
                <div className="cart">
                    <Comthree click={click} credit={credit} reamining={reamining}></Comthree>
                </div>
                <ToastContainer />

            </div>
        </>
    );
};
export default CompOne;
import { useEffect } from "react";
import CompTwo from "../com-two/com-two";
import { useState } from "react";
import Comthree from "../comthree/comthree";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

