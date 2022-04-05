import React, {useState} from "react";

function AppInput(props) {
  const [input, setInput] = useState('');

  const handleOnChange = ({target}) => {
    const {name, value} = target;
    setInput({...input, [name]: value});
  };

  return (
    <input
      type="password"
      placeholder="*********"
      name="password"
      onChange={handleOnChange}
      className="px-3 text-lg h-10 w-full border-gray-500 border-2 rounded"
    />
  );
}

export default AppInput;
