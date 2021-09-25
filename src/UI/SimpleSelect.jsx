import React from 'react';

const SimpleSelect = ({options, defaultValue, value, onChangeSelect}) => {
    return (
        <select value={value} onChange={e => onChangeSelect(e.target.value)}>
            <option value="" disabled={true}>{defaultValue}</option>
            {options.map(option => <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
};

export default SimpleSelect;