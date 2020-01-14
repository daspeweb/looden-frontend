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
                type: 'text',
                label: "CEP",
                placeholder: "CEP",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text'
            },
            {
                type: 'date',
                label: "Date",
                placeholder: "Select your date",
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
            },
            {
                type: 'textarea',
                label: "Textarea",
                placeholder: "Textarea",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
                length: '10'
            },
            {
                type: 'email',
                label: "Email",
                placeholder: "Email",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'tel',
                label: "Phone",
                placeholder: "Phone",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'time',
                label: "Timestamp",
                placeholder: "Select your time",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'interger',
                label: "Interger",
                placeholder: "Interger",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'select multiple',
                label: "Select Multiple",
                placeholder: "Select Multiple",
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
            },
            {
                type: 'money',
                label: "Money",
                placeholder: "Money",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'subdomain',
                label: "Subdomain",
                placeholder: "Subdomain",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'url',
                label: "URL",
                placeholder: "URL",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            },
            {
                type: 'range',
                label: "Ranger",
                placeholder: "Ranger",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
                min: 0,
                max: 100
            },
            {
                type: 'color',
                label: "Color",
                placeholder: "Color",
                width: 'col s6',
                section: 'Dados Gerais',
                mask: 'text',
            }
        ]
    }
    return {formFieldsAccount}
}()

export {DataMock}