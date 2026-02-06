import React from "react";
import Techincalconcepcard from "./Technicalconcepcard";

function CIVILprep() {
  const civilData = {
    "Civil Engineering": {
      "Structural Engineering": {
        important_topics: {
          "Reinforced Concrete": "https://www.civilengineering.com/",
          "Steel Structures":
            "https://www.civilengineering.com/steel-structures/",
          "Structural Analysis":
            "https://www.civilengineering.com/structural-analysis/",
          "Foundation Design":
            "https://www.civilengineering.com/foundation-design/",
          "Earthquake Engineering":
            "https://www.civilengineering.com/earthquake-engineering/",
        },
      },
      "Geotechnical Engineering": {
        important_topics: {
          "Soil Mechanics": "https://www.civilengineering.com/soil-mechanics/",
          "Foundation Engineering":
            "https://www.civilengineering.com/foundation-engineering/",
          "Slope Stability":
            "https://www.civilengineering.com/slope-stability/",
          "Earth Retaining Structures":
            "https://www.civilengineering.com/retaining-walls/",
          "Site Investigation":
            "https://www.civilengineering.com/site-investigation/",
        },
      },
      "Transportation Engineering": {
        important_topics: {
          "Highway Engineering":
            "https://www.civilengineering.com/highway-engineering/",
          "Traffic Engineering":
            "https://www.civilengineering.com/traffic-engineering/",
          "Railway Engineering":
            "https://www.civilengineering.com/railway-engineering/",
          "Airport Engineering":
            "https://www.civilengineering.com/airport-engineering/",
          "Urban Planning": "https://www.civilengineering.com/urban-planning/",
        },
      },
      "Environmental Engineering": {
        important_topics: {
          "Water Treatment":
            "https://www.civilengineering.com/water-treatment/",
          "Wastewater Treatment":
            "https://www.civilengineering.com/wastewater-treatment/",
          "Air Pollution Control":
            "https://www.civilengineering.com/air-pollution/",
          "Solid Waste Management":
            "https://www.civilengineering.com/solid-waste/",
          "Environmental Impact Assessment":
            "https://www.civilengineering.com/eia/",
        },
      },
    },
  };

  const subjects = civilData["Civil Engineering"];

  return (
    <div>
      <h1>Civil Engineering</h1>
      <Techincalconcepcard subjects={subjects}></Techincalconcepcard>
    </div>
  );
}

export default CIVILprep;
