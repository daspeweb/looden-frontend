const RangeFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        RangeFieldLooden.params = params;
        RangeFieldLooden.renderedTemplate = `
        <div class="${params.width}">
            <p class="range-field">
                <label>${params.label}</label>
                <input type="range" id="" min="${params.min}" max="${params.max}" />
                <small data-currentValue="0">0</small>
                <small>/${params.max}</small>
            </p>
        </div>
        `;
        return RangeFieldLooden
    }
    return {render, renderedTemplate}
}();

export {RangeFieldLooden}