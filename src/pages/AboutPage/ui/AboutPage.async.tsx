import React from "react";

// @ts-ignore
export const AboutPageAsync = React.lazy(() => new Promise(resolve => {
    // @ts-ignore
    setTimeout(() => resolve(import('./AboutPage')), 1000)
}))