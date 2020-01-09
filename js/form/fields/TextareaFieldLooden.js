const TextareaFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        TextareaFieldLooden.params = params;
        TextareaFieldLooden.renderedTemplate = `
        <div class="${params.width}">
            <label>${params.label}</label>
            <div class="input-field">
                <textarea id="textarea" class="materialize-textarea" placeholder="${params.placeholder}" maxlength="${params.length}"></textarea>
            </div>
        </div>
        `;
        return TextareaFieldLooden
    }

    return {render, renderedTemplate}
}();

export {TextareaFieldLooden}