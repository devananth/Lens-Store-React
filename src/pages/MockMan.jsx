import React from "react";
import Mockman from "mockman-js";
import { NavBar } from "../components";

function MockAPI() {
  return (
    <>
      <NavBar />
      <div className="MockAPI">
        <Mockman />
      </div>
    </>
  );
}

export { MockAPI };
