import React, { useState } from 'react';

export default function Toolbar() {
  const [toggle, setToggle] = useState<'child' | 'element'>('element');
  return (
    <div style={{ display: 'flex' }}>
      <div
        className={`selectToggle ${toggle === 'child' ? ' active' : ''}`}
        id="child-select-toggle"
        onClick={() => setToggle('child')}
      >
        C
      </div>
      <div
        className={`selectToggle ${toggle === 'element' ? ' active' : ''}`}
        id="element-select-toggle"
        onClick={() => setToggle('element')}
      >
        E
      </div>
    </div>
  );
}
