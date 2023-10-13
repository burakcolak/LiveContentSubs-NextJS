import React from "react";

const components = () => {
  return (
    <div>
      <section className="grid gap-6 lg:grid-cols-2">
        <img
          src="https://source.unsplash.com/random/360x480"
          alt=""
          className="object-cover w-full rounded-md max-h-96 bg-gray-500"
        />
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-50">
          <img
            src="https://source.unsplash.com/random/100x100"
            alt=""
            className="object-cover w-20 h-20 rounded-full bg-gray-500"
          />
          <blockquote className="max-w-lg text-lg italic font-medium text-center">
            Et, dignissimos obcaecati. Recusandae praesentium doloribus vitae?
            Rem unde atque mollitia!
          </blockquote>
          <div className="text-center text-gray-600">
            <p>Leroy Jenkins</p>
            <p>CEO of Company Co.</p>
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              aria-label="Page 1"
              className="w-2 h-2 rounded-full bg-gray-900"
            ></button>
            <button
              type="button"
              aria-label="Page 2"
              className="w-2 h-2 rounded-full bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 3"
              className="w-2 h-2 rounded-full bg-gray-400"
            ></button>
            <button
              type="button"
              aria-label="Page 4"
              className="w-2 h-2 rounded-full bg-gray-400"
            ></button>
          </div>
        </div>
        <img
          src="https://source.unsplash.com/random/360x480"
          alt=""
          className="object-cover w-full rounded-md max-h-96 bg-gray-500"
        />
      </section>
      <section>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded lg:flex lg:col-span-3">
            <img
              src="https://source.unsplash.com/random/485x365"
              alt=""
              className="object-cover w-full h-auto max-h-96 bg-gray-500"
            />
            <div className="p-6 space-y-6 lg:p-8 md:flex md:flex-col bg-gray-50">
              <span className="self-start px-3 py-1 text-sm rounded-full bg-teal-600 text-gray-50">
                Business
              </span>
              <h2 className="text-3xl font-bold md:flex-1">
                Curating a workplace that inspires team movement
              </h2>
              <div>
                <p className="text-gray-600">November 30, 2020</p>
                <p className="text-gray-600">By Leroy Jenkins</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-50">
            <h3 className="inline font-medium text-gray-900">
              Panel-based blocks.
            </h3>
            <p className="inline">
              Flexible panels that are perfect for building functional layouts.
            </p>
          </div>
          <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-50">
            <h3 className="inline font-medium text-gray-900">
              Responsive design.
            </h3>
            <p className="inline">Panels look great no matter the device.</p>
          </div>
          <div className="p-6 rounded lg:p-8 lg:py-12 bg-gray-50">
            <h3 className="inline font-medium text-gray-900">
              Premium support.
            </h3>
            <p className="inline">
              Join over 50 000 satisfied customers who use our templates.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="container p-6 py-20 mx-auto rounded lg:px-8 bg-gray-50">
          <h2 className="text-5xl font-bold text-center">
            Our team is here to help you.
          </h2>
          <div className="flex justify-center p-4">
            <a rel="noopener noreferrer" href="#">
              Meet our crew &gt;
            </a>
          </div>
          <img
            src="https://source.unsplash.com/random/360x240"
            alt=""
            className="object-cover w-full h-auto mt-8 rounded max-h-96 bg-gray-500"
          />
        </div>
      </section>
    </div>
  );
};

export default components;
