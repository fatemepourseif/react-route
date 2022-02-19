import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const DetailQuote = React.lazy(() => import("./Pages/DetailQuote"));
const NewQuote = React.lazy(() => import("./Pages/NewQuote"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));
const Quote = React.lazy(() => import("./Pages/Quote"));

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Switch>
          <Route path="/" exact>
            <Redirect to="/quote" />
          </Route>
          <Route path="/quote" exact>
            <Quote />
          </Route>
          <Route path="/quote/:quoteId">
            <DetailQuote />
          </Route>
          <Route path="/new-quote">
            <NewQuote />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
    </Layout>
  );
}

export default App;
