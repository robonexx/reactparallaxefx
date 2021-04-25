import React from 'react'
import '../HomeDesktop.scss'
import About from './About'

/* const transStyle = {
    transform: `translateY(${offsetY * 0.5}px)`
} */

const HomeDesktop = ({handleScroll, offsetY}) => {


    const Content = () => (
        <>
        <div className="Parallax__heading Parallax__content">
            <h1 className="Parallax__heading__text"
            style={{transform: `translateY(${offsetY * 0.6}px)`}}>Robert Wägar</h1>
            <h3 className="Parallax__heading__subtitle">[kriːeɪˈtɪvɪti]</h3>
        </div>
        
        </>
    )

    return ( 
        <div className="Home" handleScroll={handleScroll}>
            
            <section className="Parallax">
                <div className="Parallax__original" 
                style={{transform: `translateY(${offsetY * 0.1}px)`}}/>
                <div className="Parallax__bg" 
                style={{transform: `translateY(${offsetY * 0.1}px)`}}/>
                <div className="Parallax__bg-profile" 
                style={{transform: `translateY(${offsetY * 0.2}px)`}}/>
                <div className="Parallax__content">{Content()}</div>
                <div className="Parallax__text" style={{transform: `translateY(${offsetY * 0.4}px)`}}>
                <p>
                Front-End Developer & Web Designer <br/>
                based in Stockholm
                </p>
                <p>
                I don't have a standard offer. Because the truth is every project is unique, rest assure so is the ideas of a creative mind in work. <br/>
                Throughout our partnership, I will act as an extension of your team. And because we're on the same path, we do everything with success. <br/>
                Openness, communication, accountability & quality in mind.
                </p>
        </div>
        <About />
            </section>
        </div>
     );
}
 
export default HomeDesktop;