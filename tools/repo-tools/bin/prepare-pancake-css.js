#!/usr/bin/env node

const { readFileSync, outputFileSync } = require('fs-extra');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '../../../pancake/css/pancake.min.css');
const DEST_FILE = path.join(__dirname, '../../../packages/core/src/__generated__/pancake.min.css.js');

try {
  const css = readFileSync(SOURCE_FILE, 'utf8');
  const output = "`" + css + "`";
  outputFileSync(DEST_FILE, output, 'utf8');
} catch (error) {
  console.error('Could not create pancake.min.css.js', { error });
}


