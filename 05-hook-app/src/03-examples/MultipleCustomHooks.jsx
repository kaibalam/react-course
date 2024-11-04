import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`);

    // console.log({ data, isLoading, hasError });
    const { author, quote } = !!data && data[0];
    console.log(data);


    return (
        <>
            <h1>BreakingBad quotes</h1>
            <hr />
            {
                isLoading
                ? <LoadingQuote/>
                : <Quote author={ author } quote={ quote }/>
            }

            <button className="btn btn-primary" 
            disabled = { isLoading }
            onClick={() => increment(1)}>
                Next quote
            </button>


        </>
    )
}
