import React from "react";
import "./Cp.css";

const Cp = () => {
  const profiles = [
    {
      platform: "LeetCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      description:
        "Achieved Knight badge with a maximum rating of 1896, solved 700+ algorithmic problems.",
      stats: [
        { label: "Badge", value: "Knight" },
        { label: "Max Rating", value: "1896" },
        { label: "Problems Solved", value: "700+" },

      ],
      link: "https://leetcode.com/u/ridham26/",
    },
    {
      platform: "CodeChef",
      logo: "https://cutshort.io/horizontal-og-image?img=https://cdn.cutshort.io/public/companies/59a7db300adfdb705f9672e6/codechef-logo",
      description:
        "3-Star programmer with a maximum rating of 1603, demonstrating consistent problem-solving abilities.",
      stats: [
        { label: "Max Rating", value: "1603 (⭐3)" },

      ],
      link: "https://www.codechef.com/users/plague_fawn_80",
    },
    {
      platform: "Codeforces",
      logo: "https://play-lh.googleusercontent.com/zaldniLc2XTBhNlCDR4hcD5bcRYHZ56_lO0yA2Qu-cADShy1_HDWrICSvv0EPTX79WY",
      description:
        "Achieved  peak rating of 1017, showcasing algorithmic proficiency in solving diverse challenges.",
      stats: [
        { label: "Max Rating", value: "1017" },
      ],
      link:"https://codeforces.com/profile/alphabooster",
    },
  ];

  return (
    <>
    <div className="competitive-programming" id="cp">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase"> Competitive Programming</h2>
      <hr />
   
      <div className="cp-container">
        {profiles.map((profile, index) => (
          <div key={index} className="cp-card">
            <div className="cp-header">
              <img src={profile.logo} alt={profile.platform} />
              <h3>{profile.platform}</h3>
            </div>
            <p>{profile.description}</p>
            <div className="cp-stats">
              {profile.stats.map((stat, i) => (
                <div key={i} className="cp-badge">
                  {stat.label}: <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
            <a href={profile.link} target="_blank" rel="noopener noreferrer" className="cp-link">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
    </>
    
  );
};

export default Cp;
