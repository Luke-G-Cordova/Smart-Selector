import React, { useEffect, useRef, useState } from 'react';
import hljs from 'highlight.js';

export default function DevConsole() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        height: '100%',
      }}
    >
      <HTMLDisplay style={{ flexGrow: '2' }} />
      <AttributesDisplay style={{ flexGrow: '1' }} />
      <NeededSelectionDisplay style={{ flexGrow: '2' }} />
      <SelectionDisplay style={{ flexGrow: '2' }} />
    </div>
  );
}

function HTMLDisplay({ style }: { style?: React.CSSProperties }) {
  const htmlDoc = useRef('');
  const elem = useRef<HTMLDivElement>();
  useEffect(() => {
    htmlDoc.current = document.documentElement.outerHTML;
    const highlight = hljs.highlight(htmlDoc.current, {
      language: 'html',
    });
    elem.current.innerHTML = highlight.value;
    // console.log(highlight.value);
  }, []);
  return (
    <div className="screen" id="html-display" style={style}>
      <div ref={elem}></div>
    </div>
  );
}

function AttributesDisplay({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="screen" id="important-attributes" style={style}>
      <div></div>
    </div>
  );
}

function NeededSelectionDisplay({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="screen" id="needed-selection" style={style}>
      <div></div>
    </div>
  );
}

function SelectionDisplay({ style }: { style?: React.CSSProperties }) {
  return (
    <div className="screen" id="selection" style={style}>
      <div></div>
    </div>
  );
}
