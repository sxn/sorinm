const allSlugs = ["utcn", "arobs", "agilio", "honeytracks", "internations"];

const bySlug = {
  utcn: {
    backgroundColor: "#bc171d",
    color: "#ffffff",
    slug: "utcn",
    name: "Technical University of Cluj-Napoca",
    url: "http://www.utcluj.ro/en/",
    start: "Sep. 2008",
    end: "Oct. 2012",
    title: "Bachelor in Computer Science",
    description: [
      "The education provided by the Computer Science Department of the Technical University of Cluj-Napoca ensures engineering-specific training, balance between the general technical, domain fundamental and narrow specialization disciplines and the integration of both theoretical and practical aspects. This formative type of education allows graduates to easily integrate and adapt to the dynamic requests of the industry.",
      "The curriculum is based on the ACM curriculum and syllabi guidelines for computer science and engineering.",
      "Their bachelor's degree programmes are taught in either Romanian or English, folow the Bologna system and comprise 240 ECTS points, spread throughout 8 semesters."
    ]
  },
  arobs: {
    backgroundColor: "#6dbe5d",
    color: "#ffffff",
    slug: "arobs",
    name: "Arobs Transilvania Software",
    url: "http://www.arobs.ro/",
    start: "July 2011",
    end: "Sep. 2011",
    title: "Software Developer (Intern)",
    description: [
      "In the course of this curricular internship I worked on implementing and customizing Interactive Responsive Technology systems for pharmaceutical studies, as specified by external clients.",
      "The technology stack comprised .NET, ASP.NET Web Forms and Microsoft SQL Server 2008."
    ]
  },
  agilio: {
    backgroundColor: "#0176b0",
    color: "#ffffff",
    slug: "agilio",
    name: "Agilio Software",
    url: "https://www.agilio.eu/",
    start: "Sep. 2011",
    end: "June 2012",
    title: "Software Developer",
    description: [
      "My main activity at Agilio (formerly Garessio) was developing web applications. The projects I have worked on were mostly based on the CodeIgniter and Symfony2 frameworks.",
      "Projects involved in:",
      "- various internal tools (Python)",
      "- the company's homepage (jQuery, Symfony2)",
      "- Stipz, a (now defunct) video website that allowed users to (for a fee) stream video, host or attend webinars. Payment was handled using an in-house PayPal integration. (CodeIgniter, jQuery, Flash Media Server, MySQL)",
      "- Nebo Learning, an enterprise e-learning platform. (Python, Oracle Database)"
    ]
  },
  honeytracks: {
    backgroundColor: "#fea104",
    color: "#ffffff",
    slug: "honeytracks",
    name: "HoneyTracks GmbH",
    url: "https://honeytracks.com/",
    start: "Oct. 2012",
    end: "Oct. 2013",
    title: "Software Developer",
    description: [
      "During my time at HoneyTracks I've worked on the company's real-time analytics solution and the various tools built around it.",
      "Most notably:",
      "- fixing and improving the in-house PHP framework and its drivers, such as moving from Memcache to Memcached",
      "- improving scalability. This was done by introducing workers (and a daemon that controlled them) and delegating the data fetching process to them.",
      "- improving chart loading time by analyzing queries necessary to build customers' charts in order to figure out which were more time-consuming. Those which went over a specified threshold were then automatically prefetched.",
      "The technology stack comprised PHP, Backbone.js, Beanstalkd, RabbitMQ & MySQL."
    ]
  },
  internations: {
    backgroundColor: "#203049",
    color: "#ffffff",
    slug: "internations",
    name: "InterNations GmbH",
    url: "https://www.internations.org/",
    start: "Oct. 2013",
    end: "Apr. 2016",
    title: "Software Developer",
    description: [
      "At InterNations I took part in the relaunch of their product, working in a distributed team located in Munich and Vilnius.",
      "Notable contributions include:",
      "- leading the relaunch of the product's start page, header and footer, forum, user profile and settings pages",
      "- normalizing the user data model, developing tooling required to do an online migration of the existing 1.5M users to the new model and running/supervising the entire process",
      "- advocating SSL and leading the efforts necessary to make it ubiquitous",
      "- taking part in designing the REST API used by the web & mobile apps and leading the team tasked with implementing it",
      "- being the sole release manager for the better part of two years",
      "The technology stack comprised PHP (Symfony2, Drupal and Magento), Backbone.js, Python, RabbitMQ, Apache Solr, MySQL & Redis."
    ]
  }
};

const paginator = 0;

export default {
  bySlug,
  allSlugs,
  paginator
};
