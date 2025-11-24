import "./banner.scss";
import banner from "../../assets/Banner.png";
function Banner() {
    return (

        <section className="banner">
            <img src={banner} alt="Banner" />
        </section>
    );
}

export default Banner;