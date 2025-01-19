import "./checkbox.css";
export const CheckBox = ({ onClick }) => (
  <div class="checkbox-wrapper-2">
    <input onClick={onClick} id="checkbox" type="checkbox" class="sc-gJwTLC ikxBAC" />
    <label for="checkbox" className="checkbox-label">
      Избранное
    </label>
  </div>
);
