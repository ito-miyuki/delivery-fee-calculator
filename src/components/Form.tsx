import { useState } from "react";
import calculateFee from "../utils/calculateFee";

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
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="cartValue" data-testid="cart-value-label">Cart value</label>
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

            <div className="form-group">
                <label htmlFor="deliveryDistance">Delivery distance</label>
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

            <div className="form-group">
                <label htmlFor="numberOfItems">Amount of items</label>
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

            <div className="form-group">
                <label htmlFor="orderTime">Time</label>
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

        <button type="submit">Calculate delivery price</button>
        <div>
            <p>Delivery price: {deliveryFee}€</p>
        </div>
        </form>
    )
}

export default Form;
