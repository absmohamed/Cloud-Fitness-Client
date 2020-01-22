import React from 'react'
import './footer.scss'
export default function Footer() {
    return (
        <footer className="footer">
                <div className="footer-text">Copyright &copy; {new Date().getFullYear()} Cloud Fitness</div>
        </footer>   
    )
}
