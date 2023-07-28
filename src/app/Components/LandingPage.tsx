
"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import '../Components/LandingPage.css';
import ClientOnly from './ClientOnly';
import middleImage from '../../../public/assets/middleImage.png';
import stackPurple from '../../../public/assets/StackPurple.png';
import stackPink from '../../../public/assets/StackPink.png';
import ellipse2 from '../../../public/assets/Ellipse 2.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//for drawing arcs
// const arcVariants = {
//   initial: { pathLength: 0 },
//   animate: {
//     pathLength: 1,
//     transition: { duration: 1, ease: 'linear' },
//   },
// };

export default function LandingPage() {
  const [showHeaderText, setShowHeaderText] = useState(false);
  const [showCodeDoctor, setShowCodeDoctor] = useState(false);
  const [showSentence, setShowSentence] = useState(false);
  const [showEmailInputSection1, setShowEmailInputSection1] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showContainer, setShowContainer] = useState(false);
  const [showCardGrid, setShowCardGrid] = useState(false);
  const [showEmailInputSection2, setShowEmailInputSection2] = useState(false);
  const [showHeader2, setShowHeader2] = useState(false);
  const [showHeader2Subtitle, setShowHeader2Subtitle] = useState(false);
  const [showHeader3, setShowHeader3] = useState(false);
  const [showHeader4, setShowHeader4] = useState(false);
  const [showAccessText, setShowAccessText] = useState(false);
  const [showFooter, setShowFooter] = useState(false);
  const [scrollAnimation, setScrollAnimation] = useState(false);
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');
  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  
  const handleNameChange1 = (e:any) => {
    setName1(e.target.value);
  };

  const handleEmailChange1 = (e:any) => {
    setEmail1(e.target.value);
  };
  const handleNameChange2 = (e:any) => {
    setName2(e.target.value);
  };

  const handleEmailChange2 = (e:any) => {
    setEmail2(e.target.value);
  };


  // Function to handle second form submission
  const handleSubmit1 = async (e:any) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');

    let valid = true;

    if (name1.trim() === '') {
      setNameError('Please enter your name.');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email1)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name1, email1 }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitError('');
        toast.success('Form submitted successfully!');

      } else {
        setSubmitError(data.error || 'Error submitting the form.');
        setSubmitSuccess(false);
        toast.error(data.error || 'Error submitting the form.');

      }
    } catch (err) {
      setSubmitError('Error submitting the form.');
      setSubmitSuccess(false);
      toast.error('Error submitting the form.');

    }

    setIsSubmitting(false);
  };

   // Function to handle second form submission
   const handleSubmit2 = async (e:any) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');

    let valid = true;

    if (name2.trim() === '') {
      setNameError('Please enter your name.');
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email2)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    }

    if (!valid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('http://localhost:5000/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name2, email2 }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitSuccess(true);
        setSubmitError('');
        toast.success('Form submitted successfully!');

      } else {
        setSubmitError(data.error || 'Error submitting the form.');
        setSubmitSuccess(false);
        toast.error(data.error || 'Error submitting the form.');

      }
    } catch (err) {
      setSubmitError('Error submitting the form.');
      setSubmitSuccess(false);
      toast.error('Error submitting the form.');

    }

    setIsSubmitting(false);
  };

  useEffect(() => {
        const headerTextDelay = setTimeout(() => {
          setShowHeaderText(true);
        }, 1500);
    
        const codeDoctorDelay = setTimeout(() => {
          setShowCodeDoctor(true);
        }, 2500);
    
        const sentenceDelay = setTimeout(() => {
          setShowSentence(true);
        }, 3000);
    
        const emailInputDelay = setTimeout(() => {
          setShowEmailInputSection1(true);
        }, 3500);
    
        const imageDelay = setTimeout(() => {
          setShowImage(true);
        }, 4000);
        const header2Delay = setTimeout(() => {
          setShowHeader2(true);
        }, 4500);
        const header2SubtitleDelay = setTimeout(() => {
          setShowHeader2Subtitle(true);
        }, 5000);
        const containerDelay = setTimeout(() => {
          setShowContainer(true);
        }, 5500);
        const header3Delay = setTimeout(() => {
          setShowHeader3(true);
        }, 6000);
    
        const cardGridDelay = setTimeout(() => {
          setShowCardGrid(true);
        }, 6500);
    
        const header4Delay = setTimeout(() => {
          setShowHeader4(true);
        }, 7000);
        const accessTextDelay = setTimeout(() => {
          setShowAccessText(true);
        }, 7500);
        const emailInputDelay2 = setTimeout(() => {
          setShowEmailInputSection2(true);
        }, 8000);
        const footerDelay = setTimeout(() => {
          setShowFooter(true);
        }, 8500);
    
        const handleScroll = () => {
          if (window.scrollY > 200) {
            setScrollAnimation(true);
          } else {
            setScrollAnimation(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          clearTimeout(headerTextDelay);
          clearTimeout(codeDoctorDelay);
          clearTimeout(sentenceDelay);
          clearTimeout(emailInputDelay);
          clearTimeout(imageDelay);
          clearTimeout(containerDelay);
          clearTimeout(cardGridDelay);
          clearTimeout(emailInputDelay2);
          clearTimeout(header2Delay);
          clearTimeout(header2SubtitleDelay);
          clearTimeout(header3Delay);
          clearTimeout(header4Delay);
          clearTimeout(accessTextDelay);
          clearTimeout(footerDelay);
    
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

  return (
       <motion.div className="LandingPage">
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.6,
          duration: 1,
          ease: [0.6, 0.05, 0.19, 0.99], // Corrected easing function in CSS format
        }}
        className="Header"
      >
        <div className="logo"></div>
        {showHeaderText && (
          <motion.button
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            className="xeroCode"
          >
            <p>XEROCODE</p>
          </motion.button>
        )}
      </motion.div>
      <div className="line"></div>

  
      <div className={`headerText ${scrollAnimation ? 'scroll-animation' : ''}`}>
        {showHeaderText && (
          <motion.p
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.2,
              duration: 1,
              ease: [0.6, 0.05, 0.19, 0.99],
            }}
            className="headingText"
          >
            Integrate AI Throughout Your Workflow
          </motion.p>
        )}
      </div>
      {showCodeDoctor && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="codeDoctor"
        >
          Code Doctor
        </motion.div>
      )}
      {showSentence && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="sentence"
        >
          Make processes where AI collaborates with your team throughout the whole development process.
        </motion.div>
      )}

    {showEmailInputSection1 && (
        <motion.div className="emailInput">
          <div>
            <motion.input
              whileFocus={{ scale: 1.2 }}
              className="emailInputText"
              placeholder="Your Name"
              value={name1}
              onChange={handleNameChange1}
            />
            {nameError && <p className="errorText">{nameError}</p>}
            <motion.input
              whileFocus={{ scale: 1.2 }}
              className="emailInputText"
              placeholder="Your Email"
              value={email1}
              onChange={handleEmailChange1}
            />
            {emailError && <p className="errorText">{emailError}</p>}
          </div>
          <motion.button
            whileHover={{
              scale: 1.2,
              transition: { yoyo: Infinity },
            }}
            className="emailInputButton"
            onClick={handleSubmit1} // Handle form submission
          >
            Join Waitlist
          </motion.button>
        </motion.div>
      )}

      {showImage && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
        >
          <Image className="imageContainer" src={middleImage} alt="middleImage" />
        </motion.div>
      )}

      <div className="ellipseContainer">
        <div className="ellipse3"></div>
        <div className="ellipse6"></div>
        <div className="ellipse1"></div>
      </div>

      {showHeader2 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 2.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="header2"
        >
          Boost the speed of your development and test cycles.
        </motion.div>
      )}
      {showHeader2Subtitle && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="header2-subtitle"
        >
          With AI-driven test case generation and code analysis, problems may be found and fixed more quickly.
        </motion.div>
      )}

      {showContainer && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 3.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
        >
          <div className="benefitsList1">
            <div className="benefitsListWrapper">
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.2] }}
                transition={{ duration: 0.3 }}
                className="benefitItem"
              >
                <div>
                  <Image src={stackPurple} alt="stackPurple" />
                </div>
                <div className="benefitText">CI/CD Pipeline Generate</div>
              </motion.div>
              <div className="divider"></div>
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.2] }}
                transition={{ duration: 0.3 }}
                className="benefitItem"
              >
                <div>
                  <Image src={stackPink} alt="stackPink" />
                </div>
                <div className="benefitText">Build / Deployment</div>
              </motion.div>
            </div>
          </div>

          <div className="ellipse2">
            <Image src={ellipse2} alt="ellipse2" />
          </div>

          <div className="benefitsList2">
            <div className="benefitsListWrapper">
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.2] }}
                transition={{ duration: 0.3 }}
                className="benefitItem"
              >
                <div>
                  <Image src={stackPurple} alt="stackPurple" />
                </div>
                <div className="benefitText">Generate Test Cases</div>
              </motion.div>
              <div className="divider"></div>
              <motion.div
                whileHover={{ scale: [null, 1.2, 1.2] }}
                transition={{ duration: 0.3 }}
                className="benefitItem"
              >
                <div>
                  <Image src={stackPink} alt="stackPink" />
                </div>
                <div className="benefitText">Code Analysis</div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {showHeader3 && (
        <div className="container">
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 4.2,
              duration: 1,
              ease: [0.6, 0.05, 0.19, 0.99],
            }}
            className="header3"
          >
            <p className="header3Text">Use AI to handle workflows in your chat platforms.</p>
          </motion.div>

          {showCardGrid && (
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 4.2,
                duration: 1,
                ease: [0.6, 0.05, 0.19, 0.99],
              }}
              className="cardGrid"
            >
              <div className="grid-item1">
                <div className="card1Container">
                  <ClientOnly>
                    <motion.div
                      whileHover={{ scale: [null, 1.2, 1.2] }}
                      transition={{ duration: 0.3 }}
                      className="card1"
                    >
                      <div className="cardHeading">ask questions</div>
                      <div className="cardSubtitle">
                        To assist with managing the development, testing, and deployment process, ask it questions or
                        issue instructions.
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9, x: '-5px', y: '5px' }}
                        className="cardButton"
                      >
                        <p>coming soon</p>
                      </motion.button>
                    </motion.div>
                  </ClientOnly>
                </div>
                <div className="card2Container">
                  <motion.div
                    whileHover={{ scale: [null, 1.2, 1.2] }}
                    transition={{ duration: 0.3 }}
                    className="card2"
                  >
                    <div className="cardHeading">execute</div>
                    <div className="cardSubtitle">
                      With a single command, you may run a series of tests or install a new version of a programme in a
                      particular setting.
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9, x: '-5px', y: '5px' }}
                      className="cardButton"
                    >
                      <p>coming soon</p>
                    </motion.button>
                  </motion.div>
                </div>
              </div>
              <div className="card2Container">
                <motion.div
                  whileHover={{ scale: [null, 1.5, 1.4] }}
                  transition={{ duration: 0.3 }}
                  className="card3"
                >
                  <div className="card3Heading">
                    Fix security concerns more quickly using generated code recommendations
                  </div>
                  <div className="card3Subtitle">
                    With the aid of AI, recognize any security risk and swiftly and effectively fix it, granting
                    developers the freedom they require to protect their work frequently and early.
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      )}

      {showHeader4 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="header4"
        >
          Automate all aspects of your delivery process with AI support.
        </motion.div>
      )}

      {showAccessText && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="accessText"
        >
          Get Early Access
        </motion.div>
      )}

    {showEmailInputSection2 && (
            <motion.div className="emailInput">
              <div>
                <motion.input
                  whileFocus={{ scale: 1.2 }}
                  className="emailInputText"
                  placeholder="Your Name"
                  value={name2}
                  onChange={handleNameChange2}
                />
                {nameError && <p className="errorText">{nameError}</p>}
                <motion.input
                  whileFocus={{ scale: 1.2 }}
                  className="emailInputText"
                  placeholder="Your Email"
                  value={email2}
                  onChange={handleEmailChange2}
                />
                {emailError && <p className="errorText">{emailError}</p>}
              </div>
              <motion.button
                whileHover={{
                  scale: 1.2,
                  transition: { yoyo: Infinity },
                }}
                className="emailInputButton"
                onClick={handleSubmit2} // Handle form submission
              >
                Join Waitlist
              </motion.button>
            </motion.div>
          )}
    {showFooter && (
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4.2,
            duration: 1,
            ease: [0.6, 0.05, 0.19, 0.99],
          }}
          className="footerText"
        >
          Copyright © <span>2023 EXOCODE TECHNOLOGIES</span> | All rights reserved
        </motion.div>
      )}
      <ToastContainer position="top-center"/>
    </motion.div>
    

  );
}
