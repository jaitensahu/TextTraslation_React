import { useRef } from "react";
import "./Inputfield.css";

const Inputfield = (props) => {
  let textInput = useRef();
  let inputLang = useRef();
  let inputTargetLang = useRef();

  function getInput() {
    props.userInputData(
      textInput.current.value,
      inputLang.current.value,
      inputTargetLang.current.value
    );
  }

 

  return (
    <div className="Container">
      <div className="inputContainer">
        <div className="srcContainer">
          {/* Input Language */}
          <select name="srcLang" id="" ref={inputLang} className="srcLanguage">
            <option value="">Select Language</option>
            {props.language.map((ele, idx) => {
              return <option key={idx+"inp"} value={ele.code}>{ele.name}</option>;
            })}
            ;
          </select>
          <textarea
            ref={textInput}
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="targetContainer">
          {/* Target Language */}
          <select
            name=""
            id=""
            className="targetLanguage"
            ref={inputTargetLang}
          >
            <option value="">Select Language</option>
            {props.language.map((ele, idx) => {
              return <option key={idx+"target"} value={ele.code}>{ele.name}</option>;
            })}
            ;
          </select>
          <div className="translatedText">{props.translated}</div>
        </div>
      </div>
      <button onClick={getInput}>Translate</button>
    </div>
  );
};

export default Inputfield;
