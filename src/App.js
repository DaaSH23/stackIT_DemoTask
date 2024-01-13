import React, { useState, useEffect } from 'react';
import './App.css';
import pic from './resource/IMG20200821161700-01.jpeg';
import cv from './resource/AbhishekOraon_CV_Uni.pdf';
import com from './resource/stackit.png';
import conpic from './resource/1705126669272-removebg-previewad.png'

function App() {

  const [renderContent, setRenderContent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1440) {
        setRenderContent(false);
      } else {
        setRenderContent(true);
      }
    };

    // Check window size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleDownload = () => {
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    const resumeFilePath = cv;

    // Create a new anchor element
    const downloadLink = document.createElement('a');

    // Set the href attribute to the file path
    downloadLink.href = resumeFilePath;

    // Set the download attribute to specify the default file name
    downloadLink.download = 'Abhishek_Oraon.pdf';

    // Append the anchor element to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the anchor element to start the download
    downloadLink.click();

    // Remove the anchor element from the body
    document.body.removeChild(downloadLink);
  };

  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    const tempSliderValue = Number(event.target.value);
    setValue(tempSliderValue);
  };

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // The empty dependency array ensures the effect runs only once when the component mounts

  const calculateMarginLeft = () => {
    // Adjust this calculation based on your needs
    return `${Math.min(10 * (scrollPosition / 200), 30)}rem`;
  };


  return (
    <>
      {renderContent ? (
        <div>
          <section className='Landing'>
            <div className="feature_landing">

              <div className="header">
                {value > 1 && (
                  <>
                    <span
                      style={{
                        textDecoration: 'line-through',
                        textDecorationColor: 'red',
                        textDecorationThickness: '3px',
                        cursor: 'pointer',
                        marginRight: '20px',
                      }}
                    // onMouseOut={(e) => e.target.style.textDecoration = 'none'}
                    >
                      WHY
                    </span>
                    I SHOULD GET <span style={{ color: '#bc4749' }}><br />HIRED</span>
                  </>
                )}
                {value < 1 && (
                  <>

                    WHY

                    I SHOULD GET <span style={{ color: '#bc4749' }}><br />HIRED</span>
                  </>
                )}

              </div>


              <div className="back_text">
                PORTFOLIO
              </div>
              <div className="back_text" style={{ marginTop: '20rem' }}>
                PORTFOLIO
              </div>
              <div className="back_text" style={{ marginTop: '30rem', color: 'transparent' }}>
                PORTFOLIO
              </div>


              <div className='info_box'>
                <div className='info_sec'>
                  <span className='info'>Github / Abhishek_oraon</span><br />
                  <span className='info'>linkedin / Abhishek Oraon</span><br />
                  <span className='info'>IG / abhishek_oraon</span><br />
                </div>
              </div>


              <div className="profile">
                <img src={pic} alt="Logo" />
              </div>
            </div>


            <div className='diff_color'>
              <div className='intro_text' style={{ marginLeft: calculateMarginLeft() }}>
                You may ask Why should we hire you? - With a strong foundation in Information Technology
                and a passion for web development and design, I bring technical expertise and a
                problem-solving mindset. My commitment to creating user-friendly interfaces, coupled
                with a continuous learning mentality, makes me an ideal candidate to contribute to
                real-world product performance.
              </div>
            </div>


          </section>
          <section className='AboutMe'>
            <div className='contpic'>
              <img className='conpic' src={conpic} alt="contact Pic" />
            </div>

            <div className='socialMedia'>
              <ul>
                <li><a href="https://github.com/DaaSH23"><i class="fab fa-facebook" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg></i></a></li>
                <li><a href="https://www.linkedin.com/in/abhishek-oraon-developer/"><i class="fab fa-twitter" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                  </svg>
                </i></a></li>
                <li><a href="https://www.instagram.com/abhishek_oraon_/?igsh=Y3g5cnh2OTl5bTR5"><i class="fab fa-google-plus-g" aria-hidden="true"><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                    fill="currentColor"
                  />
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="currentColor"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    fill="currentColor"
                  />
                </svg></i></a></li>
                {/* <li><a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a></li> */}
              </ul>
            </div>
            <div className='name_text'>Hello, <br />I'm Abhishek !</div>

            <div className='desc_text'>
              Being born and brought up in Konnagar, Kolkata, I had a significant impact on my cultural perspective and experiences.
              Now, as I pursue my Bachelor's degree in Information Technology, it's great that I've found a strong passion for
              building and designing products from scratch. My fascination with the design process and user interface is key
              in today's tech-driven world. The ability to solve complex interface and user experience problems is highly
              valuable, as it directly contributes to creating products that resonate with users and perform well in the real world.
            </div>
            <div className='cv_button'><button class="button-17" role="button" onClick={handleDownload}>Download Resume<span style={{ width: '30px' }}></span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
            </svg></button></div>
            <div className='circle_back'></div>
            <div className='contact'>
              <div className='cont_text1'>
                Contact
              </div>
              <div className='cont_text2'>
                Ph : +91 9748926012
              </div>
              <div className='cont_text3'>
                Email : reachtoabhisheko@gmail.com
              </div>
              <div className='cont_text4'>
                Address : Konnagar, kolkata
              </div>
            </div>
            <div className='card_view'>
              <div className='back_g1'></div>
              <div className='back_g2'></div>
            </div>

            <div className="about_back_text" >
              RESUME
            </div>
            <div className="about_back_text" style={{ marginTop: '54rem' }}>
              RESUME
            </div>
            <div className="about_back_text" style={{ marginTop: '46rem' }}>
              RESUME
            </div>

          </section>
          <section className='Resume'>
            <div className='eduHead_text'>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 5.5H9C10.1046 5.5 11 6.39543 11 7.5V16.5C11 17.0523 10.5523 17.5 10 17.5H4C3.44772 17.5 3 17.0523 3 16.5V6.5C3 5.94772 3.44772 5.5 4 5.5ZM14 19.5C13.6494 19.5 13.3128 19.4398 13 19.3293V19.5C13 20.0523 12.5523 20.5 12 20.5C11.4477 20.5 11 20.0523 11 19.5V19.3293C10.6872 19.4398 10.3506 19.5 10 19.5H4C2.34315 19.5 1 18.1569 1 16.5V6.5C1 4.84315 2.34315 3.5 4 3.5H9C10.1947 3.5 11.2671 4.02376 12 4.85418C12.7329 4.02376 13.8053 3.5 15 3.5H20C21.6569 3.5 23 4.84315 23 6.5V16.5C23 18.1569 21.6569 19.5 20 19.5H14ZM13 7.5V16.5C13 17.0523 13.4477 17.5 14 17.5H20C20.5523 17.5 21 17.0523 21 16.5V6.5C21 5.94772 20.5523 5.5 20 5.5H15C13.8954 5.5 13 6.39543 13 7.5ZM5 7.5H9V9.5H5V7.5ZM15 7.5H19V9.5H15V7.5ZM19 10.5H15V12.5H19V10.5ZM5 10.5H9V12.5H5V10.5ZM19 13.5H15V15.5H19V13.5ZM5 13.5H9V15.5H5V13.5Z"
                  fill="currentColor"
                />
              </svg><span style={{ marginRight: "20px" }}></span>
              Education </div>
            <div className='eduHead_text' style={{ marginLeft: "53rem", marginTop: "23rem" }}>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.2739 9.86883L16.8325 4.95392L18.4708 3.80676L21.9122 8.72167L20.2739 9.86883Z"
                  fill="currentColor"
                />
                <path
                  d="M18.3901 12.4086L16.6694 9.95121L8.47783 15.687L10.1985 18.1444L8.56023 19.2916L3.97162 12.7383L5.60992 11.5912L7.33068 14.0487L15.5222 8.31291L13.8015 5.8554L15.4398 4.70825L20.0284 11.2615L18.3901 12.4086Z"
                  fill="currentColor"
                />
                <path
                  d="M20.7651 7.08331L22.4034 5.93616L21.2562 4.29785L19.6179 5.445L20.7651 7.08331Z"
                  fill="currentColor"
                />
                <path
                  d="M7.16753 19.046L3.72607 14.131L2.08777 15.2782L5.52923 20.1931L7.16753 19.046Z"
                  fill="currentColor"
                />
                <path
                  d="M4.38208 18.5549L2.74377 19.702L1.59662 18.0637L3.23492 16.9166L4.38208 18.5549Z"
                  fill="currentColor"
                />
              </svg><span style={{ marginRight: "20px" }}></span>
              Technical Skills </div>
            <div className='skills' >
              <button class="button-18" role="button" disabled>React.Js</button>
              <button class="button-18" role="button" disabled>Node.Js</button>
              <button class="button-18" role="button" disabled>.NET MVC </button><br />
              <button class="button-18" role="button" disabled>Bootstrap </button>
              <button class="button-18" role="button" disabled>MySQL </button>
              <button class="button-18" role="button" disabled>Figma </button>
            </div>
            <div className='eduHead_text' style={{ marginLeft: "55rem", marginTop: "43rem", zIndex: "999999", color: "#2f3e46" }}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" fill="currentColor" />
              </svg><span style={{ marginRight: "20px" }}></span>
              Projects </div>
            <div className='skills' style={{ marginTop: "50rem", zIndex: "9999999" }}>
              <a href='https://github.com/DaaSH23/GCECT-questionPaper-portal' style={{ textDecoration: "none" }}><button class="button-18" role="button">Question Paper Portal</button></a>
              <a href='https://github.com/DaaSH23/Password-gen-extension' style={{ textDecoration: "none" }}><button class="button-18" role="button">Password Generator</button></a>
              <a href='https://github.com/DaaSH23/Weather-web' style={{ textDecoration: "none" }}><button class="button-18" role="button"> Weather App</button></a>
              <a href='https://github.com/DaaSH23/mini-game-abhishekO' style={{ textDecoration: "none" }}><button class="button-18" role="button"> Mini Games</button></a>
              <a href='https://github.com/DaaSH23' style={{ textDecoration: "none" }}><button class="button-18" role="button">Explore More <span style={{ marginRight: "1rem" }}></span><svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.0858 7.75739L15.3284 12L11.0858 16.2427L9.67157 14.8285L12.5 12L9.67157 9.1716L11.0858 7.75739Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z"
                  fill="currentColor"
                />
              </svg></button></a>
            </div>
            <div className='eduHead_text' style={{ marginLeft: "53rem", marginTop: "65rem", zIndex: "999999999", fontSize: "50px", color: "#2f3e46" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z"
                  fill="currentColor"
                />
              </svg><span style={{ marginRight: "20px" }}></span>
              Volunteer Experience </div>
            <div className='ve_desc'>
              <div className='ve_desc1'>
                College Tech Club, Member
              </div>
              <div className='ve_desc11'>
                Conducted online and offline tech events &<br /> impacted over 200+ students.
              </div>
              <div className='ve_desc2'>
                Rotaract Club (GCECT), Recruiter
              </div>
              <div className='ve_desc12'>
                Recruited members who are willing to contribute<br /> to social work, Organized events
              </div>
            </div>
            <div className='eduHead_text' style={{ marginLeft: "10.7rem", marginTop: "66rem", zIndex: "999999999", fontSize: "50px", color: "#2f3e46" }}>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 9C19 11.3787 17.8135 13.4804 16 14.7453V22H13.4142L12 20.5858L10.5858 22H8V14.7453C6.18652 13.4804 5 11.3787 5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9ZM17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9ZM10 19.7573L12 17.7573L14 19.7574V15.7101C13.3663 15.8987 12.695 16 12 16C11.305 16 10.6337 15.8987 10 15.7101V19.7573Z"
                  fill="currentColor"
                />
              </svg><span style={{ marginRight: "20px" }}></span>
              Interests / Hobbies
            </div>
            <div className='bucket_edu' style={{ marginTop: '62.5rem', position: 'absolute', width: '60rem', zIndex: "99999999" }}>
              <div className='pointers' style={{ color: "black" }}><svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                  fill="currentColor"
                />
              </svg></div>
              <div className='time_line' style={{ color: "black" }}>Football</div>
              <div className='def_timeLine' style={{ color: "black" }}>
                Played professionally for sub-division club And<br />
                Represented my school football team as a captain.
                <br />(Nov 2017)</div>
            </div>
            <div className='bucket_edu' style={{ marginTop: '71rem', position: 'absolute', width: '60rem', zIndex: "99999999" }}>
              <div className='pointers' style={{ color: "black" }}><svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                  fill="currentColor"
                />
              </svg></div>
              <div className='time_line' style={{ color: "black" }}>Esports</div>
              <div className='def_timeLine' style={{ color: "black" }}>
                Love playing games & compete in events.<br />
                Valorant, PubG, League of Legends etc.
              </div>
            </div>

            <div className='support_line3'></div>
            <div className='support_line'></div>
            <div className='bucket_edu'>
              <div className='pointers'>

                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                    fill="currentColor"
                  />
                </svg></div>
              <div className='time_line'>2020-2024</div>
              <div className='def_timeLine'>Government College Of Engineering<br /> & Ceramic Technology ( CGPA: 9.29 )<br />Bachelor of Technology - Information Technology</div>
            </div>
            <div className='bucket_edu' style={{ marginTop: '10rem', position: 'absolute', width: '60rem' }}>
              <div className='pointers'><svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                  fill="currentColor"
                />
              </svg></div>
              <div className='time_line'>2018-2019</div>
              <div className='def_timeLine'>
                Techno India Group Public School ( CGPA: 6.1 )
                <br /> Higher Secondary Examination - PCM(+Computer)</div>
            </div>
            <div className='bucket_edu' style={{ marginTop: '25rem', position: 'absolute', width: '60rem', zIndex: "99999999" }}>
              <div className='pointers' style={{ color: 'black' }}><svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                  fill="currentColor"
                />
              </svg></div>
              <div className='time_line' style={{ color: 'black' }}>Aug 2023 - Present</div>
              <div className='def_timeLine' style={{ color: 'black' }}>

                Adamas Tech Consulting (Contractual Employee) <br />
                Jr. Software Engineer (.Net Developer)<br /> On behalf of Digital Resonance Pvt Ltd.
              </div>
            </div>
            <div className='bucket_edu' style={{ marginTop: '35rem', position: 'absolute', width: '60rem', zIndex: "99999999" }}>
              <div className='pointers' style={{ color: 'black' }}><svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                  fill="currentColor"
                />
              </svg></div>
              <div className='time_line' style={{ color: 'black' }}> June 2023 - Present</div>
              <div className='def_timeLine' style={{ color: 'black' }}>

                Digital Resonance Pvt Ltd. <br />
                Jr. Software Engineer (.Net Developer)
              </div>
            </div>
            <div className='bucket_edu' style={{ marginTop: '44rem', position: 'absolute', width: '60rem', zIndex: "99999999" }}>
              <div className='pointers' style={{ color: 'black' }}><svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.73 7.75739L22.9798 11.9929L18.7443 16.2426L17.3277 14.8308L19.142 13.0103L6.85364 13.0525C6.44678 14.219 5.33954 15.0584 4.03368 15.0642C2.37684 15.0717 1.02767 13.7346 1.02023 12.0777C1.01279 10.4209 2.34989 9.07173 4.00673 9.06429C5.31328 9.05842 6.4285 9.88867 6.84531 11.0525L19.1607 11.0103L17.3182 9.17398L18.73 7.75739ZM5.02019 12.0598C5.01771 11.5075 4.56799 11.0618 4.01571 11.0643C3.46343 11.0667 3.01773 11.5165 3.02021 12.0687C3.02269 12.621 3.47242 13.0667 4.02469 13.0642C4.57697 13.0618 5.02267 12.612 5.02019 12.0598Z"
                  fill="currentColor"
                />
              </svg></div>
              <div className='time_line' style={{ color: 'black' }}>  Jan 2023 - Apr 2023</div>
              <div className='def_timeLine' style={{ color: 'black' }}>

                Techxavvy.com <br />
                Web Development (Intern)<br />
              </div>
            </div>
            <div className='exp_box'>
              <div className='support_line2'></div>

              <div className='exp_logo'><svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2 19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19ZM20 19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H10V12.0111L12.395 12.0112L14.0001 9.86419L15.6051 12.0112H18.0001L18 4H19C19.5523 4 20 4.44772 20 5V19ZM16 4H12V9.33585L14.0001 6.66046L16 9.33571V4Z"
                  fill="currentColor"
                />
              </svg><span style={{ marginRight: "20px" }}></span>
                Experience
              </div>

            </div>
          </section>
          <section className='AboutMe' style={{ minHeight: "50rem" }}>

          </section>
          <section className='Resume' style={{ minHeight: "20rem" }}>
            <img className='compic' src={com} alt="companyPic" style={{ width: "17rem", height: "5rem", borderRadius: "50px" }} />

            <div className="range">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                id="range3"
                onChange={handleSliderChange}
              />
            </div>
            {value < 1 && (
              <>
                <div className='con_text1'>
                  I'm Here
                </div>
                <div className='arrow_here'>
                  <svg
                    width="90"
                    height="50"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6276 14.7219L9.21641 16.1391L2.83875 9.78892L9.18897 3.41125L10.6062 4.82242L6.82971 8.61526L17.1353 8.59304C19.3445 8.58828 21.1392 10.3753 21.144 12.5844L21.1612 20.5844L19.1612 20.5887L19.144 12.5887C19.1416 11.4841 18.2442 10.5907 17.1396 10.593L6.50391 10.616L10.6276 14.7219Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </>
            )}
            {value == 100 && (
              <>
                <div className='con_text1' style={{ marginTop: "4%", marginLeft: "40%", color: "#f4a261", textAlign: "center" }}>
                  Thank You<br /> For Consederation
                </div>

              </>
            )}
            <div className='con_text2'>
              Take Me there
            </div>
            <div className='right_arrow'>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.63605 7.75735L7.05026 6.34314L12.7071 12L7.05029 17.6568L5.63608 16.2426L9.87869 12L5.63605 7.75735Z"
                  fill="currentColor"
                />
                <path
                  d="M12.7071 6.34314L11.2929 7.75735L15.5356 12L11.2929 16.2426L12.7072 17.6568L18.364 12L12.7071 6.34314Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className='con_text4'>
              Oppurtunity
            </div>
            <div className='left_arrow'>
              <svg
                width="90"
                height="50"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.85046 13.4005C5.74589 13.4005 4.85046 12.5051 4.85046 11.4005V3.40051H2.85046V11.4005C2.85046 13.6097 4.64132 15.4005 6.85046 15.4005H17.156L13.3714 19.1852L14.7856 20.5994L21.1495 14.2354L14.7856 7.87146L13.3714 9.28567L17.4862 13.4005H6.85046Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </section>
        </div>
      ) : (
        <div>
          <p>Sorry Site content is not rendered on smaller screens.<br /> Didnt get time to make it responsive</p>
        </div>
      )}


    </>

  );

}

export default App;


