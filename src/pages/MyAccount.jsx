import React, { useState, useEffect } from "react";

import { Navbar, Main, Product, Footer } from "../components";

function MyAccount() {
    return (
        <>
            <Navbar />

            <div className="d-flex justify-content-center mt-4 mb-4">
                <div className="card mb-3" style={{ maxWidth: 1000 }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Nghiem Xuan Loc</h5>
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p>
                                <p className="card-text">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default MyAccount;