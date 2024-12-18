import { useState } from "react";
import calculateFee from "../utils/calculateFee";

function Form() {
    const [cartValue, setCartValue] = useState<string>(""); // init with 0, setCartValue is a function to modify the value of cartValue
    const [deliveryDistance, setDeliveryDistance] = useState<string>("");
    const [numberOfItems, setNumberOfItems] = useState<string>("");

    const [deliveryFee, setDeliveryFee] = useState(0);

    // to explicitly tell the system that it's an form event object
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // to prevent from reloat when it is submitted

        //value is a string, if it is empty, set the value as 0, otherwise parse the value
        const fee = calculateFee(
            cartValue === "" ? 0 : parseFloat(cartValue),
            deliveryDistance === "" ? 0 : parseInt(deliveryDistance),
            numberOfItems === "" ? 0 : parseInt(numberOfItems))
        setDeliveryFee(fee);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="cartValue">Cart value</label>
                <input
                    type="number"
                    id="cartValue"
                    name="cartValue"
                    placeholder="0.0"
                    min="0.1"
                    step="0.1"
                    value={cartValue}
                    onChange={(e) => setCartValue(e.target.value)}
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
                    onChange={(e) => setDeliveryDistance(e.target.value)}
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
                    onChange={(e) => setNumberOfItems(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="orderTime">Time</label>
                <input
                    type="datetime-local"
                    id="orderTime"
                    name="orderTime"
                    placeholder="Select Order Time"
                    min={new Date().toISOString().slice(0, 16)}
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
