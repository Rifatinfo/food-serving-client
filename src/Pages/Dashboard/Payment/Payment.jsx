import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51RU29MP1lBZ4jE5HQLEsv2i3DEGPi8Arn7OUrnNqqk9AEaDyLgAM8SQ8tCWiHOioWWqr1Lm8kqfpondjlkYx9qJK008xJG8fN7');

    return (
        <div>
            <div className="flex justify-center items-center mt-4">
                <h2 className="md:text-4xl text-xl font-semibold text-center">Payment By Users</h2>
            </div>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
