import "./index.css";

import { load, subscribe } from 'growlers/store';
load('hv-taplist');

import VanillaTaps from 'growlers/VanillaTaps';
import VanillaSearch from 'growlers/VanillaSearch';
import VanillaCart from 'growlers/VanillaCart';

VanillaTaps('.taps')
VanillaSearch('.search')
VanillaCart('.cart')

subscribe((state) => {
  document.querySelector(".beverage-list").innerHTML = state.filteredTaps
    .map(({ beverageName }) => beverageName)
    .join(", ");
});
