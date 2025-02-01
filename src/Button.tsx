import React from 'react'
import './Button.css'

interface ButtonProps { title: string }
export default function Button({ title }: ButtonProps) {
  return (
    <button className="UI-Button">{title}</button>
  )
}
