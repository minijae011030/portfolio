import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import data from "../../utils/data/project.json";

function Project({ project_index, SlidesToShow, isSmallScreen }) {
  const project = data[project_index];
  const project_image = project.project_image;
  const project_skill = project.skills;
  const project_main_task = project.main_tasks;
  const project_problems = project.problems;

  return (
    <div
      className="mx-auto mb-24 w-full max-w-[800px]"
      data-aos="fade-up"
      data-aos-duration="500"
    >
      <div className="mb-7 px-6">
        <ImageRender
          project_image={project_image}
          SlidesToShow={SlidesToShow}
        />
      </div>

      <div
        className={isSmallScreen ? "px-8" : "mt-12 flex w-full max-w-[800px]"}
      >
        <div className="flex max-w-[320px] flex-col gap-2 text-left md:ml-5 md:mr-10">
          <p className="mb-3 text-[27px] font-extrabold">
            {project.project_name}
          </p>

          <p className="mb-2 text-[18px] leading-7 font-medium">
            {project.project_description}
          </p>

          <p className="mt-2 text-sm font-light">{project.project_duration}</p>
          <p className="mb-2 text-sm font-light">
            {project.project_contribution}
          </p>

          <div className="mb-3 flex gap-3">
            {project.project_url && (
              <a
                href={project.project_url}
                className="text-sm font-light underline underline-offset-2 text-white"
              >
                프로젝트 링크
              </a>
            )}
            <a
              href={project.github_url}
              className="text-sm font-light underline underline-offset-2 text-white"
            >
              GitHub 링크
            </a>
          </div>

          <div className="-ml-1 flex flex-wrap gap-2">
            {project_skill.map((skill, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-neutral-800 bg-neutral-900 px-3.5 py-2 text-[13px] text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div
          className={
            isSmallScreen
              ? "mt-7 flex flex-1 flex-col gap-2 text-left"
              : "mt-11 mr-2 flex flex-1 flex-col gap-2 text-left"
          }
        >
          {project_main_task.map((task, idx) => (
            <div
              key={idx}
              className="flex gap-2 text-[14.5px] leading-5 font-light"
            >
              <span>·</span>
              <p>
                <span className="font-medium">{task.t}</span>: {task.d}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={
          isSmallScreen
            ? "mx-auto mt-6 w-full text-left px-4"
            : "mx-auto mt-6 w-full text-left"
        }
      >
        <p className="ml-5 mb-4 text-[20px] font-bold">트러블슈팅</p>

        <div className="grid gap-4 px-5 rid-cols-1">
          {project_problems.map((item, index) => (
            <article
              key={index}
              className="
                  rounded-xl border border-neutral-800 bg-[#181818] p-4 shadow-[0_6px_14px_rgba(0,0,0,0.25)]
                "
            >
              {/* header */}
              <header className="mb-2 flex items-center gap-2 !bg-transparent">
                <span
                  className="
                    inline-block rounded-full border border-emerald-400/40
                    bg-emerald-400/15 px-2.5 py-1
                    text-[11px] tracking-wide text-emerald-400 
                  "
                >
                  ISSUE
                </span>
                <h4 className="m-0 text-[16px] font-bold leading-snug !bg-transparent">
                  {item.title}
                </h4>
              </header>

              {/* 문제 */}
              <div className="my-2 border-l-4 border-neutral-800 pl-3 !bg-transparent">
                <p className="mb-1 text-xs font-semibold text-neutral-400 !bg-transparent">
                  문제
                </p>
                <p className="m-0 text-[14.5px] leading-6 font-light !bg-transparent">
                  {item.problem}
                </p>
              </div>

              {/* 해결 */}
              <div className="my-2 border-l-4 border-neutral-800 pl-3 !bg-transparent">
                <p className="mb-1 text-xs font-semibold text-neutral-400 !bg-transparent">
                  해결
                </p>
                <p className="m-0 text-[14.5px] leading-6 font-light !bg-transparent">
                  {item.solution}
                </p>
              </div>

              {/* 임팩트(선택) */}
              {item.impact && (
                <footer className="mt-3 flex items-start gap-2 border-t border-dashed border-neutral-800 pt-3 !bg-transparent">
                  <span className="font-extrabold text-emerald-400 !bg-transparent">
                    →
                  </span>
                  <span className="text-[13.5px] leading-6 text-neutral-200 !bg-transparent">
                    {item.impact}
                  </span>
                </footer>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

function ImageRender({ project_image, SlidesToShow }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: SlidesToShow,
    slidesToScroll: SlidesToShow,
    autoplay: true,
    autoplaySpeed: 7000,
  };

  if (!project_image) return null;

  return (
    <Slider {...settings}>
      {project_image.map((img, index) => (
        <div key={index} className="px-4">
          <img
            src={`${process.env.REACT_APP_FIREBASE}/${img}`}
            alt={`project-${index}`}
            className="w-full max-w-[1000px] mx-auto rounded-md shadow-lg"
          />
        </div>
      ))}
    </Slider>
  );
}

function Projects({ isSmallScreen }) {
  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center">
      <p className="mb-7 text-[30px] font-bold">PROJECT</p>

      <Project
        project_index={0}
        SlidesToShow={1}
        isSmallScreen={isSmallScreen}
      />
      <Project
        project_index={1}
        SlidesToShow={1}
        isSmallScreen={isSmallScreen}
      />
      <Project
        project_index={2}
        SlidesToShow={3}
        isSmallScreen={isSmallScreen}
      />
    </div>
  );
}

export default Projects;
