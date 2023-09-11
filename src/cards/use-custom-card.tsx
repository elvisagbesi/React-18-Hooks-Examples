import { useDebugValue, useEffect, useState } from "react"

function useLanguage() {
  const [language, setLanguage] = useState("")
  useDebugValue(language)

  useEffect(() => {
    setLanguage(navigator.language)
  }, []);

  return language
}

function useHelloWorld() {
  const language = useLanguage()

  if (language.includes('en')) {
    return "Hello World"
  } else {
    return "Language not supported"
  }
}

export default function UseCustomComponent() {

  const text = useHelloWorld()

  return (
    <>
      <h4>{`Message: ${text}`}</h4>
    </>
  )
}