import React from 'react';

const Calendly = () => {
    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div class="font1">
                            <p>EASY <br/>scheduling
                                <span>ahead</span> </p>
                        </div>
                        <p className="notes">
                            <strong>Calendly is your hub for scheduling meetings<br/>proffesionally and efficiently,
            eliminating the hassle of<br/> back-and-forth emails so you can get back to work.</strong>
                        </p>
                        <div class="email">
          <input class="one" type="text" name="Enter your email"/>
          <h5 class="underemail">Create your free account.No account card required.</h5>
          <button class="left">Sign up</button>
        </div>                        

                    </div>
                    <div class="col-md-6">
        <img src="officeimages/website.jpg" width="100%" class="img-responsible"/>
      </div>
                </div>
            </div>

<div className="container-fluid">
<div className="col-md-12 secondpart">
    <h4 className="text-center">
    Simplified scheduling for more than <span>1,000,000,000</span> users worldwide
    </h4>

    <div class="nike">
          <img src="officeimages/nike-logo.png" class="img-responsive" width="10%"/>
        </div>

        <div class="playstore">
          <img src="officeimages/play store-logo.png" class="img-responsive" width="15%"/>
        </div>

        <div class="ebay">
          <img src="officeimages/make-site-like-ebay.webp" class="img-responsive" width="50%"/>
        </div>

</div>
</div>


<div className="container">
    <div className="row">
        <div className="col-md-4 text-center">
        <span class="badge badge1">1</span>
      <strong>Create simple rules</strong>
      <h6>
        <strong>
        Let Calendly know your availiability preferences <br/> it'll do the work for you.</strong></h6>
        </div>

        <div class="col-md-4 text-center">
      <span class="badge badge1">2</span>
      <strong>Share your link</strong>
      <p><strong>Send guests your Calendly link or embed it on your website.</strong></p>
    </div>
    <div class="col-md-4 text-center">
      <span class="badge badge1">2</span>
      <strong>Get booked</strong>
      <p><strong>They pick a time and the event is added to your calendar</strong></p>
    </div>

    </div>
</div>


        </>
    );
}

export default Calendly;
