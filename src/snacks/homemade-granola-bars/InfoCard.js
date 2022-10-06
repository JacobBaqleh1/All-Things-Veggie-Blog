import React from 'react';

export default function InfoCard() {
  return (
    <div class="infoCard">
      <div className="center-card">
        <h1 className="card-title"> Homemade Granola Bars</h1>
        <div className="infoCard-stars ">
          <img
            className="infoCard-star"
            src="https://www.svgrepo.com/show/13674/star.svg"
          ></img>
          <img
            className="infoCard-star"
            src="https://www.svgrepo.com/show/13674/star.svg"
          ></img>
          <img
            className="infoCard-star"
            src="https://www.svgrepo.com/show/13674/star.svg"
          ></img>
          <img
            className="infoCard-star"
            src="https://www.svgrepo.com/show/13674/star.svg"
          ></img>
          <img
            className="infoCard-star"
            src="https://www.svgrepo.com/show/115258/star.svg"
          ></img>
          <p>146 votes</p>
        </div>
        <button className="card-jumpToRecipe">Jump to Recipe</button>
        <br />
        <p>
          {' '}
          These bars are a convenient snack that satifies your sweet tooth!
          Chewy and crunchy, these bars are irresistable.
        </p>

        <img
          className="card-photoOne"
          src="https://images.unsplash.com/photo-1633360821154-1935fb5671e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3Jhbm9sYSUyMGJhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        ></img>

        <p>
          We all have busy days where making food is impossible to do. That is
          why I am a fan of this convenient snack. You do not have to be a star
          chef to make these and you have free range to swap ingredients to fit
          your needs.{' '}
        </p>
        <br />
        <h2>Things you will need </h2>
        <ul>
          <li>Baking pan</li>
          <li>Parchment paper or non-stick mat</li>
          <li>Big mixing bowl</li>
        </ul>
        <ul>
          <li>Peanut butter or any other kind (almond,cashew)</li>
          <li>Whole rolled oats</li>
          <li>Honey</li>
          <li>Vanilla extract</li>
          <li>Sea salt</li>
          <li>Crushed peanuts or cashews</li>
          <li>Dried cranberries</li>
          <li>Mini chocolate chips</li>
          <li></li>
        </ul>
        <h2>Recipe Ingredients</h2>
        <ul>
          <li>
            1 cup very smooth creamy natural peanut butter or cashew butter
          </li>
          <li>1 teaspoon vanilla extract</li>
          <li>2/3 cup honey</li>
          <li> 1/2 teaspoon sea salt</li>
          <li>2½ cups whole rolled oats</li>
          <li>1/3 cup mini chocolate chips</li>
          <li>3 tablespoons crushed peanuts or cashews</li>
        </ul>
        <h2>Instructions</h2>
        <ol>
          <li>Line an 8x8 baking pan with parchment paper.</li>
          <li>
            In a large bowl, stir together the peanut butter, honey, vanilla,
            and salt, until smooth.
          </li>
          <li>
            Add the oats, chocolate chips and the nuts. The mixture might seem
            dry at first, but keep stirring and it'll come together. Stir to
            combine and press firmly into the pan.{' '}
          </li>
          <li>
            Use a second piece of parchment paper and the back of a measuring
            cup to help flatten the mixture. Chill for at least 1 hour, then
            slice into bars.
          </li>
          <li>keep bars stored in the fridge.</li>
        </ol>
      </div>
    </div>
  );
}
