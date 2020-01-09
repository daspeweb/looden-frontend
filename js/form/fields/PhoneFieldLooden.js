const PhoneFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        PhoneFieldLooden.params = params;
        PhoneFieldLooden.renderedTemplate = `
            <div class="input-field ${params.width}">
                <label for="phone">${params.label}</label>
                <input id="" type="${params.type}" class="validate">
            </div>
        `;
        
        return PhoneFieldLooden
    }

    return {render, renderedTemplate}
}();

export {PhoneFieldLooden}