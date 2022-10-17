import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

export const Form = () => {
       const schema = yup.object().shape({
        fullName: yup.string().required("Your Full Name is required"),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(20).required(),
       confirmPassword: yup
                .string()
                .oneOf([yup.ref("password"),null], "Password Don't match")
                .required(),
    });

    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema),
    })


    const onSubmit = (Data) =>{
        console.log("Data")
    };
    
    return (
        <form onSubmit = {handleSubmit(onSubmit)}><br></br>
            <input type = "text" placeholder = "Full Name ....." {...register("fullname")} /><br></br>
            <br></br>
       
            <input type = "text" placeholder = "Email..." {...register("email")} /><br></br>
            <br></br>
            <p>{errors.email?.message }</p>
            <input type = "Number" placeholder = "Age ..." {...register("age")} /><br></br>
            <br></br>
            <p>{errors.age?.message }</p>
            <input type = "password" placeholder="Password ..."{...register("Password")} /><br></br>
            <br></br>
            <input type = "password" placeholder = "confirm password ..." {...register("confirm password")} /><br></br>
            <br></br>
            <input type = "submit" />
        </form> 
    );
};
