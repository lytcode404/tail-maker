import React, { useState } from "react";

const TabsTimeline = () => {
  const totalTabs = 3;
  const [activeTab, setActiveTab] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [buttonStates, setButtonStates] = useState({
    "Paid Social": false,
    "Paid Search": false,
    SEO: false,
    Creative: false,
    CRO: false,
    "Web Design + Development": false,
  });

  const [isHeadquarteredInUS, setIsHeadquarteredInUS] = useState(false);
  const [numberOfEmployees, setNumberOfEmployees] = useState("Please Select");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    phoneNumber: "",
    additionalInfo: "",
  });

  const handleBackClick = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const handleNextClick = () => {
    if (activeTab < totalTabs) {
      setActiveTab(activeTab + 1);
    } else if (activeTab == totalTabs) {
      setSubmitted(true);
    }
  };

  const handleSubmitClick = () => {
    setActiveTab(activeTab + 1);
    setSubmitted(true);
  };

  const handleResetClick = () => {
    setActiveTab(1);
    setSubmitted(false);
  };

  const handleCheckboxChange = (buttonLabel) => {
    setButtonStates((prev) => ({
      ...prev,
      [buttonLabel]: !prev[buttonLabel],
    }));
  };

  const handleHeadquarterChange = (value) => {
    setIsHeadquarteredInUS(value === "yes");
  };

  const handleEmployeeChange = (value) => {
    setNumberOfEmployees(value);
  };

  const handleInputChange = (fieldName, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  return (
    <div className="w-full mt-10 bg-white rounded-3xl p-8 z-10">
      <div className="w-full flex items-center justify-center mb-4 px-4">
        {[...Array(totalTabs)].map((_, index) => (
          <div
            key={index}
            className="w-fit flex justify-between  items-center text-center"
          >
            <div
              className={`${
                index < activeTab - 1 && index !== activeTab - 1
                  ? "bg-green-500"
                  : "bg-gray-300"
              }    w-6 h-6 rounded-full flex items-center justify-center relative`}
            >
              {index < activeTab - 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                index + 1
              )}
              {index == activeTab - 1 && (
                <hr className="absolute h-1 w-full bg-blue-300 -bottom-2  right-0"></hr>
              )}
            </div>
            {index !== 2 && <hr className="w-36 bg-gray-600 h-1"></hr>}
          </div>
        ))}
      </div>

      <div className="">
        {/* Render your components based on activeTab */}
        {submitted ? (
          <div>
            <p>Submitted!</p>
            <button
              onClick={handleResetClick}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Reset
            </button>
          </div>
        ) : (
          <div>
            {activeTab === 1 && (
              <div className="flex flex-col gap-2 items-center">
                <h2 className="text-3xl font-bold">
                  What are you interested in?*
                </h2>
                <p>SELECT ALL THAT APPLY</p>
                <div className="grid grid-cols-3 gap-6 mt-5">
                  {Object.entries(buttonStates).map(([label, checked]) => (
                    <label
                      className={`flex items-center px-3 h-14 text-center justify-center rounded-lg cursor-pointer hover:bg-purple-300 ${
                        checked
                          ? "bg-purple-500 text-white"
                          : "bg-slate-200 text-gray-800"
                      }`}
                      key={label}
                    >
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={checked}
                        onChange={() => handleCheckboxChange(label)}
                      />
                      {label}
                    </label>
                  ))}
                </div>

                <button
                  onClick={handleNextClick}
                  class="bg-[#c9ebf6] rounded-tl-3xl hover:rounded-tl-none rounded-br-3xl hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl text-[#072d56] py-2 px-4  font-semibold text-lg"
                >
                  Next &#8594;
                </button>
              </div>
            )}

            {activeTab === 2 && (
              <div className="flex flex-col justify-center items-center gap-4">
                <h2 className="text-3xl font-bold mb-8">
                  Tell us about your business.
                </h2>

                <div className="w-full flex flex-col gap-8">
                  <div className="">
                    <label className="block text-gray-600 font-bold mb-2">
                      IS YOUR BUSINESS HEADQUARTERED IN U.S.?
                    </label>
                    <div className="flex text-lg font-semibold">
                      <label className="inline-flex items-center mr-6">
                        <input
                          type="radio"
                          className="form-radio text-blue-500"
                          value="yes"
                          checked={isHeadquarteredInUS}
                          onChange={(e) =>
                            handleHeadquarterChange(e.target.value)
                          }
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          className="form-radio text-blue-500"
                          value="no"
                          checked={!isHeadquarteredInUS}
                          onChange={(e) =>
                            handleHeadquarterChange(e.target.value)
                          }
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      NUMBER OF EMPLOYEES
                    </label>
                    <select
                      className="form-select w-full p-2 border rounded-md"
                      value={numberOfEmployees}
                      onChange={(e) => handleEmployeeChange(e.target.value)}
                    >
                      <option value="Please Select">Please Select</option>
                      <option value="1-50">1 to 50</option>
                      <option value="51-100">51 to 100</option>
                      <option value="101-250">101 to 250</option>
                      <option value="251-500">251 to 500</option>
                      <option value="501-1000">501 to 1000</option>
                      <option value="1000+">1000+</option>
                    </select>
                  </div>
                </div>

                <div className="w-full flex gap-3 justify-center items-center">
                  <button
                    onClick={handleBackClick}
                    disabled={activeTab === 1}
                    class="bg-[#c9ebf6] rounded-tl-3xl hover:rounded-tl-none rounded-br-3xl hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl text-[#072d56] py-2 px-4  font-semibold text-lg"
                  >
                    &#8592; Back
                  </button>

                  <button
                    onClick={handleNextClick}
                    class="bg-[#c9ebf6] rounded-tl-3xl hover:rounded-tl-none rounded-br-3xl hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl text-[#072d56] py-2 px-4  font-semibold text-lg"
                  >
                    Next &#8594;
                  </button>
                </div>
              </div>
            )}

            {activeTab === 3 && (
              <div className="mt-8">
                <h2 className="text-3xl font-bold w-full text-center mb-14">
                  Tell us about you.
                </h2>
                <div className="flex flex-col gap-3">
                  <div className="flex gap-3">
                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        FIRST NAME
                      </label>
                      <input
                        type="text"
                        className="form-input w-full p-2 border rounded-md"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        LAST NAME
                      </label>
                      <input
                        type="text"
                        className="form-input w-full p-2 border rounded-md"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      BUSINESS EMAIL*
                    </label>
                    <input
                      type="email"
                      className="form-input w-full p-2 border rounded-md"
                      value={formData.businessEmail}
                      onChange={(e) =>
                        handleInputChange("businessEmail", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      className="form-input w-full p-2 border rounded-md"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                      WHAT ELSE SHOULD WE KNOW?
                    </label>
                    <textarea
                      className="form-textarea w-full p-2 border rounded-md"
                      rows="1"
                      value={formData.additionalInfo}
                      onChange={(e) =>
                        handleInputChange("additionalInfo", e.target.value)
                      }
                    ></textarea>
                  </div>
                </div>

                <div className="w-full flex justify-center items-center gap-4">
                  <button
                    onClick={handleBackClick}
                    class="bg-[#c9ebf6] rounded-tl-3xl hover:rounded-tl-none rounded-br-3xl hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl text-[#072d56] py-2 px-4  font-semibold text-lg"
                    disabled={activeTab === 1}
                  >
                    &#8592; Back
                  </button>
                  <button
                    onClick={handleSubmitClick}
                    class="bg-[#c9ebf6] rounded-tl-3xl hover:rounded-tl-none rounded-br-3xl hover:rounded-br-none hover:rounded-tr-3xl hover:rounded-bl-3xl text-[#072d56] py-2 px-4  font-semibold text-lg"
                  >
                    Submit &#8594;
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsTimeline;
