import CONFIG from '../../globals/config';

const HotelDetail = (hotel) => `
<article class="hotel-detail">
    <div class="detail-info">  
      <h2 class="detail-nama"></h2>
      <p></p>
      <div class="grid-city-rating">
        <div class="city-detail">
          <p class="p-city">Rating: </p>
        </div>
        <div class="rating-detail">
            <p tabindex="0" class="p-rating-detail">${hotel.guestReviews.brands.rating}</p>
        </div>
      </div>
      </div>
      <h4>City Name: ${hotel.propertyDescription.address.cityName}</h4>
      <p class="p-padding"></p>
      <h4>Country: ${hotel.propertyDescription.address.countryName}</h4>
      <p class="p-padding"></p>
      <h4>province: ${hotel.propertyDescription.address.provinceName}</h4>
      <p class="p-padding"></p>
      <h4>Address: ${hotel.propertyDescription.address.fullAddress}</h4>
      <p class="p-padding"></p>

    </div>
  </div>
  <div class="description-detail">
    <h4 tabindex="0" class="review-title">Description: </h4>
    <p tabindex="0" class="p-description">${hotel.hygieneAndCleanliness.healthAndSafetyMeasures.description}</p>
    </div>
  </div>
</article>
`;

const HotelItem = (hotels) => `
    <article class="post-item">
      <h2>${hotels.address.countryName}</h2>
      <div class="image">
      <picture>
        <a href="${`/#/detail/${hotels.id}`}"><img tabindex="0" class="post-item__thumbnail lazyload"
        data-src="${hotels.optimizedThumbUrls.srpDesktop}"
        alt="${hotels.address.locality}" 
        /></a>
      </picture>
      </div>
      <div class="details">
        <h2>${hotels.address.locality}</h2>
        <h3 tabindex="0" class="post-item__title"><a href="${`/#/detail/${hotels.id}`}">${hotels.name}</a></h3>
        <p>Star Rating : ${hotels.starRating}</p>
      </div>
      <h2>${hotels.ratePlan.price.current}</h2>
    </article>
`;

const AboutUsPage = (aboutUs) => `
  <article class="about-us">
    <div class="about-us__content">
    
      <div class="about">
        <div class="left">
            <h1>About us</h1>
            <hr>
            <p>We are a bunch of an web developer learner just trying to be a good one. Let us introduce you to our project.</p>
            <p>This is Dream Live. This is our first team project to. This project simply about hotel platform.</p>
        </div>
        <div class="right">
          <picture>
            <img tabindex="0" class="img__about lazyload" data-src="../images/about-us-large.jpg" alt="About Us Logo">
          </picture>
        </div>
        <div class="clear"></div>
      </div>

      <div class="mission">
        <div class="left">
          <picture>
            <img tabindex="0" class="img__about lazyload" data-src="../images/missions-logo-large.jpg" alt="Mission Logo">
          </picture>
        </div>
          <div class="right">
            <h1>Mission Statement</h1>
            <hr>
            <p>During the pandemic period for the past 2 years, many hotels were empty of visitors. Therefore, we strive to provide facilities such as providing hotel references and for bookings. 
            We hope that this project can help increase turnover and visitors. The features in this program will include the appearance of a list of hotels, then to search for hotels and make bookings. We hope that other features will be added as the project progresses. 
            What we emphasize in this application is that it is easy to use and user friendly. We prioritize user convenience so that it helps if used by people who are new to technology.</p>
          </div>
        <div class="clear"></div>
      </div>
      
      <div class="about">
        <div class="team">
        <h1> Our Team<hr></h1>   

          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/johanes-large.jpg" alt="Johannes Valerian">
              </picture>
              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p class="team-name">Johannes Valerian</p>
            <p class="team-title">Web Developer</p>
          </div>

          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/kemal-large.jpg" alt="Kemal Yazid Fauzi">
              </picture>

              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p class="team-name">Kemal Yazid Fauzi</p>
            <p class="team-title">Web Developer</p>
          </div>

          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/wibrian-large.jpg" alt="Wibrian Alfathan">
              </picture>

              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p class="team-name">Wibrian Alfathan</p>
            <p class="team-title">Web Developer</p>
          </div>

          <div class="team-card">
            <div class="team-card-image">
              <picture>
                <img tabindex="0" class="team-card-img lazyload" data-src="../images/yosua2-large.jpg" alt="Yosua Hutabarat">
              </picture>

              <div class="team-card-image-inner">
                <div class="team-icons">

                </div>
              </div>
            </div>
            <p class="team-name">Yosua Hutabarat</p>
            <p class="team-title">Web Developer</p>
          </div>

          <div class="clearfix"></div>

          </div>
      </div>

    </div>

  </article>
`;

const createLikeHotelButtonTemplate = () => `
  <button aria-label="like this hotel" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeHotelButtonTemplate = () => `
  <button aria-label="unlike this hotel" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const Spinner = () => `
  <div class="spinner"></div>
`;

export default Spinner;

export {
  HotelDetail,
  HotelItem,
  AboutUsPage,
  createLikeHotelButtonTemplate,
  createUnlikeHotelButtonTemplate,
  Spinner,
};
