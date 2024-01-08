import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Inputfield from "./Inputfield/Inputfield";

function App() {
  let [languages, setLanguages]=useState([]);
  let [translatedText, setTranslatedText]=useState("")
  const options = {
    method: "GET",
    url: "https://text-translator2.p.rapidapi.com/getLanguages",
    headers: {
      "X-RapidAPI-Key": "1b9c7ad967mshf4c9e2e49b24821p1dcaf6jsn291e229158e0",
      "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
    },
  };
  async function getLanguages() {
    try {
      const response = await axios.request(options);
      setLanguages([...response.data.data.languages])
    } catch (error) {
      console.error(error);
    }
  }
async function userInputData(text, inputLang, targetLang){
  const options2 = {
    method: 'POST',
    url: 'https://text-translator2.p.rapidapi.com/translate',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': '1b9c7ad967mshf4c9e2e49b24821p1dcaf6jsn291e229158e0',
      'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
    },
    data: {
      source_language:inputLang,
      target_language:targetLang,
      text:text
    },
  };
  
  try {
    const response = await axios.request(options2);
    setTranslatedText(response.data.data.translatedText);
  } catch (error) {
    console.error(error);
  }
}
  useEffect(() => {
    getLanguages();
  }, []);

  return <div className="App">
  <h1>Text Translator</h1>
    <Inputfield language={languages} userInputData={userInputData} translated={translatedText}/>
  </div>;
}

export default App;
