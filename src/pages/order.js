import { useState } from "react";
import Header from "components/Header"

export default function Order() {
  const [bevType, setBevType] = useState("coffee");

  const handleChangeTab = (e) => {
    e.preventDefault();
    const newBevType = e.target.value;
    setBevType(newBevType);
  }

  const selectedOption = "bg-blfs-teal w-40 text-white text-xl px-5 py-2 rounded-xl duration-200";
  const unselectedOption = "bg-blfs-blue w-40 text-white text-xl px-5 py-2 rounded-xl duration-200";

  return (
    <>
      <Header />
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-200">
        <h1>Order A Drink</h1>
        <div className="w-2/3 flex flex-col justify-center items-center bg-blfs-blue pt-10 pb-1 rounded">
          <div className="w-full flex justify-evenly mb-2">
            <button type="button" value="coffee" className={bevType === "coffee" ? selectedOption : unselectedOption} onClick={handleChangeTab}>Coffee</button>
            <button type="button" value="tea" className={bevType === "tea" ? selectedOption : unselectedOption} onClick={handleChangeTab}>Tea</button>
            <button type="button" value="other" className={bevType === "other" ? selectedOption : unselectedOption} onClick={handleChangeTab}>Other</button>
          </div>
          <div className="flex flex-col w-full bg-white justify-center rounded mb-2 px-8">
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="drinkTemp">Hot/Iced</label></div>
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="numberOfShots">Espresso shots</label></div>
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="milkType">Milk</label></div>
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="syrup1">Syrup</label></div>
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="sauce">Sauce</label></div>
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="foam">Foam</label></div>
            <div className="w-full flex flex-nowrap"><label className="text-xl my-2" for="temperature">Temperature</label></div>
          </div>
        </div>
      </main>
    </>
  )
}