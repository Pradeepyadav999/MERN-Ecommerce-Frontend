import { useState } from "react"
import { IoArrowBack } from "react-icons/io5";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router";

const Shipping = () => {

    const navigate = useNavigate()

    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        state: "",
        country: "",
        pincode: ""
    })


    const changrHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => { 

        setShippingInfo(prev=>({...prev,[e.target.name]:e.target.value}))

    };


    return (
        <div className="shipping">

            <button className="back-btn" onClick={()=>navigate("/cart")}><IoArrowBack /></button>
            <form>
                <h1>Shipping Address</h1>

                <input
                    required
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={shippingInfo.address}
                    onChange={changrHandler}
                />
                <input
                    required
                    type="text"
                    placeholder="City"
                    name="city"
                    value={shippingInfo.city}
                    onChange={changrHandler}
                />
                <input
                    required
                    type="text"
                    placeholder="State"
                    name="state"
                    value={shippingInfo.state}
                    onChange={changrHandler}
                />

               
                <select
                    name="country"
                    required
                    value={shippingInfo.country}
                    onChange={changrHandler}
                >

                    <option value="">Choose Country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Russia">Russia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Italy">Italy</option>
                    <option value="Spain">Spain</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Argentina">Argentina</option>

                </select>

                <input
                    required
                    type="number"
                    placeholder="Pin Code"
                    name="pincode"
                    value={shippingInfo.pincode}
                    onChange={changrHandler}
                />

                <button type="submit">Pay Now</button>
            </form>

        </div>
    )
}

export default Shipping