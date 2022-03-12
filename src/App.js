import { lazy, useState, useCallback, useEffect, Suspense } from "react";
import {
  Redirect,
  Route,
  useLocation,
  Switch,
  HashRouter as Router,
} from "react-router-dom";
import GithubCorner from "./components/GithubCorner";
import "./App.css";

import Header from "./components/Header";
import Menu from "./components/Menu";
import ButtonManu from "./components/ButtonManu";

const address =
  "https://github.com/tomik23/react-leaflet-examples/blob/main/src/pages/";

const ChangeTitle = ({ title }) => {
  const titleName = title.replace(/-/g, " ");
  useEffect(() => {
    document.title = titleName;
  }, [titleName]);

  return <h2 className="title">{titleName}</h2>;
};

const Info = ({ info }) => {
  return info ? <small dangerouslySetInnerHTML={{ __html: info }} /> : null;
};

const Child = ({ info, id, text }) => {
  const location = useLocation();
  const LoadComponent = lazy(() =>
    import(
      /* webpackChunkName: "[request]" */ `./pages${location.pathname}.js`
    ).catch(() => import("./components/NotFound.js"))
  );

  const ShowSource = () => (
    <div className="info-container">
      <small>
        <a target="_blank" rel="noreferrer" href={address + id + ".js"}>
          sources
        </a>
      </small>
      <Info info={text} />
    </div>
  );

  return (
    <>
      <ChangeTitle title={location.pathname.replace(/\//, " ")} />
      <LoadComponent />
      <ShowSource />
    </>
  );
};

function App() {
  const [info, setInfo] = useState("");
  const [id, setID] = useState("");
  const [text, setText] = useState("");
  const callback = useCallback((id, text, info) => {
    setInfo(info);
    setID(id);
    setText(text);
  }, []);

  return (
    <Router>
      <div className="grid">
        <Menu parentCallback={callback} />
        <Header />
        <main id="section-example">
          <Suspense fallback={<div>Page is Loading...</div>}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/simple-map" />
              </Route>
              <Route
                path="/:id"
                children={<Child info={info} id={id} text={text} />}
              />
            </Switch>
          </Suspense>
        </main>
      </div>
      <ButtonManu />
      <GithubCorner />
    </Router>
  );
}

export default App;
