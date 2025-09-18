import profile_img from "../../utils/image/profile.jpeg";

function Profile() {
  return (
    <div className="mx-auto flex h-screen max-w-[800px] flex-col items-center justify-center text-center">
      <h1 className="mb-8 text-2xl font-bold md:text-[30px]">ABOUT ME</h1>

      <div
        className="mx-auto flex w-full flex-col items-center gap-6 px-6 "
        data-aos="fade-up"
        data-aos-offset="230"
        data-aos-duration="500"
      >
        <div className="flex w-full flex-col items-center">
          <div className="mb-6 rounded-full border-2 border-white p-2">
            <div className="h-[170px] w-[170px] overflow-hidden rounded-full">
              <img
                src={profile_img}
                alt="profile_img"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[20px] font-bold">강민재</p>
            <p className="mb-2 text-[20px] font-light">Frontend Developer</p>
            <p className="font-light">{process.env.REACT_APP_EMAIL}</p>
            <p className="font-light">{process.env.REACT_APP_PHONE}</p>
          </div>
        </div>

        <div className="mt-2 flex w-full max-w-[300px] justify-center gap-2">
          <a
            href={process.env.REACT_APP_BLOG}
            className="w-full rounded-[10px] bg-zinc-900 px-4 py-3 text-center text-sm font-extrabold text-white no-underline transition-colors hover:bg-white hover:text-black md:border "
          >
            BLOG
          </a>
          <a
            href={process.env.REACT_APP_RESUME}
            className="w-full rounded-[10px] bg-zinc-900 px-4 py-3 text-center text-sm font-extrabold text-white no-underline transition-colors hover:bg-white hover:text-black md:border "
          >
            RESUME
          </a>
          <a
            href={process.env.REACT_APP_GITHUB}
            className="w-full rounded-[10px] bg-zinc-900 px-4 py-3 text-center text-sm font-extrabold text-white no-underline transition-colors hover:bg-white hover:text-black md:border "
          >
            GITHUB
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
