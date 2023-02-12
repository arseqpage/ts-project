import React from 'react'

// @ts-expect-error
export const AboutPageAsync = React.lazy(async () => await new Promise(resolve => {
  // @ts-expect-error
  setTimeout(() => { resolve(import('./AboutPage')) }, 1000)
}))
