/* eslint-disable jsx-a11y/label-has-associated-control */
import * as yup from 'yup';
import { Controller, useForm } from 'react-hook-form';
import { CustomSelect } from '../../shared/CustomSelect/CustomSelect';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required().email(),
    gender: yup.object({
      value: yup.number().required('Please select a gender'),
    }),
    password: yup.string().required().min(6),
    repeatPassword: yup
      .string()
      .required('Please repeat your password')
      .oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const genderOptions = [
    { value: 1, label: 'Male' },
    { value: 2, label: 'Female' },
    { value: 3, label: 'Other' },
  ];

  // api call will be here (later)
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <div className="container">
      <h1>Be a part of our life!</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          First name: <input type="text" {...register('firstName')} />
        </label>
        <p className="validation-error">{errors.firstName?.message}</p>
        <label>
          Last name: <input type="text" {...register('lastName')} />
        </label>
        <p className="validation-error">{errors.lastName?.message}</p>
        <label>
          Email: <input type="email" {...register('email')} />
        </label>
        <p className="validation-error">{errors.email?.message}</p>
        <label>
          Gender:
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <CustomSelect options={genderOptions} placeholder="Select your gender" field={field} />
            )}
          />
        </label>
        <p className="validation-error">{errors.gender?.message}</p>
        <label>
          Password: <input type="password" {...register('password')} />
        </label>
        <p className="validation-error">{errors.password?.message}</p>
        <label>
          Repeat password: <input type="password" {...register('repeatPassword')} />
        </label>
        <p className="validation-error">{errors.repeatPassword?.message}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
