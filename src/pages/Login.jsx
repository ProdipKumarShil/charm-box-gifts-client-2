import { useForm } from "react-hook-form"
import { emailPasswordLogin } from "../redux/firebase/authHandler"
import { useDispatch } from "react-redux"

const Login = () => {
  const {register, handleSubmit} = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    emailPasswordLogin(data.email, data.password, dispatch)
  }
  return (
    <div>
      <form  className='space-y-4 form-control' action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full rounded-sm"
            required
            {...register("email")}
          />
        </div>
        <div className="w-full">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="input input-bordered w-full rounded-sm"
            required
            {...register("password")}
          />
        </div>
        <button className='btn btn-accent'>Submit</button>
      </form>
    </div>
  )
}

export default Login