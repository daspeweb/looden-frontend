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

    return {render, renderedTemplate}
}();

export {TextFieldLooden}