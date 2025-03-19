import React from "react";
import { useState } from "react";
function CategoriesPage() {
  const [category, setCategory] = useState("");

  // let categoryArr=[]
  const [categoryArr, setCategoryArr] = useState(
    JSON.parse(localStorage.getItem("categoryArr")) || []
  );
  function handleCategoryChange(e) {
    // const value=e.target
    setCategory(e.target.value);
  }
  const handleCategoryAdd = () => {
    // categoryArr.push(category)
    if(category!=""){
    let tempArr = [...categoryArr];
    tempArr.push(category);
    setCategoryArr(tempArr);
    localStorage.setItem("categoryArr", JSON.stringify(tempArr));
    setCategory("");
    }else{

    }
    // console.log(categoryArr)
  };
  function handleCategoryDelete(index){
    let tempArr=[...categoryArr]
    tempArr.splice(index,1)
    setCategoryArr(tempArr);
    localStorage.setItem("categoryArr", JSON.stringify(tempArr));
  }
  return (
    <div>
      <div className="flex justify-center w-full mt-10 space-x-10 ">
        <input
          onChange={handleCategoryChange}
          value={category}
          type="text"
          name="category"
          id=""
          placeholder="Enter the new category"
          className="border rounded-2xl px-5 w-96"
          
        />
        <button
          onClick={handleCategoryAdd}
          className="py-3.5 px-2.5 rounded-2xl font-bold bg-[#1976D2] text-white"
        >
          Add Category
        </button>
      </div>
      <div className="w-full flex justify-center mt-10 text-center ">
        <table className="bg-slate-100 shadow-2xl rounded-t-3xl">
          <thead>
            <tr>
              <td className=" p-2 w-72 break-all">categories</td>
              <td className=" p-2 w-60 break-all">action</td>
            </tr>
          </thead>
          <tbody>
            {categoryArr.map((c,index) => (
              <tr>
                <td className="border p-2 w-72 break-all">{c}</td>
                <td className="border p-2 w-60 break-all">
                    <button onClick={()=>{
                        handleCategoryDelete(index)
                    }} className="bg-red-500 hover:bg-red-600 py-1.5 px-2.5 rounded-xl " >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <h1 className="text-center mt-5 text-2xl font-bold">{categoryArr.length==0&&"No Categories Added Yet"}</h1>

    </div>
  );
}

export default CategoriesPage;
