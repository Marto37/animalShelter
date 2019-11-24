import React from "react"

const About = props => (
    <>
        <section>
            <h1>{props.name}</h1>
            <img>{props.img}</img>
            <dl>
                <dt>{props.breed}</dt>
                <dt>{props.status}</dt>
                <dt>{props.gender}, {props.age}</dt>
            </dl>
        </section>
        <p>
            {props.description}
        </p>
        <button id="adopt">Adopt Me!</button>
    </>
)