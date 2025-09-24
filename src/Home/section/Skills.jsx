import data from "../../utils/data/skill.json";

function Skill({ skill }) {
  const ability = skill.ability;

  return (
    <div
      className="m-auto mb-[30px] max-w-[700px] w-[80%]
                bg-black border-[1px] border-white border-solid p-[20px]"
    >
      <div className="flex mb-[30px] gap-2">
        <img
          className="h-[30px]"
          alt="logo"
          src={`${process.env.REACT_APP_FIREBASE}/${skill.logo}`}
        />
        <p className="ml-[5px] text-[20px] text-left">{skill.skill}</p>
      </div>

      <div className="flex text-left flex-col gap-[10px] text-[14.3px] font-extralight leading-5">
        {ability.map((ab, index) => (
          <p key={index}>{ab}</p>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex flex-col justify-center text-center w-full mb-[100px]">
      <p className="text-[30px] font-bold mb-[30px]">SKILL</p>

      {data.map((skill, index) => {
        return (
          <div
            // data-aos="fade-up"
            // data-aos-offset="230"
            // data-aos-duration="500"
            key={index}
          >
            <Skill skill={skill} />
          </div>
        );
      })}
    </div>
  );
}

export default Skills;
