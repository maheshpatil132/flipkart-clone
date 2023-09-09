import React, { useEffect, useState } from 'react'

const InvoiceContent = ({ invoiceData }) => {

  const [totalamount, setTotalamount] = useState(0)
 

  useEffect(()=>{
    const calculateTotal = () => {
      return setTotalamount(invoiceData && invoiceData.items && invoiceData.items.reduce((total, item) => total + item.quantity * item.price, 0));
    };
    calculateTotal()
  },[invoiceData])


  return (
    <div>
      <div className="bg-white px-12 py-8 shadow-md rounded-md capitalize">
        <div className="flex justify-between items-center">
          <img className=' w-40' src="https://res.cloudinary.com/drzkvppdf/image/upload/v1693393704/flipkart-logo-39906_valoav.png" alt="" />
          <div>
            <h1 className="text-2xl uppercase font-bold">Invoice</h1>
            <p className="text-gray-500">Date: {invoiceData.date}</p>
          </div>
        </div>
      <hr className=' h-[0.20rem] bg-black' />
        <div className="my-6">
          <p className="mb-2"> <span className=' font-bold'>From :</span> {invoiceData.from}</p>
          <p> <span className=' font-bold'>To :</span> {invoiceData.to}</p>
        </div>


        <div className=' my-6 capitalize '>
          <h1 className=' text-lg font-semibold my-2'>Shipping Address</h1>
          <p>Address : {invoiceData && invoiceData.shiping && invoiceData.shiping.address}</p>
          <p>pincode : {invoiceData && invoiceData.shiping && invoiceData.shiping.pincode}</p>
          <p>state : {invoiceData && invoiceData.shiping && invoiceData.shiping.state}</p>
          <p>country : {invoiceData && invoiceData.shiping && invoiceData.shiping.country}</p>
        </div>

        <div className=' my-6 '>
          <h1 className=' text-lg font-semibold my-2'>Payment Information</h1>
          <p>Payment Id : {invoiceData && invoiceData.paymentinfo && invoiceData.paymentinfo.id}</p>
          <p>Payment status : {invoiceData && invoiceData.paymentinfo && invoiceData.paymentinfo.status}</p>

        </div>
       
        <h1 className=' text-lg font-semibold my-2 '>Products Information</h1>
        <table className="w-full border border-collapse">
          <thead>
            <tr className="border-b">
              <th className="py-2 border">Item</th>
              <th className="py-2 border">Quantity</th>
              <th className="py-2 border">Price</th>
              <th className="py-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData && invoiceData.items && invoiceData.items.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 border text-center">{item.name}</td>
                <td className="py-2 border text-center">{item.quantity}</td>
                <td className="py-2 border text-center">Rs.{item.price}</td>
                <td className="py-2 w-36 border text-center">Rs.{item.quantity * item.price}</td>
              </tr>
            ))}
            <tr>
              <td></td>
              <td></td>
              <td className=' font-bold py-2 border text-center'>Tax</td>
              <td className=' py-2 border text-center'>Rs.{ invoiceData.shipingprice}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className=' font-bold py-2 border text-center'>Delivery</td>
              <td className=' py-2 border text-center'>Rs.{invoiceData.taxprice}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td className=' font-bold py-2 border text-center'>Total</td>
              <td className=' py-2 border text-center'>
                Rs.{totalamount +  invoiceData.taxprice + invoiceData.shipingprice}
                </td>
            </tr>
          </tbody>
        </table>
        <div className=' px-10 flex items-center justify-between h-40 border'>
            <h1 className=' text-lg font-semibold'>Authorized Signature</h1>
            <div className=' w-32'>
                <img className='mx-auto p-2' src="https://res.cloudinary.com/drzkvppdf/image/upload/v1693405939/WhatsApp_Image_2023-08-30_at_7.56.46_PM-removebg-preview_qczikg.png" alt="signature" />
                <hr className=' bg-gray-800 h-[0.15rem]' />
                <h1 className=' my-1 font-semibold text-center'>Seller</h1>
            </div>
        </div>
        {/* <div className="mt-4 flex justify-end w-full">
          <p className="font-semibold">Total: ${calculateTotal(invoiceData.items)}</p>
        </div> */}
      </div>
    </div>
  )
}

export default InvoiceContent