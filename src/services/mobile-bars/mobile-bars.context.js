import React, { useState, createContext, useEffect, useMemo } from 'react';

import { mobileBarsRequest, resultsTransform } from './mobile-bars.service';

export const MobileBarsContext = createContext();

export const MobileBarsContextProvider = ({ children }) => {
	return (
		<MobileBarsContext.Provider
			value={{
				bars: [1, 2, 3, 4, 5, 6, 7, 8],
			}}>
			{children}
		</MobileBarsContext.Provider>
	);
};
