import { useAddress } from "../../contexts";
import { AddressCard } from "./AddressCard";

const AddressList = () => {
  const {
    addressState: { addressList },
  } = useAddress();

  return (
    <div>
      {addressList.map((address) => (
        <AddressCard key={address._id} address={address} />
      ))}
    </div>
  );
};

export { AddressList };
