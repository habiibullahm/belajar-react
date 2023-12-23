/* eslint-disable react/prop-types */

export default function Header({ name }) {
    return (
    <>  
    <h1> Belajar React Bareng {name ? name : "WPU"} 🚀</h1>
    <p onClick= {e => {alert('OK!')}}>Belajar React Itu Mudah Dan Menyenangkan Bukan?</p>
    </>
    )
}