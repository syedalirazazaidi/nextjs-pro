"use client"
import { useEffect, useState } from "react"
const words =['hello','hi','network','developer']

export default function WordGenerator() {
    const [word ,setWord] = useState('Not yet defined :(')
    const generate=()=>{
        const randomWord = words[Math.floor(Math.random()*words.length)]
        setWord(randomWord)
    }
    useEffect(()=>{
        console.log('client component')
    })
  return (
    <div><button onClick={generate}>
        wordgenerator</button>
        <p> {word}</p>
        </div>
  )
}
