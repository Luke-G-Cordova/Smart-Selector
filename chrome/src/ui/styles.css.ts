export const styles = /*css*/ `
#html-display{
  color: #c9c9c9;
}
.active { 
  background: #fec006!important;
}
.selectToggle {
  width: 30px;
  height: 30px;
  margin: 5px;
  border-radius: 5px;
  background: linear-gradient(45deg, rgba(95,124,138,1) 0%, rgba(88,147,176,1) 100%);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.selectToggle:hover {
  cursor: pointer;
  box-shadow: -1px 2px 4px rgba(0, 0, 0, .25);
  transition: box-shadow 0.3s ease-in-out;
}
.screen {
  margin: 2px;
  background-color: #252b2f;
  border-radius: 5px;
}
.pullTab {
  position: absolute;
  top: -15px;
  left: 0;
  right: 0;
  height: 15px;
  width: 40px;
  margin-left: auto;
  margin-right: auto;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #363f45;
  text-align: center;
  display: flex;
  align-items: start;
  justify-content: center;
  /*color: #9d9d9d;*/
  user-select: none;
}
.pullTab:hover {
  cursor: grab;
}




/*

Atom One Dark by Daniel Gamage
Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax

base:    #282c34
mono-1:  #abb2bf
mono-2:  #818896
mono-3:  #5c6370
hue-1:   #56b6c2
hue-2:   #61aeee
hue-3:   #c678dd
hue-4:   #98c379
hue-5:   #e06c75
hue-5-2: #be5046
hue-6:   #d19a66
hue-6-2: #e6c07b

*/

.hljs {
  color: #abb2bf;
  background: #282c34;
}

.hljs-comment,
.hljs-quote {
  color: #5c6370;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #c678dd;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75;
}

.hljs-literal {
  color: #56b6c2;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta .hljs-string {
  color: #98c379;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee;
}

.hljs-built_in,
.hljs-title.class_,
.hljs-class .hljs-title {
  color: #e6c07b;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}
`;

/**
 * colors:
 * dark grey - #252b2f
 * grey - #363f45
 * light grey - #9d9d9d
 * blue grey - #5f7c8a
 * brown - #785447
 * red - #f34235
 * pink - #e81d62
 * purple - #9b26af
 * deep purple - #6639b6
 * indigo - #6639b6
 * blue - #2095f2
 * green - #4bae4f
 * lime - #ccdb38
 * yellow - #feea3a
 * amber - #fec006
 * orange - #fe9700
 * deep orange - #fe5621
 */
