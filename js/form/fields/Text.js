const TextFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        TextFieldLooden.params = params;
        TextFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="${params.type}" placeholder="${params.placeholder}">
            </div>
        `;
        return TextFieldLooden;
    }
    function toInt(el){
        el.onchange = () => el.value = parseInt(el.value);
        el.onkeyup = (event) => {
            event.keyCode === 190 || 188 ?  el.value = el.value.replace(/[^0-9]/g, "") : false;
        }
    }

    return {render, renderedTemplate, toInt}
}();

export {TextFieldLooden}