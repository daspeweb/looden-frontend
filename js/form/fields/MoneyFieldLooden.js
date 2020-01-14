const MoneyFieldLooden = function(){
    let renderedTemplate;
    let params;
    function render(params){
        MoneyFieldLooden.params = params;
        MoneyFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}</label>
                <input type="number" placeholder="${params.placeholder}" step="any" class="type-money">
                <small>00,00</small>
            </div>
        `;
        return MoneyFieldLooden
    }
    function toMoney(){
        let el = document.querySelectorAll('.type-money');
        el.forEach((item) => {
            item.oninput = (event) => {
                item.nextElementSibling.textContent = item.value;
            }
        });
    }
    return {render, renderedTemplate, toMoney}
}();

export {MoneyFieldLooden}