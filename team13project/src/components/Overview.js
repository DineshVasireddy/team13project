import React from 'react';

const Overview = () => {
    return (
        <section id="intro" className="main style1 dark fullscreen">
            <div className="overlay"></div> {/* Add overlay here */}
            <div className="content">
                <header>
                    <h2>Overview</h2>
                </header>
                <h3>Problem Statement</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi auctor ipsum magna, in ullamcorper tortor malesuada id. Ut vel leo vel purus euismod accumsan. Duis eget orci condimentum, porta purus nec, vehicula quam. Sed nec iaculis dui. Sed auctor lacinia leo sed interdum. Mauris rhoncus facilisis ligula, a eleifend leo tincidunt et. Curabitur tristique eleifend nisi, vestibulum rutrum felis dapibus sit amet. Aliquam non purus et orci vulputate convallis sit amet et enim. Maecenas metus nulla, blandit id suscipit id, viverra at mi. Vestibulum accumsan eu erat vitae tempus.
                </p>

                <h3>Key Challenges</h3>
                <ul>
                    <li>Challenge 1: Lorem ipsum dolor sit amet.</li>
                    <li>Challenge 2: Morbi auctor ipsum magna.</li>
                    <li>Challenge 3: Ut vel leo vel purus euismod.</li>
                </ul>

                <h3>Recent Trends and Advancements</h3>
                <ul>
                    <li>Trend 1: Cras blandit efficitur est.</li>
                    <li>Trend 2: Mauris cursus arcu leo.</li>
                    <li>Trend 3: Vivamus egestas urna non massa ultricies dignissim.</li>
                </ul>

                <h3>Future Research Directions</h3>
                <ul>
                    <li>Direction 1: Nulla eu quam eget est iaculis tincidunt.</li>
                    <li>Direction 2: Proin est elit, finibus sit amet nisi id.</li>
                    <li>Direction 3: Integer pharetra nisl vitae erat iaculis.</li>
                </ul>

                <footer>
                    <a href="#one" className="button style2 down">More</a>
                </footer>
            </div>
        </section>
    );
};

export default Overview;