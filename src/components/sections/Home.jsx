import '../styles/Home.css';
import PropTypes from 'prop-types';

function Home({ desktop }) {
    return (
        <div id="Home" className={desktop ? "home" : "home-mobile"}>
            <div className={desktop ? "home-intro" : "home-intro-mobile"}>
                <p className={desktop ? "intro-text" : "intro-text-mobile"}>Hello! My name is</p>
                <p className={desktop ? "name-text" : "name-text-mobile"}>Clement Ou.</p>
                <p className={desktop ? "desc-text" : "desc-text-mobile"}>I study Statistics & Machine Learning @ CMU</p>
                <div className={desktop ? "short-intro-box" : "short-intro-box-mobile"}>
                    <p className={desktop ? "short-intro-text" : "short-intro-text-mobile"}>
                        {`I'm a third-year student learning about and conducting research in Machine Learning. I am passionate about using technology to build a better future.`}
                    </p>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = {
    desktop: PropTypes.bool
};

export default Home;
