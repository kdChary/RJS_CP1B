const element = (
  // Write your code here.
  <div class="bg-container">
    <h1 class="heading">Congratulations</h1>
    <div class="details-container">
      <img
        class="profile-pic"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        alt=""
      />
      <p class="name">Vishnu</p>
      <p class="wishes">
        Vishnu Institute of Computer Education and Technology
      </p>
      <img
        class="prize-img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
