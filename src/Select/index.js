const Select = ({ name, id, defaultValue, onChange, currencies, renderOptionContent, extraOption }) => (
    <select
        name={name}
        id={id}
        defaultValue={defaultValue}
        onChange={onChange}
        >
        {extraOption && <option value="" hidden disabled>{extraOption}</option>}
        {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
                {renderOptionContent(currency)}
            </option>
        ))}
    </select>
);

export default Select;