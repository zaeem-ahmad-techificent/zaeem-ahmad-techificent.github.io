import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { TextField, Typography, Grid, Box, Link, Button } from '@mui/material'
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import FacebookIcon from '@mui/icons-material/Facebook'; 

const resolver00 = yup.object().shape({
    name: yup.string().required("Name is required").label("name*"),
    email: yup.string().label("email*").required("Email is required").email("Invalid email address").matches(/^\S+@\S+\.\S{2,}$/i, "Invalid Email Format"),
    message: yup.string().required("Message is required.")
})

const Form = () =>
{
    const { setValue, register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'onChange', resolver: yupResolver(resolver00) });
    const onSubmit = (data) => console.log(data);
    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <Box mt={5} p={3} ml={{ xs: 2, s: 4, md: 30, l: 30 }} mr={{ xs: 2, s: 4, md: 30, l: 30 }}>
                <Grid container spacing={2}>
                    <Grid item sx={{}} xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label='name*'
                            onChangeCapture={(e) =>
                            {
                                setValue("name", e.target.value)
                            }}
                            {...register("name")}>
                        </TextField>
                        <Box>
                            {errors?.name && (
                                <Typography color={"red"} fontSize={"12px"} sx={{ textAlign: "justify" }}>
                                    {errors?.name?.message}
                                </Typography>
                                // <ErrorMessage message={errors?.name?.message} />
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            label='email*'
                            onChangeCapture={(e) =>
                            {
                                setValue("email", e.target.value)
                            }}
                            {...register("email")}>

                        </TextField>
                        <Box>
                            {errors?.email && (
                                <Typography color={"red"} fontSize={"12px"} sx={{ textAlign: "justify" }}>
                                    {errors?.email?.message}
                                </Typography>
                                // <ErrorMessage message={errors?.name?.message} />
                            )}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label='(092) 000-213 (optional)'
                            onChangeCapture={(e) =>
                            {
                                setValue("phone", e.target.value)
                            }}
                            {...register("phone")}></TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label='organization (optional)'
                            onChangeCapture={(e) =>
                            {
                                setValue("organization", e.target.value)
                            }}
                            {...register("organization")}>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            rows={4}
                            maxRows={4}
                            fullWidth
                            multiline
                            label='Write your message*'
                            onChangeCapture={(e) =>
                            {
                                setValue("message", e.target.value)
                            }}
                            {...register("message")}>
                        </TextField>
                        {errors?.message && (
                            <Typography color={"red"} fontSize={"12px"} sx={{ textAlign: "justify" }}>
                                {errors?.message?.message}
                            </Typography>
                        )}
                    </Grid>
                    <Grid item >
                        {console.log("errors: " + Object.keys(errors).length)}
                        <Button
                            variant="contained"
                            type="submit"
                            disabled={
                                Object.keys(errors).length > 0
                                    ? true
                                    : false
                            }>
                            Submit
                        </Button>
                    </Grid>
                </Grid>

            </Box>
        </Box >
    );
}

export default Form;