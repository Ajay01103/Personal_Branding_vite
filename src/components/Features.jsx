export default () => {

    const features = [
        {
            icon:
                <img src="https://blinder-nine.vercel.app/_next/static/media/nextjs.1e4abb67.svg" alt="next" />,
            title: "Next JS",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:
                <img src="https://blinder-nine.vercel.app/_next/static/media/wordpress.bc05deb0.svg" alt="" />,
            title: "Wordpress",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:
               <img src="https://blinder-nine.vercel.app/_next/static/media/tailwind.6292f456.svg" alt="" />,
            title: "Tailwind",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:
                <img src="https://blinder-nine.vercel.app/_next/static/media/nodejs.8ce36f01.svg" alt="" />,
            title: "Node JS",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:
                <img src="https://blinder-nine.vercel.app/_next/static/media/vercel.2031f6ec.svg" alt="" />,
            title: "Vercel",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
        {
            icon:
                <img src="https://blinder-nine.vercel.app/_next/static/media/figma.dbbb7e1d.svg" alt="" />,
            title: "Figma",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus."
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Techs we offer to our Clients
                    </h3>
                    <p className="mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}