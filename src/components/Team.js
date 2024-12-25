import React from "react";
import komal from "../assets/komal.jpeg";
import ambika from "../assets/ambika.jpeg";
import mehak from "../assets/mehak.jpeg";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Team = () => {
  const teamMembers = [
    {
      name: "Komalpreet",
      description:
        "With a dual expertise  in UI/UX desingning and web development, this team member provide a distinctive prespective that  drives creative and technical excellence.",
      image: komal,
      socials: [
        {
          icon: <FaEnvelope />,
          link: "",
        },
        {
          icon: <FaPhone />,
          link: "tel:+916280790732",
        },
        {
          icon: <FaInstagram />,
          link: "",
        },
      ],
    },
    {
      name: "Ambika Ghosh",
      description:
        "As a versatile UI/UX Designer and web developer, this team member injects new ideas and energy into our design processes",
      image: ambika,
      socials: [
        {
          icon: <FaEnvelope />,
          link: "",
        },
        {
          icon: <FaPhone />,
          link: "tel:+919046057556",
        },
        {
          icon: <FaInstagram />,
          link: "",
        },
      ],
    },
    {
      name: "Mehakpreet",
      description:
        "This team member brings a fresh perspective in UI/UX designing, leveraging dual expertise as a UI/UX designer and Web developer.",
      image: mehak,
      socials: [
        {
          icon: <FaEnvelope />,
          link: "",
        },
        {
          icon: <FaPhone />,
          link: "tel:+916280768524",
        },
        {
          icon: <FaInstagram />,
          link: "",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D857B] to-[#071F1D] text-white py-8">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-center mb-8 inline-block bg-white text-black px-6 py-2 rounded-[21px]">
            Our Team
          </h1>
        </div>
        <div className="space-y-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white bg-opacity-10 rounded-lg shadow-lg p-8 space-y-4 md:space-y-0 hover:border-2 hover:border-white transition-all duration-300"
            >
              {index === 1 ? (
                <>
                  {/* Info Section */}
                  <div className="md:w-2/3 w-full text-center md:text-right py-4 md:px-8">
                    <h2 className="text-4xl font-semibold">{member.name}</h2>
                    <p className="mt-4 text-lg">{member.description}</p>
                    <div className="flex justify-center md:justify-end space-x-4 mt-6 text-lg">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border-2 border-transparent hover:border-white transition-all cursor-pointer"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Image Section */}
                  <div className="flex-shrink-0 md:w-1/4 w-full text-center py-4 md:px-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover mx-auto rounded-lg"
                    />
                  </div>
                </>
              ) : (
                <>
                  {/* Image Section */}
                  <div className="flex-shrink-0 md:w-1/4 w-full text-center py-4 md:px-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover mx-auto rounded-lg"
                    />
                  </div>
                  {/* Info Section */}
                  <div className="md:w-2/3 w-full text-center md:text-left py-4 md:px-8">
                    <h2 className="text-4xl font-semibold">{member.name}</h2>
                    <p className="mt-4 text-lg">{member.description}</p>
                    <div className="flex justify-center md:justify-start space-x-4 mt-6 text-lg">
                      {member.socials.map((social, i) => (
                        <a
                          key={i}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full border-2 border-transparent hover:border-white transition-all cursor-pointer"
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
