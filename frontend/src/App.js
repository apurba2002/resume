
import React from "react";

import $ from "jquery"


class Tempcontrol extends React.Component {
    componentDidMount() {
        $("#tg").click(() => {
            $("#gallery").fadeIn("4000")
            $("#promotion").fadeOut("4000")
        })
        $("#tfu").click(() => {
            $("#gallery").fadeOut("4000")
            $("#promotion").fadeIn("4000")
            window.location.href = "#temp-control";


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
                <section id="temp-control" style={{display:"none"}}>
                    <p className="text-center fs-2" id="tct">Select And Create Something Nice</p>
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
                   
                </section>
                <section id="gallery" style={{ display: "none" }}>
                    
                </section>
            </>
        )
    }
}
class Navbar extends React.Component {
   componentDidMount(){
    $("#ntb").click(()=>{
        $("#promotion").fadeOut(2000)
        $("#promoimg").fadeOut(2000)
        $("#temp-control").fadeIn(4000)
    })
   }

    render() {
        return (
            <>
                <section id="navbar">
                    <nav className="navbar navbar-expand-lg fixed-top bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand text-primary" href="index.html">Resume.com</a>
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
                                        <a className="nav-link" href="#">Privacy policy</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contact</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  " href="#" id="ntb">Templetes</a>
                                    </li>
                                    <button className=" btn btn-primary " id="cbtn"  onClick={()=>{window.open("https://apurba2002.github.io/test/") }} >Try our new cover Creator</button>
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
    componentDidMount() {
        $("#ptxt").mouseover(() => {
            $("#ptxt").addClass("animation_flip")
        })
        $("#ptxt").mouseout(() => {
            $("#ptxt").removeClass("animation_flip")
        })
        $("#jump").click(()=>{
            $("#promotion").fadeOut(2000)
            $("#promoimg").fadeOut(2000)
            $("#temp-control").fadeIn(4000)
           
        })
    }
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
                        <button className="btn btn-primary" id="jump" >Start Now</button>
                    </div>
                    <div className="col-2 p-0">

                    </div>

                </div>
            </section>
        );
    }
}

class PromoImg extends React.Component {
    componentDidMount() {

    }
    render() {
        return (
            <section id="promoimg">
                <div className="row">
                    <div className="col-12 col-lg-12 p-0">
                        <img id="pimg" src="pngtree-e-learning-class-flat-illustration-png-png-image_3727055-removebg-preview.png"></img>
                    </div>
                </div>
            </section>
        )
    }
}
function App() {
    return (
        <>
            <Navbar />
            <Promotion />
            <PromoImg />
            <Tempcontrol />
            <Tem />



        </>
    )
}

export default App;