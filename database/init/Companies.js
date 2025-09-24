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
    application_code: "goog",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE"],
      min_gpa: 8.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-09-30T23:59:00Z",
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
  },
  {
    company_name: "Microsoft",
    job_role: "Software Development Engineer",
    salary: {
      min: 22,
      max: 30,
      unit: "LPA",
    },
    application_code: "msft",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 8.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-05T23:59:00Z",
    openings: 25,
    required_skills: ["Java", "C#", ".NET", "Cloud Computing", "Algorithms"],
    company_overview: {
      description:
        "Microsoft is a multinational technology corporation that creates enterprise and consumer software, personal computers, and related services. Its core products, such as the Windows operating system and the Office productivity suite, are industry standards. In recent years, Microsoft has become a dominant force in cloud computing with its Azure platform, competing directly at the top of the market. The company also has a strong presence in gaming with Xbox and continues to invest heavily in artificial intelligence, business solutions with Dynamics 365, and professional networking through its ownership of LinkedIn.",
      website: "https://careers.microsoft.com/",
      headquarters: "Redmond, Washington, USA",
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
    application_code: "amzn",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-02T23:59:00Z",
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
  },
  {
    company_name: "Tata Consultancy Services (TCS)",
    job_role: "Assistant System Engineer",
    salary: {
      min: 4,
      max: 7,
      unit: "LPA",
    },
    application_code: "tcs",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE", "Mechanical"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-10-15T23:59:00Z",
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
  },
  {
    company_name: "Infosys",
    job_role: "Systems Engineer",
    salary: {
      min: 4,
      max: 6,
      unit: "LPA",
    },
    application_code: "infy",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE", "Mechanical"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-10-18T23:59:00Z",
    openings: 150,
    required_skills: ["Python", "Database Management", "SDLC", "Teamwork"],
    company_overview: {
      description:
        "Infosys Limited is a global leader in next-generation digital services and consulting. For over four decades, it has guided global enterprises in navigating their digital transformation journeys. The company provides end-to-end business solutions that leverage technology, including application development, maintenance, and validation services. With a strong focus on AI-powered core services and agile digital at scale, Infosys helps clients in over 50 countries create and execute strategies for their digital evolution. Its training facilities are renowned for preparing a vast talent pool for the challenges of the IT industry.",
      website: "https://www.infosys.com/careers/",
      headquarters: "Bengaluru, Karnataka, India",
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
    application_code: "qcom",
    eligibility: {
      branches: ["ECE", "EEE", "CSE"],
      min_gpa: 8.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-09-28T23:59:00Z",
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
  },
  {
    company_name: "NVIDIA",
    job_role: "Hardware Engineer",
    salary: {
      min: 18,
      max: 25,
      unit: "LPA",
    },
    application_code: "nvda",
    eligibility: {
      branches: ["ECE", "EEE", "CSE"],
      min_gpa: 8.2,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-01T23:59:00Z",
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
  },
  {
    company_name: "Larsen & Toubro (L&T)",
    job_role: "Graduate Engineer Trainee",
    salary: {
      min: 6,
      max: 8,
      unit: "LPA",
    },
    application_code: "lt",
    eligibility: {
      branches: ["Civil", "Mechanical", "EEE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-20T23:59:00Z",
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
  },
  {
    company_name: "Tata Steel",
    job_role: "Management Trainee (Technical)",
    salary: {
      min: 7,
      max: 9,
      unit: "LPA",
    },
    application_code: "tsteel",
    eligibility: {
      branches: ["Mechanical", "EEE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-22T23:59:00Z",
    openings: 20,
    required_skills: ["Thermodynamics", "Material Science", "Machine Design"],
    company_overview: {
      description:
        "Tata Steel Limited is one of the world's most geographically diversified steel producers. As a flagship company of the Tata Group, it stands among the top global steel companies with an annual crude steel capacity of 34 million tonnes. Founded in India in 1907, it has a rich history of being a pioneer in the industry. The company's operations span across five continents, with a significant presence in India, the UK, and the Netherlands. Tata Steel is committed to sustainable practices and innovation, producing a wide range of steel products for automotive, construction, and consumer goods industries.",
      website: "https://www.tatasteel.com/careers/",
      headquarters: "Mumbai, Maharashtra, India",
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
    application_code: "siem",
    eligibility: {
      branches: ["EEE", "ECE", "Mechanical"],
      min_gpa: 7.2,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-10-14T23:59:00Z",
    openings: 12,
    required_skills: ["PLC", "SCADA", "Power Electronics", "Control Systems"],
    company_overview: {
      description:
        "Siemens is a German multinational conglomerate and a global powerhouse focused on the areas of electrification, automation, and digitalization. It is one of the world's largest producers of energy-efficient, resource-saving technologies. Siemens is a leading supplier of systems for power generation and transmission as well as medical diagnosis. Through its various divisions, the company plays a crucial role in infrastructure development, industrial automation, and software for industry. Its healthcare arm, Siemens Healthineers, is a key player in medical imaging and diagnostics, reflecting the company's broad and impactful technological footprint.",
      website: "https://www.siemens.com/global/en/company/jobs.html",
      headquarters: "Munich, Germany",
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
    application_code: "pp",
    eligibility: {
      branches: ["CSE", "IT", "CSM", "ECE"],
      min_gpa: 7.8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-08T23:59:00Z",
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
  },
  {
    company_name: "Accenture",
    job_role: "Associate Software Engineer",
    salary: {
      min: 5,
      max: 7,
      unit: "LPA",
    },
    application_code: "acc",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-10-25T23:59:00Z",
    openings: 100,
    required_skills: ["SQL", "Java", "Testing", "Cloud Fundamentals"],
    company_overview: {
      description:
        "Accenture is a global professional services company providing a broad range of services in strategy and consulting, interactive, technology, and operations. With deep industry expertise, it helps organizations embrace change and create value. Accenture is a leader in digital transformation, cloud, and security, serving clients in more than 120 countries. The company leverages technology and human ingenuity to deliver on the promise of technology and improve how the world works and lives. Its vast network of Advanced Technology and Intelligent Operations centers enables it to offer scalable and efficient solutions globally.",
      website: "https://www.accenture.com/in-en/careers",
      headquarters: "Dublin, Ireland",
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
    application_code: "capg",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-10-26T23:59:00Z",
    openings: 80,
    required_skills: ["C++", "Python", "Problem Solving", "Communication"],
    company_overview: {
      description:
        "Capgemini is a global leader in consulting, technology services, and digital transformation. Headquartered in France, the company helps clients navigate the complexities of the modern digital economy. It offers an array of integrated services that combine technology with deep industry expertise to address the entire breadth of clients' opportunities in the evolving world of cloud, data, AI, and connectivity. Capgemini is driven by the conviction that the business value of technology comes from and through people, and it prides itself on its multicultural and collaborative approach to client engagement.",
      website: "https://www.capgemini.com/in-en/careers/",
      headquarters: "Paris, France",
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
    application_code: "dbricks",
    eligibility: {
      branches: ["CSD", "CSM", "CSE", "IT"],
      min_gpa: 8.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-04T23:59:00Z",
    openings: 10,
    required_skills: ["Apache Spark", "Python", "SQL", "Big Data", "AWS/Azure"],
    company_overview: {
      description:
        "Databricks is a data and AI company that pioneered the concept of the lakehouse architecture in the cloud. Founded by the original creators of Apache Spark, the company provides a unified platform that combines the best elements of data warehouses and data lakes. This allows organizations to manage all their data and perform both traditional analytics and complex AI/machine learning workloads on a single, scalable platform. Databricks helps data teams collaborate more effectively and accelerates innovation by simplifying data engineering, data science, and machine learning processes.",
      website: "https://www.databricks.com/company/careers",
      headquarters: "San Francisco, California, USA",
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
    application_code: "msig",
    eligibility: {
      branches: ["CSM", "CSD", "CSE", "IT", "ECE", "EEE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-12T23:59:00Z",
    openings: 30,
    required_skills: ["Statistics", "SQL", "R", "Python", "Communication"],
    company_overview: {
      description:
        "Mu Sigma is a leading global provider of decision sciences and analytics services. The company helps large enterprises make better, data-driven decisions by combining data, mathematics, and business acumen. Mu Sigma's unique approach involves creating a 'man-machine' ecosystem, where human intelligence and scalable technology work in tandem to solve complex business problems. They serve a wide range of industries, including healthcare, retail, and financial services, offering solutions that span from marketing and supply chain analytics to risk management. Their interdisciplinary approach makes them a key player in the data analytics space.",
      website: "https://www.mu-sigma.com/careers/",
      headquarters: "Bengaluru, Karnataka, India",
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
    application_code: "zensar",
    eligibility: {
      branches: ["CSE", "IT"],
      min_gpa: 6.0,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-01T23:59:00Z",
    openings: 40,
    required_skills: ["Java", "SQL", "HTML", "CSS"],
    company_overview: {
      description:
        "Zensar Technologies is a digital solutions and technology services company that is part of the RPG Group. It specializes in helping organizations navigate their digital transformation journey with a focus on experience, data, and engineering. Zensar's services cover a wide spectrum, including cloud and infrastructure, data management, enterprise applications, and advanced analytics. The company operates globally, serving clients in industries like retail, manufacturing, and financial services. They aim to create meaningful, experience-led digital solutions that drive business impact and customer satisfaction for their clients.",
      website: "https://www.zensar.com/careers",
      headquarters: "Pune, Maharashtra, India",
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
    application_code: "tworks",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-11T23:59:00Z",
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
  },
  {
    company_name: "Salesforce",
    job_role: "Software Engineer, AMTS",
    salary: {
      min: 16,
      max: 21,
      unit: "LPA",
    },
    application_code: "sfdc",
    eligibility: {
      branches: ["CSE", "IT", "CSM"],
      min_gpa: 8.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-06T23:59:00Z",
    openings: 15,
    required_skills: ["Java", "JavaScript", "Database", "Cloud Computing"],
    company_overview: {
      description:
        "Salesforce is the global leader in cloud-based Customer Relationship Management (CRM) software. Its platform, Customer 360, provides a unified view of customers for marketing, sales, commerce, and service departments, enabling companies to deliver personalized experiences. Beyond its flagship CRM product, Salesforce offers a suite of enterprise applications focused on analytics, application development, and marketing automation. The company is also known for its Trailhead learning platform and its philanthropic 1-1-1 model, where it donates 1% of its equity, product, and employee time to communities worldwide.",
      website: "https://www.salesforce.com/company/careers/",
      headquarters: "San Francisco, California, USA",
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
    application_code: "intel",
    eligibility: {
      branches: ["ECE", "EEE"],
      min_gpa: 7.8,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-09T23:59:00Z",
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
  },
  {
    company_name: "Texas Instruments",
    job_role: "Analog Design Engineer",
    salary: {
      min: 13,
      max: 18,
      unit: "LPA",
    },
    application_code: "ti",
    eligibility: {
      branches: ["ECE", "EEE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-10T23:59:00Z",
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
  },
  {
    company_name: "AFCONS Infrastructure",
    job_role: "Site Engineer",
    salary: {
      min: 5,
      max: 7,
      unit: "LPA",
    },
    application_code: "afcons",
    eligibility: {
      branches: ["Civil", "Mechanical"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-11-05T23:59:00Z",
    openings: 25,
    required_skills: ["AutoCAD", "STAAD Pro", "Site Management", "Surveying"],
    company_overview: {
      description:
        "AFCONS Infrastructure Limited, part of the Shapoorji Pallonji Group, is a leading infrastructure development company in India with a global footprint. The company has a strong reputation for executing large and complex engineering, procurement, and construction (EPC) projects. Its expertise spans various sectors, including marine and industrial, surface transport, urban infrastructure, and hydro & underground works. AFCONS is known for its technological prowess and commitment to quality and safety, having delivered numerous landmark projects like bridges, tunnels, ports, and metro rail systems, both in India and internationally.",
      website: "https://www.afcons.com/careers-page",
      headquarters: "Mumbai, Maharashtra, India",
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
    application_code: "ashokl",
    eligibility: {
      branches: ["Mechanical", "EEE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-28T23:59:00Z",
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
  },
  {
    company_name: "Gammon India",
    job_role: "Junior Civil Engineer",
    salary: {
      min: 4.5,
      max: 6,
      unit: "LPA",
    },
    application_code: "gammon",
    eligibility: {
      branches: ["Civil"],
      min_gpa: 6.5,
      max_backlogs: 2,
      min_internships: 0,
    },
    deadline: "2025-11-10T23:59:00Z",
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
  },
  {
    company_name: "Mahindra & Mahindra",
    job_role: "R&D Engineer",
    salary: {
      min: 7,
      max: 9,
      unit: "LPA",
    },
    application_code: "mnm",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7.2,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-24T23:59:00Z",
    openings: 18,
    required_skills: ["SolidWorks", "Ansys", "Automotive Design"],
    company_overview: {
      description:
        "Mahindra & Mahindra (M&M) is an Indian multinational automotive manufacturing corporation and a key part of the Mahindra Group. It is a market leader in utility vehicles and tractors in India and is one of the largest vehicle manufacturers by production in the country. The company's diverse portfolio also includes electric vehicles, commercial vehicles, and two-wheelers. M&M is known for its rugged and reliable vehicles and has a growing international presence. The company is committed to innovation, particularly in the areas of electric mobility and sustainable farming solutions.",
      website: "https://www.mahindra.com/careers",
      headquarters: "Mumbai, Maharashtra, India",
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
    application_code: "orcl",
    eligibility: {
      branches: ["CSE", "IT", "ECE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-13T23:59:00Z",
    openings: 22,
    required_skills: ["Databases", "SQL", "PL/SQL", "Java", "Linux"],
    company_overview: {
      description:
        "Oracle Corporation is a multinational computer technology corporation best known for its database software and technology, cloud engineered systems, and enterprise software products. The company's flagship product, the Oracle Database, has long been a dominant force in the enterprise market. In recent years, Oracle has been aggressively transitioning its business to the cloud, offering a comprehensive and fully integrated stack of cloud applications and platform services. It provides leading solutions in areas such as Enterprise Resource Planning (ERP), Human Capital Management (HCM), and Customer Experience (CX), serving businesses of all sizes.",
      website: "https://www.oracle.com/in/careers/",
      headquarters: "Austin, Texas, USA",
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
    application_code: "fractal",
    eligibility: {
      branches: ["CSD", "CSM", "CSE", "IT", "ECE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-16T23:59:00Z",
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
  },
  {
    company_name: "ZS Associates",
    job_role: "Decision Analytics Associate",
    salary: {
      min: 8,
      max: 11,
      unit: "LPA",
    },
    application_code: "zs",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 0,
    },
    deadline: "2025-10-17T23:59:00Z",
    openings: 25,
    required_skills: ["Data Analysis", "SQL", "Excel", "Case Study Solving"],
    company_overview: {
      description:
        "ZS is a global management consulting and technology firm that primarily serves the healthcare and life sciences industries. The firm leverages deep industry expertise, advanced analytics, and technology to help clients solve a range of sales, marketing, and operational challenges. ZS is known for its data-driven approach to strategy and for helping companies improve their commercial success. While its core focus is on healthcare, ZS has expanded its services to other industries, offering solutions in areas like customer-centric marketing, business technology, and R&D, always with a strong foundation in analytics.",
      website: "https://www.zs.com/careers",
      headquarters: "Evanston, Illinois, USA",
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
    application_code: "cn",
    eligibility: {
      branches: ["CSE", "IT"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-09-29T23:59:00Z",
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
  },
  {
    company_name: "Reliance Jio",
    job_role: "Network Engineer",
    salary: {
      min: 6,
      max: 9,
      unit: "LPA",
    },
    application_code: "jio",
    eligibility: {
      branches: ["ECE", "EEE", "CSE", "IT"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-10-21T23:59:00Z",
    openings: 30,
    required_skills: ["Computer Networks", "Telecom", "Routing", "Switching"],
    company_overview: {
      description:
        "Reliance Jio Infocomm Limited, a subsidiary of Jio Platforms, is an Indian telecommunications company that has revolutionized the country's digital landscape. It operates a national LTE network with coverage across all 22 telecom circles. Since its launch, Jio has been a major disruptor, offering affordable data and free voice calls, which significantly increased internet penetration in India. Beyond mobile telephony, Jio has built a vast digital ecosystem that includes broadband, e-commerce, and a suite of apps for messaging, music, and entertainment, aiming to connect and empower all Indians.",
      website: "https://www.jio.com/en-in/careers",
      headquarters: "Navi Mumbai, Maharashtra, India",
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
    application_code: "delo",
    eligibility: {
      branches: ["CSE", "IT", "CSM", "ECE", "EEE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-19T23:59:00Z",
    openings: 40,
    required_skills: ["SQL", "Python", "Cloud", "Business Acumen"],
    company_overview: {
      description:
        "Deloitte is one of the 'Big Four' accounting organizations and the largest professional services network in the world by revenue and number of professionals. It provides audit, consulting, financial advisory, risk advisory, tax, and legal services to a vast array of clients. The firm's consulting arm is a major player in technology implementation, helping organizations with digital transformation, cloud adoption, and enterprise resource planning. With a global presence and deep industry-specific knowledge, Deloitte helps clients navigate complex business challenges and capitalize on market opportunities.",
      website: "https://www.deloitte.com/global/en/careers.html",
      headquarters: "London, United Kingdom",
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
    application_code: "hita",
    eligibility: {
      branches: ["Mechanical", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-02T23:59:00Z",
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
  },
  {
    company_name: "Samsung R&D",
    job_role: "R&D Engineer",
    salary: {
      min: 12,
      max: 16,
      unit: "LPA",
    },
    application_code: "sams",
    eligibility: {
      branches: ["CSE", "IT", "ECE", "EEE"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-07T23:59:00Z",
    openings: 25,
    required_skills: ["C++", "Android", "Data Structures", "Computer Networks"],
    company_overview: {
      description:
        "Samsung R&D institutes are the innovation hubs for Samsung Electronics, a global leader in technology. These centers, located worldwide, are responsible for developing the cutting-edge technologies that power Samsung's diverse product portfolio, from smartphones and televisions to memory chips and home appliances. Researchers and engineers at Samsung R&D focus on next-generation areas like artificial intelligence, 5G/6G communications, robotics, and advanced materials. Their work is crucial in maintaining Samsung's competitive edge and shaping the future of consumer and enterprise technology.",
      website: "https://research.samsung.com/careers",
      headquarters: "Suwon, South Korea",
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
    application_code: "bajaj",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-29T23:59:00Z",
    openings: 10,
    required_skills: ["CATIA", "Automotive Systems", "FEA", "Product Design"],
    company_overview: {
      description:
        "Bajaj Auto Limited is an Indian multinational two-wheeler and three-wheeler manufacturing company. It is a world leader in the three-wheeler segment and the world's fourth-largest manufacturer of motorcycles. The company is known for its popular brands like Pulsar, Dominar, and Chetak (now in electric form). Bajaj Auto has a strong global presence, exporting its vehicles to numerous countries across Latin America, Africa, and Asia. The company is recognized for its focus on engineering, product design, and creating vehicles that offer performance and value to a wide range of customers.",
      website: "https://www.bajajauto.com/careers",
      headquarters: "Pune, Maharashtra, India",
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
    application_code: "ncc",
    eligibility: {
      branches: ["Civil"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-11-08T23:59:00Z",
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
  },
  {
    company_name: "J.P. Morgan Chase & Co.",
    job_role: "Technology Analyst",
    salary: {
      min: 15,
      max: 20,
      unit: "LPA",
    },
    application_code: "jpmc",
    eligibility: {
      branches: ["CSE", "IT", "CSM"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-03T23:59:00Z",
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
  },
  {
    company_name: "Cognizant",
    job_role: "Programmer Analyst Trainee",
    salary: {
      min: 4.5,
      max: 6,
      unit: "LPA",
    },
    application_code: "ctsh",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE", "EEE"],
      min_gpa: 6.0,
      max_backlogs: 2,
      min_internships: 0,
    },
    deadline: "2025-10-30T23:59:00Z",
    openings: 120,
    required_skills: ["SQL", "Core Java", "Analytical Skills"],
    company_overview: {
      description:
        "Cognizant is an American multinational technology company that provides business consulting, information technology, and outsourcing services. It helps clients modernize technology, reimagine processes, and transform experiences so they can stay ahead in a fast-changing world. Cognizant's services are built around digital, technology, consulting, and operations, with a strong focus on industries like financial services, healthcare, and retail. The company is dedicated to helping businesses leverage digital technologies like AI, IoT, and cloud to improve their operations and drive growth.",
      website: "https://careers.cognizant.com/in/en",
      headquarters: "Teaneck, New Jersey, USA",
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
    application_code: "techm",
    eligibility: {
      branches: ["CSE", "IT", "ECE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-03T23:59:00Z",
    openings: 90,
    required_skills: ["C++", "Networking", "Database concepts"],
    company_overview: {
      description:
        "Tech Mahindra is an Indian multinational company that provides information technology (IT) services and business process outsourcing (BPO). A subsidiary of the Mahindra Group, the company represents the connected world, offering innovative and customer-centric IT experiences. Its services portfolio is extensive, covering areas like network technology services, cloud, cybersecurity, and enterprise applications. Tech Mahindra has a strong focus on next-generation technologies like 5G, blockchain, and AI, aiming to enable digital transformation for its global clients across various industries, especially telecommunications.",
      website: "https://careers.techmahindra.com/",
      headquarters: "Pune, Maharashtra, India",
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
    application_code: "hcc",
    eligibility: {
      branches: ["Civil"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-12T23:59:00Z",
    openings: 15,
    required_skills: ["Project Planning", "AutoCAD", "Structural Design"],
    company_overview: {
      description:
        "Hindustan Construction Company (HCC) is a public limited company with a legacy in India's engineering and construction industry. For nearly a century, HCC has been at the forefront of building the nation's infrastructure, successfully executing some of the most challenging projects in sectors like transportation, power, and water. The company has a proven track record in constructing tunnels, bridges, dams, and nuclear power plants. HCC is recognized for its strong engineering capabilities and its role in creating landmark infrastructure that has contributed significantly to India's progress.",
      website: "https://www.hccindia.com/career",
      headquarters: "Mumbai, Maharashtra, India",
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
    application_code: "cat",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-04T23:59:00Z",
    openings: 10,
    required_skills: ["Pro/E", "GD&T", "Manufacturing Technology"],
    company_overview: {
      description:
        "Caterpillar Inc. is the world's leading manufacturer of construction and mining equipment, off-highway diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives. With its iconic yellow machines, the company provides the principal products used to build infrastructure, mine for resources, and generate power. Through its global dealer network, Caterpillar offers unparalleled customer support and services. The company is also a technology leader, integrating data analytics and automation into its products to help customers improve efficiency, safety, and productivity on their job sites.",
      website: "https://www.caterpillar.com/en/careers.html",
      headquarters: "Irving, Texas, USA",
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
    application_code: "abb",
    eligibility: {
      branches: ["EEE", "ECE", "Mechanical"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-23T23:59:00Z",
    openings: 8,
    required_skills: ["Robotics", "PLC Programming", "Control Systems", "C++"],
    company_overview: {
      description:
        "ABB is a leading global technology company that energizes the transformation of society and industry to achieve a more productive, sustainable future. With a history of innovation spanning more than 130 years, ABB connects software to its electrification, robotics, automation, and motion portfolio to push the boundaries of technology. The company is a market leader in industrial robots, electrification products, and automation systems. ABB's solutions are used in a wide range of industries, from utilities and manufacturing to transportation and infrastructure, helping to improve efficiency and reduce environmental impact.",
      website: "https://global.abb/group/en/careers",
      headquarters: "Zürich, Switzerland",
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
    application_code: "mynt",
    eligibility: {
      branches: ["CSE", "IT"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-27T23:59:00Z",
    openings: 12,
    required_skills: ["Java", "Scala", "React", "Node.js", "System Design"],
    company_overview: {
      description:
        "Myntra is a major Indian fashion e-commerce company, making it one of the largest online fashion destinations in the country. A part of the Flipkart group, Myntra offers a vast collection of clothing, footwear, and accessories from a multitude of international and domestic brands. The company is known for its technology-driven approach to fashion retail, using AI and data analytics to personalize customer experiences and forecast trends. Myntra continuously innovates to provide a seamless and engaging shopping experience, solidifying its position as a leader in the online fashion landscape.",
      website: "https://careers.myntra.com/",
      headquarters: "Bengaluru, Karnataka, India",
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
    application_code: "grasim",
    eligibility: {
      branches: ["Civil", "Mechanical"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 1,
    },
    deadline: "2025-11-15T23:59:00Z",
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
  },
  {
    company_name: "Quantiphi",
    job_role: "Machine Learning Engineer",
    salary: {
      min: 8,
      max: 12,
      unit: "LPA",
    },
    application_code: "quant",
    eligibility: {
      branches: ["CSD", "CSM", "CSE", "IT", "ECE"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-31T23:59:00Z",
    openings: 20,
    required_skills: ["Python", "TensorFlow", "GCP", "ML Ops"],
    company_overview: {
      description:
        "Quantiphi is an AI-first digital engineering company that helps organizations solve their most complex and transformational business problems. As a premier partner for major cloud platforms like Google Cloud, AWS, and NVIDIA, Quantiphi combines deep industry expertise with cutting-edge artificial intelligence and machine learning capabilities. The company provides solutions in areas like data analytics, conversational AI, and computer vision to clients across healthcare, retail, and finance. Their mission is to harness the power of data and AI to create tangible business value and drive innovation for their customers.",
      website: "https://quantiphi.com/careers/",
      headquarters: "Marlborough, Massachusetts, USA",
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
    application_code: "wipro",
    eligibility: {
      branches: ["CSE", "IT", "ECE", "EEE"],
      min_gpa: 6.5,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-06T23:59:00Z",
    openings: 130,
    required_skills: ["Java", "SQL", "Problem Solving", "Communication"],
    company_overview: {
      description:
        "Wipro Limited is a leading Indian multinational corporation that provides information technology, consulting, and business process services. The company harnesses the power of cognitive computing, hyper-automation, robotics, cloud, analytics, and emerging technologies to help its clients adapt to the digital world. Wipro has a strong global presence and serves customers across various industries with a comprehensive portfolio of services. Known for its strong commitment to sustainability and corporate citizenship, Wipro is dedicated to helping its clients, employees, and communities thrive in an ever-changing world.",
      website: "https://careers.wipro.com/",
      headquarters: "Bengaluru, Karnataka, India",
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
    application_code: "bosch",
    eligibility: {
      branches: ["ECE", "EEE", "Mechanical"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-25T23:59:00Z",
    openings: 15,
    required_skills: ["Embedded C", "CAN protocol", "Microcontrollers", "RTOS"],
    company_overview: {
      description:
        "Bosch is a German multinational engineering and technology company with a rich history of innovation. Its operations are divided into four business sectors: Mobility Solutions, Industrial Technology, Consumer Goods, and Energy and Building Technology. As a leading supplier to the automotive industry, Bosch plays a crucial role in developing technologies for safer and more efficient vehicles. The company is also a leading provider of IoT solutions, combining its expertise in hardware with software and services to create a connected world. Bosch is committed to creating technology that is 'Invented for life.'",
      website: "https://www.bosch.in/careers/",
      headquarters: "Gerlingen, Germany",
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
    application_code: "snow",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-18T23:59:00Z",
    openings: 10,
    required_skills: ["JavaScript", "Java", "Web Services", "Databases"],
    company_overview: {
      description:
        "ServiceNow is an American software company that develops a cloud computing platform to help companies manage digital workflows for enterprise operations. The Now Platform enables businesses to automate and streamline IT, employee, and customer workflows, breaking down silos and improving efficiency. Initially focused on IT Service Management (ITSM), ServiceNow has expanded its offerings to cover various aspects of a business, including HR, customer service, and security. The company's mission is to make the world of work, work better for people by delivering intuitive and intelligent user experiences.",
      website: "https://www.servicenow.com/careers.html",
      headquarters: "Santa Clara, California, USA",
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
    application_code: "honey",
    eligibility: {
      branches: ["ECE", "EEE", "Mechanical"],
      min_gpa: 7.2,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-07T23:59:00Z",
    openings: 12,
    required_skills: ["Control Systems", "Aerodynamics", "MATLAB", "Simulink"],
    company_overview: {
      description:
        "Honeywell is a multinational conglomerate corporation that produces a variety of commercial and consumer products, engineering services, and aerospace systems. Its business is organized into four groups: Aerospace, Building Technologies, Performance Materials and Technologies, and Safety and Productivity Solutions. Honeywell is a major player in the aerospace industry, providing avionics, engines, and other systems for aircraft. The company is also a leader in building automation, industrial process controls, and safety equipment, focusing on creating solutions that improve quality of life, safety, and sustainability.",
      website: "https://careers.honeywell.com/us/en",
      headquarters: "Charlotte, North Carolina, USA",
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
    application_code: "barc",
    eligibility: {
      branches: ["CSE", "IT", "CSM"],
      min_gpa: 7.0,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-10-29T23:59:00Z",
    openings: 18,
    required_skills: ["Python", "Java", "SQL", "Software Design Patterns"],
    company_overview: {
      description:
        "Barclays is a British multinational universal bank, headquartered in London. It is organized into two divisions: Barclays UK, which comprises retail banking and wealth management, and Barclays International, which includes the corporate and investment bank. As a systemically important bank, it plays a vital role in the global financial system. Barclays has significant technology centers around the world that are crucial for developing and maintaining its trading platforms, mobile banking applications, and cybersecurity infrastructure. These tech hubs are at the forefront of driving innovation within the financial services industry.",
      website: "https://home.barclays/careers/",
      headquarters: "London, United Kingdom",
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
    application_code: "ps",
    eligibility: {
      branches: ["CSE", "IT", "CSD", "CSM", "ECE"],
      min_gpa: 6.8,
      max_backlogs: 1,
      min_internships: 0,
    },
    deadline: "2025-11-09T23:59:00Z",
    openings: 35,
    required_skills: ["Java", "JavaScript", "React/Angular", "Node.js"],
    company_overview: {
      description:
        "Publicis Sapient is a digital business transformation company that helps established organizations get to their future, digitally-enabled state. It combines strategy, consulting, experience design, and engineering to help clients improve their customer relationships and operational efficiency. Operating at the intersection of marketing and technology, Publicis Sapient leverages data and AI to create personalized experiences and drive growth. The company works with clients across various industries, including retail, financial services, and automotive, to help them adapt to the rapidly changing digital landscape and meet evolving customer expectations.",
      website: "https://www.publicissapient.com/careers",
      headquarters: "Boston, Massachusetts, USA",
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
    application_code: "mbrdi",
    eligibility: {
      branches: ["Mechanical"],
      min_gpa: 7.5,
      max_backlogs: 0,
      min_internships: 1,
    },
    deadline: "2025-11-11T23:59:00Z",
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
  },
];

module.exports = { data: companies };
