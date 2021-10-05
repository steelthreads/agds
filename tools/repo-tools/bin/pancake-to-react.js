#!/usr/bin/env node

const { readFileSync, outputFileSync } = require('fs-extra');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '../../../pancake/css/pancake.min.css');
const DEST_FILE = path.join(__dirname, '../../../packages/core/src/__generated__/pancake-css.js');

try {
  const css = readFileSync(SOURCE_FILE, 'utf8');

  const output = `/* This file is generated - DO NOT EDIT */
import { Global } from '@emotion/react';
import React from 'react';

const PancakeCss = () => (
  <Global styles={\`` + css + `\`} />
)

export default PancakeCss;
  `;

  outputFileSync(DEST_FILE, output, 'utf8');
} catch (error) {
  console.error('Could not create pancake-css.js', { error });
}


