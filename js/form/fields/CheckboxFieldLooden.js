const CheckboxFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        CheckboxFieldLooden.params = params;
        CheckboxFieldLooden.renderedTemplate = `
        <div class="${params.width}">
            <label>
                <input type="${params.type}"/>
                <span>Yes</span>
            </label>
        </div>
        `;
        return CheckboxFieldLooden
    }
    return {render}
}();

export {CheckboxFieldLooden}