export default () => {
  return (
    <section className="from-purple-200 via-red-200 to-indigo-200 bg-gradient-to-br font-sans py-10">
      <div className="max-w-screen-xl mx-auto px-4 py-20 gap-12 text-gray-600 md:px-8">
        <div className="space-y-5 max-w-4xl mx-auto text-center">
          {/* <h1 className="text-sm text-indigo-600 font-medium">
                        Build products for everyone
                    </h1> */}
          <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
            Design your projects faster with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F46E5] to-[#E114E5]">
              the largest figma UI kit
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-900">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae.
          </p>
          <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg hover:shadow-none"
            >
              Browse courses
            </a>
            <a
              href="javascript:void(0)"
              className="block py-2 px-4 text-gray-700 hover:text-gray-100 font-medium duration-150 active:bg-gray-100 border border-b-1 hover:border-blue-500 rounded-lg"
            >
              Get access
            </a>
          </div>
        </div>
        <div className="mt-10">
          <video
            src="./dash.mp4"
            autoPlay
            loop
            muted
            className="w-full h-[100%] object-conver shadow-lg rounded-lg border"
          ></video>
          {/* <img src="https://cdn.devdojo.com/images/march2021/green-dashboard.jpg" className="w-full shadow-lg rounded-lg border" alt="" /> */}
        </div>
      </div>
    </section>
  )
}
