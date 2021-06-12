import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react"

import "./index.css";
import { load } from 'growlers/store';
import Taps from 'growlers/Taps';
load('hv-taplist');

const App = () => <ChakraProvider><Taps /></ChakraProvider>;

ReactDOM.render(<App />, document.getElementById("app"));
