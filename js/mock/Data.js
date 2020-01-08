const DataMock = function(){
    function formFieldsAccount(){
        return [
            {
                type: 'text',
                label: "Texto",
                placeholder: "Texto",
                classes: 'col s6 valid',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'number',
                label: "CPF",
                placeholder: "CPF",
                classes: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            }
        ]
    }
    return {formFieldsAccount}
}()

export {DataMock}