const DataMock = function(){
    function formFieldsAccount(){
        return [
            {
                type: 'text',
                label: "CNPJ",
                placeholder: "CNPJ",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'date',
                label: "Date",
                placeholder: "Date",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'file',
                label: "File",
                placeholder: "Select your file",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'password',
                label: "Password",
                placeholder: "Password",
                width: 'col s6 validate',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'select',
                label: "Select Dropdown",
                placeholder: "Select Dropdown",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
                options: {
                    1: 'option 1',
                    2: 'option 2',
                    3: 'option 3',
                    4: 'option 4',
                    5: 'option 5'
                }
            }
        ]
    }
    return {formFieldsAccount}
}()

export {DataMock}