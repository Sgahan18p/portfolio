const AboutPage = () => {
  return (
    <>
      <h3>A Little Bit About Me</h3>

      <pre>
        {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - Shubhankar Gahan</title>
</head>
<body>

    <h1>Developer's Profile</h1>

    <h2>Name:</h2>
    <p>Shubhankar Gahan</p>

    <h2>Technical Skills:</h2>
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Next.js</li>
        <li>Java</li>
        <li>Git & GitHub</li>
        <li>Responsive Web Design</li>
        <li>Agile Development</li>
    </ul>

    <h2>Developer's Journey:</h2>
    <p>
        I'm a full-stack web developer with a strong foundation in both front-end and back-end technologies. 
        My journey in coding began with an interest in solving real-world problems through technology. 
        I focus on building scalable, user-centric web applications using the latest tools and frameworks 
        like React, Next.js, Node.js, and MongoDB.
    </p>
    <p>
        I enjoy exploring and experimenting with new frameworks and libraries to create engaging, fast, and interactive web applications. 
        When not coding, I contribute to open-source projects and stay up to date with the latest trends in the industry.
    </p>

    <h2>Work Experience:</h2>

    <h3>Key Software Service Pvt. Ltd</h3>
    <p><strong>Role:</strong> Software Engineer Trainee (Joined in 2025)</p>
    <ul>
        <li>Currently in training, learning various technologies and tools used in the company.</li>
        <li>Collaborating with senior developers to gain hands-on experience in full-stack development.</li>
        <li>Participating in team meetings and contributing to ongoing projects.</li>
    </ul>

    <h3>Sequspace Pvt. Ltd</h3>
    <p><strong>Role:</strong> Backend Developer (4 months)</p>
    <ul>
        <li>Developed REST APIs using Java Spring Boot for a global scholarship portal.</li>
        <li>Deployed the REST APIs on AWS, ensuring scalability and availability.</li>
        <li>Gained hands-on experience with cloud services, particularly AWS, and learned best practices in backend development.</li>
    </ul>

    <h3>IBM Skill Build</h3>
    <p><strong>Role:</strong> Frontend Web Development Intern</p>
    <ul>
        <li>Learned frontend technologies such as HTML, CSS, and JavaScript.</li>
        <li>Developed responsive web applications and user interfaces.</li>
        <li>Worked with modern frameworks and tools to build interactive websites.</li>
        <li>Participated in real-world projects, enhancing skills in UI/UX design and frontend development.</li>
    </ul>

    <h2>Projects Developed:</h2>

    <h3>Personal Portfolio</h3>
    <p>A dynamic, self-updating portfolio built with React and Next.js, showcasing my projects and experience.</p>

    <h3>QR Code Generator</h3>
    <p>A web tool to generate and download customized QR codes using JavaScript and a public QR Code API.</p>

    <h3>Weather App</h3>
    <p>A real-time weather forecasting app utilizing React, OpenWeatherMap API, and Fetch API.</p>

    <h3>Task Manager</h3>
    <p>A full-stack task manager built with Node.js, Express, and MongoDB that allows users to create and manage their tasks.</p>

    <h2>Download Resume:</h2>
    <p><a href="/resume.pdf" download="Shubhankar_Gahan_Resume.pdf">Click here to download my resume</a></p>

</body>
</html>
`}
      </pre>
      
      <div className="resume-download">
        <a 
          href="/resume.pdf" 
          download="Shubhankar_Gahan_Resume.pdf"
          className="resume-link"
        >
          📄 Download Resume (PDF)
        </a>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
