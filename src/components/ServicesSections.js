import React from 'react';
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import home2 from "../img/home2.png";
import { About, Description, Hide, Image } from "../styles";
import styled from "styled-components";
function ServicesSections() {
    return (
        <Services>
            <About>
                <Description>
                    <h2>High <span>quality </span>services</h2>
                    <Cards>
                        <Card>
                            <div className='icon'>
                                <img src={clock}></img>
                                <h3>Efficient</h3>
                            </div>
                            <p>nah you good</p>
                        </Card>
                        <Card>
                            <div className='icon'>
                                <img src={teamwork}></img>
                                <h3>Efficient</h3>
                            </div>
                            <p>nah you good</p>
                        </Card>
                        <Card>
                            <div className='icon'>
                                <img src={diaphragm}></img>
                                <h3>Efficient</h3>
                            </div>
                            <p>nah you good</p>
                        </Card>
                        <Card>
                            <div className='icon'>
                                <img src={money}></img>
                                <h3>Affordable</h3>
                            </div>
                            <p>nah you good</p>
                        </Card>
                    </Cards>
                </Description>
                <Image>
                    <img src={home2}></img>
                </Image>
            </About>
        </Services>
    );
};

const Services = styled(About)` //copy all styles from before and add more
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items: center;
    }
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
    p{
        color: cyan;
    }
`;

export default ServicesSections;