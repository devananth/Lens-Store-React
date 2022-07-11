import { useAddress } from "../../contexts";

const AddressCard = ({ address }) => {
  const {
    removeFromAddressListServerCall,
    setAddressState,
    toggleAddressForm,
  } = useAddress();

  const addressEditHandler = () => {
    setAddressState((prevState) => ({
      ...prevState,
      currentAddress: { ...address },
    }));
    toggleAddressForm();
  };

  return (
    <div className="address__card  m-sm p-1">
      <h4>{address.name}</h4>
      <p>{address.address}</p>
      <p>{`${address.district},${address.state} - ${address.pincode}`}</p>
      <p>
        <span>Mobile No:</span>
        {address.mobile}
      </p>
      <div>
        <button className="btn btn-primary mr-2" onClick={addressEditHandler}>
          Edit
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => removeFromAddressListServerCall(address._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export { AddressCard };
