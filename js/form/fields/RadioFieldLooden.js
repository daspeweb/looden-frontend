const RadioFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        RadioFieldLooden.params = params;
        RadioFieldLooden.renderedTemplate = `
        <div class="${params.width}">
            <label>
                <input name="group1" type="${params.type}" checked />
                <span>Yes</span>
            </label>
            <label>
                <input name="group1" type="${params.type}" />
                <span>No</span>
            </label>
        </div>
        `;
        return RadioFieldLooden
    }
    return {render}
}();

export {RadioFieldLooden}