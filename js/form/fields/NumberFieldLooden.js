const NumberFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        NumberFieldLooden.params = params;
        NumberFieldLooden.renderedTemplate = `
        <div class="${params.width}">
            <input placeholder="${params.placeholder}" id="number" type="${params.type}" class="validate">
            <label for="number">${params.label}</label>
        </div>
        `;        
        return NumberFieldLooden
    }
    return {render, renderedTemplate}
}();
export {NumberFieldLooden}