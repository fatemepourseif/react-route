import React from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "./../components/quotes/HighlightedQuote";

const DUMMY_Quote = [
  { id: "p1", author: "Max", text: "Learning React is fun" },
  { id: "p2", author: "Rick", text: "Learning React is Great" },
];

const DetailQuote = () => {
  const match = useRouteMatch();
  const params = useParams();
  const quote = DUMMY_Quote.find((quote) => quote.id === params.quoteId);

  console.log(match);

  if (!quote) {
    return <p>No Quote Found</p>;
  }

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comment`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comment`}>
        <Comments />
      </Route>
    </div>
  );
};

export default DetailQuote;
