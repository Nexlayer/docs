const url = 'https://raw.githubusercontent.com/Nexlayer/templates/main/README.md';

async function fetchAndConvert() {
  try {
    const response = await fetch(url);
    const markdown = await response.text(); 
  } catch (error) {
      console.error('Process failed:', error);
  }

  return markdown;
}

//fetchAndConvert();
