import { useRef } from "react";

const TextArea = (props) => {
  const { id, placeHolder } = props;
  const labelRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputFocus = () => {
    labelRef.current.classList.add("input-placeholder-active");
    inputRef.current.classList.add("ring-accent");
  };

  const handleInputBlur = () => {
    if (inputRef.current.value == "") {
      labelRef.current.classList.remove("input-placeholder-active");
      inputRef.current.classList.remove("ring-accent");
    } else if (inputRef.current.value != "") {
      labelRef.current.classList.add("input-placeholder-active");
      inputRef.current.classList.add("ring-accent");
    }
  };

  return (
    <>
      <label
        htmlFor={id}
        className="w-full relative"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      >
        <span
          className="font-inter font-light text-sm text-slate-400 px-0.5 bg-transparent absolute top-5 left-4 -translate-y-1/2 transition-all duration-300 z-0"
          ref={labelRef}
        >
          {placeHolder}
        </span>
        <textarea
          id={id}
          className="w-full h-20 text-sm text-slate-600 px-5 py-2 ring-1 bg-transparent ring-slate-400 rounded-md outline-none relative z-20"
          ref={inputRef}
        />
      </label>
    </>
  );
};

export default TextArea;
