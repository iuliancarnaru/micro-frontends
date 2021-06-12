import React from "react";
import ReactDOM from "react-dom";
import {
  extendTheme,
  ChakraProvider,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";

import "./index.css";

import { load } from 'growlers/store';
load('hv-taplist');

import DataComponent from 'growlers/DataComponent'
import Taps from 'growlers/Taps';
import Search from 'growlers/Search';
import Cart from 'growlers/Cart';

const App = () => {
  return (
    <ChakraProvider>
      <div style={{ 
        maxWidth: '960px',
        margin: 'auto',
        display: 'grid',
        gridTemplateColumns: "1fr 3fr",
        gridColumnGap: '1rem'
      }}>
        <div>
          <Search />
          <Cart />
        <DataComponent>
          {({ filteredTaps }) =>
            filteredTaps.slice(0, 5).map((beverage) => (
              <SimpleGrid columns={2} templateColumns="1fr 7fr" gap={1} mt={3}>
                <div>
                  <Image
                    src={beverage.logo}
                    alt={`${beverage.producerName} logo`}
                  />
                </div>
                <div>
                  <Text fontSize="xs" isTruncated>
                    <strong>{beverage.producerName}</strong>
                  </Text>
                  <Text fontSize="xs" isTruncated>
                    {beverage.beverageName}
                  </Text>
                </div>
              </SimpleGrid>
            ))
          }
        </DataComponent>
        </div>
        <Taps />
      </div>
    </ChakraProvider>)
  }; 

ReactDOM.render(<App />, document.getElementById("app"));
