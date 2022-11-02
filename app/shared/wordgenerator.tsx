"use client"
import { useEffect } from "react"


export default function WordGenerator() {
    useEffect(()=>{
        console.log('client component')
    })
  return (
    <div>wordgenerator</div>
  )
}
