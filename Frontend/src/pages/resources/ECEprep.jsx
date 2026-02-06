import React from "react";
import Techincalconcepcard from "./Technicalconcepcard";

function ECEprep() {
  const eceData = {
    "Electronics & Communication Engineering": {
      "Digital Electronics": {
        important_topics: {
          "Logic Gates": "https://www.geeksforgeeks.org/logic-gates-in-python/",
          "Boolean Algebra": "https://www.geeksforgeeks.org/boolean-algebra/",
          "Combinational Circuits":
            "https://www.geeksforgeeks.org/combinational-circuits/",
          "Sequential Circuits":
            "https://www.geeksforgeeks.org/sequential-circuits/",
          "Counters & Registers":
            "https://www.geeksforgeeks.org/counters-in-digital-logic/",
        },
      },
      "Analog Electronics": {
        important_topics: {
          "Diodes & Transistors":
            "https://www.electronics-tutorials.ws/diode/diode_1.html",
          Amplifiers:
            "https://www.electronics-tutorials.ws/amplifier/amp_1.html",
          Oscillators:
            "https://www.electronics-tutorials.ws/oscillator/oscillators.html",
          Filters: "https://www.electronics-tutorials.ws/filter/filter_1.html",
          "Power Electronics":
            "https://www.electronics-tutorials.ws/power/power_1.html",
        },
      },
      "Communication Systems": {
        important_topics: {
          "Analog Modulation":
            "https://www.electronics-tutorials.ws/radio/modulation.html",
          "Digital Modulation":
            "https://www.geeksforgeeks.org/digital-modulation-techniques/",
          "Antenna Theory":
            "https://www.electronics-tutorials.ws/antennas/antenna_1.html",
          "Microwave Engineering":
            "https://www.electronics-tutorials.ws/microwave/microwave_1.html",
          "Optical Communication":
            "https://www.geeksforgeeks.org/optical-fiber-communication/",
        },
      },
      "Signal Processing": {
        important_topics: {
          "Fourier Transform":
            "https://www.geeksforgeeks.org/fourier-transform/",
          "Z-Transform": "https://www.geeksforgeeks.org/z-transform/",
          "Digital Filters": "https://www.geeksforgeeks.org/digital-filters/",
          "Image Processing":
            "https://www.geeksforgeeks.org/digital-image-processing/",
          "Speech Processing":
            "https://www.geeksforgeeks.org/speech-recognition-in-python/",
        },
      },
    },
  };

  const subjects = eceData["Electronics & Communication Engineering"];

  return (
    <div>
      <h1>Electronics & Communication Engineering</h1>
      <Techincalconcepcard subjects={subjects}></Techincalconcepcard>
    </div>
  );
}

export default ECEprep;
