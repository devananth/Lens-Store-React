import { useState } from "react";
import { useAddress } from "../../contexts";
import { AddNewAddressBtn } from "./AddNewAddressBtn";
import { AddressList } from "./AddressList";
import "./addressManagement.css";
import { NewAddressForm } from "./NewAddressForm";

const AddressManagement = () => {
  const {
    addressState: { isAddressFormOpen },
  } = useAddress();

  return (
    <>
      <AddNewAddressBtn />
      <AddressList />
      {isAddressFormOpen && <NewAddressForm />}
    </>
  );
};

export { AddressManagement };
