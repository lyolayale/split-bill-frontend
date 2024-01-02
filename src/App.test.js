import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("<App/>", () => {
  function app() {
    return render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
  it("renders without errors", () => {
    app();
  });
});
