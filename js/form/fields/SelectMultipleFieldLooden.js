const SelectMultipleFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        SelectMultipleFieldLooden.params = params;
        SelectMultipleFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <div class="input-field ">
                    <select multiple>
                        <option value="" disabled>${params.placeholder}</option>
                        ${renderOptions(params.options)}
                    </select>
                </div>
            </div>
        `;
        return SelectMultipleFieldLooden
    }
    function renderOptions(obj){
        let optionsTemplate = ``;
        for(let x in obj){
            optionsTemplate += `<option value="${obj[x]}">${obj[x]}</option>`;
        }
        return optionsTemplate;
    }

    return {render, renderedTemplate}
}();

export {SelectMultipleFieldLooden}