import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position: "relative",
    top: "50vh",
    width: "100%"
  }
  return (
    <footer className='bg-dark text-light py-3 my-3' style={footerStyle}>
      <p align="center">
      Copyright &copy; MyTodosList.Com
      </p>
    </footer>
  )
}
