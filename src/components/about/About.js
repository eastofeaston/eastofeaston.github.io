import React from 'react';
import { Container, Row, } from 'reactstrap';
import { headlineData, projectsData } from "./aboutInfo";
import AboutCard from "./AboutCard";

export default function About() {
    return (
        <Container>
            <HeadlineCard />
            <ProjectCards />
        </Container>
    );
}

function HeadlineCard() {
    return (
        <Row>
            <AboutCard
                title={headlineData.headlineName}
                text={headlineData.headlineStatement}
                pic={headlineData.imagePath}
                about
            />
        </Row>
    );
}

function ProjectCards() {
    return (
        <Row>
            {projectsData.map(item =>
                <AboutCard
                    key={item.name}
                    title={item.name}
                    text={item.pitch}
                    subTitle={item.subTitle}
                    pic={item.imagePath}
                />
            )}
        </Row>
    );
}