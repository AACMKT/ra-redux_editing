import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFINE_PRICE, DEFINE_SERVICE,CLEAR_INPUT, SET_USER_VALUE } from "../redux/actions";

export const Interface = () => {
    const [btnVisability, setBtnVisibility] = useState(false)
    const { userValue } = useSelector((state) => state.service);
    const dispatch = useDispatch();

    const handleBtnVisibility = (text) => {
        if (text.length === 0) {
            setBtnVisibility(false)
        }
        else {
            setBtnVisibility(true)
        }
    }

    useEffect(() => {
        const input = Array.from(document.querySelectorAll('.input-field'));
        let trigger = false
        input.forEach((item) => {
            if (item.value.length > 0) {
                trigger = true
                setBtnVisibility(true)
            }
   
        })
        if (!trigger) {
            setBtnVisibility(false)
        }
    }, [userValue])
    const checkPrice = (price) => {
        if (price.length === 0) {
            return ''
        }
        if (!(/[0-9]+/.test(price))) {
            return ''
        }

        return price
    }
   
    return (
        <div className="controls">
            <div className="field-container">
                <h3 className="title">Service</h3>
                <input type="text" className="input-field" value={userValue.service}  onChange={(e) => {dispatch({type: DEFINE_SERVICE, payload: e.target.value}); handleBtnVisibility(e.target.value)}}/>
            </div>
            <div className="price-container">
                <h3 className="title">Service price</h3>
                <input type="text" className="input-field" value={userValue.price}  onChange={(e) => {dispatch({type: DEFINE_PRICE, payload: checkPrice(e.target.value)}); handleBtnVisibility(e.target.value)}}/>
            </div>
            <input type="button" className="button" value={ "Save" } onClick={(e) => {
                e.preventDefault();
                dispatch({type: SET_USER_VALUE, payload: userValue});
                dispatch({type: CLEAR_INPUT});
            }}/>
             <input type="button" className={`button ${btnVisability ? "visible" : "hidden"}`} value={ "Cancel" } onClick={() => dispatch({type: CLEAR_INPUT})} />
        </div>
    )
}