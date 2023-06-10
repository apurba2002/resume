import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import React from "react";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";


import { BsFacebook } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { FcContacts } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsPersonWorkspace } from "react-icons/bs";

import { BsInstagram } from "react-icons/bs";
import { BsParagraph } from "react-icons/bs";
import { BsProjectorFill } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { BsPersonLinesFill } from "react-icons/bs";
import { BsFillBuildingsFill } from "react-icons/bs";
import { BsExplicitFill } from "react-icons/bs";
import { BsClockHistory } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { FaSchool } from "react-icons/fa";
import { SiSkillshare } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { GiFamilyHouse } from "react-icons/gi";
import { MdLocationOn } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { GrCertificate } from "react-icons/gr";
import { GrTechnology } from "react-icons/gr";
import { FcVideoProjector } from "react-icons/fc";
import { GoProject } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

import { GrUserExpert } from "react-icons/gr";





const showtemplete = () => {
    document.querySelector("#temp-control").style.display = "block";
    document.querySelector("#promotion").style.display = "none";
    document.querySelector("#midnav").style.display = "none";
    document.querySelector("#baneradd").style.display = "none";
    document.querySelector("#reviewcard").style.display = "none";
    document.querySelector("#review1").style.display = "none";
    document.querySelector("#review2").style.display = "none";
    document.querySelector("#review3").style.display = "none";
    document.querySelector("#personal-info").style.display = "none";
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#tem-for-u").style.display = "block";
    window.location.href = "#"




}
const showreviewcard = () => {
    document.querySelector("#promotion").style.display = "block";
    document.querySelector("#midnav").style.display = "block";
    document.querySelector("#baneradd").style.display = "flex";
    document.querySelector("#reviewcard").style.display = "block";
    document.querySelector("#temp-control").style.display = "none";
    document.querySelector("#review1").style.display = "none";
    document.querySelector("#review2").style.display = "none";
    document.querySelector("#review3").style.display = "none";

}
const showreview = (n) => {
    document.querySelector("#promotion").style.display = "none";
    document.querySelector("#midnav").style.display = "none";
    document.querySelector("#baneradd").style.display = "none";
    document.querySelector("#reviewcard").style.display = "none";
    document.querySelector("#temp-control").style.display = "none";
    n === "1" ? document.querySelector("#review1").style.display = "block" :
        n === "2" ? document.querySelector("#review2").style.display = "block" :
            n === "3" ? document.querySelector("#review3").style.display = "block" : alert("k")
    window.location.href = "#"



}
const showpersonalinfo = (n) => {
    const theme = n;
    document.querySelector("#temp-control").style.display = "none";
    document.querySelector("#tem-for-u").style.display = "none";
    document.querySelector("#personal-info").style.display = "block";
    document.querySelector("#experience").style.display = "none";
    sessionStorage.setItem("theme", theme);
    window.location.href = "#"



}
const showesperience = () => {
    document.querySelector("#personal-info").style.display = "none";
    document.querySelector("#experience").style.display = "block";
    document.querySelector("#education").style.display = "none";
    window.location.href = "#"

}
const showeducation = () => {
    document.querySelector("#experience").style.display = "none";
    document.querySelector("#education").style.display = "block";
    document.querySelector("#address").style.display = "none";
    window.location.href = "#"
}
const showaddress = () => {
    document.querySelector("#education").style.display = "none";
    document.querySelector("#address").style.display = "block";
    document.querySelector("#contacts").style.display = "none";
    window.location.href = "#"
}
const showcontacts = () => {
    document.querySelector("#address").style.display = "none";
    document.querySelector("#contacts").style.display = "block";
    document.querySelector("#language").style.display = "none";
    window.location.href = "#"
}
const showlanguage = () => {
    document.querySelector("#contacts").style.display = "none";
    document.querySelector("#language").style.display = "block";
    document.querySelector("#skills").style.display = "none";
    window.location.href = "#"
}
const showskills = () => {
    document.querySelector("#language").style.display = "none";
    document.querySelector("#skills").style.display = "block";
    window.location.href = "#"
}
const authentacate = (id, fun) => {
    let field = document.querySelector(id).value;

    if (field === "") {
        alert('Please fill out the required fields')
    }
    else {
        fun()
    }


}
const authentacatecontact = (id, id2, fun) => {
    let field = document.querySelector(id).value;
    let field2 = document.querySelector(id2).value;

    if (field === "" || field2 === "") {
        alert('Please fill out the required fields')
    }
    else {
        fun()
    }


}

class Tempcontrol extends React.Component {


    render() {
        const tg = () => {
            document.querySelector("#gallery").style.display = "block";
        }
        const tfu = () => { document.querySelector("#gallery").style.display = "none"; }
        return (
            <>
                <section id="temp-control" style={{ display: "none" }}>
                    <h1>Select your template and create something awosome</h1>
                    <div id="controlbtn" >
                        <h6 id="tfu" href="#navbar" onClick={tfu} >Templete for you</h6>
                        <h6 id="tg" onClick={tg} >Templete gallery</h6>
                    </div>
                    <Tem />
                    <Gallery />
                </section>

            </>
        )
    }
}
class Gallery extends React.Component {
    render() {
        return (
            <section id="gallery" style={{ display: "none" }}>
                <div className="contain">
                    <div className="box">
                        <img alt="image" src="contactimg.jpg" className="boximg"></img>
                        <br></br>
                        <br>
                        </br>
                        <h3 className="boxtxt">Simple default</h3>


                    </div>
                    <div className="box">
                        <img alt="image" src="privacyimg.jpg" className="boximg"></img>
                        <br></br>
                        <br>
                        </br>
                        <h3 className="boxtxt">Simple green</h3>


                    </div>
                    <div className="box" style={{ marginRight: "0" }}>
                        <img alt="image" src="temimg.jpg" className="boximg"></img>
                        <br></br>
                        <br>
                        </br>
                        <h3 className="boxtxt">Simple orange </h3>


                    </div>
                </div>
            </section>
        )
    }
}


class Tem extends React.Component {

    render() {
        return (
            <>
                <section id="tem-for-u">
                    <div className="contain">
                        <div className="box" onClick={() => { showpersonalinfo("simpledefault") }}>
                            <img alt="image" src="contactimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple default</h3>


                        </div>
                        <div className="box" onClick={() => { showpersonalinfo("simplegreen") }}>
                            <img alt="image" src="privacyimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple green</h3>


                        </div>
                        <div className="box" style={{ marginRight: "0" }} onClick={() => { showpersonalinfo("simpleorange") }}>
                            <img alt="image" src="temimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Simple orange </h3>


                        </div>
                    </div>

                </section>


            </>
        )
    }
}
class Navbar extends React.Component {



    render() {



        return (
            <>
                <section id="navbar">
                    <nav className="navbar navbar-expand-lg fixed-top bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand " style={{ color: "blue" }} href="index.html">Resume.com</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" >Privacy policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#footer">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#reviewcard" id="nrb" onClick={showreviewcard} >Customer review</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  " href="#" id="ntb" onClick={showtemplete}>Templetes</a>
                                    </li>
                                    <li className="nav-item">
                                        <button className=" btn btn-primary " id="cbtn" onClick={() => { window.open("https://apurba2002.github.io/test/") }} >Try our new cover Creator</button>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </section>
            </>
        )






    }
}
class Promotion extends React.Component {

    render() {

        return (
            <section id="promotion">
                <div className="row">
                    <div className="col-2 p-0">

                    </div>
                    <div className="col-8 p-0">
                        <p className=" text-center   fs-1  " id="ptxt" >
                            Introducing the ultimate tool for crafting your perfect resume - Resume Creator!
                        </p>
                        <button className="btn btn-primary" id="jump" href="#" onClick={showtemplete} >Start Now</button>
                    </div>
                    <div className="col-2 p-0">

                    </div>

                </div>
            </section>
        );
    }
}


class MidNav extends React.Component {
    render() {

        return (
            <>
                <section id="midnav">
                    <div className="contain">
                        <div className="box" onClick={() => { window.location.href = "#footer" }}>
                            <img alt="image" src="contactimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Contact Us</h3>

                            <p className="boxtxt">
                                Our team is available 24 hours for you . So don't hesitate to Contact us any time.
                            </p>
                        </div>
                        <div className="box">
                            <img alt="image" src="privacyimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt">Our Privacy</h3>

                            <p className="boxtxt">
                                We are always working hard to secure your information.
                            </p>
                        </div>
                        <div className="box" href="#" onClick={showtemplete} style={{ marginRight: "0" }}>
                            <img alt="image" src="temimg.jpg" className="boximg"></img>
                            <br></br>
                            <br>
                            </br>
                            <h3 className="boxtxt" >Templetes </h3>

                            <p className="boxtxt">
                                Our designers know your expectation. Just choose and save your time.
                            </p>
                        </div>

                    </div>
                </section>
            </>
        )
    }
}
class Baneradd extends React.Component {


    render() {
        return (
            <section id="baneradd">
                <img alt="image" src="baneradd.jpg"></img>
                <div>

                    <h1>A resume is one of the keys to getting a good job</h1>
                    <br></br>
                    <p>So what are you waiting for? Create your one now.</p>
                    <button className="btn btn-primary" id="baneraddbtn" onClick={showtemplete}>Create Your Resume with Us</button>
                </div>


            </section>
        )
    }
}
class Reviewcard extends React.Component {

    render() {
        return (
            <section id="reviewcard">
                <h1>Top reviews about us</h1>
                <div className="contain">
                    <div className="box">
                        <img alt="image" src="cman.jpg" id="lm1img" className="boximg"></img>
                        <br></br>
                        <br>
                        </br>
                        <h3 className="boxtxt" id="lm1txt">Trump smith</h3>

                        <p className="boxtxt">
                            Resume.com is an excellent platform for anyone looking to create a professional resume quickly and easily.
                        </p>
                        <button className="btn btn-primary" id="lm1" onClick={() => { showreview("1") }} >Learn more</button>
                    </div>
                    <div className="box">
                        <img alt="image" src="cstudent.jpg" className="boximg" id="lm2img" ></img>
                        <br></br>
                        <br>
                        </br>
                        <h3 className="boxtxt" id="lm2txt">Swift putin</h3>

                        <p className="boxtxt" >
                            Resume.com is a top-notch  platform that provides users with everything they need to create a standout resume.
                        </p>
                        <button className="btn btn-primary" id="lm2" onClick={() => { showreview("2") }}  >Learn more</button>
                    </div>
                    <div className="box" style={{ marginRight: "0" }}>
                        <img alt="image" src="cwomen2.jpg" className="boximg"></img>
                        <br></br>
                        <br>
                        </br>
                        <h3 className="boxtxt">Sanna Marine</h3>

                        <p className="boxtxt">
                            Resume.com is an exceptional platform for anyone looking to create a professional resume with ease.The site's interface is .....
                        </p>
                        <button className="btn btn-primary" id="lm3" onClick={() => { showreview("3") }}  >Learn more</button>
                    </div>
                </div>
            </section>
        )
    }
}
class Review extends React.Component {

    render() {

        return (
            <>
                <section id="review1" className="review" style={{ display: "none" }}>
                    <div>
                        <img alt="image" src="cman.jpg" id="img"></img>
                        <h1 id="txt" >Trump smith</h1>
                    </div>
                    <hr></hr>
                    <p id="r">
                        "Resume.com is an excellent platform for anyone looking to create a professional resume quickly and easily. The website's user-friendly interface and intuitive design make it simple to navigate, even for those with little to no experience creating a resume.One of the standout features of Resume.com is its extensive library of customizable templates. The site offers a wide range of designs to choose from, ensuring that users can find a template that fits their individual style and professional needs. The templates are also optimized for Applicant Tracking Systems (ATS), which means that they will be easily read and parsed by the software used by many companies to screen job applications.Resume.com also provides users with a range of helpful tools and resources, such as tips on resume writing and interview preparation. The platform also offers a resume review service, where users can have their resume critiqued by a professional for a fee. This can be a valuable service for anyone looking to ensure that their resume is optimized for the job market.In addition to its comprehensive features, Resume.com is also very affordable, with a range of pricing options to fit any budget. The free version of the site is also very robust, allowing users to create and download a basic resume without having to pay anything.Overall, Resume.com is an excellent platform that provides users with everything they need to create a professional, effective resume. With its intuitive design, customizable templates, and helpful resources, it is an excellent choice for anyone looking to stand out in today's competitive job market. "

                    </p>
                </section>
                <section id="review2" className="review" style={{ display: "none" }}>
                    <div>
                        <img alt="image" src="cstudent.jpg" id="img"></img>
                        <h1 id="txt" >Swift putin</h1>
                    </div>
                    <hr></hr>
                    <p id="r">
                        Resume.com is a top-notch resume-building platform that provides users with everything they need to create a standout resume. The website's interface is user-friendly, making it easy to create a professional-looking resume in no time.

                        One of the most notable features of Resume.com is its extensive library of templates. With hundreds of designs to choose from, users can find a template that perfectly suits their needs and professional aspirations. The templates are optimized for ATS, which means that they will be easily read by the software used by many companies to screen resumes.

                        The site also offers a range of helpful tools and resources, such as resume writing tips and interview preparation advice. The platform's resume review service is particularly impressive, as users can have their resumes reviewed by professionals who offer detailed feedback and suggestions for improvement.

                        Another great feature of Resume.com is its affordability. The site offers a range of pricing options to fit any budget, with the free version of the platform being particularly robust. Even with the free version, users can create and download a professional-looking resume that will help them stand out in the job market.

                        Overall, Resume.com is a top choice for anyone looking to create a standout resume quickly and easily. With its extensive template library, helpful tools and resources, and affordable pricing, it is an excellent option for job seekers of all levels.
                    </p>
                </section>
                <section id="review3" className="review" style={{ display: "none" }}>
                    <div>
                        <img alt="image" src="cwomen2.jpg" id="img"></img>
                        <h1 id="txt" >Sanna Marine</h1>
                    </div>
                    <hr></hr>
                    <p id="r">
                        Resume.com is an exceptional platform for anyone looking to create a professional resume with ease. The site's interface is user-friendly and intuitive, making it easy to navigate even for those who have never created a resume before.

                        One of the standout features of Resume.com is its vast library of customizable templates. With a broad range of designs to choose from, users can select a template that aligns with their professional style and career aspirations. The templates are also ATS optimized, ensuring that they can be read by the software used by many companies to screen resumes.

                        Resume.com also offers a range of valuable tools and resources to help users in their job search. The platform provides helpful tips and advice on resume writing and interview preparation, and its resume review service offers professional feedback to ensure that users' resumes are polished and effective.

                        The pricing of Resume.com is also very competitive, with a range of affordable options to fit any budget. The free version of the site is also impressive, offering robust features and templates that allow users to create a professional-looking resume without having to pay anything.

                        Overall, Resume.com is an outstanding choice for anyone looking to create a professional, effective resume with ease. With its extensive template library, helpful resources, and competitive pricing, it is a platform that stands out in the crowded field of resume-building tools.
                    </p>
                </section>

            </>

        )
    }
}
class Footer extends React.Component {
    render() {
        const PostData = async (e) => {
            e.preventDefault()

            let name = document.querySelector("#name").value;
            let email = document.querySelector("#email").value;
            let message = document.querySelector("#message").value;


            const res = await fetch("https://resume-ba8c7-default-rtdb.asia-southeast1.firebasedatabase.app/contactform.json",
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,


                    })
                })
            document.querySelector("#name").value = "";
            document.querySelector("#email").value = "";
            document.querySelector("#message").value = "";
            alert("Thanks For Your FeedBack")
        }


        return (
            <section id="footer">
                <div className="flex" >
                    <div id="left">
                        <h1>Contact Us</h1>
                        <p>Contact with us any time any moment . we are always to here you .</p>
                        <div className="flex">
                            <button style={{ backgroundColor: "rgb(56, 56, 243)" }}>Email</button>
                            <button style={{ backgroundColor: "rgb(56, 56, 243)" }} >Facebook</button>
                            <button style={{ backgroundColor: "rgb(56, 56, 243)" }} >Mobile</button>

                        </div>

                    </div>
                    <div id="right">
                        <h1>
                            Send feedback
                        </h1>
                        <form onSubmit={PostData} >
                            <input type="text" id="name" placeholder="Your Name" required></input>
                            <br></br>
                            <input type="email" id="email" placeholder="Your Email" required></input>
                            <br></br>
                            <input type="text" id="message" style={{ paddingBottom: "100px", width: "80%" }} placeholder="Your Opinion" required></input>
                            <br></br>

                            <button className="btn btn-primary" style={{ width: "50%", marginBottom: "50px", marginLeft: "10%", marginTop: "20px" }} type="submit " >Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
class Personalform extends React.Component {
    render() {


        return (
            <form >
                <div id="personal-info">
                    <h2><BsPersonLinesFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "blue" }} /> Personal information</h2>
                    <hr></hr>
                    <br>
                    </br>
                    <BsPersonCircle style={{ width: "10%", height: "40px", marginRight: "1%", color: "blue" }} /><span><input type="text" id="name" required placeholder=" Your name here"></input>
                    </span>
                    <br></br>
                    <BsPersonVcard style={{ width: "10%", height: "40px", marginRight: "1%", color: "blue" }} /><span><input type="text" placeholder=" Your professional subtittle here"></input>
                    </span>
                    <br></br>
                    <button className='btn btn-primary control-btn' onClick={() => { authentacate("#name", showesperience) }}>Next</button>
                    <a className='btn btn-danger control-btn-back' onClick={showtemplete} >Back</a>


                </div>
            </form>

        )
    }
}
function Experienceformheadinf(num) {
    return (
        <div>
            <h5><BsExplicitFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} />Experience {num}</h5>


        </div>
    )
}
function experience1(params) {
    return (
        <div>
            {Experienceformheadinf(1)}
            <br></br>
            <BsFillBuildingsFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Company name here"></input></span>
            <MdLocationOn style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Company location"></input></span>
            <BsFillBriefcaseFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Job tittle"></input></span>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Start Date (dd-mm-yyyy)"></input></span>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" End Date (dd-mm-yyyy)"></input></span>






        </div>
    )
}
function experience2(params) {
    return (
        <div>
            {Experienceformheadinf(2)}
            <br></br>
            <BsFillBuildingsFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Company name here"></input></span>
            <MdLocationOn style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Company location"></input></span>
            <BsFillBriefcaseFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Job tittle"></input></span>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Start Date (dd-mm-yyyy)"></input></span>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" End Date (dd-mm-yyyy)"></input></span>

        </div>
    )
}
function experience3(params) {
    return (
        <div>
            {Experienceformheadinf(3)}
            <br></br>
            <BsFillBuildingsFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Company name here"></input></span>
            <MdLocationOn style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Company location"></input></span>
            <BsFillBriefcaseFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Job tittle"></input></span>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" Start Date (dd-mm-yyyy)"></input></span>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="text" placeholder=" End Date (dd-mm-yyyy)"></input></span>

        </div>
    )
}
class Experienceform extends React.Component {
    render() {


        return (
            <section id='experience'>
                <section style={{ display: "flex" }}>
                    <h2> <BsPersonWorkspace style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /> Experience</h2>
                    <button className='btn btn-primary' style={{ width: "30%", height: "35px", marginTop: "5px" }} onClick={showeducation}>Skip</button>
                </section>
                <form>
                    <hr></hr>
                    <br></br>
                    {experience1()}
                    <br></br>
                    <hr></hr>
                    <br></br>
                    {experience2()}
                    <br></br>
                    <hr></hr>
                    <br></br>
                    {experience3()}
                    <br></br>
                    <button className='btn btn-primary control-btn' onClick={() => { showeducation() }}>Next</button>
                    <a className='btn btn-danger control-btn-back' onClick={showpersonalinfo}  >Back</a>

                </form>
            </section>
        )
    }
}
function Education() {
    return (
        <div id='education'>
            <h3><MdCastForEducation style={{ width: "10%", height: "40px", marginRight: "1%", }} /> Education<span ><button className='btn btn-primary' style={{ width: "30%", height: "35px", marginTop: "5px", marginLeft: "10px" }} onClick={showaddress}>Skip</button></span></h3>
            <hr></hr>
            <br></br>
            <h5> <FaCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} />Degree no:1</h5>
            <br></br>
            <GrCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" id="edu-grp-1-degree-name" placeholder="Name of the degree"></input>
            </span>
            <br></br>
            <FaSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the institution"></input>
            </span>
            <br></br>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Passing year"></input>
            </span>
            <br></br>
            <MdSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Result(GPA or CGPA)"></input>
            </span>
            <br></br>
            <hr></hr>
            <br></br>



            <h5> <FaCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} />Degree no:2</h5>
            <br></br>
            <GrCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the degree"></input>
            </span>
            <br></br>
            <FaSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the institution"></input>
            </span>
            <br></br>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Passing year"></input>
            </span>
            <br></br>
            <MdSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Result(GPA or CGPA)"></input>
            </span>
            <br></br>


            <hr></hr>
            <br></br>
            <h5> <FaCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} />Degree no:3</h5>
            <br></br>
            <GrCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the degree"></input>
            </span>
            <br></br>
            <FaSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the institution"></input>
            </span>
            <br></br>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Passing year"></input>
            </span>
            <br></br>
            <MdSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Result(GPA or CGPA)"></input>
            </span>
            <br></br>


            <hr></hr>
            <br></br>
            <h5> <FaCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} />Degree no:4</h5>
            <br></br>
            <GrCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the degree"></input>
            </span>
            <br></br>
            <FaSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the institution"></input>
            </span>
            <br></br>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Passing year"></input>
            </span>
            <br></br>
            <MdSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Result(GPA or CGPA)"></input>
            </span>
            <br></br>


            <hr></hr>
            <br></br>
            <h5> <FaCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} />Degree no:5</h5>
            <br></br>
            <GrCertificate style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the degree"></input>
            </span>
            <br></br>
            <FaSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Name of the institution"></input>
            </span>
            <br></br>
            <BsClockHistory style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Passing year"></input>
            </span>
            <br></br>
            <MdSchool style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Result(GPA or CGPA)"></input>
            </span>
            <br></br>
            <button className='btn btn-primary control-btn' onClick={() => { showaddress() }}>Next</button>
            <a className='btn btn-danger control-btn-back' onClick={showesperience}  >Back</a>







            <br></br>

        </div>
    )
}
function Address(params) {
    return (
        <div id='address'>
            <h2><MdLocationOn style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} />Address</h2>
            <hr></hr>
            <br></br>
            <form>
                <GiFamilyHouse style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="address" id='permanentaddress' required placeholder="Permanent address"></input></span>
                <br></br>
                <BsFillBuildingsFill style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="address" placeholder="Present address"></input></span>
                <button className='btn btn-primary control-btn' onClick={() => { authentacate("#permanentaddress", showcontacts) }}>Next</button>
                <a className='btn btn-danger control-btn-back' onClick={showeducation}  >Back</a>
            </form>



        </div>
    )
}
const Contact = () => {

    return (
        <div id='contacts' >
            <form>
                <h2><FcContacts style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} />Contacts</h2>
                <hr></hr>
                <br></br>
                <MdCall style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="tel" id='mobile' required placeholder="Enter your mobile number" ></input></span>


                <br></br>
                <MdAlternateEmail style={{ width: "10%", height: "40px", marginRight: "1%", color: "red" }} /><span><input type="email" id='email' required placeholder="Enter your email address" ></input></span>


                <br></br>
                <BsFacebook style={{ width: "10%", height: "40px", marginRight: "1%", color: "blue" }} /><span><input type="url" placeholder="Enter your facebbok address" ></input></span>
                <br></br>
                <BsGithub style={{ width: "10%", height: "40px", marginRight: "1%", color: "black" }} /><span><input type="url" placeholder="Enter your github account" ></input></span>

                <br></br>
                <BsLinkedin style={{ width: "10%", height: "40px", marginRight: "1%", color: "blue" }} /><span><input type="url" placeholder="Enter your linkedin account" ></input></span>

                <br></br>
                <BsInstagram style={{ width: "10%", height: "40px", marginRight: "1%", color: "#d62976 " }} /><span><input type="url" placeholder="Enter your instagram account" ></input></span>
                <button className='btn btn-primary control-btn' onClick={() => { authentacatecontact("#email", "#mobile", showlanguage) }}>Next</button>
                <a className='btn btn-danger control-btn-back' onClick={showaddress}  >Back</a>


            </form>


        </div>
    )
}
const Language = () => {
    return (
        <div id='language'>
            <h2><MdLanguage style={{ width: "10%", height: "40px", marginRight: "1%", color: "orange" }} />Language</h2>
            <hr></hr>
            <br></br>
            <FaLanguage style={{ width: "10%", height: "40px", marginRight: "1%", color: "orange" }} /><span><input type="text" required placeholder=" Main Language "></input></span>
            <FaLanguage style={{ width: "10%", height: "40px", marginRight: "1%", color: "orange" }} /><span><input type="text" placeholder="Additional Language 1"></input></span>
            <FaLanguage style={{ width: "10%", height: "40px", marginRight: "1%", color: "orange" }} /><span><input type="text" placeholder="Additional Language 3"></input></span>
            <FaLanguage style={{ width: "10%", height: "40px", marginRight: "1%", color: "orange" }} /><span><input type="text" placeholder="Additional Language 2"></input></span>
            <FaLanguage style={{ width: "10%", height: "40px", marginRight: "1%", color: "orange" }} /><span><input type="text" placeholder="Additional Language 4"></input></span>
            <button className='btn btn-primary control-btn' onClick={() => {showskills()} }>Next</button>
            <a className='btn btn-danger control-btn-back' onClick={showcontacts}  >Back</a>

        </div>
    )
}
const Skill = () => {
    return (
        <div id='skills'>
            <h2><SiSkillshare style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} />Skills</h2>
            <hr></hr>
            <br></br>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" required placeholder=" Skill no:1 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:2 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:3 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:4 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:5 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:6 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:7 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:8 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:9 "></input></span>
            <GiSkills style={{ width: "10%", height: "40px", marginRight: "1%", color: "green" }} /><span><input type="text" placeholder=" Skill no:10 "></input></span>
            <button className='btn btn-primary control-btn' onClick={() => {showskills()} }>Next</button>
            <a className='btn btn-danger control-btn-back' onClick={showlanguage}  >Back</a>




        </div>
    )
}
class Input extends React.Component {
    render() {

        return (
            <>

                <div id="tool">

                    <div className="">
                        <h1>
                            Enter your details here.
                        </h1>



                        <Personalform />

                        <Experienceform />

                        <Education />

                        <Address />

                        <Contact />

                        <Language />

                        <Skill />

                        <Projectall />




                    </div>

                </div>
            </>
        )
    }
}
const Projecthead = (num) => {
    return (
        <div>
            <h5><BsProjectorFill style={{ width: "10%", height: "40px", marginRight: "1%", }} /> Project {num}</h5>

        </div>
    )
}
const Projectinput = () => {
    return (
        <div>
            <GoProject style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="text" placeholder="Project name:"></input></span>

            <br></br>
            <AiOutlineLink style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input type="url" placeholder="Project link:"></input></span>

            <br></br>

            <BsParagraph style={{ width: "10%", height: "40px", marginRight: "1%", }} /><span><input style={{ paddingBottom: "100px", paddingTop: "20px" }} type="text" placeholder="Write about your project:"></input></span>

        </div>
    )
}
const Project1 = () => {
    return (
        <div>
            {Projecthead(1)}
            <br></br>
            {Projectinput()}
        </div>
    )
}
const Project2 = () => {
    return (
        <div>
            {Projecthead(2)}
            <br></br>
            {Projectinput()}
        </div>
    )
}
const Project3 = () => {
    return (
        <div>
            {Projecthead(3)}
            <br></br>
            {Projectinput()}
        </div>
    )
}
const Project4 = () => {
    return (
        <div>
            {Projecthead(4)}
            <br></br>
            {Projectinput()}
        </div>
    )
}
const Project5 = () => {
    return (
        <div>
            {Projecthead(5)}
            <br></br>
            {Projectinput()}
        </div>
    )
}
const Projectall = () => {
    return (
        <div>
            <h2><FcVideoProjector style={{ width: "10%", height: "40px", marginRight: "1%", }} />Projects</h2>
            <hr></hr>
            <br></br>
            {Project1()}
            <br></br>
            {Project2()}
            <br></br>
            {Project3()}
            <br></br>
            {Project4()}
            <br></br>
            {Project5()}
            <br></br>

        </div>
    )
}



function App() {
    return (
        <>


            <Navbar />

            <Promotion />
            <MidNav />
            <Baneradd />
            <Reviewcard />
            <Review />
            <Tempcontrol />
            <Input />

            <Footer />




        </>
    )
}

export default App;