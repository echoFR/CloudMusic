function stopBubble(event){  
window.event?window.event.cancelBubble=true:event.stopPropagation();  
}
export default stopBubble;