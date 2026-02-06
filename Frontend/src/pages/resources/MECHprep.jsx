import React from "react";
import Techincalconcepcard from "./Technicalconcepcard";

function MECHprep() {
  const mechData = {
    "Mechanical Engineering": {
      Thermodynamics: {
        important_topics: {
          "Laws of Thermodynamics":
            "https://www.mech4study.com/thermodynamics/",
          "Heat Transfer": "https://www.mech4study.com/heat-transfer/",
          "Refrigeration & Air Conditioning":
            "https://www.mech4study.com/refrigeration/",
          "Power Cycles": "https://www.mech4study.com/thermodynamics/",
          Combustion: "https://www.mech4study.com/combustion/",
        },
      },
      Mechanics: {
        important_topics: {
          Statics: "https://www.mech4study.com/statics/",
          Dynamics: "https://www.mech4study.com/dynamics/",
          "Strength of Materials":
            "https://www.mech4study.com/strength-of-materials/",
          "Fluid Mechanics": "https://www.mech4study.com/fluid-mechanics/",
          "Machine Design": "https://www.mech4study.com/machine-design/",
        },
      },
      Manufacturing: {
        important_topics: {
          "Metal Cutting": "https://www.mech4study.com/metal-cutting/",
          "Machining Processes": "https://www.mech4study.com/machining/",
          Welding: "https://www.mech4study.com/welding/",
          Casting: "https://www.mech4study.com/casting/",
          "CNC Machines": "https://www.mech4study.com/cnc-machines/",
        },
      },
      "CAD/CAM": {
        important_topics: {
          AutoCAD: "https://www.autodesk.com/products/autocad",
          SolidWorks: "https://www.solidworks.com/",
          CATIA: "https://www.3ds.com/products-services/catia/",
          ANSYS: "https://www.ansys.com/",
          "Manufacturing Automation": "https://www.mech4study.com/automation/",
        },
      },
    },
  };

  const subjects = mechData["Mechanical Engineering"];

  return (
    <div>
      <h1>Mechanical Engineering</h1>
      <Techincalconcepcard subjects={subjects}></Techincalconcepcard>
    </div>
  );
}

export default MECHprep;
