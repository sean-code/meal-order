import './restaurant.css';

function Restaurants(){
    return(
        <>
        <div id="services">
            <h1 className="titleh1" id="services"><strong>SERVICES</strong></h1><br />

        <div className="div1 card11">
          <div className="cards carda cardc innerCard11">
            <div className="front11">
                <div className="card-img">
                    <img  src="https://mintdentalcentre.co.ke/wp-content/uploads/2020/03/icon03-free-img.png" alt="tooth1" />
                </div>
                <div className="card-body">
                    <h5 ><em>Root Canal</em></h5>
                </div>
                </div>

                <div className="back11">
                    <h2>Root canal</h2>
                    <p>Root canal treatment is a dental procedure used to treat infection at the centre of a tooth.<br />
                        Root canal treatment is not painful and can save a tooth that might otherwise have to be removed completely.</p>
                </div>
            </div>

            <div className="cards cardc innerCard11 ">
                <div className="front11">
                <div className="card-img">
                    <img src="https://mintdentalcentre.co.ke/wp-content/uploads/2020/03/icon02-free-img.png" alt="tooth1" />
                </div>
                <div className="card-body">
                    <h5><em>Dentures</em></h5>
                </div>
            </div>
            <div className="back11">
              <h2>Dentures</h2>
              <p>A denture is a removable replacement for missing teeth and surrounding tissues.
                There are two types. Complete dentures are used when all the teeth are missing,<br />
                while partial dentures are used when some natural teeth remain.</p>
            </div>
          </div>

            <div class="cards cardc innerCard11 ">

                <div className="front11">
                    <div className="card-img">
                        <img src="https://mintdentalcentre.co.ke/wp-content/uploads/2020/03/icon04-free-img.png" alt="tooth1" />
                    </div>
                    <div className="card-body">
                        <h5><em>Tooth Whitening</em></h5>
                    </div>
                </div>

                <div className="back11">
                    <h2>Tooth Whitening</h2>
                    <p>Tooth whitening is any process that lightens the color of a tooth.<br />
                    Whitening may be accomplished by physical removal of the stain or a chemical reaction to lighten the tooth color.</p>
                </div>
            </div>

            <div class="div2 card11">

                <div class="cards cardc innerCard11">

                    <div class="front11">
                        <div class="card-img">
                            <img src="https://mintdentalcentre.co.ke/wp-content/uploads/2020/03/icon06-free-img.png" alt="tooth1" />
                        </div>
                        <div class="card-body">
                            <h5><em>Braces Installation</em></h5>
                        </div>
                    </div>

                    <div class="back11">
                        <h2>Braces Installation</h2>

                        <p>This is the process of attaching orthodontic or
                        dental braces to the teeth through molding, fitting, and threading of metal wires and elastic bands.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Restaurants;