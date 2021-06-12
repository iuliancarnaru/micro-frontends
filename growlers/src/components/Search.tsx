import React from 'react';
import { useProxy } from 'valtio';
import {
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from '@chakra-ui/react';

import store, { setAlcoholLimit, setSearchText } from '../store';
import { MFE_BORDER } from '../constants';

const Search = () => {
  const { searchText, alcoholLimit } = useProxy(store);
  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input
          type="text"
          value={searchText}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
      </FormControl>

      <FormControl id="alcohol">
        <FormLabel>Alcohol</FormLabel>
        <Slider
          colorScheme="pink"
          defaultValue={alcoholLimit}
          value={alcoholLimit}
          min={0}
          max={17}
          onChange={(val) => setAlcoholLimit(val)}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
    </Box>
  );
};

export default Search;
