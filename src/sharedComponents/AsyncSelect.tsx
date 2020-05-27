import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';

type Props = {
    name: string;
    onSelect: (key: string, value: string) => void;
    getOptions: (value: string) => void;
}

interface IOption {
    value: string,
    label: string
}

type State = {
  inputValue: string,
};

export const Select: React.FC<Props> = (props: Props, state: State) => {
    const[inputValue, setInputValue] = useState<string>("");
    const[selectedValue, setSelectedValue] = useState<IOption>({value: "", label: ""});
    
    const filtersOptions = (options: any) => {
        return (options && options.length > 0) 
            ? options.map((option: any) => {
                return ({ value: option.name, label: option.name });
            })
            : [];
    } 

    const loadOptions = async (inputValue: string, callback: any) => {
        const data = await props.getOptions(inputValue);
        callback(filtersOptions(data));
    };
    
    const handleInputChange = (newValue: string) => {
        const inputValue = newValue.replace(/\W/g, '');
        setInputValue(inputValue);
        return inputValue;
    };

    const handleSelect = (selected: any) => {
        setSelectedValue(selected);
        if (selected) {
            props.onSelect(props.name, selected.value);
        }
    }
    
    return (
        <div className="select">
            <AsyncSelect
                cacheOptions
                isClearable
                loadOptions={loadOptions}
                defaultOptions
                value={selectedValue}
                onChange={handleSelect}
                onInputChange={handleInputChange}
            />
        </div>
    );
};
