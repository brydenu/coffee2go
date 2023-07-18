import checkForQuantities from "utils/checkForQuantities";

export default function buildOrderQuery(data) {
    console.log("data:", data);
    const drink = data.drink;
    const userId = data.user_id;

    let allColumns = Object.keys(drink);
    let columns = ["user_id"];
    for (let columnName of allColumns) {
      if (drink[columnName]?.ingredient_id !== 0) {
        columns.push(columnName);
      }
    }
    columns = checkForQuantities(columns);

    const valuesObjects = Object.values(drink);
    let values = [userId];
    for (let value of valuesObjects) {
      if (value.shots_option) {
        values.push(value.ingredient_name);
      } else if (typeof value === "boolean") {
        values.push(value);
      } else if (!!value.quantity) {
        values.push(value.ingredient_id);
        values.push(value.quantity);
      } else if (!!value.ingredient_id) {
        values.push(value.ingredient_id);
      } else if (!!value.menu_id) {
        values.push(value.menu_id);
      } else if (!!value.ingredient_name && value.ingredient_name !== "None") {
        values.push(value.ingredient_name);
      }
    }
    const insertColumns = [...columns];

    let columnsString = insertColumns.shift();
    while (insertColumns.length > 0) {
      columnsString = columnsString + ", " + insertColumns.shift();
    }

    return {columnsString, values, columns}
}