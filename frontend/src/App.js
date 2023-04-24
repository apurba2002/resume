
import React from "react";

import $ from "jquery"


class Tempcontrol extends React.Component {
    componentDidMount() {
        $("#tg").click(() => {
            $("#gallery").fadeIn("4000")
        })
        $("#tfu").click(() => {
            $("#gallery").fadeOut("4000")
        })
        $("#tg").mouseover(() => {
            $("#tg").addClass("hover")
        })
        $("#tg").mouseout(() => {
            $("#tg").removeClass("hover")
        })
        $("#tfu").mouseover(() => {
            $("#tfu").addClass("hover")
        })
        $("#tfu").mouseout(() => {
            $("#tfu").removeClass("hover")
        })


    }

    render() {
        return (
            <>
                <section id="temp-control">
                    <div className="row " style={{}}>
                        <div className="col-2 p-0">

                        </div>
                        <div className="col-3 p-0 ">
                            <p className="mt-3  " id="tfu" style={{ fontSize: "8pt" }}>
                                Templete for you
                            </p>
                        </div>
                        <div className="col-2 p-0">

                        </div>
                        <div className="col-3 p-0 ">
                            <p id="tg" className="mt-3 " style={{ fontSize: "8pt", textAlign: "right" }}>
                                Templete gallery
                            </p>
                        </div>
                        <div className="col-2 p-0">

                        </div>


                    </div>
                </section>
            </>
        )
    }
}

class Tem extends React.Component {

    render() {
        return (
            <>
                <section id="tem-for-u">
                    <div className="row">

                        <div className="col-2 p-0"></div>
                        <div className="col-2 p-0">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0"></div>






                    </div>
                </section>
                <section id="gallery" style={{ display: "none" }}>
                    <div className="row">

                        <div className="col-2 p-0 mt-3"></div>
                        <div className="col-2 p-0 mt-3">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0 mt-3">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0 mt-3">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0 mt-3">
                            <img className="" style={{ width: "100%", marginLeft: "" }} src="green-2.png"></img>
                        </div>
                        <div className="col-2 p-0"></div>
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
                    <nav className="navbar sticky-top  bg-light fixed-top">
                        <div className="container-fluid">
                            <a className="navbar-brand text-primary" href="#">Resume.com</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title text-primary" id="offcanvasNavbarLabel">Resume.com</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">About</a>
                                            <a className="nav-link" href="">Contact</a>
                                            <a className="nav-link" href="">Privacy policy</a>
                                            <br></br>
                                            <a href="https://apurba2002.github.io/test/" target="blank">   <button className="btn btn-primary"   >Try our new cover creator</button></a>

                                        </li>

                                    </ul>

                                </div>
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
                    <div className="col-2">

                    </div>
                    <div className="col-8">
                        <p className=" text-center pt-5 text-primary fs-6  " >
                            Introducing the ultimate tool for crafting your perfect resume - Resume Creator!
                        </p>
                    </div>
                    <div className="col-2">

                    </div>

                </div>
            </section>
        );
    }
}
function App() {
    return (
        <>
            <Navbar />

            <Tempcontrol />
            <Tem />
            <Promotion />

        </>
    )
}

export default App;