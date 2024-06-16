import React, { useEffect, useRef } from 'react';
import { createRoot, Root } from 'react-dom/client';
import Toolbar from './components/Toolbar';
import { styles } from './styles.css';
import DevConsole from './components/DevConsole';

let container: HTMLElement;
let root: Root | null;

export const togglePopup = async () => {
  if (container == null) {
    // toggle on - setup
    container = document.createElement('smart-selector-wrapper');
    container.style.position = 'relative';
    container.style.width = '0';
    container.style.height = '0';
    // container.style.display = 'block';
    container.id = 'SmartSelectorWrapper';
    document.body.insertBefore(container, document.body.firstChild);
    root = createRoot(document.getElementById('SmartSelectorWrapper'));
    root.render(<Dashboard />);
  } else {
    // toggle off - cleanup
    root.unmount();
    container.remove();
    container = null;
  }
};

function Dashboard() {
  const wrapper = useRef<HTMLDivElement>();
  const pullTab = useRef<HTMLDivElement>();
  const mouseDown = useRef(false);

  useEffect(() => {
    function pullTabMDListener() {
      mouseDown.current = true;
      pullTab.current.style.cursor = 'grabbing';
    }
    function pullTabMMListener(e: MouseEvent) {
      if (mouseDown.current) {
        wrapper.current.style.height =
          wrapper.current.clientHeight - e.movementY + 'px';
      }
    }
    function pullTabMUListener() {
      if (mouseDown.current) {
        mouseDown.current = false;
        pullTab.current.style.cursor = 'grab';
      }
    }
    pullTab.current.addEventListener('mousedown', pullTabMDListener);
    document.addEventListener('mousemove', pullTabMMListener);
    document.addEventListener('mouseup', pullTabMUListener);
    return () => {
      pullTab.current.removeEventListener('mousedown', pullTabMDListener);
      document.removeEventListener('mousemove', pullTabMDListener);
      document.removeEventListener('mouseup', pullTabMDListener);
    };
  }, []);

  return (
    <smart-selector-console
      style={{
        position: 'fixed',
        bottom: '0',
        left: '0',
        right: '0',
        width: '100%',
        height: '200px',
        zIndex: '10000',
        backgroundColor: '#363f45',
        color: 'black',
        display: 'flex',
      }}
      ref={wrapper}
    >
      <style>{styles}</style>
      <div className="pullTab" ref={pullTab}>
        V
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1' }}>
        <Toolbar />
        <DevConsole />
      </div>
    </smart-selector-console>
  );
}
