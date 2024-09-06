import React, { useEffect } from 'react';
import hljs from 'highlight.js';

const CodeBlock = ({ language, code }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code className={language}>
        {code}
      </code>
    </pre>
  );
};

export default CodeBlock;
