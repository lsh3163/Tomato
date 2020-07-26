import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="description" content="RemoteMonster live media service demo" />
                <meta name="author" content="Lucas Choi" />
                <title>Video Config for Cast</title>
                {/* Custom fonts for this template*/}
                <link
                    href="vendor/fontawesome-free/css/all.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"
                />
                {/* Custom styles for this template*/}
                <link href="css/sb-admin-2.min.css" rel="stylesheet" />
                {/* Page Wrapper */}
                <div id="wrapper">
                    {/* Sidebar */}
                    <ul
                    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
                    id="accordionSidebar"
                    />
                    {/* End of Sidebar */}
                    {/* Content Wrapper */}
                    <div id="content-wrapper" className="d-flex flex-column">
                    {/* Main Content */}
                    <div id="content">
                        {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                        {/* Sidebar Toggle (Topbar) */}
                        <button
                            id="sidebarToggleTop"
                            className="btn btn-link d-md-none rounded-circle mr-3"
                        >
                            <i className="fa fa-bars" />
                        </button>
                        <h3 className="h3 mb-4 text-gray-800">ConferenceCall Test</h3>
                        </nav>
                        {/* End of Topbar */}
                        {/* Begin Page Content */}
                        <div className="container-fluid">
                        {/* Page Heading */}
                        <h4 className="font-weight-bold">How to use</h4>
                        <li>
                            Enter 클릭시 'remon' 이라는 conference Room 에 접속. Leave 클릭시
                            방을 떠납니다.
                        </li>
                        <li>
                            Open the same
                            <a href="./conference.html" target="_blank">
                            site
                            </a>{" "}
                            on other tab or browser. Then click on channel you created in the
                            channel list.
                        </li>
                        <li>
                            Source code:
                            <a
                            href="https://github.com/RemoteMonster/web-sdk/blob/master/examples/full/conference.html"
                            target="_blank"
                            >
                            github page
                            </a>
                        </li>
                        <br />
                        {/* Content Row */}
                        <div className="row">
                            <div className="col-xl-4 col-lg-5">
                            <div className="card shadow mb-4">
                                {/* Card Header - Dropdown */}
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Other Videos
                                </h6>
                                </div>
                                {/* Card Body */}
                                <div className="card-body">
                                <main className="text-center">
                                    <div
                                    className="row"
                                    style={{ width: 250 }}
                                    id="otherVideos"
                                    ></div>
                                </main>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-8 col-lg-7">
                            <div className="card shadow mb-4">
                                {/* Card Header - Dropdown */}
                                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 className="m-0 font-weight-bold text-primary">
                                    Local Video
                                </h6>
                                </div>
                                {/* Card Body */}
                                <div className="card-body">
                                <main className="text-center">
                                    <video
                                    id="myVideo"
                                    className="remote-video center w-300 h-300"
                                    autoPlay
                                    muted
                                    controls
                                    playsInline
                                    style={{
                                        zIndex: 1,
                                        background: "rgba(0, 0, 0, 0.5)",
                                        width: "100%"
                                    }}
                                    />
                                    <h6
                                    id="waitingTv"
                                    className="m-0 font-weight-bold text-primary"
                                    style={{
                                        zIndex: 3,
                                        position: "absolute",
                                        bottom: 55,
                                        right: 45,
                                        visibility: "hidden"
                                    }}
                                    >
                                    waiting
                                    </h6>
                                    <div className="col-lg-5">
                                    <div className="mt-12 text-center">
                                        <span className="mr-2">
                                        <a
                                            id="enterBtn"
                                            href="#"
                                            className="btn btn-primary btn-user text-center"
                                        >
                                            ENTER
                                        </a>
                                        </span>
                                    </div>
                                    </div>
                                </main>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* /.container-fluid */}
                        <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
                        />
                        {/* The webrtc adapter is required for browser compatibility */}
                    </div>
                    {/* End of Main Content */}
                    {/* Footer */}
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>
                            Copyright ©<a href="https://remotemonster.com">RemoteMonster</a>{" "}
                            2020
                            </span>
                        </div>
                        </div>
                    </footer>
                    {/* End of Footer */}
                    </div>
                    {/* End of Content Wrapper */}
                </div>
                {/* End of Page Wrapper */}
                {/* Scroll to Top Button*/}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up" />
                </a>
                {/* Bootstrap core JavaScript*/}
                {/* Core plugin JavaScript*/}
                {/* Custom scripts for all pages*/}
            </div>
        )
    }
}
