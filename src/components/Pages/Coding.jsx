import { Button } from '@mui/material'
import React from 'react'

const Coding = () => {
  return (
    <>
        <div style={{ minHeight: "88vh" }}>
            <h2 style={{ textAlign: "center", padding: "2rem" }}>Start Your AI-Powered Coding Practise</h2>
            <div className='coading'>
                <img src='/coading.png' alt='Coding' style={{ width: "50%", height: "auto", display: "block", margin: "0 auto" }} />
                <div style={{ textAlign: "center", padding: "1rem" }}>
                    <h1>AI-Powered Coding Practise</h1>
                    <p>Enhance your coding skills with our AI-powered platform. Get personalized coding challenges, real-time feedback, and insights to improve your programming abilities.</p>
                    <p>Whether you're a beginner or an experienced coder, our platform adapts to your skill level, providing you with the right challenges to help you grow.</p>
                    <p>Join our community of coders and start your journey towards mastering coding with the help of AI.</p>
                    <Button variant="contained" color="primary" href="/coding/start" style={{ marginTop: "1rem" }}>
                        Start Coding Practice
                    </Button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Coding