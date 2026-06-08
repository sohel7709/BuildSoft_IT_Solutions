import React, { useEffect, useState } from 'react';

export default function Typewriter({ words }: { words: string[] }) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    const ticker = window.setTimeout(() => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );
      setTypingSpeed(isDeleting ? 30 : 80);

      if (!isDeleting && text === fullText) {
        setTypingSpeed(2000);
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    }, typingSpeed);

    return () => window.clearTimeout(ticker);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <span>
      {text}
      <span className="border-r-[3px] border-blue-600 dark:border-blue-400 animate-pulse ml-1">&nbsp;</span>
    </span>
  );
}

