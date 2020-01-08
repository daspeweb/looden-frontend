const TextFieldLooden  = function(){
    let renderedTemplate;
    let params;
    function render(params){
        TextFieldLooden.params = params;
        TextFieldLooden.renderedTemplate = `
            <div class="${params.classes}">
                <label>${params.label}</label>
                <input type="${params.type}" placeholder="${params.placeholder}">
            </div>
        `;
        return TextFieldLooden;
    }
    function valid(){
        let el = document.querySelector('.valid input');
        el.onkeypress = function(){
            console.log(/\d/g.test(el.value));
        }
        return TextFieldLooden
    }

    return {render, valid, renderedTemplate}
}();

export {TextFieldLooden}