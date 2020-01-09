const TimestampFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        TimestampFieldLooden.params = params;
        TimestampFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="text" class="timepicker" placeholder="${params.placeholder}">
            </div>
        `;

        return TimestampFieldLooden
    }

    return {render, renderedTemplate}
}();

export {TimestampFieldLooden}