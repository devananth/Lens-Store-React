import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAxios } from "../custom-hooks";
import { useAuth } from "./auth-context";

const AddressContext = createContext({});

const initialAddressState = {
  addressList: [],
  isAddressFormOpen: false,
  currentAddress: {
    name: "",
    mobile: "",
    address: "",
    district: "",
    state: "",
    country: "",
    pincode: "",
  },
};

const AddressProvider = ({ children }) => {
  const [addressState, setAddressState] = useState(initialAddressState);

  const { currentAddress } = addressState;

  const {
    authState: { isUserLoggedIn, authToken },
  } = useAuth();

  const { loader, response, error, callAPI } = useAxios();

  useEffect(() => {
    if (isUserLoggedIn) {
      callAPI({
        url: "/api/user/address",
        method: "get",
        headers: { authorization: authToken },
      });
    }
  }, [isUserLoggedIn]);

  useEffect(() => {
    if (response) {
      const updatedList = response?.data?.address;
      if (updatedList.length > addressState?.addressList.length) {
        toast.success("Added to address");
      } else if (updatedList.length < addressState?.addressList.length) {
        toast.success("Removed from addressList");
      }
      setAddressState((prevState) => ({
        ...prevState,
        addressList: updatedList,
      }));
    }
  }, [response]);

  const toggleAddressForm = () =>
    setAddressState((prevState) => ({
      ...prevState,
      isAddressFormOpen: !prevState.isAddressFormOpen,
    }));

  const addToAddressListSeverCall = () => {
    callAPI({
      url: "/api/user/address",
      method: "post",
      headers: { authorization: authToken },
      data: { address: currentAddress },
    });
    setAddressState((prevState) => ({
      ...prevState,
      currentAddress: { ...initialAddressState.currentAddress },
    }));
  };

  const removeFromAddressListServerCall = (addressId) => {
    callAPI({
      url: `/api/user/address/${addressId}`,
      method: "delete",
      headers: { authorization: authToken },
    });
  };

  const updateAddressServerCall = () => {
    callAPI({
      url: `/api/user/address/`,
      method: "put",
      headers: { authorization: authToken },
      data: { address: currentAddress },
    });
    setAddressState((prevState) => ({
      ...prevState,
      currentAddress: { ...initialAddressState.currentAddress },
    }));
  };

  const { Provider } = AddressContext;

  const value = {
    addressState,
    setAddressState,
    toggleAddressForm,
    addToAddressListSeverCall,
    removeFromAddressListServerCall,
    updateAddressServerCall,
  };

  return <Provider value={value}>{children}</Provider>;
};

const useAddress = () => useContext(AddressContext);

export { useAddress, AddressProvider };
