import { useState } from "react";
import "./Form.css"
import calculateFee from "../utils/calculateFee";
import apple from "../assets/apple.svg"
import truck from "../assets/truck.svg"
import cart from "../assets/cart.svg"
import clock from "../assets/clock.svg"

const now = new Date();

function Form() {
    const [cartValue, setCartValue] = useState<number>(0); // init with 0, setCartValue is a function to modify the value of cartValue
    const [deliveryDistance, setDeliveryDistance] = useState<number>(0);
    const [numberOfItems, setNumberOfItems] = useState<number>(0);
    const [orderTime, setOrderTime] = useState<string>("");

    const [deliveryFee, setDeliveryFee] = useState(0);

    // e: React.FormEvent: to explicitly tell the system that it's an form event object
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // to prevent from reload when it is submitted

        //value is a string, if it is empty, set the value as 0, otherwise parse the value
        const fee = calculateFee({
            numberOfItems, deliveryDistance, cartValue, orderTime}
        )
        setDeliveryFee(fee);
    }
    return (
        <div id="form-container">
            <form id="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <img className="icon" src={cart} alt="cart-icon" />
                    <label htmlFor="cartValue" data-testid="cart-value-label">Cart value</label>
                    <div className="input-wrapper">
                        <input
                            type="number"
                            id="cartValue"
                            name="cartValue"
                            placeholder="0.0"
                            min="0.1"
                            step="0.1"
                            value={cartValue}
                            onChange={(e) => setCartValue(parseFloat(e.target.value))}
                            // why parse? because value in input is a string even tyoe is number.
                        />
                        <span>€</span>
                    </div>
                </div>

                <div className="form-group">
                    <img className="icon" src={truck} alt="truck-icon" />
                    <label htmlFor="deliveryDistance">Delivery distance</label>
                    <div className="input-wrapper">
                        <input
                            type="number"
                            id="deliveryDistance"
                            name="deliveryDistance"
                            placeholder="0"
                            min="0"
                            step="1"
                            value={deliveryDistance}
                            onChange={(e) => setDeliveryDistance(parseFloat(e.target.value))}
                        />
                        <span>m</span>
                    </div>
                </div>

                <div className="form-group">
                    <img className="icon" src={apple} alt="apple-icon" />
                    <label htmlFor="numberOfItems">Amount of items</label>
                    <div className="input-wrapper">
                        <input
                            type="number"
                            id="numberOfItems"
                            name="numberOfItems"
                            placeholder="0"
                            min="0"
                            step="1"
                            value={numberOfItems}
                            onChange={(e) => setNumberOfItems(parseFloat(e.target.value))}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <img className="icon" src={clock} alt="clock-icon" />
                    <label htmlFor="orderTime">Time</label>
                    <div className="input-wrapper">
                        <input
                            type="datetime-local"
                            id="orderTime"
                            name="orderTime"
                            placeholder="Select Order Time"
                            min={now.toISOString().slice(0, 16)}
                            value={orderTime}
                            onChange={(e) => setOrderTime(e.target.value)}
                        />
                    </div>
                </div>

            <button type="submit">Calculate delivery price</button>
            <div className="delivery-price">
                <span>Delivery price:</span>
                <span className="price">{deliveryFee}€</span>
            </div>
            </form>
        </div>
    )
}

export default Form;
