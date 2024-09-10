import React, { useEffect, useState, useRef } from 'react';
import 'highlight.js/styles/atom-one-dark.css';
import hljs from 'highlight.js';
import { ClipboardCopy } from 'lucide-react';
import './CodeSnippet.css';

const escapeHtml = (unsafe) => {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

const Code = ({ codeSnippets }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(Object.keys(codeSnippets)[0]);
  const [showCopyTooltip, setShowCopyTooltip] = useState(false);
  const codeRef = useRef(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  useEffect(() => {
    if (codeRef.current) {
      // Escape HTML before highlighting
      const escapedCode = escapeHtml(codeSnippets[selectedLanguage]);

      codeRef.current.className = `language-${selectedLanguage}`;
      codeRef.current.innerHTML = hljs.highlight(escapedCode, {
        language: selectedLanguage,
      }).value;

      hljs.highlightElement(codeRef.current);
    }
  }, [selectedLanguage, codeSnippets]);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeSnippets[selectedLanguage])
      .then(() => {
        setShowCopyTooltip(true);
        setTimeout(() => setShowCopyTooltip(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy code: ', err);
      });
  };

  return (
    <div className="code-snippet-container">
      <div className="language-buttons">
        {Object.keys(codeSnippets).map((lang) => (
          <button
            key={lang}
            className={`lang-btn ${selectedLanguage === lang ? 'active' : ''}`}
            onClick={() => handleLanguageChange(lang)}
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="code-block-wrapper">
        <pre className="code-block">
          <code ref={codeRef} className={`language-${selectedLanguage}`} />
        </pre>
        <button className="floating-copy-btn" onClick={copyToClipboard}>
          <ClipboardCopy size={20} />
          {showCopyTooltip && <span className="copy-tooltip">Copied!</span>}
        </button>
      </div>
    </div>
  );
};

export default Code;
