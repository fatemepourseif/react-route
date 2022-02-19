import React from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "./../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory();
  const onQuoteHandler = (quoteData) => {
    console.log(quoteData);
    history.push("/quote");
  };
  return <QuoteForm onAddQuote={onQuoteHandler} />;
};

export default NewQuote;
