    // to explicitly tell the system that it's a number type: type definition 
    type CalculatorFeeProps = {
        cartValue: number,
        deliveryDistance: number,
        numberOfItems: number,
        orderTime: string
    }

    const calculateFee = ({cartValue, deliveryDistance, numberOfItems, orderTime} : CalculatorFeeProps) => {
        if (cartValue >= 200)
            return 0;

        let feeForCart = 0;
        if (cartValue < 10) {
            feeForCart = 10 - cartValue;
        } else {
            feeForCart = 0;
        }

        let feeForDistance = 2;
        if (deliveryDistance > 1000) { 
            const additionalMeters = deliveryDistance - 1000;
            feeForDistance += Math.ceil(additionalMeters / 500);
        }

        let feeForItemsNum = 0;
        if (numberOfItems >= 5) {
            if (numberOfItems >= 13) {
                feeForItemsNum = 1.2;
            }
            feeForItemsNum += (numberOfItems - 4) * 0.5;
        }

        let total = feeForCart + feeForDistance + feeForItemsNum;

        const selectedTime = new Date(orderTime);


        if (selectedTime.getHours() >= 15 && selectedTime.getHours() <= 18) {
            total *= 1.2;
        }

        if (total > 15) {
            total = 15;
        }

        return parseFloat(total.toFixed(2));
    }

    export default calculateFee;
