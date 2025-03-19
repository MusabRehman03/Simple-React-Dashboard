import React, { useEffect } from 'react'
import Modal from '../components./Modal'
import EditModal from '../components./EditModal'
import { useState } from 'react'
function ManualProductsPage() {
    // let c=null
    const [product, setProduct] = useState({
        name: "",
        description: "",
        category: "",
        price:"",
        index:null
      });
    const [isOpen,setIsOpen]=useState(false)
    // const [isOpenEdit,setIsOpenEdit]=useState(false)

    const [productsArr, setProductsArr] = useState(()=>
        JSON.parse(localStorage.getItem("productsArr"))||[]
      )
    // const [isPresent,setIsPresent]=useState(productsArr.length>=1?false:true)

    const handleAddButton=()=>{
        setIsOpen(true)
        // setIsPresent(false)
        // console.log(productsArr);
    }
    
    useEffect(()=>{
        // let arr = JSON.parse(localStorage.getItem('productsArr'))
        // if(productsArr!=arr){
        // setProductsArr()
        localStorage.setItem('productsArr',JSON.stringify(productsArr))
        // }
        // setIsPresent(true)
    },[productsArr])
    
    const handleDelete=(index)=>{

        let tempArr= [...productsArr]
        console.log('tempArr before splice',tempArr)
        tempArr.splice(index,1)
        console.log('after Splice tempArr',tempArr)
        setProductsArr(tempArr)
        localStorage.setItem('productsArr',JSON.stringify(tempArr))
        console.log('aftersettingnitemTemparr',tempArr)
        // if(tempArr.length==0){
        //     setIsPresent(true)
        // }
        console.log('prodcuts arr after all',productsArr)
    }
    const handleEdit=(index)=>{
        // setIsOpenEdit(true)
        setIsOpen(true)
        setProduct({
            name: productsArr[index].name,
            description: productsArr[index].description,
            category: productsArr[index].category,
            price:productsArr[index].price,
            index: index
          })
        // setProduct(pro)
        // c=index
        // console.log(c,index,'frompage')
    }
// useEffect({},[categoryArr])
  return (
    
    <div>
        <div className=' w-full flex justify-center content-center mt-5'>
        <button onClick={handleAddButton} className='  rounded-xl bg-[#1976D2] font-semibold text-white items-center  py-3 px-5'>Add Product</button>
        </div>
        <table className="w-[60%] m-auto text-center mt-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2 w-40 break-all">Product Name</th>
            <th className="border p-2 w-40 break-all">Category</th>
            <th className="border p-2 w-40 break-all">Price</th>
            <th className="border p-2 w-40 break-all">Action</th>
          </tr>
        </thead>
        <tbody>
            
          {
            productsArr.map((pro, index) => (
                
              <tr key={index} className="border">
                <td className="border p-2">{pro.name}</td>
                <td className="border p-2">{pro.category}</td>
                <td className="border p-2">${pro.price}</td>

                <div className='flex justify-center items-center'>
                  <td className=' p-2'><button onClick={()=>handleEdit(index)} className="bg-yellow-400 hover:bg-yellow-500 py-1.5 px-2.5 rounded-xl">Edit</button></td>
                  <td className='p-2' ><button onClick={()=>handleDelete(index)} className="bg-red-500 hover:bg-red-600  py-1.5 px-2.5 rounded-xl" >Delete</button></td>
                </div>
              </tr>
            ))
          }
        </tbody>
      </table>

      {/* <h1 className={`w-full text-4xl font-bold text-center mt-5 ${isPresent?"block":"hidden" }`}>No Products Added Yet</h1> */}

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} productsArr={productsArr} setProductsArr={setProductsArr} product={product} setProduct={setProduct}/>
      {/* <EditModal isOpenEdit={isOpenEdit} setIsOpenEdit={setIsOpenEdit} productsArr={productsArr} setProductsArr={setProductsArr}  product={product} setProduct={setProduct}/> */}
    </div>
  )
}

export default ManualProductsPage
