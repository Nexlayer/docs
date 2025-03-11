const fs = require('fs');

const url = 'https://raw.githubusercontent.com/Nexlayer/templates/main/README.md';


async function fetchAndConvert() {
  try {
    const response = await fetch(url);
    const markdown = await response.text();

    const frontmatter = `---
title: Nexlayer Yaml
description: 
icon: 'file-lines'
---

`;

    export const finalMDX = frontmatter + markdown;

  } catch (error) {
    console.error('Process failed:', error);
  }
}

fetchAndConvert();
