import { useAddress } from "../../contexts";

const AddNewAddressBtn = () => {
  const { toggleAddressForm } = useAddress();

  return (
    <div className="m-1">
      <button
        className="btn btn-primary txt-bold vertical__center"
        onClick={toggleAddressForm}
      >
        <span className="icon">
          <i className="fa fa-plus"></i>
        </span>
        Add new Address
      </button>
    </div>
  );
};

export { AddNewAddressBtn };
