import Image from "next/image";
import Lobby from "../components/lobby/lobby";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12 md:flex-row">
      <section className="flex h-screen flex-col items-center justify-between p-4 md:h-auto md:w-1/3">
        <Lobby />
      </section>
      <section className="flex flex-col items-center justify-between p-4 md:w-2/3">
        <div className="z-10 hidden w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.tsx</code>
          </p>
          <div className="fixed bottom-0 left-0 hidden h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:flex lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
          <ul className="m-10 mx-auto grid w-full max-w-md grid-cols-2 gap-x-5">
            <li className="relative">
              <input
                className="peer sr-only"
                type="radio"
                value="yes"
                name="answer"
                id="answer_yes"
              />
              <label
                className="flex h-full w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-5 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-green-500"
                htmlFor="answer_yes"
              >
                <div className="group rounded-lg border border-transparent px-5 py-4">
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    Automated{" "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    The word to draw is &nbsp;randomly assigned!
                  </p>
                </div>
              </label>

              <div className="absolute right-3 top-5 hidden h-5 w-5 peer-checked:block">
                👍
              </div>
            </li>
            <li className="relative">
              <input
                className="peer sr-only"
                type="radio"
                value="no"
                name="answer"
                id="answer_no"
              />
              <label
                className="flex h-full w-full cursor-pointer rounded-lg border border-gray-300 bg-white p-5 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-red-500"
                htmlFor="answer_no"
              >
                <div className="group rounded-lg border border-transparent px-5 py-4">
                  <h2 className={`mb-3 text-2xl font-semibold`}>
                    Custom&nbsp;&nbsp;{"     "}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                      -&gt;
                    </span>
                  </h2>
                  <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                    A player decides a word &nbsp;for the group!
                  </p>
                </div>
              </label>

              <div className="absolute right-3 top-5 hidden h-5 w-5 peer-checked:block">
                👎
              </div>
            </li>
          </ul>
        </div>

        <div></div>
      </section>
    </main>
  );
}
