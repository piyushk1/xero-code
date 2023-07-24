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

           <div><p className="headingText">Integrate AI Throughout Your Workflow</p></div>
            <div className="codeDoctor">Code Doctor</div>
            <div className="sentence">Make processes where AI collaborates with your team throughout the whole development process.</div>
            <div className="emailInput">
                <input className="emailInputText" placeholder="Your Email"/>
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

           {/* <div className="benefitsList">
            <div className="benefitsListWrapper">
                <div className="benefitItem1"><Image src={stackPurple} alt ="stackPurple"></Image><div className="benefitText">CI/CD Pipeline Generate</div></div>
                <div className="benefitItem2"><Image src={stackPink} alt ="stackPink"></Image> <div className="benefitText"> Build / Deploymnent</div></div>
            </div>
           </div> */}

        <div className="benefitsList">
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

        <div className="benefitsList">
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

        <div className="cardSection">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        <div></div>
        <div></div>
        <div></div>
        <div></div>



        </div>
    )
}