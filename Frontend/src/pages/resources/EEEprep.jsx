import React from "react";
import Techincalconcepcard from "./Technicalconcepcard";

function EEEprep() {
  const eeeData = {
    "Electrical & Electronics Engineering": {
      "Electrical Machines": {
        important_topics: {
          "DC Machines": "https://www.electrical4u.com/dc-motor/",
          "AC Machines": "https://www.electrical4u.com/ac-motor/",
          Transformers: "https://www.electrical4u.com/transformer/",
          "Synchronous Machines":
            "https://www.electrical4u.com/synchronous-generator/",
          "Induction Motors": "https://www.electrical4u.com/induction-motor/",
        },
      },
      "Power Systems": {
        important_topics: {
          "Power Generation": "https://www.electrical4u.com/power-generation/",
          "Transmission & Distribution":
            "https://www.electrical4u.com/power-transmission/",
          "Load Flow Analysis":
            "https://www.electrical4u.com/load-flow-analysis/",
          "Fault Analysis": "https://www.electrical4u.com/fault-analysis/",
          "Power System Stability":
            "https://www.electrical4u.com/power-system-stability/",
        },
      },
      "Control Systems": {
        important_topics: {
          "Transfer Functions":
            "https://www.electrical4u.com/transfer-function/",
          "Block Diagrams": "https://www.electrical4u.com/block-diagram/",
          "Stability Analysis":
            "https://www.electrical4u.com/stability-analysis/",
          "Root Locus": "https://www.electrical4u.com/root-locus/",
          "PID Controllers": "https://www.electrical4u.com/pid-controller/",
        },
      },
      "Power Electronics": {
        important_topics: {
          Rectifiers: "https://www.electrical4u.com/rectifier/",
          Inverters: "https://www.electrical4u.com/inverter/",
          Choppers: "https://www.electrical4u.com/chopper/",
          "AC Voltage Controllers":
            "https://www.electrical4u.com/ac-voltage-controller/",
          "DC-DC Converters":
            "https://www.electrical4u.com/dc-to-dc-converter/",
        },
      },
    },
  };

  const subjects = eeeData["Electrical & Electronics Engineering"];

  return (
    <div>
      <h1>Electrical & Electronics Engineering</h1>
      <Techincalconcepcard subjects={subjects}></Techincalconcepcard>
    </div>
  );
}

export default EEEprep;
