// import spacex01 from './images/spacex-01.jpg';
import spacex02 from './images/spacex-02.jpg';
import spacex03 from './images/spacex-03.jpg';

export default function HeroSection() {


    return <section className='d-flex flex-row' id="hero-section">
        <div className='conatiner w-25 py-5 bg-secondary text-dark bg-opacity-10'>
            <h2 className='h2 text-center my-3'>Welcome</h2>
            <h4 className='h4 text-center my-3'>To</h4>
            <h2 className='h2 text-center mt-3 mb-5'>SpaceX Zone</h2>
            <p className='p mt-5 mb-2 text-center'>Explore here</p>
            <p className='p my-2 text-center'>about the Capsule</p>
        </div>
        <div className='carousel slide' data-bs-ride="carousel">
        <div className="carousel-inner">
        <div className="carousel-item active">
            <img src={spacex02} alt="spacex-01" className="d-block w-100"/>
        </div>
            <div className="carousel-item">
                <img src={spacex03} alt="spacex-02" className="d-block w-100"/>
            </div>
            <div className="carousel-item">
                <img src={spacex03} alt="spacex-03" className="d-block w-100"/>
            </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#hero-section" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#hero-section" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
       
    </section>
}