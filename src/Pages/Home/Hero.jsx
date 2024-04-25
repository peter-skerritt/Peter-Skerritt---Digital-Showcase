export default function Hero() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        Hey, I'm Pete.
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">
                            Full Stack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.

                        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur praesentium in quasi.
                    </p>
                </div>
                <button className="btn btn-primary"> Download CV</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/me.png" alt="me, the dev!"></img>
            </div>
        </section>
    )
}