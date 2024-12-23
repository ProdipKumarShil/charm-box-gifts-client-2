import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { emailPasswordRegister } from "../redux/firebase/authHandler"

const Register = () => {
  const dispatch = useDispatch()
  const {register, watch, handleSubmit, formState: {errors}} = useForm()

  const onSubmit = async(data) => {
    emailPasswordRegister(data, dispatch)
  }
  
  return (
    <div className="max-w-xl mx-auto">
      <form
        className="space-y-4 form-control"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full rounded-sm"
            required
            {...register("name")}
          />
        </div>
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
        <div className="flex gap-4 ">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Role</span>
            </label>
            <select
              {...register("role")}
              className="select select-bordered w-full  rounded-sm"
            >
              <option value="buyer" defaultValue="buyer" selected>Buyer</option>
              <option value="seller">Seller</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="w-full ">
            <label className="label">
              <span className="label-text">Image Url</span>
            </label>
            <input
              type="text"
              placeholder="Profile image url"
              className="input w-full input-bordered rounded-sm"
              required
              {...register("imgUrl")}
            />
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full rounded-sm"
              {...register("password", {required: true, minLength: 6})}
              />
               {errors.password?.type === 'minLength' && <p className="text-xs text-red-700">Password at least 6 char</p>}
          </div>
          <div className="w-full ">
            <label className="label">
              <span className="label-text">Confirm password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="input w-full input-bordered rounded-sm"
              {...register("confirmPassword", {
                required: true, validate: (value) => {
                  if(watch('password') != value) 
                    return 'Your password did not match'
                }
              })}
            />
              {errors.confirmPassword && <p className="text-xs text-red-700">Both password must match</p>}
          </div>
        </div>
        <button className="btn btn-accent">Submit</button>
      </form>
      <div className="mt-6">
        {/* <button
          className="btn btn-primary"
          onClick={handleLogin}
        >
          Google Sign In
        </button> */}
      </div>
    </div>
  )
}

export default Register