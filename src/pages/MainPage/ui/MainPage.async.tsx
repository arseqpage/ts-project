import React from 'react';

// @ts-expect-error
export const MainPageAsync = React.lazy(async () => await import('./MainPage'));
