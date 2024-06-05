import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TeacherRegistrationForm = () => {
  const [isConfirmed,setisConformed] = useState(false);
  const [isclick,Setclick] = useState(false);
  const [formData, setFormData] = useState({
    staffName: '',
    staffId: '',
    email: '',
    subject: '',
    experience: '',
    ResidentialAddress:'',
    adhaarNumber: '',
    title: '', // Mr, Mrs, Dr, Ms
    gender: '', // Male or Female
    image: null, // Image file
    calendar: new Date(), // Initial date for calendar
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCalendarChange = (date) => {
    setFormData({
      ...formData,
      calendar: date,
    });
  };
  const handleNChange = (e) => {
    setFormData({
      ...formData,
      nationality: e.target.value,
    });
  };

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    });
  };
  const handleReligionChange = (e) => {
    setFormData({
      ...formData,
      religion: e.target.value,
    });
  };
  const handleTitleChange = (e) => {
    setFormData({
      ...formData,
      title: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };
const handlecheck = () =>{
  setisConformed(true);
};
const notify = () => {
    
   
      
  toast.success('Your Form is Submitted Succesfully!', {
    
    className: 'bg-green-500 text-white',
    progressClassName: 'bg-white',
    bodyClassName: 'font-semibold',
  
  });
};
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show confirm dialog
    //const isConfirmed = window.confirm("Form submitted successfully! Do you want to reload the page?");
    
   
  
    // Reload the page if confirmed
    if (isConfirmed) {
      notify();
      window.location.reload();
    }
    
};

  const handlelanguageChange = (e) => {
    setFormData({
      ...formData,
      language: e.target.value,
    });
  };
  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      Role: e.target.value,
    });
  };
  const handleBloodChange = (e) => {
    setFormData({
      ...formData,
      Blood: e.target.value,
    });
  };
  const handlecastChange = (e) => {
    setFormData({
      ...formData,
      Cast: e.target.value,
    });
  };
  const handleComunityChange = (e) => {
    setFormData({
      ...formData,
      Comunity: e.target.value,
    });
  };
 

  return (
    <div className="w-full  flex justify-center items-center  shadow-xl rounded-lg p-6 bg-transparent">
      <form onSubmit={handleSubmit} className="max-w-3xl w-full max-h  rounded-lg p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 text-center">Teacher Registration Form</h2>
        <div className="flex flex-wrap -mx-4 mb-4">
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="staffName" className="block text-sm font-bold mb-1">Staff Name</label>
            <input
              type="text"
              id="staffName"
              name="staffName"
              value={formData.staffName}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-base box-border"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="staffId" className="block text-sm font-bold mb-1">Staff ID</label>
            <input
              type="text"
              id="staffId"
              name="staffId"
              value={formData.staffId}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="subject" className="block text-sm font-bold mb-1">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="experience" className="block text-sm font-bold mb-1">Years of Experience</label>
            <input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 min"
              
              min={0}
              max={25}
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="adhaarNumber" className="block text-sm font-bold mb-1">Adhaar Number</label>
            <input
              type="text"
              id="adhaarNumber"
              name="adhaarNumber"
              value={formData.adhaarNumber}
              minLength={12}
              maxLength={12}
              onChange={handleChange}
              
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block text-sm font-bold mb-1">Gender</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === 'Male'}
                  onChange={handleGenderChange}
                  className="mr-2"
                  
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === 'Female'}
                  onChange={handleGenderChange}
                  className="mr-2"
                />
                Female
              </label>
              <label className="mr-4 px-2">
                <input
                  type="radio"
                  name="gender"
                  value="Others"
                  checked={formData.gender ==='Others'}
                  onChange={handleGenderChange}
                  className="mr-2"
                  
                />
                Others
              </label>
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label className="block text-sm font-bold mb-1">Title</label>
            <div className="flex">
              <label className="mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Mr"
                  checked={formData.title === 'Mr'}
                  onChange={handleTitleChange}
                  className="mr-2"
                  
                />
                Mr
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Mrs"
                  checked={formData.title === 'Mrs'}
                  onChange={handleTitleChange}
                  className="mr-2"
                />
                Mrs
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Mrs"
                  checked={formData.title === 'Mrs'}
                  onChange={handleTitleChange}
                  className="mr-2"
                />
                Dr
              </label>
              <label className="mr-4">
                <input
                  type="radio"
                  name="title"
                  value="Mrs"
                  checked={formData.title === 'Mrs'}
                  onChange={handleTitleChange}
                  className="mr-2"
                />
                Ms
              </label>
              
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="image" className="block text-sm font-bold mb-1">Choose Image</label>
            <input
              type="file"
              
              id="image"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "
            />
            {formData.image && (
              <img src={URL.createObjectURL(formData.image)} alt="Selected" className="mt-2" style={{ maxWidth: '100px' }} />
            )}
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="calendar" className="block text-sm font-bold mb-1">Date Of Birth</label>
            <DatePicker
              selected={formData.calendar}
              onChange={handleCalendarChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500  "
              dateFormat="yyyy-MM-dd"
              placeholderText="Select date"
              
            />
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="language" className="block text-sm font-bold mb-1">Mother Tongue</label>
            <select
              name="language"
              value={formData.language}
              onChange={handlelanguageChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Mother Tongue</option>
              <option value="Tamil">Tamil</option>
              <option value="English">English</option>
              <option value="Kannada">Kannada</option>
              <option value="Hindi">Hindi</option>
              <option value="Others">Others</option>
    
            </select>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="Role" className="block text-sm font-bold mb-1">Role</label>
            <select
              name="Role"
              value={formData.Role}
              onChange={handleRoleChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="Admin">Admin</option>
              <option value="Adminstrator">Adminstrator</option>
              <option value="Class Teacher">Class Teacher</option>
              <option value="Principal">Principal</option>
              <option value="Vice-Principal">Vice-Principal</option>
              <option value="Non-Teaching Staff">Non-Teaching Staff</option>
              <option value="Reserved Teacher">Reserved Teacher</option>
              <option value="Others">Others</option>
    
            </select>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="Blood" className="block text-sm font-bold mb-1">Blood Group</label>
            <select
              name="Blood"
              value={formData.Blood}
              onChange={handleBloodChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Role</option>
              <option value="O+ve">O+ve</option>
              <option value="Others">Others</option>
    
            </select>
          </div>
         
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="Cast" className="block text-sm font-bold mb-1">Cast</label>
            <select
              name="Cast"
              value={formData.Cast}
              onChange={handlecastChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Cast</option>
              <option value="---">---</option>
              <option value="Others">Others</option>
    
            </select>
          </div>
          
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="Comunity" className="block text-sm font-bold mb-1">Comunity</label>
            <select
              name="Comunity"
              value={formData.Comunity}
              onChange={handleComunityChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Comunity</option>
              <option value="---">---</option>
              <option value="Others">Others</option>
    
            </select>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="religion" className="block text-sm font-bold mb-1">Religion</label>
            <select
              name="religion"
              value={formData.religion}
              onChange={handleReligionChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Comunity</option>
              <option value="Hindhu">Hindhu</option>
              <option value="Muslim">Muslim</option>
              <option value="Christian">Christian</option>
              <option value="Others">Others</option>
    
            </select>
          </div>
          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="nationality" className="block text-sm font-bold mb-1">Nationality</label>
            <select
              name="nationality"
              value={formData.nationality}
              onChange={handleNChange}
              className="w-full py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            >
              <option value="">Select Comunity</option>
              <option value="Indian">Indian</option>
              <option value="Others">Others</option>
    
            </select>
          </div>

          <div className="w-full sm:w-1/2 px-4 mb-4">
            <label htmlFor="ResidentialAddress" className="block text-sm font-bold mb-1">Residential Address</label>
            <input
              type="text"
              id="ResidentialAddress"
              name="ResidentialAddress"
              value={formData.ResidentialAddress}
              onChange={handleChange}
              className="w-full py-2 px-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
         
              
            />
          </div>
          <div className="w-full px-4 mb-4">
        <label className="block text-sm font-bold mb-1">
          <input
            type="checkbox"
            name="check"
            onClick={formData.click===true}
          />
          Confirm that all inputs are true and correct
          {form === true &&
          <p>
            The Values  are all  True regarding to me
          </p>
          }
        </label>
      </div>
        </div>
        <button type="submit" 
        onClick={handlecheck}
        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Register</button>
      <ToastContainer/>
      </form>
    </div>
  );
};

export default TeacherRegistrationForm;
