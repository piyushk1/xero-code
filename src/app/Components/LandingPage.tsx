import "../Components/LandingPage.css";
import Image from 'next/image'
import middleImage from "../../../public/assets/middleImage.png"
import stackPurple from "../../../public/assets/StackPurple.png";
import stackPink from "../../../public/assets/StackPink.png";
import ellipse2 from "../../../public/assets/Ellipse 2.png"
export default function LandingPage()
{
    return(
        <div className = "LandingPage">
            <div className = "Header">
                <div className="logo"></div>
                <button className="xeroCode"><p>XEROCODE</p></button>
           </div>
           <div className="line"></div>

           <div className="headerText"><p className="headingText">Integrate AI Throughout Your Workflow</p></div>
            <div className="codeDoctor">Code Doctor</div>
            <div className="sentence">Make processes where AI collaborates with your team throughout the whole development process.</div>
           
                <div className="emailInput">
                    <input className="emailInputText" placeholder="Your Email" />
                    <button className="emailInputButton">Join Waitlist</button>
                </div>
        

            
            <Image  className="imageContainer"src={middleImage} alt="middleImage"></Image>  
          


            <div className="ellipseContainer">
            <div className="ellipse3"></div>
            <div className="ellipse6"></div>
            <div className="ellipse1"></div>
            </div>
           
           <div className="header2">
          Boost the speed of your development and test cycles.
           </div>
           <div className="header2-subtitle">With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.</div>

          

        <div className="benefitsList1">
            <div className="benefitsListWrapper">
                <div className="benefitItem">
                <div><Image src={stackPurple} alt="stackPurple" /></div>
                <div className="benefitText">CI/CD Pipeline Generate</div>
                </div>
                <div className="divider"></div>
                <div className="benefitItem">
            <div> <Image src={stackPink} alt="stackPink" /></div>
                <div className="benefitText">Build / Deployment</div>
                </div>
            </div>
        </div>

        <div className="ellipse2">
            <Image src={ellipse2} alt="ellipse2"></Image>
        </div>

        <div className="benefitsList2">
            <div className="benefitsListWrapper">
                <div className="benefitItem">
                <div><Image src={stackPurple} alt="stackPurple" /></div>
                <div className="benefitText">Generate Test Cases</div>
                </div>
                <div className="divider"></div>
                <div className="benefitItem">
            <div> <Image src={stackPink} alt="stackPink" /></div>
                <div className="benefitText">Code Analysis</div>
                </div>
            </div>
        </div>

        <div className="container">
           <div className="header3"><p className="header3Text">Use AI to handle workflows in your chat platforms.</p></div>
            <div className="cardGrid">
                    <div className="grid-item1">
                        <div className="card1Container">
                            <div className="card1">
                                <div className="cardHeading">ask questions</div>
                                <div className="cardSubtitle">To assist with managing the development, testing, and     
                                deployment process, ask it questions or issue instructions.</div>
                                <button className="cardButton" ><p>coming soon</p></button>
                            </div>
                        </div>
                        <div className="card2Container">
                        <div className="card2">
                            <div className="cardHeading">execute</div>
                                <div className="cardSubtitle">With a single command, you may run a series of tests or install a 
                                    new version of a programme in a particular setting.</div>
                                <button className="cardButton" ><p>coming soon</p></button>
                            </div>
                        </div>
                    </div>
                    <div className="card2Container">
                        <div className="card3">
                        
                         <div className="card3Heading">Fix security concerns more quickly using generated code recommendations</div>
                                <div className="card3Subtitle"> 
                                    With the aid of AI, recognise any security risk and swiftly and effectively fix it.
                                    granting developers the freedom they require to protect their work frequently and early.
                                </div> 
                           
                        </div>
                    </div>
                </div>

        </div>

            

        <div className="header4">Automate all aspects of your delivery process with
AI support.</div>
        <div className="accessText">Get Early Access</div>
        <div className="emailInput">
                <input className="emailInputText" placeholder="Your Email"/>
                <button className="emailInputButton">Join Waitlist</button>
            </div>
        <div className="footerText">
        Copyright © <span>2023 EXOCODE TECHNOLOGIES</span> | All rights reserved
        </div>
        </div>
    )
}