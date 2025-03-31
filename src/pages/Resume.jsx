
export default function Resume() {
    return (
        <>
            <main className="main-resume">
                <section className="w-full min-h-screen">
                    <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full min-h-screen text-white overflow-auto">
                        <section>
                            <h2 id="email-me-h2" className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">My Technologies 👨🏿‍💻</h2>
                            <p className="py-6">Technologies I have experience with:</p>
                        </section>
                        <section className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-orange-500">
                                <img src="/assets/html.svg" alt className="w-20 mx-auto" />
                                <p className="mt-4">HTML</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
                                <img src="/assets/css-alt.svg" className="w-20 mx-auto" />
                                <p className="mt-4">CSS</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-yellow-500">
                                <img src="/assets/javascript.svg" className="w-20 mx-auto" />
                                <p className="mt-4">JavaScript</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-blue-500">
                                <img src="/assets/react.svg" className="w-20 mx-auto" />
                                <p className="mt-4">React JS</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-slate-500">
                                <img src="/assets/github.svg" className="w-20 mx-auto" />
                                <p className="mt-4">GitHub</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-sky-500">
                                <img src="/assets/tailwind-css.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Tailwind</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-emerald-500">
                                <img src="/assets/node-js.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Node JS</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-cyan-500">
                                <img src="/assets/typescript.svg" className="w-20 mx-auto" />
                                <p className="mt-4">TypeScript</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-zinc-500">
                                <img src="/assets/express.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Express JS</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-500">
                                <img src="/assets/rest-api.svg" className="w-20 mx-auto" />
                                <p className="mt-4">RESTful API</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-purple-500">
                                <img src="/assets/insomnia.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Insomnia</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-green-500">
                                <img src="/assets/mongodb.svg" className="w-20 mx-auto" />
                                <p className="mt-4">MongoDB</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-pink-500">
                                <img src="/assets/graphql.svg" className="w-20 mx-auto" />
                                <p className="mt-4">GraphQL</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-rose-500">
                                <img src="/assets/sql.svg" className="w-20 mx-auto" />
                                <p className="mt-4">SQL</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-slate-500">
                                <img src="/assets/postgresql.svg" className="w-20 mx-auto" />
                                <p className="mt-4">PostgreSQL</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-fuchsia-500">
                                <img src="/assets/sequelize.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Sequelize</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-amber-500">
                                <img src="/assets/python.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Python</p>
                            </div>
                            <div className="shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-teal-500">
                                <img src="/assets/vite.svg" className="w-20 mx-auto" />
                                <p className="mt-4">Vite</p>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </>
    )
}