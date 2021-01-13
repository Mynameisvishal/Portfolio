import React from 'react';
import './Work.css';
import {Button,Icon} from 'semantic-ui-react';
import MovieBuzz from '../images/MovieBuzz.png';
import Covid19 from '../images/Covid19.png';
import VioChats from '../images/VioChats.png';

function Work() {
    return (
        <div className="work__page" id="work">
            <h1>My Projects</h1>
            <div className="work__flex">
                <div data-aos="zoom-in" className="media">
                    <h2>VioChats</h2>
                    <img src={VioChats} alt="VioChats"/>
                    <Button color="green">
                        <Icon name="eye" />
                        View Project
                        </Button>
                </div>
                <div data-aos="zoom-in" className="media">
                    <h2>Covid19</h2>
                    <img src={Covid19} alt="Covid19"/>
                    <Button color="green">
                        <Icon name="eye" />
                        View Project
                        </Button>
                </div>
                <div data-aos="zoom-in" className="media">
                    <h2>MovieBuzz</h2>
                    <img src={MovieBuzz} alt="MovieBuzz"/>
                    <Button color="green">
                        <Icon name="eye" />
                        View Project
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default Work
