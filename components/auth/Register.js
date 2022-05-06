import React, {useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Head from 'next/head';

import { useEffect } from "react";
import ReactDOM from "react-dom";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import cx from "clsx";

import {
	addUser
} from "@/modules";

const theme = createTheme();

export function Register({onChange, onSubmit}){

	const { register, handleSubmit, errors, reset, setValue } = useForm();

  const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addUser());
	}, [dispatch]);

	const onSubmitHandler = (data) => {
    console.log('submit data', data);
			dispatch(addUser(data));
	};

  return (
    <ThemeProvider theme={theme}>
    <Head>
    <title>사용자</title>
    </Head>
      <Container  component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>

          <form
							className="form modal__form"
							onSubmit={handleSubmit(onSubmitHandler)}
							noValidate
						>
              <div className="form__element">
								<label
									htmlFor="useridInput"
									className={cx("label", errors.userid && "label--error")}
								>
									{errors.userid ? (
										"userID is required!"
									) : (
										<>
											userId&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="text"
									id="idInput"
									name="userid"
									placeholder="userid"
									className={cx("input", errors.userid && "input--error")}
									ref={register({ required: true })}
								/>
							</div>

              <div className="form__element">
								<label
									htmlFor="passwordInput"
									className={cx("label", errors.password && "label--error")}
								>
									{errors.password ? (
										"Password is required!"
									) : (
										<>
											Password&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="text"
									id="passwordInput"
									name="password"
									placeholder="Password"
									className={cx("input", errors.password && "input--error")}
									ref={register({ required: true })}
								/>
							</div>

							<div className="form__element">
								<label
									htmlFor="nameInput"
									className={cx("label", errors.name && "label--error")}
								>
									{errors.name ? (
										"Full name is required!"
									) : (
										<>
											Full name&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="text"
									id="nameInput"
									name="name"
									placeholder="Full name"
									className={cx("input", errors.name && "input--error")}
									ref={register({ required: true })}
								/>
							</div>

							<div className="form__element">
								<label
									htmlFor="emailInput"
									className={cx("label", errors.email && "label--error")}
								>
									{errors.email ? (
										`${errors.email.message}`
									) : (
										<>
											Email&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="email"
									id="emailInput"
									name="email"
									placeholder="Email"
									className={cx("input", errors.email && "input--error")}
									ref={register({
										required: "Email is required!",
										pattern: {
											value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
											message: "Invalid email address!",
										},
									})}
								/>
							</div>

							<div className="form__element">
								<label
									htmlFor="phoneNumber"
									className={cx("label", errors.phone && "label--error")}
								>
									{errors.phone ? (
										`${errors.phone.message}`
									) : (
										<>
											Phone&nbsp;<span className="label__required">*</span>
										</>
									)}
								</label>
								<input
									type="number"
									id="phoneNumber"
									name="phone"
									placeholder="Phone"
									className={cx("input", errors.phone && "input--error")}
									ref={register({
										required: "Phone is required!",
										minLength: {
											value: 11,
											message: "Minimum of 11 digits",
										},
										maxLength: {
											value: 12,
											message: "Maximum of 12 digits",
										},
									})}
								/>
							</div>

              <div className="form__element">
								<label
									htmlFor="addressArea"
									className={cx("label", errors.address && "label--error")}
								>
                  Address
								</label>
								<textarea
									type="text"
									id="addressArea"
									name="address"
									placeholder="Address"
									className={cx("area", errors.address && "input--error")}
									ref={register({ required: false })}
								/>
							</div>

              <div className="form__element">
								<label
									htmlFor="addressArea"
									className={cx("label", errors.address && "label--error")}
								>
                  생년월일
								</label>
								<input
									type="number"
									id="birth"
									name="birth"
									placeholder="생년월일 6자리 ex) 940214"
									className={cx("area", errors.address && "input--error")}
									ref={register({ required: false })}
								/>
							</div>

							<div className="form__action">
								<button className="btn btn__primary btn__icon" type="submit">
                  전 송
								</button>
							</div>
						</form>

          
         </Box>
      </Container>
    </ThemeProvider>
  );
}