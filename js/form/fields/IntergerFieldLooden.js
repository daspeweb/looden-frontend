const IntergerFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        IntergerFieldLooden.params = params;
        IntergerFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="number" placeholder="${params.placeholder}" class="type-interger">
            </div>
        `;
        return IntergerFieldLooden;
    }
    function toInt(){
        let el = document.querySelectorAll('.type-interger');
        el.forEach((item) => {
            item.oninput = (event) => {
                console.log(item);
                event.keyCode === 190 || 188 ?  item.value = item.value.replace(/[^0-9]/g, "") : false;
            }  
        });
    }

    return {render, renderedTemplate, toInt}
}();

export {IntergerFieldLooden}