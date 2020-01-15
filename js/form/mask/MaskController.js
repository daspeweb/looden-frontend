const MaskController = function(){
    function mask(params){
        setTimeout(() => {
            document.querySelectorAll(params.el).forEach(item => {
                new Inputmask({
                    mask: params.mask, 
                    showMaskOnFocus: false, 
                    showMaskOnHover: false, 
                    jitMasking: true
                }).mask(item);
                document.onchange = () => {
                    if(!params.validation(item.value) === true){
                        item.classList.remove("valid")
                        item.classList.add("invalid")
                    }else{
                        item.classList.remove("invalid");
                        item.classList.add("valid")
                    }
                } 
            });
        }, 500);
        return MaskController
    }
    return {mask}
}();
export {MaskController}