const DateFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        DateFieldLooden.params = params;
        DateFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="text" class="datepicker" placeholder="${params.placeholder}">
            </div>
        `;

        return DateFieldLooden
    }

    return {render, renderedTemplate}
}();

export {DateFieldLooden}