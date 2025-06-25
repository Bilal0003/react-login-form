"use client";
import axios from "axios";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { fabClasses, Button, styled } from "@mui/material";
import Image from "next/image";
import Form from "next/form";
import {
  border,
  color,
  display,
  flexDirection,
  height,
  positions,
} from "@mui/system";
import { Content } from "next/font/google";
import { useRouter } from "next/navigation";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  bottom: 0,
  left: "50%",
  transform: "translateX(-50%)",
  alignItems: "center",
});

const StyledContainer = styled(Container)({
  height: "100vh",
  width: "60vw",

  backgroundImage: "url(/images/morocan-tiles.jpg)",
  backgroundSize: "cover",
});

export default function LoginLayout() {
  const router = useRouter();
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const URL = "http://localhost:8080/api/auth/login";
    axios
      .post(URL, {
        username: email,
        password: password,
      })
      .then((reponse) => {
        console.log(reponse);
        router.push("/home");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <StyledContainer>
      <StyledBox>
        <span style={{ display: "flex", gap: "10px" }}>
          <Image
            height="120"
            src="https://flagcdn.com/tw.svg"
            width="160"
            alt="Ukraine"
          />
          <Image
            height={120}
            src="https://flagcdn.com/ma.svg"
            width="160"
            alt="Ukraine"
          />
        </span>
        <Typography variant="h1" color="white">
          Login
        </Typography>
        <Form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            required
            name="email"
            id="email"
            type="text"
            label="Email"
            sx={{
              backdropFilter: "blur(8px)",
              my: 2,
              background: "rgba(30, 30, 30, 0.63)",
              borderRadius: "50px",
              border: "2px white solid",
            }}
          />
          <TextField
            fullWidth
            required
            type="password"
            name="password"
            id="password"
            label="Password"
            sx={{
              backdropFilter: "blur(8px)",
              my: 2,
              background: "rgba(30, 30, 30, 0.63)",
              borderRadius: "50px",
              border: "2px white solid",
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="error"
            sx={{ border: "white 2px ", borderRadius: "20px" }}
          >
            LOG IN
          </Button>
        </Form>
        <Button variant="text" color="default">
          Forgot Password?
        </Button>
      </StyledBox>
    </StyledContainer>
  );
}
