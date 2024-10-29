// src/components/NutritionTable.js
import "./NutritionTable.css";

const NutritionTable = () => {
  return (
    <section className="nutrition">
      <h2>Nutrition</h2>
      <p>
        The table below shows nutritional values per serving without the additional fillings.
      </p>
      <table>
        <tbody>
          <tr>
            <td>Calories</td>
            <td><strong>277 kcal</strong></td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td><strong>0 g</strong></td>
          </tr>
          <tr>
            <td>Protein</td>
            <td><strong>20 g</strong></td>
          </tr>
          <tr>
            <td>Fat</td>
            <td><strong>22 g</strong></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default NutritionTable;
