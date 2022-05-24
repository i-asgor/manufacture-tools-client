/** @format */

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm();
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const imageStorageKey = "8584c8af2c5de177e5dadcfa3c9ee126";

  const onSubmit = (event) => {
    // event.preventDefault();
    // console.log(event);
    const image = event.picture[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const img = result.data.url;
        // console.log(img)
        const product = {
          name: event.name,
          company: event.company,
          price: event.price,
          quantity: event.quantity,
          minimum_quantity: event.minimum_quantity,
          email: user.email,
          phone: event.number,
          address: event.address,
          picture:img
        };
        // console.log("imgbb", result);
        fetch("http://localhost:5000/items", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(product),
        })
          .then((res) => res.json())
          .then((inserted) => {
            if (inserted.success) {
              toast.success(`Product Added Successfully`);
              reset();
            } else {
              toast.error(`Product Added Failed`);
            }
          });

        // console.log(product);
      });
  };

  return (
    <div className="px-5 z-100">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is Required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.name.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              placeholder="Company Name"
              className="input input-bordered w-full max-w-xs"
              {...register("company", {
                required: {
                  value: true,
                  message: "company is Required",
                },
              })}
            />
            <label className="label">
              {errors.company?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.company.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full max-w-xs"
              {...register("price", {
                required: {
                  value: true,
                  message: "Price is Required",
                },
              })}
            />
            <label className="label">
              {errors.price?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.price.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.quantity.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Minimum Order Quantity</span>
            </label>
            <input
              type="number"
              placeholder="Quantity"
              className="input input-bordered w-full max-w-xs"
              {...register("minimum_quantity", {
                required: {
                  value: true,
                  message: "Minimum Order Quantity is Required",
                },
              })}
            />
            <label className="label">
              {errors.minimum_quantity?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.minimum_quantity.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              disabled
              value={user.email}
              placeholder="Your Email"
              className="input input-bordered w-full max-w-xs"
              {...register("email")}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Phone</span>
            </label>
            <input
              type="number"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
              {...register("number", {
                required: {
                  value: true,
                  message: "Phone is Required",
                },
              })}
            />
            <label className="label">
              {errors.number?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.number.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              placeholder="address"
              className="input input-bordered w-full max-w-xs"
              {...register("address")}
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.address.message}
                </span>
              )}
            </label>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Picture</span>
            </label>
            <input
              type="file"
              placeholder="picture"
              className="input input-bordered w-full max-w-xs"
              {...register("picture")}
            />
            <label className="label">
              {errors.picture?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.picture.message}
                </span>
              )}
            </label>
          </div>
        </div>
        <input
          className="btn w-full max-w-xs text-white"
          type="submit"
          value="Add"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddProduct;
