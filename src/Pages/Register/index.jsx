import React from "react";
import { P1 } from "../../Helper/paragraphs";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import GradientButton from "../../Helper/GradientButton";
import "../../Styles/register.css";

const Register = () => {
  return (
    <main className="register-main container">
      <nav>logo</nav>
      <section>
        <img src={require("../../Assets/register_img.png")} alt="" />
        <form action="">
          <h2 className="heading">You are almost there...</h2>
          <P1
            text={
              "Please fill out this short form and you will immediately get a detailed estimate."
            }
          />
          <FormControl variant="standard">
            <InputLabel htmlFor="project_name">PROJECT NAME</InputLabel>
            <Input
              id="project_name"
              placeholder="YOUR PROJECT NAME"
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="your_name">YOUR NAME</InputLabel>
            <Input
              id="your_name"
              placeholder="YOUR NAME"
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="your_email">YOUR EMAIL</InputLabel>
            <Input
              id="your_email"
              placeholder="YOUR EMAIL"
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="phone_number">YOUR PHONE NUMBER</InputLabel>
            <Input
              id="phone_number"
              placeholder="YOUR PHONE NUMBER"
              startAdornment={
                <InputAdornment position="start">
                  {/* <AccountCircle /> */}
                </InputAdornment>
              }
            />
          </FormControl>
          <GradientButton text="GET THE ESTIMATE" transparent={false} />
        </form>
      </section>
    </main>
  );
};

export default Register;
