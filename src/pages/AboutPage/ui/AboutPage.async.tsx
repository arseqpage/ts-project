import React from 'react'

// @ts-expect-error
export const AboutPageAsync = React.lazy(async () => await import('./AboutPage'))
