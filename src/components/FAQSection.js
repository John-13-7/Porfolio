import React from 'react';
import styled from "styled-components";
import {About} from "../styles";
function FAQSection() {
    return (
        <FAQ>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className='question'>
                <h4>How do I start?</h4>
                <div className='answer'>
                    <p>you good</p>
                    <p>seriously, you good</p>
                </div>
                <div className='faq-line'></div>
            </div>
            <div className='question'>
                <h4>Daily Schedule</h4>
                <div className='answer'>
                    <p>you good</p>
                    <p>seriously, you good</p>
                </div>
                <div className='faq-line'></div>
            </div>
            <div className='question'>
                <h4>Different Payments</h4>
                <div className='answer'>
                    <p>you good</p>
                    <p>seriously, you good</p>
                </div>
                <div className='faq-line'></div>
            </div>
            <div className='question'>
                <h4>What products do you offer?</h4>
                <div className='answer'>
                    <p>you good</p>
                    <p>seriously, you good</p>
                </div>
                <div className='faq-line'></div>
            </div>
        </FAQ>
    );
};

const FAQ = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FAQSection;