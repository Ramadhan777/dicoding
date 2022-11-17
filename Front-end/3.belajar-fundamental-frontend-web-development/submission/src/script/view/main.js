import "../components/search-bar.js";
import SourceData from "../data/source-data.js";

const main = () => {
  const searchElement = document.querySelector("search-bar");
  const mealContainer = document.querySelector(".meal-container");

  const onButtonSearchClicked = async () => {
    try {
      const meals = await SourceData.searchMeals(searchElement.value);
      updateUI(meals);
    } catch (error) {
      mealContainer.innerHTML = `<h4>${error}</h4>`
    }
  };

  const updateUI = (meals) => {
    let cards = "";
    meals.forEach((meal) => (cards += showCards(meal)));
    mealContainer.innerHTML = cards;
  };

  document.addEventListener("click", async (e) => {
    try {

      if (e.target.classList.contains("modal-detail-button")) {
        const idMeal = e.target.dataset.idmeal;
        const mealDetail = await SourceData.getMealDetail(idMeal);
        console.log(mealDetail[0])
        updateUIDetail(mealDetail[0]);
      }
    } catch (err) {
      alert(err);
    }
  });

  const updateUIDetail = (meal) => {
    const mealDetail = showMealDetail(meal);
    const modalBody = document.querySelector(".modal-body");
    modalBody.innerHTML = mealDetail;
  };

  const showCards = (meal) => {
    return `<div class="col-lg-2 col-md-3 col-sm-6 mb-5">
              <div class="card">
                  <img src="${meal.strMealThumb}" class="card-img-top">
                  <div class="card-body">
                  <h5 class="card-title">${meal.strMeal}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${meal.strArea}</h6>
                  <a href="#" class="btn btn-warning modal-detail-button" data-bs-toggle="modal"  data-bs-target="#mealDetailModal" data-idMeal="${meal.idMeal}">Show Details</a>
                  </div>
              </div>
          </div>`;
  };

  const showMealDetail = (meal) => {
    return `<div class="container-fluid">
                    <div class="row">
                        <img src="${meal.strMealThumb}" class="img-fluid">
                    <div class="row mt-3 ms-1">
                        <ul class="list-group">
                            <li class="list-group-item bg-warning"><h4>${meal.strMeal}</h4></li>
                            <li class="list-group-item"><strong>Ingredients :</strong> 
                            <ol>
                            <li>${meal.strIngredient1} - ${meal.strMeasure1}</li>
                            <li>${meal.strIngredient2} - ${meal.strMeasure2}</li>
                            <li>${meal.strIngredient3} - ${meal.strMeasure3}</li>
                            <li>${meal.strIngredient4} - ${meal.strMeasure4}</li>
                            <li>${meal.strIngredient5} - ${meal.strMeasure5}</li>
                            <li>${meal.strIngredient6} - ${meal.strMeasure6}</li>
                            <li>${meal.strIngredient7} - ${meal.strMeasure7}</li>
                            <li>${meal.strIngredient8} - ${meal.strMeasure8}</li>
                            <li>${meal.strIngredient9} - ${meal.strMeasure9}</li>
                            <li>${meal.strIngredient10} - ${meal.strMeasure10}</li>
                            <li>${meal.strIngredient11} - ${meal.strMeasure11}</li>
                            <li>${meal.strIngredient12} - ${meal.strMeasure12}</li>
                            <li>${meal.strIngredient13} - ${meal.strMeasure12}</li>
                            <li>${meal.strIngredient14} - ${meal.strMeasure14}</li>
                            <li>${meal.strIngredient15} - ${meal.strMeasure15}</li>
                            <li>${meal.strIngredient16} - ${meal.strMeasure16}</li>
                            <li>${meal.strIngredient17} - ${meal.strMeasure17}</li>
                            <li>${meal.strIngredient18} - ${meal.strMeasure18}</li>
                            <li>${meal.strIngredient19} - ${meal.strMeasure19}</li>
                            <li>${meal.strIngredient20} - ${meal.strMeasure20}</li>
                            </ol>
                            </li>
                            <li class="list-group-item"><strong>How To Cook :</strong> 
                            
                            ${meal.strInstructions}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
