//import * as windows1251 from './windows-1251.mjs';
/// <reference lib="es2021" />
//Input//

var ip2 = document.getElementById('cn');


//Card Name//
var cn = document.getElementById('cns');

var cn_ = document.getElementById('cns_');



//Card Name | Update//
ip2.addEventListener('input', function() {

  var tpx = ip2.value.length * 8;
  var tpx_ = "";
  var scl = "250";
  var _sc_ = 1;
  var tlx = 0
  const textLegnth = Math.ceil(getTextWidth(ip2.value, "18px imp"));
  
  
    if(textLegnth > 249){
      _sc_ = 249 / textLegnth
      scl = (textLegnth / 249) * 250
    }
    else
    {
      _sc_ = 1
      scl = 250
    }
    console.log(textLegnth)
    /*
    if (tpx > 220) {
      tpx_ = (tpx - 200)/400;
      scl = 250 + (tpx - 200)/.4
      _sc_ = 1.08 - tpx_;
    }
    */
  
  cn.textContent = ((ip2.value != '') ? ip2.value: "Card Name");


});
function getTextWidth(text, font, spacing = '0px') {
  // re-use canvas object for better performance
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = font;
  context.letterSpacing = spacing;
  const metrics = context.measureText(text);
  return metrics.width;
}





function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}

function getCanvasFont(el = document.body) {
  const fontWeight = getCssStyle(el, 'font-weight') || 'normal';
  const fontSize = getCssStyle(el, 'font-size') || '16px';
  const fontFamily = getCssStyle(el, 'font-family') || 'Times New Roman';
  
  return `${fontWeight} ${fontSize} ${fontFamily}`;
}

function countWrappedLines(element) {
  const computedStyle = getComputedStyle(element);
  const lineHeight = parseFloat(computedStyle.lineHeight);

  // Create a temporary clone element to measure the text without wrapping
  const tempElement = document.createElement('div');
  tempElement.style.cssText = `
      width: ${element.clientWidth}px;
      white-space: pre-wrap;
      visibility: hidden;
      position: absolute;
  `;
  tempElement.textContent = element.textContent;
  document.body.appendChild(tempElement);

  const wrappedHeight = element.offsetHeight;
  const tempWrappedHeight = tempElement.offsetHeight;

  document.body.removeChild(tempElement);

  const wrappedLines = Math.round(wrappedHeight / lineHeight);
  const tempWrappedLines = Math.round(tempWrappedHeight / lineHeight);

  // Calculate number of newlines
  const newLineCount = (element.textContent.match(/\n/g) || []).length;

  // Adjust for newlines in wrapped text
  const adjustedWrappedLines = wrappedLines - newLineCount;

  return adjustedWrappedLines;
}
