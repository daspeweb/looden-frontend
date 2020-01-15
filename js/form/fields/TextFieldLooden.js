const TextFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        TextFieldLooden.params = params;
        TextFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="${params.type}" placeholder="${params.placeholder}" class="${params.type === "email" ? "type-email" : false}">
            </div>
        `;
        return TextFieldLooden;
    }

    return {render, renderedTemplate}
}();

export {TextFieldLooden}