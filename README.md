# `gatsby-hello`

## Overview

This project is a spike meant for getting familiar with Gatsby. I'm porting the simple example I've used before for similar spikes in [`react-parcel-boilerplate`](https://github.com/debradley/react-parcel-boilerplate) and [`react-webpack-boilerplate`](https://github.com/debradley/react-webpack-boilerplate).

My secondary interest is in seeing how the build size and speed compares to using parcel or homegrown webpack, and how easy Gatsby is to use.

## Changes

Because [you can't really configure postcss in Gatsby](https://github.com/gatsbyjs/gatsby/issues/3284), I've switched to a non-css vars approach, for expediency.

## Usage

`yarn run develop` - runs a hot-reloading development version on http://localhost:8000/
`yarn build` - creates a production build, ready for deployment
`yarn run serve` -
`yarn run deploy` - publishes to [GitHub Pages](https://debradley.github.io/react-gatsby/)
