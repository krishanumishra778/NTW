// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SendMessage } from '../../actions/userAction'
import toast from 'react-hot-toast'
import { Preloader } from './Preloader'

const Contact = () => {
  const dispatch = useDispatch()
  const { data, error, loading } = useSelector(state => state.user)
  // console.log(loading)
  const [inputdata, setinputdata] = useState({
    name: "",
    email: "",
    contactnumber: "",
    message: "",
  })

  const formHandeler = (e) => {
    e.preventDefault()
    // console.log(inputdata)
    dispatch(SendMessage(inputdata))


  }
  useEffect(() => {

    if (data?.success === false) {
      toast.error(data?.message)
    }
    else if (error) {
      toast.error(error.message)
    }
    else if (data?.success === true) {
      toast.success(data?.message)
    }
  }, [data, error])


  return (
    <>
      {loading ? "LOADING.................." : (<div className='bg-[url(images/Contact.png)] bg-no-repeat bg-cover object-contain ' data-aos="fade-down">
        <div className="max-w-[1300px] mx-auto my-[40px]" >
          <div className="text-center">
            <p className="text-[#00B2FF] text-center sm:text-tt  xs:text-mt md:text-title font-[600]">Contact Us</p>
            <p className="sm:text-mp xs:text-tp md:text-p text-[#494949]">We would be more than happy to speak with you.
            </p>
          </div>
          <div className="max-w-[95%] mx-auto sm:py-4 my-4">
            <form onSubmit={formHandeler} >
              <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4  s">
                <div className>
                  <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="nm">Name</label>
                  <input type="text" id="nm" required onChange={(e) => { setinputdata({ ...inputdata, name: e.target.value }) }} className="  w-full border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2 py-1" />
                </div>
                <div className>
                  <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="cn">Contact
                    No.</label>
                  <input type="number" id="cn"  required onChange={(e) => { setinputdata({ ...inputdata, contactnumber: e.target.value }) }} className="w-full  border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2 py-1" />
                </div>
                <div className>
                  <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="eid">E-mail</label>
                  <input type="email" id="eid" required onChange={(e) => { setinputdata({ ...inputdata, email: e.target.value }) }} className="w-full  border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2 py-1" />
                </div>
                <div className>
                  <label className="block m:text-mp xs:text-tp md:text-p text-[#000] font-[600]" htmlFor="help">How we
                    can help you</label>
                  <input type="text" id="help" required onChange={(e) => { setinputdata({ ...inputdata, message: e.target.value }) }} className="w-full  border-[#AEAEAE] rounded-full border focus:border-[#00B2FF] outline-none px-2 py-1" />
                </div>
              </div>
              <div className="text-center my-5 ">
                <button type='submit' className=" bg-[#00B2FF]  rounded-3xl   px-[20px] py-[5px]  sm:text-mp xs:text-tp md:text-p  text-[#fff]  ease-in-out hover:bg-[#00b3ffd8]">Send
                  Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>)}

    </>
  )
}

export default Contact