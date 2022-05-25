import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';

const MyReview = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
      } = useForm();

      const [user] = useAuthState(auth);


      const onSubmit = (event) => {
        // event.preventDefault();
        // console.log(event);       
            const review = {
              name: user.name,
              description: event.description,
              rating: event.rating,
            };
            // console.log("imgbb", result);
            fetch("http://localhost:5000/reviews", {
              method: "POST",
              headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              },
              body: JSON.stringify(review),
            })
              .then((res) => res.json())
              .then((inserted) => {
                if (inserted.success) {
                  toast.success(`Review Added Successfully`);
                  reset();
                } else {
                  toast.error(`Review Added Failed`);
                }
              });
      };

    return (
        <div className="px-5 z-100">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered w-full max-w-xs"
              {...register("description", {
                required: {
                  value: true,
                  message: "Description is Required",
                },
              })}
            />
            <label className="label">
              {errors.description?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.description.message}
                </span>
              )}
            </label>
          </div>
          

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              placeholder="Rating Number"
              className="input input-bordered w-full max-w-xs"
              {...register("rating",{ min: 1, max: 5 }, {
                required: {
                  value: true,
                  message: "Rating is Required",
                },
              })}
            />
            <label className="label">
              {errors.rating?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.rating.message}
                </span>
              )}
            </label>
          </div>
        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add Review"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
    );
};

export default MyReview;