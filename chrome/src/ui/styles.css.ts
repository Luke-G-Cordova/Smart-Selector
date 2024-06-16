export const styles = /*css*/ `
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
  color: #9d9d9d;
  user-select: none;
}
.pullTab:hover {
  cursor: grab;
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
