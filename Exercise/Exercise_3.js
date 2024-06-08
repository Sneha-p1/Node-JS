const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
 const processText = (text) => {
  const cleanedText = text.replace(/[^\w\s]/g, '').toLowerCase();

  const words = cleanedText.split(/\s+/);
  const wordCount = {};
  words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const sortedWordCount = Object.entries(wordCount).sort((a, b) => b[1] - a[1]);

  sortedWordCount.forEach(([word, count]) => {
    console.log(`${word}: ${count}`);
  });
};

rl.question('Enter your text: ', (input) => {
  processText(input);
  rl.close();
});
