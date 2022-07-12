import { useState } from "react";
import { useAddress } from "../../contexts";

const initialFormValues = {
  name: "",
  mobile: "",
  address: "",
  district: "",
  state: "",
  country: "",
  pincode: "",
};

const dummyFormValues = {
  name: "Devananth",
  mobile: "1234567891",
  address: "No.18, Raj Street",
  district: "Chennai",
  state: "Tamilnadu",
  country: "India",
  pincode: "666666",
};

const NewAddressForm = ({ setShowAddressForm }) => {
  //   const [newAddress, setNewAddress] = useState(initialFormValues);

  const {
    addressState: { addressList, currentAddress, isAddressFormOpen },
    toggleAddressForm,
    updateAddressServerCall,
    addToAddressListSeverCall,
    setAddressState,
  } = useAddress();

  const formFieldHandler = (event, fieldName) => {
    const value = event.target.value;
    // setNewAddress((prevValue) => ({ ...prevValue, [fieldName]: value }));

    setAddressState((prevState) => ({
      ...prevState,
      currentAddress: { ...prevState.currentAddress, [fieldName]: value },
    }));
  };

  const saveAddressHandler = (event) => {
    event.preventDefault();
    if (currentAddress?._id) {
      updateAddressServerCall();
    } else {
      addToAddressListSeverCall();
    }
    toggleAddressForm();
  };

  return (
    <div className="modal__container">
      <div className="modal rounded box-shadow p-sm">
        <div className="modal__header mb-sm">
          <h1 className="txt-3xl">Add New Address</h1>
        </div>
        <div className="modal__conetent">
          <form className="form p-sm" onSubmit={saveAddressHandler}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter username"
                value={currentAddress.name}
                onChange={(event) => formFieldHandler(event, "name")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter mobile number"
                value={currentAddress.mobile}
                className="form-input"
                pattern="[0-9]{10}"
                maxLength="10"
                minLength="10"
                onChange={(event) => formFieldHandler(event, "mobile")}
              />
            </div>
            <div className="form-group">
              <textarea
                type="text"
                placeholder="Enter house no , street , colony"
                value={currentAddress.address}
                className="form-input"
                rows="2"
                onChange={(event) => formFieldHandler(event, "address")}
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter district"
                value={currentAddress.district}
                onChange={(event) => formFieldHandler(event, "district")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Select the state"
                value={currentAddress.state}
                onChange={(event) => formFieldHandler(event, "state")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder="Enter country"
                value={currentAddress.country}
                onChange={(event) => formFieldHandler(event, "country")}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter pincode"
                className="form-input"
                minLength="6"
                maxLength="6"
                value={currentAddress.pincode}
                onChange={(event) => formFieldHandler(event, "pincode")}
              />
            </div>
            <div className="modal__actions d-flex gap-2 p-sm">
              <button className="btn btn-primary" type="submit">
                Save
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  setAddressState((prevState) => ({
                    ...prevState,
                    currentAddress: { ...dummyFormValues },
                  }));
                }}
              >
                Fill with dummy values
              </button>
              <button className="btn btn-secondary" onClick={toggleAddressForm}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { NewAddressForm };
