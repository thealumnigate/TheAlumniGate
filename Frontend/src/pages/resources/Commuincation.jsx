import React from "react";
import Techincalconcepcard from "./Technicalconcepcard";

function Communication() {
  const communicationData = {
    "Communication Skills": {
      "Speaking & Listening": {
        important_topics: {
          "Resource 1":
            "https://www.spmrcollege.org/ccadmin/files/420222109597.pdf",
          "Resource 2":
            "https://study.com/academy/lesson/speaking-listening-standards-skills.html",
          "Resource 3":
            "https://www.testdome.com/tests/communication-test/200",
        },
      },
      "Group Discussion (GD)": {
        important_topics: {
          "Current Affairs":
            "https://www.indiabix.com/current-affairs/questions-and-answers/",
          "Technology & Innovation":
            "https://www.indiabix.com/group-discussion/topics-with-answers/#tog-new-topics",
          "Management Topics":
            "https://www.indiabix.com/group-discussion/topics-with-answers/#tog-management-topics/",
          "Social Topics":
            "https://www.indiabix.com/group-discussion/topics-with-answers/#tog-social-topics",
        },
      },
    },
  };

  const subjects = communicationData["Communication Skills"];

  return (
    <div>
      <h1>Communication Skills</h1>
      <Techincalconcepcard subjects={subjects}></Techincalconcepcard>
    </div>
  );
}

export default Communication;
