const TextareaFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        TextareaFieldLooden.params = params;
        TextareaFieldLooden.renderedTemplate = `
        <div class="input-field ${params.width}">
            <textarea id="textarea" class="materialize-textarea" data-length="${params.length}"></textarea>
            <label for="textarea">${params.label}</label>
        </div>
        `;
        return TextareaFieldLooden
    }

    return {render, renderedTemplate}
}();

export {TextareaFieldLooden}