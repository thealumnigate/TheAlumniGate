// Companies data for placement initialization
import mongoose from "mongoose";

const companies = [
  {
    company_name: "Google",
    job_role: "Software Engineer",
    salary: {
      min: 25,
      max: 35,
      unit: "LPA",
    },
    application_code: "GOOG",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE"],
      min_gpa: 8.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-20T23:59:00Z",
    openings: 15,
    required_skills: [
      "Data Structures",
      "Algorithms",
      "C++",
      "Python",
      "System Design",
    ],
    company_overview: {
      description:
        "Google is a global technology leader specializing in Internet-related services and products. Its portfolio includes the world's most dominant search engine, the Android mobile operating system, the Chrome web browser, and the Google Cloud Platform. Renowned for its data-driven culture and innovation in artificial intelligence through divisions like DeepMind, the company's mission is to organize the world's information and make it universally accessible and useful. It consistently pushes the boundaries of technology in areas from quantum computing to autonomous vehicles, defining how we interact with the digital world.",
      website: "https://careers.google.com/",
      headquarters: "Mountain View, California, USA",
    },
    job_description: {
      title: "Software Engineer",
      overview:
        "As a Software Engineer at Google, you will work on a specific project critical to Google’s needs with opportunities to switch teams and projects as you and our fast-paced business grow and evolve. We need our engineers to be versatile, display leadership qualities and be enthusiastic to take on new problems across the full-stack as we continue to push technology forward.",
      duties_and_responsibilities: [
        "Design, develop, test, deploy, maintain and improve software.",
        "Manage individual project priorities, deadlines and deliverables.",
        "Write high-quality, maintainable, and robust code.",
        "Collaborate with other team members and stakeholders.",
      ],
    },
  },
  {
    company_name: "Microsoft",
    job_role: "Software Development Engineer",
    salary: {
      min: 22,
      max: 30,
      unit: "LPA",
    },
    application_code: "MSFT",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-25T23:59:00Z",
    openings: 25,
    required_skills: ["Java", "C#", ".NET", "Cloud Computing", "Algorithms"],
    company_overview: {
      description:
        "Microsoft is a multinational technology corporation that creates enterprise and consumer software, personal computers, and related services. Its core products, such as the Windows operating system and the Office productivity suite, are industry standards. In recent years, Microsoft has become a dominant force in cloud computing with its Azure platform, competing directly at the top of the market. The company also has a strong presence in gaming with Xbox and continues to invest heavily in artificial intelligence, business solutions with Dynamics 365, and professional networking through its ownership of LinkedIn.",
      website: "https://careers.microsoft.com/",
      headquarters: "Redmond, Washington, USA",
    },
    job_description: {
      title: "Software Development Engineer",
      overview:
        "As a Software Development Engineer at Microsoft, you will be a key part of a team that designs, builds, and maintains services and products that are used by millions of people. You will have the opportunity to work on complex problems and create impact at a global scale.",
      duties_and_responsibilities: [
        "Write clean, well-tested code to deliver features.",
        "Collaborate with product managers and designers to create user-friendly solutions.",
        "Participate in the full software development lifecycle, including design, coding, testing, and deployment.",
        "Debug and resolve production issues.",
      ],
    },
  },
  {
    company_name: "Amazon",
    job_role: "SDE-1",
    salary: {
      min: 20,
      max: 28,
      unit: "LPA",
    },
    application_code: "AMZN",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-22T23:59:00Z",
    openings: 40,
    required_skills: [
      "Problem Solving",
      "Data Structures",
      "Java",
      "Python",
      "AWS",
    ],
    company_overview: {
      description:
        "Amazon is a global technology giant renowned for its focus on e-commerce, cloud computing, digital streaming, and artificial intelligence. Starting as an online bookstore, it has evolved into the world's largest online retailer. Its cloud computing division, Amazon Web Services (AWS), is the global leader, providing a vast array of services to businesses of all sizes. Amazon also produces consumer electronics like the Kindle and Echo devices powered by the Alexa AI assistant, and it has a major presence in entertainment through Prime Video and Amazon Studios.",
      website: "https://www.amazon.jobs/",
      headquarters: "Seattle, Washington, USA",
    },
    job_description: {
      title: "Software Development Engineer - 1",
      overview:
        "As an SDE-1 at Amazon, you will be part of a team building scalable, reliable, and high-performance systems. You will work on real-world problems and have a direct impact on Amazon's customers. This is an opportunity to learn and grow in a fast-paced and innovative environment.",
      duties_and_responsibilities: [
        "Design and code new features and enhancements.",
        "Write unit tests and participate in code reviews.",
        "Troubleshoot and resolve software defects.",
        "Work with senior engineers to design and implement solutions.",
      ],
    },
  },
  {
    company_name: "Tata Consultancy Services (TCS)",
    job_role: "Assistant System Engineer",
    salary: {
      min: 4,
      max: 7,
      unit: "LPA",
    },
    application_code: "TCS",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE", "Mechanical"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-04T23:59:00Z",
    openings: 200,
    required_skills: [
      "Programming Logic",
      "SQL",
      "Java",
      "Communication Skills",
    ],
    company_overview: {
      description:
        "Tata Consultancy Services (TCS) is an Indian multinational IT services and consulting company, and a flagship entity of the Tata Group. As one of the largest IT service providers in the world, TCS offers a comprehensive, integrated portfolio of business, technology, and engineering services and solutions. Its global presence spans across numerous industries, including banking, retail, and healthcare. TCS is known for its extensive workforce, strong corporate training programs, and significant contributions to digital transformation projects for Fortune 500 companies worldwide, focusing on areas like cloud, AI, and cybersecurity.",
      website: "https://www.tcs.com/careers",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Assistant System Engineer",
      overview:
        "The Assistant System Engineer role at TCS is an entry-level position designed for recent graduates. You will undergo extensive training and then be deployed to projects where you will work alongside experienced professionals to develop, maintain, and support software applications for global clients.",
      duties_and_responsibilities: [
        "Complete the initial training program successfully.",
        "Write code as per the project requirements and coding standards.",
        "Perform unit testing and debugging.",
        "Collaborate with team members to deliver project goals.",
      ],
    },
  },
  {
    company_name: "Infosys",
    job_role: "Systems Engineer",
    salary: {
      min: 4,
      max: 6,
      unit: "LPA",
    },
    application_code: "INFY",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE", "Mechanical"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-07T23:59:00Z",
    openings: 150,
    required_skills: ["Python", "Database Management", "SDLC", "Teamwork"],
    company_overview: {
      description:
        "Infosys Limited is a global leader in next-generation digital services and consulting. For over four decades, it has guided global enterprises in navigating their digital transformation journeys. The company provides end-to-end business solutions that leverage technology, including application development, maintenance, and validation services. With a strong focus on AI-powered core services and agile digital at scale, Infosys helps clients in over 50 countries create and execute strategies for their digital evolution. Its training facilities are renowned for preparing a vast talent pool for the challenges of the IT industry.",
      website: "https://www.infosys.com/careers/",
      headquarters: "Bengaluru, Karnataka, India",
    },
    job_description: {
      title: "Systems Engineer",
      overview:
        "As a Systems Engineer at Infosys, you will be a part of a dynamic team responsible for developing and maintaining software applications. You will receive world-class training and have the opportunity to work on cutting-edge technologies and diverse projects for global clients.",
      duties_and_responsibilities: [
        "Participate in the software development lifecycle, from requirements gathering to deployment.",
        "Develop code, perform testing, and debug applications.",
        "Create and maintain technical documentation.",
        "Provide support for production systems.",
      ],
    },
  },
  {
    company_name: "Qualcomm",
    job_role: "SoC Design Engineer",
    salary: {
      min: 15,
      max: 22,
      unit: "LPA",
    },
    application_code: "QCOM",
    eligibility: {
      branches: ["ECE", "EEE", "CSE"],
      min_gpa: 8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-18T23:59:00Z",
    openings: 10,
    required_skills: [
      "Verilog",
      "VHDL",
      "SystemVerilog",
      "Digital Logic Design",
    ],
    company_overview: {
      description:
        "Qualcomm is a world-leading wireless technology innovator and the driving force behind the development, launch, and expansion of 5G. Its foundational technologies have revolutionized the mobile industry, powering the majority of smartphones globally through its Snapdragon processor family. The company's expertise extends beyond mobile into areas like automotive, the Internet of Things (IoT), and computing. Qualcomm's business model heavily relies on licensing its vast portfolio of patents, which are fundamental to all modern wireless communication standards, making it a critical player in the connected world.",
      website: "https://www.qualcomm.com/company/careers",
      headquarters: "San Diego, California, USA",
    },
    job_description: {
      title: "SoC Design Engineer",
      overview:
        "As a SoC Design Engineer at Qualcomm, you will be involved in the design and development of next-generation wireless chips. You will work on various aspects of the chip design process, from architecture to implementation, and contribute to creating state-of-the-art products.",
      duties_and_responsibilities: [
        "Perform RTL design and coding in Verilog/VHDL.",
        "Contribute to the micro-architecture of digital blocks.",
        "Work on synthesis, timing analysis, and power optimization.",
        "Collaborate with verification and physical design teams.",
      ],
    },
  },
  {
    company_name: "NVIDIA",
    job_role: "Hardware Engineer",
    salary: {
      min: 18,
      max: 25,
      unit: "LPA",
    },
    application_code: "NVDA",
    eligibility: {
      branches: ["ECE", "EEE", "CSE"],
      min_gpa: 8.2,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-21T23:59:00Z",
    openings: 8,
    required_skills: [
      "GPU Architecture",
      "VLSI",
      "C++",
      "Computer Architecture",
    ],
    company_overview: {
      description:
        "NVIDIA is a technology company renowned for inventing the Graphics Processing Unit (GPU). While its roots are in the PC gaming market with its GeForce line of GPUs, the company's parallel processing capabilities have made its hardware essential for the artificial intelligence revolution. NVIDIA's data center platforms and CUDA programming model are the industry standard for AI training and inference. The company is also a leader in professional visualization, high-performance computing, and is rapidly expanding its presence in the automotive market with its DRIVE platform for autonomous vehicles.",
      website: "https://www.nvidia.com/en-in/about-nvidia/careers/",
      headquarters: "Santa Clara, California, USA",
    },
    job_description: {
      title: "Hardware Engineer",
      overview:
        "As a Hardware Engineer at NVIDIA, you will be part of a team that creates the world's most advanced GPUs and processors. You will work on the design, verification, and implementation of complex hardware systems that power everything from gaming to artificial intelligence.",
      duties_and_responsibilities: [
        "Design and implement digital logic for GPUs and other hardware components.",
        "Verify hardware designs using simulation and formal methods.",
        "Analyze and optimize performance, power, and area of designs.",
        "Collaborate with software and architecture teams.",
      ],
    },
  },
  {
    company_name: "Larsen & Toubro (L&T)",
    job_role: "Graduate Engineer Trainee",
    salary: {
      min: 6,
      max: 8,
      unit: "LPA",
    },
    application_code: "LT",
    eligibility: {
      branches: ["Civil", "Mechanical", "EEE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-09T23:59:00Z",
    openings: 50,
    required_skills: [
      "AutoCAD",
      "Project Management",
      "Core Subject Knowledge",
    ],
    company_overview: {
      description:
        "Larsen & Toubro Ltd, commonly known as L&T, is an Indian multinational conglomerate with primary interests in engineering, construction, manufacturing, technology, and financial services. It is one of the largest and most respected companies in India's private sector. L&T's construction arm has been responsible for executing some of the most iconic and complex infrastructure projects in India and overseas. The company's diverse portfolio also includes heavy engineering, defense manufacturing, power, and IT services through its subsidiaries LTI and Mindtree, making it a pivotal contributor to industrial and economic growth.",
      website: "https://www.larsentoubro.com/corporate/careers/",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Graduate Engineer Trainee",
      overview:
        "As a Graduate Engineer Trainee at L&T, you will embark on a comprehensive training program designed to develop you into a future leader in the engineering and construction industry. You will gain hands-on experience in various aspects of project management, design, and execution.",
      duties_and_responsibilities: [
        "Undergo training in your respective engineering discipline.",
        "Assist in project planning, execution, and monitoring.",
        "Prepare technical reports and documentation.",
        "Ensure compliance with safety and quality standards.",
      ],
    },
  },
  {
    company_name: "Tata Steel",
    job_role: "Management Trainee (Technical)",
    salary: {
      min: 7,
      max: 9,
      unit: "LPA",
    },
    application_code: "TSTEEL",
    eligibility: {
      branches: ["Mechanical", "EEE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-11T23:59:00Z",
    openings: 20,
    required_skills: ["Thermodynamics", "Material Science", "Machine Design"],
    company_overview: {
      description:
        "Tata Steel Limited is one of the world's most geographically diversified steel producers. As a flagship company of the Tata Group, it stands among the top global steel companies with an annual crude steel capacity of 34 million tonnes. Founded in India in 1907, it has a rich history of being a pioneer in the industry. The company's operations span across five continents, with a significant presence in India, the UK, and the Netherlands. Tata Steel is committed to sustainable practices and innovation, producing a wide range of steel products for automotive, construction, and consumer goods industries.",
      website: "https://www.tatasteel.com/careers/",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Management Trainee (Technical)",
      overview:
        "The Management Trainee (Technical) program at Tata Steel is designed to groom young engineers for leadership roles in the steel industry. You will gain exposure to various aspects of steel manufacturing, from raw materials to finished products, and contribute to process improvements and innovation.",
      duties_and_responsibilities: [
        "Participate in a structured training program across different departments.",
        "Work on projects related to production, maintenance, and quality control.",
        "Analyze data and identify opportunities for process optimization.",
        "Adhere to safety and environmental regulations.",
      ],
    },
  },
  {
    company_name: "Siemens",
    job_role: "Power Systems Engineer",
    salary: {
      min: 6,
      max: 8,
      unit: "LPA",
    },
    application_code: "SIEM",
    eligibility: {
      branches: ["EEE", "ECE", "Mechanical"],
      min_gpa: 7.2,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-11-03T23:59:00Z",
    openings: 12,
    required_skills: ["PLC", "SCADA", "Power Electronics", "Control Systems"],
    company_overview: {
      description:
        "Siemens is a German multinational conglomerate and a global powerhouse focused on the areas of electrification, automation, and digitalization. It is one of the world's largest producers of energy-efficient, resource-saving technologies. Siemens is a leading supplier of systems for power generation and transmission as well as medical diagnosis. Through its various divisions, the company plays a crucial role in infrastructure development, industrial automation, and software for industry. Its healthcare arm, Siemens Healthineers, is a key player in medical imaging and diagnostics, reflecting the company's broad and impactful technological footprint.",
      website: "https://www.siemens.com/global/en/company/jobs.html",
      headquarters: "Munich, Germany",
    },
    job_description: {
      title: "Power Systems Engineer",
      overview:
        "As a Power Systems Engineer at Siemens, you will work on the design, development, and implementation of solutions for power generation, transmission, and distribution. You will be part of a team that is shaping the future of energy and contributing to a more sustainable world.",
      duties_and_responsibilities: [
        "Design and analyze electrical power systems.",
        "Develop and test control systems using PLC and SCADA.",
        "Work on projects related to smart grids, renewable energy, and industrial automation.",
        "Provide technical support to clients and stakeholders.",
      ],
    },
  },
  {
    company_name: "PayPal",
    job_role: "Fintech Software Engineer",
    salary: {
      min: 14,
      max: 20,
      unit: "LPA",
    },
    application_code: "PP",
    eligibility: {
      branches: ["CSE", "IT", "CSM", "ECE"],
      min_gpa: 7.8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-28T23:59:00Z",
    openings: 18,
    required_skills: [
      "Java",
      "Spring Boot",
      "Microservices",
      "Security",
      "REST APIs",
    ],
    company_overview: {
      description:
        "PayPal is a global financial technology company that operates a leading digital payments platform. It enables individuals and businesses to send and receive money electronically in more than 200 countries and markets. The platform allows users to manage and move money with flexibility, whether through a PayPal account, bank account, or credit card. By pioneering secure and convenient online transactions, PayPal has been instrumental in the growth of e-commerce. Through its acquisitions, such as Venmo and Xoom, the company continues to innovate and expand its services in the peer-to-peer and international remittance markets.",
      website: "https://www.paypal.com/us/webapps/mpp/jobs",
      headquarters: "San Jose, California, USA",
    },
    job_description: {
      title: "Fintech Software Engineer",
      overview:
        "As a Fintech Software Engineer at PayPal, you will be responsible for designing, developing, and maintaining the software that powers our global payments platform. You will work on building secure, scalable, and reliable financial services that are used by millions of people every day.",
      duties_and_responsibilities: [
        "Develop and maintain backend services using Java and Spring Boot.",
        "Design and implement REST APIs and microservices.",
        "Ensure the security and compliance of financial applications.",
        "Collaborate with cross-functional teams to deliver high-quality products.",
      ],
    },
  },
  {
    company_name: "Accenture",
    job_role: "Associate Software Engineer",
    salary: {
      min: 5,
      max: 7,
      unit: "LPA",
    },
    application_code: "ACC",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-14T23:59:00Z",
    openings: 100,
    required_skills: ["SQL", "Java", "Testing", "Cloud Fundamentals"],
    company_overview: {
      description:
        "Accenture is a global professional services company providing a broad range of services in strategy and consulting, interactive, technology, and operations. With deep industry expertise, it helps organizations embrace change and create value. Accenture is a leader in digital transformation, cloud, and security, serving clients in more than 120 countries. The company leverages technology and human ingenuity to deliver on the promise of technology and improve how the world works and lives. Its vast network of Advanced Technology and Intelligent Operations centers enables it to offer scalable and efficient solutions globally.",
      website: "https://www.accenture.com/in-en/careers",
      headquarters: "Dublin, Ireland",
    },
    job_description: {
      title: "Associate Software Engineer",
      overview:
        "As an Associate Software Engineer at Accenture, you will be part of a team that helps clients transform their businesses using technology. You will work on developing, testing, and deploying software solutions across various industries and platforms.",
      duties_and_responsibilities: [
        "Assist in the design and development of software applications.",
        "Write code and perform unit testing.",
        "Collaborate with team members to understand client requirements.",
        "Provide support for applications in production.",
      ],
    },
  },
  {
    company_name: "Capgemini",
    job_role: "Analyst",
    salary: {
      min: 4.5,
      max: 6.5,
      unit: "LPA",
    },
    application_code: "CAPG",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-15T23:59:00Z",
    openings: 80,
    required_skills: ["C++", "Python", "Problem Solving", "Communication"],
    company_overview: {
      description:
        "Capgemini is a global leader in consulting, technology services, and digital transformation. Headquartered in France, the company helps clients navigate the complexities of the modern digital economy. It offers an array of integrated services that combine technology with deep industry expertise to address the entire breadth of clients' opportunities in the evolving world of cloud, data, AI, and connectivity. Capgemini is driven by the conviction that the business value of technology comes from and through people, and it prides itself on its multicultural and collaborative approach to client engagement.",
      website: "https://www.capgemini.com/in-en/careers/",
      headquarters: "Paris, France",
    },
    job_description: {
      title: "Analyst",
      overview:
        "As an Analyst at Capgemini, you will be part of a team that delivers technology-driven solutions to clients. You will be involved in various stages of the project lifecycle, from understanding requirements to development and testing, and will have the opportunity to build a strong foundation for your career in IT.",
      duties_and_responsibilities: [
        "Develop, test, and maintain software applications.",
        "Analyze and solve technical problems.",
        "Collaborate with senior team members and clients.",
        "Create and maintain project documentation.",
      ],
    },
  },
  {
    company_name: "DataBricks",
    job_role: "Data Engineer",
    salary: {
      min: 18,
      max: 24,
      unit: "LPA",
    },
    application_code: "DBRICKS",
    eligibility: {
      branches: ["CSD", "CSM", "CSE", "IT"],
      min_gpa: 8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-24T23:59:00Z",
    openings: 10,
    required_skills: ["Apache Spark", "Python", "SQL", "Big Data", "AWS/Azure"],
    company_overview: {
      description:
        "Databricks is a data and AI company that pioneered the concept of the lakehouse architecture in the cloud. Founded by the original creators of Apache Spark, the company provides a unified platform that combines the best elements of data warehouses and data lakes. This allows organizations to manage all their data and perform both traditional analytics and complex AI/machine learning workloads on a single, scalable platform. Databricks helps data teams collaborate more effectively and accelerates innovation by simplifying data engineering, data science, and machine learning processes.",
      website: "https://www.databricks.com/company/careers",
      headquarters: "San Francisco, California, USA",
    },
    job_description: {
      title: "Data Engineer",
      overview:
        "As a Data Engineer at Databricks, you will be responsible for designing, building, and maintaining the data infrastructure that powers our products and services. You will work with large-scale data systems and help our customers solve their toughest data challenges.",
      duties_and_responsibilities: [
        "Build and maintain data pipelines using Apache Spark and other big data technologies.",
        "Design and implement data models and schemas.",
        "Optimize data processing and storage for performance and scalability.",
        "Collaborate with data scientists and analysts to support their data needs.",
      ],
    },
  },
  {
    company_name: "Mu Sigma",
    job_role: "Business Analyst",
    salary: {
      min: 6,
      max: 9,
      unit: "LPA",
    },
    application_code: "MSIG",
    eligibility: {
      branches: ["CSM", "CSD", "CSE", "IT", "ECE", "EEE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-01T23:59:00Z",
    openings: 30,
    required_skills: ["Statistics", "SQL", "R", "Python", "Communication"],
    company_overview: {
      description:
        "Mu Sigma is a leading global provider of decision sciences and analytics services. The company helps large enterprises make better, data-driven decisions by combining data, mathematics, and business acumen. Mu Sigma's unique approach involves creating a 'man-machine' ecosystem, where human intelligence and scalable technology work in tandem to solve complex business problems. They serve a wide range of industries, including healthcare, retail, and financial services, offering solutions that span from marketing and supply chain analytics to risk management. Their interdisciplinary approach makes them a key player in the data analytics space.",
      website: "https://www.mu-sigma.com/careers/",
      headquarters: "Bengaluru, Karnataka, India",
    },
    job_description: {
      title: "Business Analyst",
      overview:
        "As a Business Analyst at Mu Sigma, you will work at the intersection of business, math, and technology to help clients solve their most complex problems. You will analyze large datasets, build analytical models, and generate insights that drive business decisions.",
      duties_and_responsibilities: [
        "Understand client business problems and translate them into analytical questions.",
        "Collect, clean, and analyze data using statistical techniques.",
        "Develop and implement analytical models.",
        "Present findings and recommendations to clients.",
      ],
    },
  },
  {
    company_name: "Zensar Technologies",
    job_role: "Junior Software Engineer",
    salary: {
      min: 4,
      max: 5,
      unit: "LPA",
    },
    application_code: "ZENSAR",
    eligibility: {
      branches: ["CSE", "IT"],
      min_gpa: 6,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-21T23:59:00Z",
    openings: 40,
    required_skills: ["Java", "SQL", "HTML", "CSS"],
    company_overview: {
      description:
        "Zensar Technologies is a digital solutions and technology services company that is part of the RPG Group. It specializes in helping organizations navigate their digital transformation journey with a focus on experience, data, and engineering. Zensar's services cover a wide spectrum, including cloud and infrastructure, data management, enterprise applications, and advanced analytics. The company operates globally, serving clients in industries like retail, manufacturing, and financial services. They aim to create meaningful, experience-led digital solutions that drive business impact and customer satisfaction for their clients.",
      website: "https://www.zensar.com/careers",
      headquarters: "Pune, Maharashtra, India",
    },
    job_description: {
      title: "Junior Software Engineer",
      overview:
        "As a Junior Software Engineer at Zensar, you will be part of a team that develops and maintains software applications for our global clients. This is an excellent opportunity for recent graduates to start their careers in the IT industry and work on a variety of technologies.",
      duties_and_responsibilities: [
        "Write and maintain code for web and mobile applications.",
        "Perform unit testing and participate in code reviews.",
        "Troubleshoot and resolve software issues.",
        "Collaborate with team members to achieve project goals.",
      ],
    },
  },
  {
    company_name: "ThoughtWorks",
    job_role: "Application Developer",
    salary: {
      min: 10,
      max: 13,
      unit: "LPA",
    },
    application_code: "TWORKS",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-31T23:59:00Z",
    openings: 20,
    required_skills: [
      "Object-Oriented Programming",
      "Agile Methodologies",
      "TDD",
      "Java/Ruby",
    ],
    company_overview: {
      description:
        "ThoughtWorks is a global technology consultancy that helps organizations design, create, and deliver exceptional digital products and experiences. They are pioneers of the Agile software development methodology and strong advocates for practices like continuous integration and continuous delivery. ThoughtWorks operates as a community of passionate technologists who combine strategy, design, and software engineering to solve their clients' toughest challenges. The company is also known for its commitment to social and economic justice, aiming to use technology to create a more equitable world. Their culture encourages continuous learning and innovation.",
      website: "https://www.thoughtworks.com/careers",
      headquarters: "Chicago, Illinois, USA",
    },
    job_description: {
      title: "Application Developer",
      overview:
        "As an Application Developer at ThoughtWorks, you will work in an Agile environment to build custom software for our clients. You will be part of a collaborative team that values clean code, test-driven development (TDD), and continuous delivery.",
      duties_and_responsibilities: [
        "Develop high-quality software using object-oriented programming languages.",
        "Practice TDD and write automated tests.",
        "Participate in pair programming and code reviews.",
        "Collaborate with clients to understand their needs and deliver value.",
      ],
    },
  },
  {
    company_name: "Salesforce",
    job_role: "Software Engineer, AMTS",
    salary: {
      min: 16,
      max: 21,
      unit: "LPA",
    },
    application_code: "SFDC",
    eligibility: {
      branches: ["CSE", "IT", "CSM"],
      min_gpa: 8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-26T23:59:00Z",
    openings: 15,
    required_skills: ["Java", "JavaScript", "Database", "Cloud Computing"],
    company_overview: {
      description:
        "Salesforce is the global leader in cloud-based Customer Relationship Management (CRM) software. Its platform, Customer 360, provides a unified view of customers for marketing, sales, commerce, and service departments, enabling companies to deliver personalized experiences. Beyond its flagship CRM product, Salesforce offers a suite of enterprise applications focused on analytics, application development, and marketing automation. The company is also known for its Trailhead learning platform and its philanthropic 1-1-1 model, where it donates 1% of its equity, product, and employee time to communities worldwide.",
      website: "https://www.salesforce.com/company/careers/",
      headquarters: "San Francisco, California, USA",
    },
    job_description: {
      title: "Software Engineer, Associate Member of Technical Staff (AMTS)",
      overview:
        "As a Software Engineer (AMTS) at Salesforce, you will be part of a team that builds and enhances our industry-leading CRM platform. You will work on challenging problems in distributed systems, cloud computing, and application development, and contribute to the success of our customers.",
      duties_and_responsibilities: [
        "Design, develop, and test features for the Salesforce platform.",
        "Write robust and scalable code in Java and JavaScript.",
        "Collaborate with product managers and other engineers to deliver high-quality solutions.",
        "Participate in the entire software development lifecycle.",
      ],
    },
  },
  {
    company_name: "Intel",
    job_role: "VLSI Design Engineer",
    salary: {
      min: 14,
      max: 19,
      unit: "LPA",
    },
    application_code: "INTEL",
    eligibility: {
      branches: ["ECE", "EEE"],
      min_gpa: 7.8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-29T23:59:00Z",
    openings: 12,
    required_skills: [
      "Verilog",
      "SystemVerilog",
      "UVM",
      "Semiconductor Physics",
    ],
    company_overview: {
      description:
        "Intel Corporation is the world's largest semiconductor chip manufacturer by revenue and a pioneer of the x86 series of microprocessors, the processors found in most personal computers. For decades, Intel has been at the forefront of technological innovation, driving the PC revolution and powering the data center. Today, the company is undergoing a significant transformation, expanding its focus beyond CPUs to include FPGAs, AI accelerators, and advanced chip manufacturing services. Intel's vision is to create world-changing technology that enriches the lives of every person on Earth.",
      website:
        "https://www.intel.com/content/www/us/en/jobs/jobs-at-intel.html",
      headquarters: "Santa Clara, California, USA",
    },
    job_description: {
      title: "VLSI Design Engineer",
      overview:
        "As a VLSI Design Engineer at Intel, you will be involved in the design and development of the next generation of microprocessors and semiconductor devices. You will work on various stages of the chip design lifecycle, from logic design to verification and validation.",
      duties_and_responsibilities: [
        "Perform RTL design and logic synthesis.",
        "Develop and execute verification plans using SystemVerilog and UVM.",
        "Analyze timing, power, and area of designs.",
        "Collaborate with architecture, physical design, and validation teams.",
      ],
    },
  },
  {
    company_name: "Texas Instruments",
    job_role: "Analog Design Engineer",
    salary: {
      min: 13,
      max: 18,
      unit: "LPA",
    },
    application_code: "TI",
    eligibility: {
      branches: ["ECE", "EEE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-30T23:59:00Z",
    openings: 10,
    required_skills: [
      "Analog Circuits",
      "Cadence Virtuoso",
      "Spice",
      "Semiconductors",
    ],
    company_overview: {
      description:
        "Texas Instruments (TI) is a global semiconductor company that designs, manufactures, tests, and sells analog and embedded processing chips. TI's products are essential components in virtually every type of electronic equipment, from industrial machinery and automotive systems to personal electronics and communications equipment. The company is the market leader in analog integrated circuits, which are crucial for managing power and converting signals in electronic devices. TI is focused on providing the fundamental building blocks of modern electronics, helping innovators create smarter, safer, and more connected technologies.",
      website: "https://careers.ti.com/",
      headquarters: "Dallas, Texas, USA",
    },
    job_description: {
      title: "Analog Design Engineer",
      overview:
        "As an Analog Design Engineer at Texas Instruments, you will be responsible for designing and developing analog and mixed-signal integrated circuits. You will work on a variety of products, from power management to data converters, and contribute to the innovation that powers modern electronics.",
      duties_and_responsibilities: [
        "Design and simulate analog circuits using tools like Cadence Virtuoso and SPICE.",
        "Perform layout and verification of analog designs.",
        "Test and debug silicon prototypes.",
        "Collaborate with digital, systems, and test engineers.",
      ],
    },
  },
  {
    company_name: "AFCONS Infrastructure",
    job_role: "Site Engineer",
    salary: {
      min: 5,
      max: 7,
      unit: "LPA",
    },
    application_code: "AFCONS",
    eligibility: {
      branches: ["Civil", "Mechanical"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-11-25T23:59:00Z",
    openings: 25,
    required_skills: ["AutoCAD", "STAAD Pro", "Site Management", "Surveying"],
    company_overview: {
      description:
        "AFCONS Infrastructure Limited, part of the Shapoorji Pallonji Group, is a leading infrastructure development company in India with a global footprint. The company has a strong reputation for executing large and complex engineering, procurement, and construction (EPC) projects. Its expertise spans various sectors, including marine and industrial, surface transport, urban infrastructure, and hydro & underground works. AFCONS is known for its technological prowess and commitment to quality and safety, having delivered numerous landmark projects like bridges, tunnels, ports, and metro rail systems, both in India and internationally.",
      website: "https://www.afcons.com/careers-page",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Site Engineer",
      overview:
        "As a Site Engineer at AFCONS, you will be responsible for the day-to-day management and supervision of construction projects. You will ensure that work is completed on time, within budget, and to the required quality and safety standards. This role offers hands-on experience in the execution of large-scale infrastructure projects.",
      duties_and_responsibilities: [
        "Supervise and coordinate construction activities on-site.",
        "Interpret engineering drawings and specifications.",
        "Monitor project progress and ensure adherence to schedules.",
        "Implement and enforce safety and quality control procedures.",
      ],
    },
  },
  {
    company_name: "Ashok Leyland",
    job_role: "Graduate Apprentice",
    salary: {
      min: 6,
      max: 7.5,
      unit: "LPA",
    },
    application_code: "ASHOKL",
    eligibility: {
      branches: ["Mechanical", "EEE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-17T23:59:00Z",
    openings: 15,
    required_skills: [
      "Automotive Engineering",
      "CAD/CAM",
      "Manufacturing Processes",
    ],
    company_overview: {
      description:
        "Ashok Leyland is an Indian multinational automotive manufacturer and the flagship company of the Hinduja Group. It is the second-largest manufacturer of commercial vehicles in India, the fourth-largest manufacturer of buses in the world, and the tenth-largest manufacturer of trucks. The company's product portfolio includes buses, trucks, light vehicles, and defense vehicles. With a strong focus on innovation and customer-centricity, Ashok Leyland is a key player in the transportation sector, continually developing technologies for improved fuel efficiency and lower emissions, including a growing focus on electric vehicles.",
      website: "https://www.ashokleyland.com/in/en/careers",
      headquarters: "Chennai, Tamil Nadu, India",
    },
    job_description: {
      title: "Graduate Apprentice",
      overview:
        "As a Graduate Apprentice at Ashok Leyland, you will undergo a structured training program that provides exposure to various functions within the automotive industry, including design, manufacturing, and quality control. This is an opportunity to learn from experienced professionals and build a career in a leading automotive company.",
      duties_and_responsibilities: [
        "Rotate through different departments to gain a comprehensive understanding of the business.",
        "Assist in projects related to product development and manufacturing processes.",
        "Learn and apply principles of automotive engineering.",
        "Contribute to continuous improvement initiatives.",
      ],
    },
  },
  {
    company_name: "Gammon India",
    job_role: "Junior Civil Engineer",
    salary: {
      min: 4.5,
      max: 6,
      unit: "LPA",
    },
    application_code: "GAMMON",
    eligibility: {
      branches: ["Civil"],
      min_gpa: 6.5,
      max_backlogs: 2,
      min_internships: 0,
    },
    deadline: "2025-11-30T23:59:00Z",
    openings: 20,
    required_skills: [
      "Structural Analysis",
      "Concrete Technology",
      "Quantity Surveying",
    ],
    company_overview: {
      description:
        "Gammon India Limited is one of the largest civil engineering construction companies in India, with a history spanning over a century. The company has a track record of executing a wide array of projects, including bridges, tunnels, ports, power plants, and transportation infrastructure. It is known for its pioneering work in prestressed concrete and for constructing some of India's most iconic structures, such as the Gateway of India. Despite facing financial challenges, Gammon India's legacy is built on its engineering expertise and its significant contributions to the nation's infrastructure development over the decades.",
      website: "http://www.gammonindia.com/careers/",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Junior Civil Engineer",
      overview:
        "As a Junior Civil Engineer at Gammon India, you will be part of a team that works on large-scale infrastructure projects. You will apply your engineering knowledge to various aspects of project execution, from planning and design to construction and quality control.",
      duties_and_responsibilities: [
        "Assist in the planning and design of civil engineering projects.",
        "Prepare cost estimates and quantity surveys.",
        "Supervise construction activities on-site.",
        "Ensure compliance with technical specifications and safety standards.",
      ],
    },
  },
  {
    company_name: "Mahindra & Mahindra",
    job_role: "R&D Engineer",
    salary: {
      min: 7,
      max: 9,
      unit: "LPA",
    },
    application_code: "MNM",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7.2,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-13T23:59:00Z",
    openings: 18,
    required_skills: ["SolidWorks", "Ansys", "Automotive Design"],
    company_overview: {
      description:
        "Mahindra & Mahindra (M&M) is an Indian multinational automotive manufacturing corporation and a key part of the Mahindra Group. It is a market leader in utility vehicles and tractors in India and is one of the largest vehicle manufacturers by production in the country. The company's diverse portfolio also includes electric vehicles, commercial vehicles, and two-wheelers. M&M is known for its rugged and reliable vehicles and has a growing international presence. The company is committed to innovation, particularly in the areas of electric mobility and sustainable farming solutions.",
      website: "https://www.mahindra.com/careers",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "R&D Engineer",
      overview:
        "As an R&D Engineer at Mahindra & Mahindra, you will be part of the team that designs and develops the next generation of vehicles. You will work on various aspects of automotive design, from concept to prototyping, and contribute to creating innovative and reliable products.",
      duties_and_responsibilities: [
        "Design and model automotive components using CAD software like SolidWorks.",
        "Perform simulations and analysis using tools like Ansys.",
        "Participate in prototyping and testing of new designs.",
        "Collaborate with manufacturing and testing teams.",
      ],
    },
  },
  {
    company_name: "Oracle",
    job_role: "Server Technology Engineer",
    salary: {
      min: 12,
      max: 16,
      unit: "LPA",
    },
    application_code: "ORCL",
    eligibility: {
      branches: ["CSE", "IT", "ECE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-02T23:59:00Z",
    openings: 22,
    required_skills: ["Databases", "SQL", "PL/SQL", "Java", "Linux"],
    company_overview: {
      description:
        "Oracle Corporation is a multinational computer technology corporation best known for its database software and technology, cloud engineered systems, and enterprise software products. The company's flagship product, the Oracle Database, has long been a dominant force in the enterprise market. In recent years, Oracle has been aggressively transitioning its business to the cloud, offering a comprehensive and fully integrated stack of cloud applications and platform services. It provides leading solutions in areas such as Enterprise Resource Planning (ERP), Human Capital Management (HCM), and Customer Experience (CX), serving businesses of all sizes.",
      website: "https://www.oracle.com/in/careers/",
      headquarters: "Austin, Texas, USA",
    },
    job_description: {
      title: "Server Technology Engineer",
      overview:
        "As a Server Technology Engineer at Oracle, you will be part of the team that develops the core components of the Oracle Database and cloud infrastructure. You will work on challenging problems in areas like data management, distributed systems, and performance optimization.",
      duties_and_responsibilities: [
        "Design, develop, and maintain software for Oracle's server technologies.",
        "Write code in Java, C++, and other languages.",
        "Work on database internals, storage systems, and networking.",
        "Troubleshoot and resolve complex technical issues.",
      ],
    },
  },
  {
    company_name: "Fractal Analytics",
    job_role: "AI Engineer",
    salary: {
      min: 9,
      max: 14,
      unit: "LPA",
    },
    application_code: "FRACTAL",
    eligibility: {
      branches: ["CSD", "CSM", "CSE", "IT", "ECE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-05T23:59:00Z",
    openings: 15,
    required_skills: [
      "Machine Learning",
      "Python",
      "TensorFlow",
      "PyTorch",
      "NLP",
    ],
    company_overview: {
      description:
        "Fractal is a global provider of artificial intelligence and advanced analytics solutions to Fortune 500 companies. The company helps businesses leverage AI, engineering, and design to make better decisions and understand their customers. Fractal's offerings include a range of products and services that tackle problems in areas like marketing effectiveness, customer analytics, and supply chain management. They are recognized for their strong company culture and their ability to attract top talent in the AI and analytics space. Their mission is to power every human decision in the enterprise with data-driven intelligence.",
      website: "https://fractal.ai/careers/",
      headquarters: "New York, New York, USA",
    },
    job_description: {
      title: "AI Engineer",
      overview:
        "As an AI Engineer at Fractal, you will design, build, and deploy machine learning models to solve complex business problems for our clients. You will work with cutting-edge AI technologies and have the opportunity to make a significant impact in various industries.",
      duties_and_responsibilities: [
        "Develop and train machine learning models using frameworks like TensorFlow and PyTorch.",
        "Work on natural language processing (NLP) and computer vision tasks.",
        "Deploy models to production and monitor their performance.",
        "Collaborate with data scientists and business stakeholders.",
      ],
    },
  },
  {
    company_name: "ZS Associates",
    job_role: "Decision Analytics Associate",
    salary: {
      min: 8,
      max: 11,
      unit: "LPA",
    },
    application_code: "ZS",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 0,
    },
    deadline: "2025-11-06T23:59:00Z",
    openings: 25,
    required_skills: ["Data Analysis", "SQL", "Excel", "Case Study Solving"],
    company_overview: {
      description:
        "ZS is a global management consulting and technology firm that primarily serves the healthcare and life sciences industries. The firm leverages deep industry expertise, advanced analytics, and technology to help clients solve a range of sales, marketing, and operational challenges. ZS is known for its data-driven approach to strategy and for helping companies improve their commercial success. While its core focus is on healthcare, ZS has expanded its services to other industries, offering solutions in areas like customer-centric marketing, business technology, and R&D, always with a strong foundation in analytics.",
      website: "https://www.zs.com/careers",
      headquarters: "Evanston, Illinois, USA",
    },
    job_description: {
      title: "Decision Analytics Associate",
      overview:
        "As a Decision Analytics Associate at ZS, you will use data and analytics to help clients in the healthcare and life sciences industries make better decisions. You will work on a variety of projects, from market research to sales force optimization, and develop expertise in data analysis and consulting.",
      duties_and_responsibilities: [
        "Analyze large datasets to identify trends and insights.",
        "Use tools like SQL and Excel to manipulate and analyze data.",
        "Develop analytical models and reports.",
        "Present findings and recommendations to the project team and clients.",
      ],
    },
  },
  {
    company_name: "CodeNation",
    job_role: "Software Development Engineer",
    salary: {
      min: 25,
      max: 32,
      unit: "LPA",
    },
    application_code: "CN",
    eligibility: {
      branches: ["CSE", "IT"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-19T23:59:00Z",
    openings: 5,
    required_skills: [
      "Competitive Programming",
      "Algorithms",
      "System Design",
      "C++",
    ],
    company_overview: {
      description:
        "CodeNation is a software development company that aims to build high-impact, cutting-edge software products for pioneering firms. They position themselves as a 'product-building hub' where top software engineers can work on challenging projects that have a significant real-world impact. The company is highly selective, focusing on hiring elite coders with exceptional problem-solving and algorithmic skills. Their culture is centered around engineering excellence, innovation, and creating a dynamic environment for top talent to thrive. They are known for their rigorous hiring process and offering highly competitive compensation packages.",
      website: "https://codenation.co/careers",
      headquarters: "Bengaluru, Karnataka, India",
    },
    job_description: {
      title: "Software Development Engineer",
      overview:
        "As a Software Development Engineer at CodeNation, you will be part of an elite team that builds complex, high-performance software products. This role is for passionate programmers who excel at problem-solving and want to work on challenging projects that push the boundaries of technology.",
      duties_and_responsibilities: [
        "Design and implement sophisticated software systems.",
        "Solve complex algorithmic problems.",
        "Write highly optimized and efficient code.",
        "Collaborate with a team of top-tier engineers.",
      ],
    },
  },
  {
    company_name: "Reliance Jio",
    job_role: "Network Engineer",
    salary: {
      min: 6,
      max: 9,
      unit: "LPA",
    },
    application_code: "JIO",
    eligibility: {
      branches: ["ECE", "EEE", "CSE", "IT"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-10T23:59:00Z",
    openings: 30,
    required_skills: ["Computer Networks", "Telecom", "Routing", "Switching"],
    company_overview: {
      description:
        "Reliance Jio Infocomm Limited, a subsidiary of Jio Platforms, is an Indian telecommunications company that has revolutionized the country's digital landscape. It operates a national LTE network with coverage across all 22 telecom circles. Since its launch, Jio has been a major disruptor, offering affordable data and free voice calls, which significantly increased internet penetration in India. Beyond mobile telephony, Jio has built a vast digital ecosystem that includes broadband, e-commerce, and a suite of apps for messaging, music, and entertainment, aiming to connect and empower all Indians.",
      website: "https://www.jio.com/en-in/careers",
      headquarters: "Navi Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Network Engineer",
      overview:
        "As a Network Engineer at Reliance Jio, you will be responsible for the planning, implementation, and maintenance of one of the world's largest telecommunications networks. You will work with the latest technologies in mobile and data networking and play a crucial role in keeping India connected.",
      duties_and_responsibilities: [
        "Configure and manage network devices such as routers and switches.",
        "Monitor network performance and troubleshoot issues.",
        "Participate in the planning and deployment of new network infrastructure.",
        "Ensure the security and reliability of the network.",
      ],
    },
  },
  {
    company_name: "Deloitte",
    job_role: "Technology Analyst",
    salary: {
      min: 7,
      max: 9,
      unit: "LPA",
    },
    application_code: "DELO",
    eligibility: {
      branches: ["CSE", "IT", "CSM", "ECE", "EEE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-08T23:59:00Z",
    openings: 40,
    required_skills: ["SQL", "Python", "Cloud", "Business Acumen"],
    company_overview: {
      description:
        "Deloitte is one of the 'Big Four' accounting organizations and the largest professional services network in the world by revenue and number of professionals. It provides audit, consulting, financial advisory, risk advisory, tax, and legal services to a vast array of clients. The firm's consulting arm is a major player in technology implementation, helping organizations with digital transformation, cloud adoption, and enterprise resource planning. With a global presence and deep industry-specific knowledge, Deloitte helps clients navigate complex business challenges and capitalize on market opportunities.",
      website: "https://www.deloitte.com/global/en/careers.html",
      headquarters: "London, United Kingdom",
    },
    job_description: {
      title: "Technology Analyst",
      overview:
        "As a Technology Analyst at Deloitte, you will work with our clients to help them solve their most critical business problems using technology. You will be part of a consulting team that advises on, designs, and implements technology solutions across various industries.",
      duties_and_responsibilities: [
        "Analyze client business requirements and translate them into technical solutions.",
        "Work with technologies like cloud, data analytics, and enterprise applications.",
        "Assist in the development, testing, and deployment of solutions.",
        "Communicate with clients and project teams.",
      ],
    },
  },
  {
    company_name: "Hitachi",
    job_role: "Graduate Trainee Engineer",
    salary: {
      min: 5,
      max: 7,
      unit: "LPA",
    },
    application_code: "HITA",
    eligibility: {
      branches: ["Mechanical", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-22T23:59:00Z",
    openings: 20,
    required_skills: [
      "Industrial Automation",
      "Control Systems",
      "Mechanical Design",
    ],
    company_overview: {
      description:
        "Hitachi, Ltd. is a Japanese multinational conglomerate corporation that is highly diversified, with operations spanning numerous sectors including IT, energy, industry, mobility, and smart life solutions. The company is a global leader in areas like industrial systems, power grids, and railway systems. In the technology space, Hitachi provides IT services, data storage solutions, and data analytics platforms. The company's core philosophy is centered on 'Social Innovation,' aiming to solve societal challenges through technology and contribute to a sustainable future, making it a key player in both industrial and digital infrastructure.",
      website: "https://www.hitachi.com/careers/",
      headquarters: "Tokyo, Japan",
    },
    job_description: {
      title: "Graduate Trainee Engineer",
      overview:
        "As a Graduate Trainee Engineer at Hitachi, you will join a structured program designed to develop your skills in industrial technology and automation. You will work on innovative projects that contribute to social infrastructure and a sustainable future.",
      duties_and_responsibilities: [
        "Participate in training and development activities.",
        "Assist in the design and implementation of industrial automation and control systems.",
        "Work on projects related to mechanical design and manufacturing.",
        "Collaborate with a global team of engineers.",
      ],
    },
  },
  {
    company_name: "Samsung R&D",
    job_role: "R&D Engineer",
    salary: {
      min: 12,
      max: 16,
      unit: "LPA",
    },
    application_code: "SAMS",
    eligibility: {
      branches: ["CSE", "IT", "ECE", "EEE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-27T23:59:00Z",
    openings: 25,
    required_skills: ["C++", "Android", "Data Structures", "Computer Networks"],
    company_overview: {
      description:
        "Samsung R&D institutes are the innovation hubs for Samsung Electronics, a global leader in technology. These centers, located worldwide, are responsible for developing the cutting-edge technologies that power Samsung's diverse product portfolio, from smartphones and televisions to memory chips and home appliances. Researchers and engineers at Samsung R&D focus on next-generation areas like artificial intelligence, 5G/6G communications, robotics, and advanced materials. Their work is crucial in maintaining Samsung's competitive edge and shaping the future of consumer and enterprise technology.",
      website: "https://research.samsung.com/careers",
      headquarters: "Suwon, South Korea",
    },
    job_description: {
      title: "R&D Engineer",
      overview:
        "As an R&D Engineer at Samsung, you will be at the forefront of innovation, working on next-generation technologies for our products. You will contribute to research and development in areas like mobile communications, artificial intelligence, and multimedia.",
      duties_and_responsibilities: [
        "Design and develop software and algorithms for new products.",
        "Work on projects related to Android platform, AI, and computer networks.",
        "Implement and test new features and technologies.",
        "Collaborate with a global team of researchers and engineers.",
      ],
    },
  },
  {
    company_name: "Bajaj Auto",
    job_role: "Design Engineer",
    salary: {
      min: 8,
      max: 10,
      unit: "LPA",
    },
    application_code: "BAJAJ",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-18T23:59:00Z",
    openings: 10,
    required_skills: ["CATIA", "Automotive Systems", "FEA", "Product Design"],
    company_overview: {
      description:
        "Bajaj Auto Limited is an Indian multinational two-wheeler and three-wheeler manufacturing company. It is a world leader in the three-wheeler segment and the world's fourth-largest manufacturer of motorcycles. The company is known for its popular brands like Pulsar, Dominar, and Chetak (now in electric form). Bajaj Auto has a strong global presence, exporting its vehicles to numerous countries across Latin America, Africa, and Asia. The company is recognized for its focus on engineering, product design, and creating vehicles that offer performance and value to a wide range of customers.",
      website: "https://www.bajajauto.com/careers",
      headquarters: "Pune, Maharashtra, India",
    },
    job_description: {
      title: "Design Engineer",
      overview:
        "As a Design Engineer at Bajaj Auto, you will be involved in the design and development of motorcycles and three-wheelers. You will use your creativity and engineering skills to create innovative and high-performance products that meet the needs of our customers.",
      duties_and_responsibilities: [
        "Design and model vehicle components using CAD software like CATIA.",
        "Perform finite element analysis (FEA) and other simulations.",
        "Contribute to the entire product design lifecycle, from concept to production.",
        "Collaborate with R&D, manufacturing, and testing teams.",
      ],
    },
  },
  {
    company_name: "NCC Limited",
    job_role: "Graduate Engineer Trainee (Civil)",
    salary: {
      min: 5.5,
      max: 6.5,
      unit: "LPA",
    },
    application_code: "NCC",
    eligibility: {
      branches: ["Civil"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-11-28T23:59:00Z",
    openings: 30,
    required_skills: [
      "Building Materials",
      "Estimation and Costing",
      "AutoCAD",
    ],
    company_overview: {
      description:
        "NCC Limited (formerly Nagarjuna Construction Company) is a major Indian construction and infrastructure company. It has a diversified business portfolio, undertaking projects in sectors such as buildings, transportation (roads, bridges, flyovers), water and environment, irrigation, and power. With a legacy of over four decades, NCC has successfully executed numerous large-scale and complex projects across the country. The company is known for its quality construction, timely execution, and commitment to sustainable practices, making it a significant contributor to India's infrastructure development.",
      website: "https://www.ncclimited.com/careers/",
      headquarters: "Hyderabad, Telangana, India",
    },
    job_description: {
      title: "Graduate Engineer Trainee (Civil)",
      overview:
        "As a Graduate Engineer Trainee at NCC, you will join a leading construction company and gain hands-on experience in the execution of large infrastructure projects. This role will provide you with a strong foundation for a successful career in the civil engineering industry.",
      duties_and_responsibilities: [
        "Assist in project planning, estimation, and costing.",
        "Supervise construction activities at the project site.",
        "Ensure quality control and adherence to safety standards.",
        "Coordinate with various stakeholders, including clients and subcontractors.",
      ],
    },
  },
  {
    company_name: "J.P. Morgan Chase & Co.",
    job_role: "Technology Analyst",
    salary: {
      min: 15,
      max: 20,
      unit: "LPA",
    },
    application_code: "JPMC",
    eligibility: {
      branches: ["CSE", "IT", "CSM"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-23T23:59:00Z",
    openings: 20,
    required_skills: [
      "Java",
      "Python",
      "Data Structures",
      "Financial Markets Knowledge",
    ],
    company_overview: {
      description:
        "J.P. Morgan Chase & Co. is a global leader in financial services, offering solutions to the world's most important corporations, governments, and institutions. As one of the oldest financial institutions, it has a strong presence in investment banking, financial services for consumers and small businesses, commercial banking, and asset management. Technology is at the heart of its operations, with massive investments in areas like cloud computing, AI, machine learning, and cybersecurity to enhance its services, manage risk, and improve efficiency in the highly competitive global financial market.",
      website: "https://careers.jpmorgan.com/",
      headquarters: "New York, New York, USA",
    },
    job_description: {
      title: "Technology Analyst",
      overview:
        "As a Technology Analyst at J.P. Morgan Chase & Co., you will be part of a team that develops and maintains the technology that drives our global financial business. You will work on building and supporting systems for trading, risk management, and other critical functions.",
      duties_and_responsibilities: [
        "Develop software applications using languages like Java and Python.",
        "Design and implement solutions for complex financial problems.",
        "Collaborate with business analysts and traders to understand requirements.",
        "Ensure the reliability and performance of our technology platforms.",
      ],
    },
  },
  {
    company_name: "Cognizant",
    job_role: "Programmer Analyst Trainee",
    salary: {
      min: 4.5,
      max: 6,
      unit: "LPA",
    },
    application_code: "CTSH",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 6,
      max_backlogs: 2,
      min_internships: 0,
    },
    deadline: "2025-11-19T23:59:00Z",
    openings: 120,
    required_skills: ["SQL", "Core Java", "Analytical Skills"],
    company_overview: {
      description:
        "Cognizant is an American multinational technology company that provides business consulting, information technology, and outsourcing services. It helps clients modernize technology, reimagine processes, and transform experiences so they can stay ahead in a fast-changing world. Cognizant's services are built around digital, technology, consulting, and operations, with a strong focus on industries like financial services, healthcare, and retail. The company is dedicated to helping businesses leverage digital technologies like AI, IoT, and cloud to improve their operations and drive growth.",
      website: "https://careers.cognizant.com/in/en",
      headquarters: "Teaneck, New Jersey, USA",
    },
    job_description: {
      title: "Programmer Analyst Trainee",
      overview:
        "As a Programmer Analyst Trainee at Cognizant, you will undergo a comprehensive training program to develop your technical and professional skills. After training, you will be deployed to projects where you will work on developing, testing, and maintaining software applications for our global clients.",
      duties_and_responsibilities: [
        "Participate in the software development lifecycle under the guidance of senior team members.",
        "Write code in languages like Java and work with databases using SQL.",
        "Perform unit testing and debugging.",
        "Collaborate with the project team to deliver solutions.",
      ],
    },
  },
  {
    company_name: "Tech Mahindra",
    job_role: "Software Engineer Trainee",
    salary: {
      min: 4,
      max: 5.5,
      unit: "LPA",
    },
    application_code: "TECHM",
    eligibility: {
      branches: ["CSE", "IT", "ECE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-23T23:59:00Z",
    openings: 90,
    required_skills: ["C++", "Networking", "Database concepts"],
    company_overview: {
      description:
        "Tech Mahindra is an Indian multinational company that provides information technology (IT) services and business process outsourcing (BPO). A subsidiary of the Mahindra Group, the company represents the connected world, offering innovative and customer-centric IT experiences. Its services portfolio is extensive, covering areas like network technology services, cloud, cybersecurity, and enterprise applications. Tech Mahindra has a strong focus on next-generation technologies like 5G, blockchain, and AI, aiming to enable digital transformation for its global clients across various industries, especially telecommunications.",
      website: "https://careers.techmahindra.com/",
      headquarters: "Pune, Maharashtra, India",
    },
    job_description: {
      title: "Software Engineer Trainee",
      overview:
        "As a Software Engineer Trainee at Tech Mahindra, you will be part of a dynamic team that delivers IT solutions to clients worldwide. You will receive training in various technologies and then work on projects in areas like software development, testing, and support.",
      duties_and_responsibilities: [
        "Develop and maintain software applications as per project requirements.",
        "Work with databases and networking technologies.",
        "Perform testing and debugging of code.",
        "Collaborate with team members to ensure project success.",
      ],
    },
  },
  {
    company_name: "Hindustan Construction Company (HCC)",
    job_role: "Junior Engineer",
    salary: {
      min: 5,
      max: 6,
      unit: "LPA",
    },
    application_code: "HCC",
    eligibility: {
      branches: ["Civil"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-12-02T23:59:00Z",
    openings: 15,
    required_skills: ["Project Planning", "AutoCAD", "Structural Design"],
    company_overview: {
      description:
        "Hindustan Construction Company (HCC) is a public limited company with a legacy in India's engineering and construction industry. For nearly a century, HCC has been at the forefront of building the nation's infrastructure, successfully executing some of the most challenging projects in sectors like transportation, power, and water. The company has a proven track record in constructing tunnels, bridges, dams, and nuclear power plants. HCC is recognized for its strong engineering capabilities and its role in creating landmark infrastructure that has contributed significantly to India's progress.",
      website: "https://www.hccindia.com/career",
      headquarters: "Mumbai, Maharashtra, India",
    },
    job_description: {
      title: "Junior Engineer",
      overview:
        "As a Junior Engineer at HCC, you will be part of a team that executes some of the most challenging infrastructure projects in the country. You will apply your civil engineering skills to various aspects of project planning, design, and construction, and contribute to building the nation's future.",
      duties_and_responsibilities: [
        "Assist in project planning and structural design.",
        "Use AutoCAD for preparing drawings and plans.",
        "Supervise construction activities at the project site.",
        "Ensure compliance with quality and safety standards.",
      ],
    },
  },
  {
    company_name: "Caterpillar",
    job_role: "Associate Engineer",
    salary: {
      min: 7.5,
      max: 9.5,
      unit: "LPA",
    },
    application_code: "CAT",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-24T23:59:00Z",
    openings: 10,
    required_skills: ["Pro/E", "GD&T", "Manufacturing Technology"],
    company_overview: {
      description:
        "Caterpillar Inc. is the world's leading manufacturer of construction and mining equipment, off-highway diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives. With its iconic yellow machines, the company provides the principal products used to build infrastructure, mine for resources, and generate power. Through its global dealer network, Caterpillar offers unparalleled customer support and services. The company is also a technology leader, integrating data analytics and automation into its products to help customers improve efficiency, safety, and productivity on their job sites.",
      website: "https://www.caterpillar.com/en/careers.html",
      headquarters: "Irving, Texas, USA",
    },
    job_description: {
      title: "Associate Engineer",
      overview:
        "As an Associate Engineer at Caterpillar, you will be part of a team that designs and develops the world's leading construction and mining equipment. You will apply your mechanical engineering skills to create robust and reliable products that help our customers build a better world.",
      duties_and_responsibilities: [
        "Design and model components and systems using CAD software like Pro/E.",
        "Apply Geometric Dimensioning and Tolerancing (GD&T) principles.",
        "Collaborate with manufacturing and testing teams to ensure product quality.",
        "Participate in the product development lifecycle.",
      ],
    },
  },
  {
    company_name: "ABB",
    job_role: "Robotics & Automation Engineer",
    salary: {
      min: 8,
      max: 12,
      unit: "LPA",
    },
    application_code: "ABB",
    eligibility: {
      branches: ["EEE", "ECE", "Mechanical"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-12T23:59:00Z",
    openings: 8,
    required_skills: ["Robotics", "PLC Programming", "Control Systems", "C++"],
    company_overview: {
      description:
        "ABB is a leading global technology company that energizes the transformation of society and industry to achieve a more productive, sustainable future. With a history of innovation spanning more than 130 years, ABB connects software to its electrification, robotics, automation, and motion portfolio to push the boundaries of technology. The company is a market leader in industrial robots, electrification products, and automation systems. ABB's solutions are used in a wide range of industries, from utilities and manufacturing to transportation and infrastructure, helping to improve efficiency and reduce environmental impact.",
      website: "https://global.abb/group/en/careers",
      headquarters: "Zürich, Switzerland",
    },
    job_description: {
      title: "Robotics & Automation Engineer",
      overview:
        "As a Robotics & Automation Engineer at ABB, you will be at the forefront of the industrial automation revolution. You will design, develop, and implement robotics and automation solutions that help our clients improve their productivity, quality, and safety.",
      duties_and_responsibilities: [
        "Program and configure industrial robots and PLC systems.",
        "Design and implement control systems for automation applications.",
        "Develop software for robotics and automation using C++ and other languages.",
        "Provide technical support and training to clients.",
      ],
    },
  },
  {
    company_name: "Myntra",
    job_role: "SDE - I",
    salary: {
      min: 15,
      max: 22,
      unit: "LPA",
    },
    application_code: "MYNT",
    eligibility: {
      branches: ["CSE", "IT"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-16T23:59:00Z",
    openings: 12,
    required_skills: ["Java", "Scala", "React", "Node.js", "System Design"],
    company_overview: {
      description:
        "Myntra is a major Indian fashion e-commerce company, making it one of the largest online fashion destinations in the country. A part of the Flipkart group, Myntra offers a vast collection of clothing, footwear, and accessories from a multitude of international and domestic brands. The company is known for its technology-driven approach to fashion retail, using AI and data analytics to personalize customer experiences and forecast trends. Myntra continuously innovates to provide a seamless and engaging shopping experience, solidifying its position as a leader in the online fashion landscape.",
      website: "https://careers.myntra.com/",
      headquarters: "Bengaluru, Karnataka, India",
    },
    job_description: {
      title: "Software Development Engineer - I",
      overview:
        "As a Software Development Engineer at Myntra, you will be part of a team that builds and scales the technology that powers India's leading fashion e-commerce platform. You will work on creating a seamless and personalized shopping experience for millions of users.",
      duties_and_responsibilities: [
        "Design, develop, and maintain backend services and frontend applications.",
        "Write clean, scalable, and high-quality code in languages like Java and Scala.",
        "Work with web technologies like React and Node.js.",
        "Collaborate with product managers and designers to build new features.",
      ],
    },
  },
  {
    company_name: "Grasim Industries",
    job_role: "Chemical Engineer Trainee",
    salary: {
      min: 6,
      max: 8,
      unit: "LPA",
    },
    application_code: "GRASIM",
    eligibility: {
      branches: ["Civil", "Mechanical"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-12-05T23:59:00Z",
    openings: 10,
    required_skills: [
      "Process Engineering",
      "Fluid Mechanics",
      "Safety Management",
    ],
    company_overview: {
      description:
        "Grasim Industries Limited is a flagship company of the global conglomerate Aditya Birla Group. It started as a textile manufacturer and has since evolved into a diversified player with a leading presence in multiple sectors. Grasim is a global leader in Viscose Staple Fibre (VSF), the largest chemicals (Chlor-Alkali) player in India, and one of the country's largest cement producers through its subsidiaries UltraTech Cement and Century Textiles. This diversified business portfolio makes Grasim a significant contributor to various core sectors of the Indian economy.",
      website: "https://www.grasim.com/careers",
      headquarters: "Nagda, Madhya Pradesh, India",
    },
    job_description: {
      title: "Chemical Engineer Trainee",
      overview:
        "As a Chemical Engineer Trainee at Grasim Industries, you will be part of a team that works on process engineering and plant operations in our manufacturing facilities. You will gain hands-on experience in the chemical industry and contribute to the production of high-quality products.",
      duties_and_responsibilities: [
        "Participate in a structured training program in chemical engineering.",
        "Monitor and optimize chemical processes.",
        "Ensure compliance with safety and environmental regulations.",
        "Work on projects related to process improvement and quality control.",
      ],
    },
  },
  {
    company_name: "Quantiphi",
    job_role: "Machine Learning Engineer",
    salary: {
      min: 8,
      max: 12,
      unit: "LPA",
    },
    application_code: "QUANT",
    eligibility: {
      branches: ["CSD", "CSM", "CSE", "IT", "ECE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-20T23:59:00Z",
    openings: 20,
    required_skills: ["Python", "TensorFlow", "GCP", "ML Ops"],
    company_overview: {
      description:
        "Quantiphi is an AI-first digital engineering company that helps organizations solve their most complex and transformational business problems. As a premier partner for major cloud platforms like Google Cloud, AWS, and NVIDIA, Quantiphi combines deep industry expertise with cutting-edge artificial intelligence and machine learning capabilities. The company provides solutions in areas like data analytics, conversational AI, and computer vision to clients across healthcare, retail, and finance. Their mission is to harness the power of data and AI to create tangible business value and drive innovation for their customers.",
      website: "https://quantiphi.com/careers/",
      headquarters: "Marlborough, Massachusetts, USA",
    },
    job_description: {
      title: "Machine Learning Engineer",
      overview:
        "As a Machine Learning Engineer at Quantiphi, you will be responsible for designing, building, and deploying AI/ML solutions for our clients. You will work with cloud platforms like GCP and use your expertise in Python and TensorFlow to solve real-world problems.",
      duties_and_responsibilities: [
        "Develop and train machine learning models.",
        "Implement MLOps practices for deploying and managing models.",
        "Work with large datasets and cloud platforms.",
        "Collaborate with clients to understand their needs and deliver solutions.",
      ],
    },
  },
  {
    company_name: "Wipro",
    job_role: "Project Engineer",
    salary: {
      min: 4,
      max: 6,
      unit: "LPA",
    },
    application_code: "WIPRO",
    eligibility: {
      branches: ["CSE", "IT", "ECE", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-26T23:59:00Z",
    openings: 130,
    required_skills: ["Java", "SQL", "Problem Solving", "Communication"],
    company_overview: {
      description:
        "Wipro Limited is a leading Indian multinational corporation that provides information technology, consulting, and business process services. The company harnesses the power of cognitive computing, hyper-automation, robotics, cloud, analytics, and emerging technologies to help its clients adapt to the digital world. Wipro has a strong global presence and serves customers across various industries with a comprehensive portfolio of services. Known for its strong commitment to sustainability and corporate citizenship, Wipro is dedicated to helping its clients, employees, and communities thrive in an ever-changing world.",
      website: "https://careers.wipro.com/",
      headquarters: "Bengaluru, Karnataka, India",
    },
    job_description: {
      title: "Project Engineer",
      overview:
        "As a Project Engineer at Wipro, you will be part of a team that delivers IT services and solutions to our global clients. You will be trained in various technologies and will have the opportunity to work on different stages of the software development lifecycle.",
      duties_and_responsibilities: [
        "Develop, test, and maintain software applications.",
        "Write code in languages like Java and work with databases using SQL.",
        "Collaborate with team members to understand requirements and deliver solutions.",
        "Provide support for applications and systems.",
      ],
    },
  },
  {
    company_name: "Bosch",
    job_role: "Embedded Systems Engineer",
    salary: {
      min: 9,
      max: 13,
      unit: "LPA",
    },
    application_code: "BOSCH",
    eligibility: {
      branches: ["ECE", "EEE", "Mechanical"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-14T23:59:00Z",
    openings: 15,
    required_skills: ["Embedded C", "CAN protocol", "Microcontrollers", "RTOS"],
    company_overview: {
      description:
        "Bosch is a German multinational engineering and technology company with a rich history of innovation. Its operations are divided into four business sectors: Mobility Solutions, Industrial Technology, Consumer Goods, and Energy and Building Technology. As a leading supplier to the automotive industry, Bosch plays a crucial role in developing technologies for safer and more efficient vehicles. The company is also a leading provider of IoT solutions, combining its expertise in hardware with software and services to create a connected world. Bosch is committed to creating technology that is 'Invented for life.'",
      website: "https://www.bosch.in/careers/",
      headquarters: "Gerlingen, Germany",
    },
    job_description: {
      title: "Embedded Systems Engineer",
      overview:
        "As an Embedded Systems Engineer at Bosch, you will be part of a team that develops software and hardware for automotive and IoT products. You will work on cutting-edge technologies that are shaping the future of mobility and connected living.",
      duties_and_responsibilities: [
        "Develop and test embedded software using C/C++.",
        "Work with microcontrollers and real-time operating systems (RTOS).",
        "Implement communication protocols like CAN.",
        "Collaborate with hardware and system engineers.",
      ],
    },
  },
  {
    company_name: "ServiceNow",
    job_role: "Associate Software Engineer",
    salary: {
      min: 14,
      max: 18,
      unit: "LPA",
    },
    application_code: "SNOW",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-07T23:59:00Z",
    openings: 10,
    required_skills: ["JavaScript", "Java", "Web Services", "Databases"],
    company_overview: {
      description:
        "ServiceNow is an American software company that develops a cloud computing platform to help companies manage digital workflows for enterprise operations. The Now Platform enables businesses to automate and streamline IT, employee, and customer workflows, breaking down silos and improving efficiency. Initially focused on IT Service Management (ITSM), ServiceNow has expanded its offerings to cover various aspects of a business, including HR, customer service, and security. The company's mission is to make the world of work, work better for people by delivering intuitive and intelligent user experiences.",
      website: "https://www.servicenow.com/careers.html",
      headquarters: "Santa Clara, California, USA",
    },
    job_description: {
      title: "Associate Software Engineer",
      overview:
        "As an Associate Software Engineer at ServiceNow, you will be part of a team that develops and enhances our cloud platform. You will work on building applications and features that help our customers automate their workflows and improve their business operations.",
      duties_and_responsibilities: [
        "Develop software using JavaScript and Java.",
        "Work with web services and databases.",
        "Design and implement new features for the Now Platform.",
        "Collaborate with a team of talented engineers.",
      ],
    },
  },
  {
    company_name: "Honeywell",
    job_role: "Aerospace Engineer",
    salary: {
      min: 8,
      max: 11,
      unit: "LPA",
    },
    application_code: "HONEY",
    eligibility: {
      branches: ["ECE", "EEE", "Mechanical"],
      min_gpa: 7.2,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-27T23:59:00Z",
    openings: 12,
    required_skills: ["Control Systems", "Aerodynamics", "MATLAB", "Simulink"],
    company_overview: {
      description:
        "Honeywell is a multinational conglomerate corporation that produces a variety of commercial and consumer products, engineering services, and aerospace systems. Its business is organized into four groups: Aerospace, Building Technologies, Performance Materials and Technologies, and Safety and Productivity Solutions. Honeywell is a major player in the aerospace industry, providing avionics, engines, and other systems for aircraft. The company is also a leader in building automation, industrial process controls, and safety equipment, focusing on creating solutions that improve quality of life, safety, and sustainability.",
      website: "https://careers.honeywell.com/us/en",
      headquarters: "Charlotte, North Carolina, USA",
    },
    job_description: {
      title: "Aerospace Engineer",
      overview:
        "As an Aerospace Engineer at Honeywell, you will be part of a team that designs, develops, and tests systems and components for aircraft and spacecraft. You will work on cutting-edge technologies that make air travel safer, more efficient, and more sustainable.",
      duties_and_responsibilities: [
        "Design and analyze control systems for aerospace applications.",
        "Perform simulations and modeling using MATLAB and Simulink.",
        "Work on aerodynamics and flight dynamics.",
        "Collaborate with a multidisciplinary team of engineers.",
      ],
    },
  },
  {
    company_name: "Barclays",
    job_role: "Graduate Analyst",
    salary: {
      min: 11,
      max: 14,
      unit: "LPA",
    },
    application_code: "BARC",
    eligibility: {
      branches: ["CSE", "IT", "CSM"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-18T23:59:00Z",
    openings: 18,
    required_skills: ["Python", "Java", "SQL", "Software Design Patterns"],
    company_overview: {
      description:
        "Barclays is a British multinational universal bank, headquartered in London. It is organized into two divisions: Barclays UK, which comprises retail banking and wealth management, and Barclays International, which includes the corporate and investment bank. As a systemically important bank, it plays a vital role in the global financial system. Barclays has significant technology centers around the world that are crucial for developing and maintaining its trading platforms, mobile banking applications, and cybersecurity infrastructure. These tech hubs are at the forefront of driving innovation within the financial services industry.",
      website: "https://home.barclays/careers/",
      headquarters: "London, United Kingdom",
    },
    job_description: {
      title: "Graduate Analyst",
      overview:
        "As a Graduate Analyst at Barclays, you will join our technology team and work on developing and supporting the software that underpins our global banking operations. This is an opportunity to build a career in fintech and work on challenging projects in a fast-paced environment.",
      duties_and_responsibilities: [
        "Develop software using Python, Java, and other languages.",
        "Work with databases and SQL.",
        "Apply software design patterns to create robust and scalable solutions.",
        "Collaborate with business and technology teams.",
      ],
    },
  },
  {
    company_name: "Publicis Sapient",
    job_role: "Junior Associate, Technology",
    salary: {
      min: 7,
      max: 9,
      unit: "LPA",
    },
    application_code: "PS",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-29T23:59:00Z",
    openings: 35,
    required_skills: ["Java", "JavaScript", "React/Angular", "Node.js"],
    company_overview: {
      description:
        "Publicis Sapient is a digital business transformation company that helps established organizations get to their future, digitally-enabled state. It combines strategy, consulting, experience design, and engineering to help clients improve their customer relationships and operational efficiency. Operating at the intersection of marketing and technology, Publicis Sapient leverages data and AI to create personalized experiences and drive growth. The company works with clients across various industries, including retail, financial services, and automotive, to help them adapt to the rapidly changing digital landscape and meet evolving customer expectations.",
      website: "https://www.publicissapient.com/careers",
      headquarters: "Boston, Massachusetts, USA",
    },
    job_description: {
      title: "Junior Associate, Technology",
      overview:
        "As a Junior Associate in Technology at Publicis Sapient, you will work on digital transformation projects for our clients. You will be part of a team that uses cutting-edge technologies to build engaging and effective digital experiences.",
      duties_and_responsibilities: [
        "Develop web applications using Java, JavaScript, and modern frameworks like React or Angular.",
        "Work on both frontend and backend development.",
        "Collaborate with designers, strategists, and other engineers.",
        "Learn and apply best practices in software engineering.",
      ],
    },
  },
  {
    company_name: "Mercedes-Benz R&D",
    job_role: "CAE Engineer",
    salary: {
      min: 9,
      max: 12,
      unit: "LPA",
    },
    application_code: "MBRDI",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-12-01T23:59:00Z",
    openings: 8,
    required_skills: [
      "HyperMesh",
      "LS-DYNA",
      "Ansys",
      "Finite Element Analysis",
    ],
    company_overview: {
      description:
        "Mercedes-Benz Research and Development India (MBRDI) is the largest research and development center of Mercedes-Benz Group AG outside of Germany. Headquartered in Bangalore, MBRDI is a crucial hub for the company's global innovation network. Engineers at MBRDI contribute to a wide range of activities, including computer-aided design and engineering (CAD/CAE), software development for infotainment and autonomous driving systems, and data analytics. This center plays a pivotal role in developing the next generation of Mercedes-Benz vehicles, focusing on connectivity, autonomous driving, shared services, and electric mobility (CASE).",
      website: "https://mbrdi.co.in/careers/",
      headquarters: "Bengaluru, Karnataka, India",
    },
    job_description: {
      title: "CAE Engineer",
      overview:
        "As a CAE Engineer at Mercedes-Benz R&D India, you will be responsible for performing simulations and analysis to ensure the safety, performance, and reliability of our vehicles. You will use advanced CAE tools to work on various aspects of vehicle development, from crash safety to NVH.",
      duties_and_responsibilities: [
        "Perform finite element analysis (FEA) using tools like Ansys and LS-DYNA.",
        "Create and manage CAE models using pre-processors like HyperMesh.",
        "Analyze simulation results and provide design recommendations.",
        "Collaborate with design and testing teams to validate simulation models.",
      ],
    },
  },
  {
    company_name: "MassMutual",
    job_role: "Technology Development Program Associate",
    salary: {
      min: 10,
      max: 15,
      unit: "LPA",
    },
    application_code: "MASSMUTUAL",
    eligibility: {
      branches: ["CSE", "IT", "CSM", "ECE"],
      min_gpa: 7,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-12-08T23:59:00Z",
    openings: 15,
    required_skills: [
      "Java",
      "Python",
      "SQL",
      "Cloud Technologies",
      "Agile Methodologies",
    ],
    company_overview: {
      description:
        "MassMutual is a leading American mutual life insurance company. They provide a wide range of financial products and services, including life insurance, disability income insurance, long-term care insurance, retirement/401(k) plan services, and annuities. With a strong focus on digital transformation, their technology teams work on developing innovative solutions to enhance customer experience and streamline operations. They often hire for roles in software development, data science, and cybersecurity to support their large-scale financial services infrastructure.",
      website: "https://www.massmutual.com/careers",
      headquarters: "Springfield, Massachusetts, USA",
    },
    job_description: {
      title: "Technology Development Program Associate",
      overview:
        "The Technology Development Program at MassMutual is a rotational program designed for early-career technologists. As an associate, you will rotate through different teams, gaining experience in software development, cloud technologies, and Agile methodologies, while contributing to real projects in the insurance and financial services industry.",
      duties_and_responsibilities: [
        "Participate in multiple rotational assignments across different technology teams.",
        "Develop software using languages like Java and Python.",
        "Work with cloud platforms and modern development tools.",
        "Learn and apply Agile methodologies in a corporate setting.",
      ],
    },
  },
  {
    company_name: "Evernorth",
    job_role: "Software Engineer (Entry Level)",
    salary: {
      min: 12,
      max: 16,
      unit: "LPA",
    },
    application_code: "EVERNORTH",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM"],
      min_gpa: 7.2,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-12-10T23:59:00Z",
    openings: 20,
    required_skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "JavaScript",
      "Database Management",
    ],
    company_overview: {
      description:
        "Evernorth is the health services brand of The Cigna Group, focused on creating innovative and flexible solutions across the entire healthcare system. It provides a range of services including pharmacy benefits management, care delivery and management, and intelligence solutions. Evernorth's technology teams are dedicated to building a modern, data-driven healthcare platform that improves affordability, choice, and predictability for clients and customers. They are heavily invested in analytics, digital health solutions, and creating a more connected and personalized healthcare experience for millions.",
      website: "https://www.evernorth.com/careers",
      headquarters: "Bloomfield, Connecticut, USA",
    },
    job_description: {
      title: "Software Engineer (Entry Level)",
      overview:
        "As an entry-level Software Engineer at Evernorth, you will be part of a team that builds and maintains the technology powering our health services platform. You will work on developing applications that improve the healthcare experience for millions of people.",
      duties_and_responsibilities: [
        "Develop and maintain backend services using Java and Spring Boot.",
        "Create and consume REST APIs.",
        "Work with databases and manage data effectively.",
        "Collaborate with a team of engineers in an Agile environment.",
      ],
    },
  },
];

module.exports = { data: companies };
