    // to explicitly tell the system that it's a number type: type definition 
    type CalculatorFeeProps = {
        cartValue: number,
        deliveryDistance: number,
        numberOfItems: number
    }

    const calculateFee = ({cartValue, deliveryDistance, numberOfItems} : CalculatorFeeProps) => {
        if (cartValue >= 200)
            return 0;

        let feeForCart = 0;
        if (cartValue < 10) {
            feeForCart = 10 - cartValue; // should I do something to get number in float?
        } else {
            feeForCart = 2;
        }

        let feeForDistance = 1;
        if (deliveryDistance >= 1000) {
            feeForDistance = Math.floor(deliveryDistance / 500); // there is no Int type
        }

        let feeForItemsNum = 0;
        if (numberOfItems >= 5) {
            if (numberOfItems >= 13) {
                feeForItemsNum = 1.2;
            }
            feeForItemsNum += (numberOfItems - 4) * 0.5;
        }

        // Add peak time handling here
        // if it's a peal time, total * 1.2

        let total = feeForCart + feeForDistance + feeForItemsNum;
        if (total > 15)
            total = 15;

        return total;
    }

    export default calculateFee;
