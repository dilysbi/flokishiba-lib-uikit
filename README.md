# Flan Swap UIkit

**This repository is not used anymore. See the [https://github.com/flokishiba/flokishiba-toolkit](flokishiba toolkit) instead**

[![Version](https://img.shields.io/npm/v/flokishiba-libs-uikit)](https://www.npmjs.com/package/flokishiba-libs-uikit) [![Size](https://img.shields.io/bundlephobia/min/flokishiba-libs-uikit)](https://www.npmjs.com/package/flokishiba-libs-uikit)

flokishiba UIkit is a set of React components and hooks used to build pages on flokishiba's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add flokishiba-libs-uikit`

## Setup

### Theme

Before using flokishiba UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from 'flokishiba-libs-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from 'flokishiba-libs-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
