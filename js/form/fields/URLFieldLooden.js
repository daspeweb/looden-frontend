const URLFieldLooden = function(){
    let params;
    let renderedTemplate;
    function render(params){
        URLFieldLooden.params = params;
        URLFieldLooden.renderedTemplate = `
            <div class="${params.width}">
                <label>${params.label}<label>
                <input type="text" placeholder="${params.placeholder}" class="type-url">
                <a href=""></a>
            </div>
        `;
        return URLFieldLooden
    }
    function renderLink(){
        let el = document.querySelectorAll('.type-url');
        el.forEach((item) => {
            item.oninput = (event) => {
                item.nextElementSibling.href = item.value;
                item.nextElementSibling.textContent = item.value;
            }
        })
    }
    return {render, renderedTemplate, renderLink}
}()

export {URLFieldLooden}