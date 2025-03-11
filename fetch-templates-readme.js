const fs = require('fs');

const url = 'https://raw.githubusercontent.com/Nexlayer/templates/main/README.md';
const outputPath = './essentials/nexlayer-yaml.mdx';

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

    const finalMDX = frontmatter + markdown;

    fs.writeFileSync(outputPath, finalMDX);
    console.log('Successfully fetched and added frontmatter!');

  } catch (error) {
    console.error('Process failed:', error);
  }
}

fetchAndConvert();
