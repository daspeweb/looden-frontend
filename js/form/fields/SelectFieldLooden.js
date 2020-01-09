const SelectFieldLooden = function(){
    let renderedTemplate;
    let params;

    function render(params){
        SelectFieldLooden.params = params;
        SelectFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <div class="input-field">
                    <select>
                        <option value="" disabled selected>${params.placeholder}</option>
                        ${renderOptions(params.options)}
                    </select>
                </div>
            </div>
        `;
        return SelectFieldLooden
    }
    function renderOptions(obj){
        let optionsTemplate = ``;
        for(let x in obj){
            optionsTemplate += `<option value="${obj[x]}">${obj[x]}</option>`;
        }
        return optionsTemplate;
    }
    
    return {render, renderOptions}
}();

export {SelectFieldLooden}