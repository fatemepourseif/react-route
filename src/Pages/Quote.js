import React from "react";
import QuoteList from "./../components/quotes/QuoteList";

const DUMMY_Quote = [
  { id: "p1", author: "Max", text: "Learning React is fun" },
  { id: "p2", author: "Rick", text: "Learning React is Great" },
];

const Quote = () => {
  return <QuoteList quotes={DUMMY_Quote} />;
};

export default Quote;
