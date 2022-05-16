import React, { useEffect, useState } from "react";
import BlueBadge from "../common-badge/BlueBadge";
import PrimaryButton from "../common-primary-button/PrimaryButton";
import NoFillButton from "../common-nofill-button/NoFillButton";
import sampleLaptop from '../../assets/sample-laptop.webp';
import '../common-portfolio-list/portfolio_list.css';

const PortfolioList = (props) => {
    const images = require.context('../../assets', true);
    let staticImage = images(`./sample-laptop.webp`);
    return(
        <>
            {props.serviceData.map((data, index) => {
                return(
                    <div>
                        {index == 0 && 
                        <div className="p-t-70">
                            <h6 className="f-weight-700 text-uppercase">{props.title}</h6>
                        </div>}
                        <div className="d-flex align-items-center flex-lg-row flex-md-column flex-sm-column flex-column p-t-70">
                            <div className="image-container col-lg-7 col-md-12 col-sm-12 col-12">
                                <img src = {images(`./${data["img-name"]}`)} className = 'img-width' />
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 col-12">
                                <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start align-items-center">
                                    <div>
                                        <h3 className="f-weight-700 text-capitalize">{data['list-title']}</h3>
                                    </div>
                                    <div className = "p-l-15">
                                        <BlueBadge name = {data['badge-year']}/>
                                    </div>
                                </div>
                                <div className="text-lg-start text-md-center text-sm-center text-center p-t-12">
                                    <p>{data["list-desc"]}</p>
                                </div>
                                <div className="text-lg-start text-md-center text-sm-center text-center p-t-12">
                                    <p>{data["list-sub-desc-one"]} <a href="#">{data['list-sub-desc-two']}</a></p>
                                </div>
                                <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start p-t-12">
                                    <div className="p-t-10">
                                        <PrimaryButton bttnName = {'Preview'}/>
                                    </div>
                                    <div className="p-t-10">
                                        <NoFillButton bttnName = {'Visit Site'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {index != props.serviceData.length - 1 && <hr></hr>}
                    </div>
                )
            })}
        </>
    )
}

export default PortfolioList