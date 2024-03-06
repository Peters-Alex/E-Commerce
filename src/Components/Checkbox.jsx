import { useState } from "react";


function Checkbox({ labelOn, labelOff }) {
    const [isChecked, setIsChecked] = useState(false);

    const onChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} data-testid="myCheckbox" />
            {isChecked ? labelOn : labelOff}
        </label>
    );

}





export default Checkbox
