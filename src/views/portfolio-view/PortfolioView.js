import React, { useEffect, useState } from "react";
import Layout from "../../component/common-layout/Layout";
import Introduction from "../../component/common-introduction/Introduction";
import '../portfolio-view/portfolio.css';
import introduction_service from '../../models/introduction_service.json';
import CarouselControl from '../../component/common-carousel/CarouselControl';
import carousel_service from '../../models/carousel_service.json';
import NoFillButton from "../../component/common-nofill-button/NoFillButton";
import {button_name} from '../../property';
import PortfolioList from "../../component/common-portfolio-list/PortfolioList";
import list_service  from '../../models/portfolio_list_service.json';
import ContactForm from "../../component/common-form/ContactForm";

const PortfolioView = () => {
    const [introService, setIntroService] = useState({});
    const [carouselData, setCarouselData] = useState([])
    const [listData, setListData] = useState([])
    const [listTitle, setListTitle] = useState("")

    useEffect(() => {
        setIntroService(introduction_service)
        setCarouselData(carousel_service['carousel_list'])
        setListData(list_service["portfolio-list"])
        setListTitle(list_service["list-main-title"])
    },[introduction_service, carousel_service, list_service])
    
    return(
        <>
            <Layout>
                <div className="introduction-wrapper-container">
                    <Introduction serviceData = {introService}/>
                </div>
                <div className="container m-b-80">
                    <CarouselControl serviceData = {carouselData}/>
                    <div className="container">
                        <NoFillButton bttnName = {button_name['carousel_bttn_name']}/>
                    </div>
                </div>
                <hr></hr>
                <div className="container" style={{padding : "0px 0px 30px 0px"}}>
                    <PortfolioList serviceData = {listData} title = {listTitle}/>
                </div>
                <div style={{padding : "70px 0px 100px 0px",background : "linear-gradient(to bottom,#7a19f1,#332179)"}}>
                    <div className="container">
                        <ContactForm/>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default PortfolioView