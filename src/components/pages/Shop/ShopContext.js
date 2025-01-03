import React, { createContext, useState, useContext, useEffect } from "react";
import Product_List from "../../Assets/Product_List";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TbShoppingCartPlus } from "react-icons/tb";
import { TbShoppingCartX } from "react-icons/tb";
import axios from "axios";

// Create context
const ShopContext = createContext();

// Create provider
export const ShopProvider = ({ children }) => {

  const Port = `http://localhost:4900`;


  // const [products , setProducts] = useState([]);
  
  // local storage product json copy
  const products = Product_List;

  const [cart, setCart] = useState([]);
  const [selectedColors, setSelectedColors] = useState({});
  const [selectedBatteryTypes, setSelectedBatteryTypes] = useState({});

  const [quantity, setQuantity] = useState(1);

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const token = localStorage.getItem("token");
  const storedEmail = localStorage.getItem("email");

  // to fetch the cart data from local storage ///////////////////////////////////////////////////

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);




  useEffect(() => {
    // // useEffect for the User Authentication
    // console.log("Stored Email: ", storedEmail);
    // console.log("Stored Token: ", token);
    if (token && storedEmail) {
      setIsAuthenticated(true);
      setUserEmail(storedEmail);
    } else {
      setIsAuthenticated(false);
      setUserEmail("");
    }
  }, []);

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${Port}/getCartData`, {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the headers
          },
        });
        if (response.data.success) {
          setCart(response.data.cartData);
        } else {
          console.error("Failed to fetch cart data:", response.data.message);
        }
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };
    fetchCartData();
  }, []);

  useEffect(() => {
    //// UseEffect used to set the default selected color for the each product as the first color
    if (products.length > 0) {
      // Initialize selectedColors with the first color for each product
      const initialSelectedColors = {};
      products.forEach((product) => {
        initialSelectedColors[product.id] = product.colors[0];
      });
      setSelectedColors(initialSelectedColors);
    }
  }, [products]);

  const handleColorChange = (productId, color) => {
    setSelectedColors((prevSelectedColors) => ({
      ...prevSelectedColors,
      [productId]: color,
    }));
  };

  //intialize the battery type selection

  useEffect(() => {
    if (products.length > 0) {
      const initialSelectedBatteryTypes = {};
      products.forEach((product) => {
        initialSelectedBatteryTypes[product.id] = product.batteryTypes;
      });
      setSelectedBatteryTypes(initialSelectedBatteryTypes);
    }
  }, [products]);
  

  const handleBatteryTypeChange = (productId, batteryType) => {
    setSelectedBatteryTypes((prevSelectedBatteryTypes) => ({
      ...prevSelectedBatteryTypes,
      [productId]: batteryType,
    }));
    
  };
  
  // Calculate discount
  const calculateDiscount = (price, oldPrice) => {
    if (!price || !oldPrice || oldPrice <= price) {
      return 0;
    }
    const discount = ((oldPrice - price) / oldPrice) * 100;
    return Math.ceil(discount);
  };

  // Format price to Indian currency
  const formatPrice = (updatedPrice) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    }).format(updatedPrice);
  };

  const [updatedPrice, setUpdatedPrice] = useState(0);
const handleAddToCart = async (product, selectedColor, selectedBatteryTypes,quantity) => {
  if (isAuthenticated) {
      // Ensure colors and battery types are valid arrays
    const colors = Array.isArray(product.colors) ? product.colors : [];
    const batteryTypes = Array.isArray(product.batteryTypes) ? product.batteryTypes : [];

    // Determine the selected color or fallback to the first available color
    const colorToSet = colors.includes(selectedColor) ? selectedColor : colors[0] || null;

    // Determine the selected battery type or fallback to the first available battery type
    const batteryToSet = batteryTypes.includes(selectedBatteryTypes)
      ? selectedBatteryTypes
      : batteryTypes[0] || null;

    if (!colorToSet || !batteryToSet) {
      console.error("Invalid product configuration: Missing colors or battery types.");
      return;
    }




    

    let priceAdjustment = 0;

   
    
    // Check if productId matches specific values and battery type
    if (product.id === 1) {  // or if productId === 1 if it's a number "Graphine 32Ah ",
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12000;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 15500;  // Adjust price by 200 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21200;  // Adjust price by 300 for BatteryType3
      }else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 27000;  // Adjust price by 300 for BatteryType3
      } 
    } else if (product.id === 2) {  // or if productId === 2 if it's a number
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12000;  // Adjust price by 1000 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 15900;  // Adjust price by 2000 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21400;  // Adjust price by 3000 for BatteryType3
      }
      else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 26900;  // Adjust price by 3000 for BatteryType3
      }
    } 
    else if (product.id === 3) {  // or if productId === 2 if it's a number
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12000;  // Adjust price by 1000 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 15900;  // Adjust price by 2000 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21400;  // Adjust price by 3000 for BatteryType3
      }else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 26900;  // Adjust price by 3000 for BatteryType3
      }
    } 

    else if (product.id === 4) {  // or if productId === 2 if it's a number
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if(batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12500;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 16000;  // Adjust price by 200 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21500;  // Adjust price by 300 for BatteryType3
      }else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 27000;  // Adjust price by 300 for BatteryType3
      } 
    } 

    else if (product.id === 5) {  // or if productId === 2 if it's a number
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12500;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 16000;  // Adjust price by 200 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21700;  // Adjust price by 300 for BatteryType3
      }else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 27500;  // Adjust price by 300 for BatteryType3
      } 

      
    } 

    else if (product.id === 6) {  // or if productId === 2 if it's a number
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12500;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 16000;  // Adjust price by 200 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21500;  // Adjust price by 300 for BatteryType3
      }else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 27000;  // Adjust price by 300 for BatteryType3
      } 

      
    } 

    else if (product.id ===10) {  // or if productId === 2 if it's a number
      if (batteryToSet === "Graphine 32Ah") {
        priceAdjustment = 0;  // Adjust price by 100 for BatteryType1
      } else if(batteryToSet === "Lithium 26Ah") {
        priceAdjustment = 12500;  // Adjust price by 100 for BatteryType1
      } else if (batteryToSet === "Lithium 30Ah") {
        priceAdjustment = 16000;  // Adjust price by 200 for BatteryType2
      } else if (batteryToSet === "Lithium 36Ah") {
        priceAdjustment = 21500;  // Adjust price by 300 for BatteryType3
      }else if (batteryToSet === "Lithium 40Ah") {
        priceAdjustment = 27000;  // Adjust price by 300 for BatteryType3
      } 

      
    } 
    else{
      priceAdjustment = 0; 
    }

    const shippingfees=3000;

   const updatedPrice = product.price + priceAdjustment ;

   setUpdatedPrice(updatedPrice)

    /// for update the price
  

    // Check if the item already exists in the cart with the same color and battery type
    const existingItem = cart.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === colorToSet &&
        item.selectedBatteryTypes === batteryToSet
    );


    
    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((item) =>
        item.id === product.id && item.selectedColor === colorToSet  && item.selectedBatteryTypes === batteryToSet
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          ...product,
          selectedColor: colorToSet,
          selectedBattery: batteryToSet,
          quantity,
          price: updatedPrice,  // Set the updated price based on battery type
          total: updatedPrice * quantity,  // Update total as well
        },
      ];
    }
    setCart(updatedCart);
    // Send the updated cart data to the backend
    try {
      const response = await axios.post(
        `${Port}/addToCart`,
        {
          email: userEmail, // Use the already stored userEmail
          product: {
            name: product.name,
            id: product.id,
            ID: product._Id,
            price: updatedPrice,
            selectedColor: colorToSet,
            selectedBattery: batteryToSet,
            image: product.image[0],
            category: product.category,
            quantity,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Use the already stored token
          },
        }
      );
        console.log("Response data : ", response.data);
      // if (response.data.success) {
        setCart(response.data.cartData); // Update cart with backend response
        toast.success(`Added to cart`, {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          icon: <TbShoppingCartPlus className="fs-1" />,
        });
    } catch (error) {  
      // Detailed console logging for errors
      console.error("Error adding product to cart:", error);
      if (error.response) {
        // If response error exists
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        // If request was made but no response received
        console.error("Error request data:", error.request);
      } else {
        // If error is related to setting up the request
        console.error("Error message:", error.message);
      }
      toast.error("Error adding product to cart", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    // console.log("Added to cart:", {
    //   product,
    //   selectedColor: colorToSet,
    //   quantity,
    // });
  } else {
    console.log("User not authenticated");
    toast.error("User not authenticated", {
      position: "bottom-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  }
};

  const removeItemFromCart = async (id, selectedColor, selectedBattery) => {
    try {
      // Make a POST request to the /removeFromCart API
      const response = await axios.post(
        `${Port}/removeFromCart`,
        {
          productId: id,
          selectedColor: selectedColor,
          selectedBattery: selectedBattery,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Add token in headers if required
          },
        }
      );

      // Check if the response is successful
      if (response.status === 200) {
        // Update the cart state after successful removal
        setCart((prevCart) =>
          prevCart.filter(
            (item) => !(item.id === id && item.selectedColor === selectedColor && item.selectedBattery === selectedBattery)
          )
        );

        // Show success notification
        toast.error("Removed from cart", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
          icon: <TbShoppingCartX className="fs-1" />,
        });
      } else {
        // Handle error if the response is not successful
        console.error(
          "Failed to remove item from cart:",
          response.data.message
        );
        toast.error("Failed to remove item from cart", {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error removing item from cart:", error);
      toast.error("An error occurred while removing item from cart", {
        position: "bottom-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleBuyNow = async (product, selectedColor, quantity) => {
    console.log("Buy Now :", { product, selectedColor, quantity });
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity > 0 ? newQuantity : 1;
    });
  };


/// to make cart empty after successfull placed order

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear cart from localStorage
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart,
        selectedColors,
        setSelectedColors,
        handleColorChange,
        quantity,
        setQuantity,
        calculateDiscount,
        handleAddToCart,
        selectedBatteryTypes,
        handleBatteryTypeChange,
        removeItemFromCart,
        handleBuyNow,
        handleQuantityChange,
        formatPrice,
        setCart,
        updatedPrice,
        setUpdatedPrice,
        clearCart
        
      }}
    >
      {children}
      <ToastContainer limit={3} newestOnTop />
    </ShopContext.Provider>
  );
};

// Custom hook to use the Shop context
export const useShop = () => {
  return useContext(ShopContext);
};
