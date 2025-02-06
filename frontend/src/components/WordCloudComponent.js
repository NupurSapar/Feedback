import React, { useRef, useEffect } from 'react';

const WordCloudComponent = () => {
  const canvasRef = useRef(null);

  const words = [
    { text: 'Engagement', weight: 100 },
    { text: 'Support', weight: 90 },
    { text: 'Clarity', weight: 80 },
    { text: 'Interactive', weight: 70 },
    { text: 'Assignment', weight: 60 },
    { text: 'Feedback', weight: 50 },
    { text: 'Communication', weight: 40 },
    { text: 'Discussion', weight: 30 },
    { text: 'Material', weight: 20 },
    { text: 'Understanding', weight: 10 },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    // Sort words by weight (larger words should appear more prominently)
    words.sort((a, b) => b.weight - a.weight);

    // Position words randomly on the canvas
    const placedWords = [];
    
    const wordFits = (x, y, fontSize, word) => {
      for (const placedWord of placedWords) {
        const distance = Math.sqrt(
          Math.pow(x - placedWord.x, 2) + Math.pow(y - placedWord.y, 2)
        );
        if (distance < fontSize + placedWord.fontSize / 2) {
          return false;  // Overlapping words
        }
      }
      return true;
    };

    const placeWord = (word, fontSize) => {
      const maxTries = 10;
      let x, y;
      let placed = false;

      for (let tries = 0; tries < maxTries; tries++) {
        x = Math.random() * (width - fontSize - 3);  // Padding around word
        y = Math.random() * (height - fontSize - 1); // Padding around word

        if (wordFits(x, y, fontSize, word)) {
          placed = true;
          break;
        }
      }

      return placed ? { x, y } : null;
    };

    ctx.clearRect(0, 0, width, height); // Clear the canvas
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Draw words on canvas
    words.forEach((word) => {
      const fontSize = Math.min(30 + word.weight / 10, 50); // Scale font size based on weight
      const position = placeWord(word, fontSize);

      if (position) {
        const { x, y } = position;
        ctx.font = `${fontSize}px Arial`;
        ctx.fillStyle = `hsl(${Math.random() * 360}, 70%, 60%)`; // Random color for each word
        ctx.fillText(word.text, x, y);
        placedWords.push({ text: word.text, x, y, fontSize });
      }
    });
  }, [words]);

  return <canvas ref={canvasRef} width={918} height={400} style={{ border: '1px solid #ddd' }} />;
};

export default WordCloudComponent;
