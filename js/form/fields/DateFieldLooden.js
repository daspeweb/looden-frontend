const DateFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        DateFieldLooden.params = params;
        let isMobile = /Android|webOS|iPhone|iPad|iPod|pocket|psp|kindle|avantgo|blazer|midori|Tablet|Palm|maemo|plucker|phone|BlackBerry|symbian|IEMobile|mobile|ZuneWP7|Windows Phone|Opera Mini/i.test(navigator.userAgent) ? {type: "date", class: ""} : {type: "text", class: "datepicker"}
        DateFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="${isMobile.type}" class="${isMobile.class}" placeholder="${params.placeholder}">
            </div>
        `;

        return DateFieldLooden
    }

    return {render, renderedTemplate}
}();

export {DateFieldLooden}