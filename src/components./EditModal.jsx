import React, { useState, useEffect } from "react";

const EditModal = ({ isOpenEdit, setIsOpenEdit ,productsArr, setProductsArr, index, product, setProduct}) => {
    // console.log(index)
//   console.log("product",product)
//   console.log("product in arr",productsArr[product.index])
//   const [productsArr, setProductsArr] = useState(
//     JSON.parse(localStorage.getItem("productsArr") || "[]")
//   )
// console.log(product)
    // setProduct({
    // name: (productsArr[index]).name,
    // description: (productsArr[index]).description,
    // category: (productsArr[index]).category,
    // price: (productsArr[index]).price,


    // })

  useEffect(() => {
    localStorage.setItem("productsArr", JSON.stringify(productsArr));
  }, [productsArr]);

  const handleTaskChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let temp=[...productsArr]
    temp[index]=product
    // console.log(product)
    // console.log(product.index)
    setProductsArr([...temp]);
    setIsOpenEdit(false);
    setProduct({ name: "", description: "", category: "",price:"" });
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpenEdit ? "block" : "hidden"
      }`}
    >
      <div className="relative p-4 w-full max-w-md bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-600 border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Edit Product
          </h3>
          <button
            type="button"
            className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setIsOpenEdit(false)}
          >
            <svg
              className="w-3 h-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
              />
            </svg>
          </button>
        </div>

        <form className="p-4" onSubmit={handleUpdate}>
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleTaskChange}
                className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
                placeholder="Type product name"
                required
              />
            </div>

            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Description
              </label>
              <textarea
                name="description"
                value={product.description}
                onChange={handleTaskChange}
                rows={4}
                className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
                placeholder="Write product description here"
                required
              ></textarea>
            </div>
          </div>
          <div className="col-span-2 flex gap-4">
  {/* Category Dropdown */}
  <div className="flex-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Category
    </label>
    <select
      name="category"
      value={product.category}
      onChange={handleTaskChange}
      className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
      required
    >
      <option disabled value="">Select category</option>
      <option value="Electronics">Electronics</option>
      <option value="Beauty">Beauty</option>
      <option value="Food">Food</option>
      <option value="Clothing">Clothing</option>

    </select>
  </div>

  {/* Price Input */}
  <div className="flex-1">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
      Price
    </label>
    <input
      type="number"
      name="price"
      value={product.price}
      onChange={handleTaskChange}
      className="w-full p-2 border rounded-lg dark:bg-gray-600 dark:text-white"
      required
    />
  </div>
</div>

          {/* <div className="col-span-2 sm:col-span-1">
            
            
          </div> */}
          <button
            type="submit"
            className="w-full text-white bg-yellow-400 hover:bg-yellow-600 font-medium rounded-lg px-5 py-2.5 text-center mt-7"
          >
            update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
