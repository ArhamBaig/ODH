"use client";
import { TextField } from "@mui/material";
import { useState } from "react";
import { createTheme,ThemeProvider  } from '@mui/material/styles';
const HeroForm = () => {
    const theme = createTheme({
        palette: {
          primary: {
            main: '#ffffff',
          },
          secondary: {
            main: '#0052cc',
          },
        },
      });
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const id = toast.loading("Sending Request ...", { autoClose: false });
    try {
      const response = await fetch("/api/homeform", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.text();
        toast.update(id, {
          render: responseData,
          type: "success",
          isLoading: false,
          autoClose: 5000,
        });
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
        });
      } else {
        const responseData = await response.json();
        toast.update(id, {
          render: responseData,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <ThemeProvider theme={theme} >
    <div className="glass bg-white/40 rounded-3xl w-[380px] mx-auto">
      <div className="flex flex-col justify-between items-center md:px-16  py-7">
    <p className="text-3xl font-bold text-white mb-7 whitespace-nowrap">FREE <span className="text-secondary">CONSULTATION</span></p>
        <form onSubmit={onSubmit} className="flex flex-col z-10 gap-y-3">
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Name"
            onChange={(value) => handleInputChange("name", value)}

            className="text-red-600"
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Email"
            onChange={(value) => handleInputChange("email", value)}

            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="secondary"
            label="Phone Number"
            onChange={(value) => handleInputChange("phoneNumber", value)}
            required
          />
          <button className="bg-secondary p-2 px-2 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default HeroForm;
