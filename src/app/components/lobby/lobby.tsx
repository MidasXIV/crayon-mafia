import Image from "next/image";

const Lobby: React.FC = () => {
  const players = [
    {
      name: "Lirik",
      level: "Level 6 - Warlock",
      imageUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png",
    },
    {
      name: "MembTV",
      level: "Level 4 - Monk",
      imageUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png",
    },
    {
      name: "DansGaming",
      level: "Level 12 - Paladin",
      imageUrl:
        "https://static-cdn.jtvnw.net/jtv_user_pictures/27fdad08-a2c2-4e0b-8983-448c39519643-profile_image-70x70.png",
    },
  ];

  return (
    // <div className="p-blur bh-zinc-900/50 flex h-full w-full flex-1 flex-col items-center  justify-between rounded-lg border border-gray-300 bg-gray-200 p-4 md:max-w-4xl">
    <div className="mx-auto flex h-full w-full max-w-xl flex-1 flex-col items-center justify-between rounded-lg bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-lg">
      <div className="w-full">
        {/* <div className="mb-8 flex flex-col items-center justify-between border-b border-gray-200">
          <h2 className="text-2xl font-semibold">Game Lobby</h2>
          <p className="font-base text-sm text-gray-500">
            Waiting for more players...
          </p>
        </div> */}
        {/* <div>
          {players.map((player, index) => (
            <div
              key={index}
              // className="flex justify-between items-center h-16 p-4 my-6 rounded-lg border border-gray-100 shadow-md"
              className="my-4 flex h-16 items-center justify-between rounded-lg border border-gray-300 bg-gray-100 px-5 py-4 transition-colors dark:border-neutral-700 dark:bg-neutral-800 dark:bg-opacity-30"
            >
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-md"
                  src={player.imageUrl}
                  alt="Logo"
                />
                <div className="ml-2">
                  <div className="text-sm font-semibold text-gray-600">
                    {player.name}
                  </div>
                  <div className="text-sm font-light text-gray-500">
                    {player.level}
                  </div>
                </div>
              </div>
              <div>
                <button className="flex items-center justify-center rounded-full bg-red-400 p-2 shadow-md hover:bg-red-500">
                  <svg
                    className="toggle__lock h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
          <div className="my-6 flex h-16 items-center justify-center rounded-lg bg-gray-200 p-4 shadow-inner">
            <div className="flex cursor-pointer items-center rounded border border-dashed border-gray-400 p-2">
              <div>
                <svg
                  className="h-6 w-6 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <div className="ml-1 font-medium text-gray-500">
                Invite a friend
              </div>
            </div>
          </div>
        </div> */}
        <div className="mb-4 flex items-center justify-between border-b border-gray-900/5 pb-2">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Game Lobby</h2>
            <p className="text-sm text-gray-500">Fetched 3 users in 5491ms</p>
          </div>
          <button className=" text-sm text-gray-500 hover:text-gray-900">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.84998 7.49998C1.84998 4.66458 4.05979 1.84998 7.49998 1.84998C10.2783 1.84998 11.6515 3.9064 12.2367 5H10.5C10.2239 5 10 5.22386 10 5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V4.31318C12.2955 3.07126 10.6659 0.849976 7.49998 0.849976C3.43716 0.849976 0.849976 4.18537 0.849976 7.49998C0.849976 10.8146 3.43716 14.15 7.49998 14.15C9.44382 14.15 11.0622 13.3808 12.2145 12.2084C12.8315 11.5806 13.3133 10.839 13.6418 10.0407C13.7469 9.78536 13.6251 9.49315 13.3698 9.38806C13.1144 9.28296 12.8222 9.40478 12.7171 9.66014C12.4363 10.3425 12.0251 10.9745 11.5013 11.5074C10.5295 12.4963 9.16504 13.15 7.49998 13.15C4.05979 13.15 1.84998 10.3354 1.84998 7.49998Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="divide-y divide-gray-900/5">
          {players.map((player, index) => (
            <>
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center space-x-4">
                  {/* <img
                    alt="Guillermo Rauch"
                    loading="lazy"
                    width="48"
                    height="48"
                    decoding="async"
                    data-nimg="1"
                    className="rounded-full ring-1 ring-gray-900/5"
                    src={player.imageUrl}
                  /> */}
                  <Image
                    className="rounded-full ring-1 ring-gray-900/5"
                    src={player.imageUrl}
                    alt="player Logo"
                    width="48"
                    height="48"
                    priority
                  />
                  <div className="space-y-1">
                    <p className="font-medium leading-none">{player.name}</p>
                    <p className="text-sm text-gray-500">{player.level}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">59d ago</p>
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="w-full">
        <button className="w-full rounded-lg bg-green-400 p-4 text-xl font-medium uppercase text-white shadow hover:bg-green-500">
          Start the game
        </button>
      </div>
    </div>
  );
};

export default Lobby;
