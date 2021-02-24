import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppProps {
  greeting: string;
}

const App: React.FC<AppProps> = ({ greeting = "Hello" }) => {
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
};

ReactDOM.render(
  <App greeting="Hello, world!" />,
  document.getElementById("app")
);
