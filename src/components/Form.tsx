export default function Form() {
  return (
    <div className="bg-white p-3.5 md:p-10 rounded-md mt-10 md:max-w-3xl lg:max-w-[500px]">
      <div>
        <h2 className="text-2xl text-black font-semibold tracking-wide mb-2.5">
          Join the wait list
        </h2>
        <h5 className="text-gray-500 tracking-normal mb-5">
          Enter your information to book your spot
        </h5>
      </div>

      <form className="text-black/60">
        <input
          className="w-full p-3 mb-2.5 outline-none border rounded-md focus:border-gray-300 focus:border-4"
          type="text"
          placeholder="Full Name*"
        />

        <input
          className="w-full p-3 mb-2.5 outline-none border rounded-md focus:border-gray-300 focus:border-4"
          type="email"
          placeholder="Email*"
        />

        <input
          className="w-full p-3 mb-5 outline-none border rounded-md focus:border-gray-300 focus:border-4"
          type="tel"
          placeholder="Phone Number (Optional)"
        />

        <button className="bg-navy w-full p-4 text-white font-semibold text-lg rounded-md tracking-wider">
          Join now
        </button>
      </form>
    </div>
  );
}
