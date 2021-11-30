export const constants = Object.freeze({
  pages: [
    {
      name: 'home',
      title: "Hello;",
      introduction: "<p>Hi, I'm <strong>Devanshi Shah</strong>, a Computer Engineering Undergraduate, living in and in love with Mumbai.</p>",
      services: [
        {
          title: 'Web app design',
          description: `Whether it's designing a new product or refreshing the design of an existing application, I can make the project beautiful and easy to use.`,
          image: {
            data: {
              url:
                'https://s3.eu-west-3.amazonaws.com/simonwuyts-portfolio/bb43f04a-8d25-4767-8d69-ffdf596fe545.svg'
            }
          }
        },
        {
          title: 'Front-end development',
          description: `I translate designs to production ready HTML, CSS and Javascript. <a href='https://www.vuejs.org/'/>Vue.js</a> and <a href='https://angular.io/'/>Angular</a> complete my front-end stack.`,
          image: {
            data: {
              url:
                'https://s3.eu-west-3.amazonaws.com/simonwuyts-portfolio/a471ed3d-cd54-47d2-a549-9b12698746a7.svg'
            }
          }
        }
      ]
    },
    {
      name: 'about',
      title: "Wow! A Whole Page About Me!",
      introduction: "<p>Hi, I'm <strong>Devanshi Shah</strong>, a Computer Engineering Undergraduate at <a href=\"https://vjti.ac.in/\" target=\"_blank\" rel=\"noreferrer noopener\">VJTI</a>, living in and in love with Mumbai.</p>",
      content: `
        <p>I am passionate about software development, good design and growth. I’ve always sought out opportunities and challenges that are meaningful to me. Pursuing my bachelor's degree, I’ve been exploring many things. Earlier this year, I worked as the frontend lead in a team for a freelance project to build 
          <a href=\"https://fashion-o-phile.netlify.app/\" target=\"_blank\" rel=\"noreferrer noopener\">website</a> of a local business.
        </p>\n
        <p>Later in June, I interned at
          <a href=\"https://home.barclays/\" target=\"_blank\" rel=\"noreferrer noopener\">Barclays PLC</a>, a British multinational bank, where I realized how impactful every change that I made was. Later this year, I interned at 
          <a href=\"https://www.workindia.in/\" target=\"_blank\" rel=\"noreferrer noopener\">WorkIndia</a>, a growth-stage start-up, where I got the taste of ownership and action-based culture. Since then, I'm focusing on exploring new technologies one step at a time.
        </p>\n
        <p>I wish to work on great products that people depend on, I wish to interact and collaborate with people across the globe and have the opportunity to learn the best of design and development practices.</p>\n
        <figure>
          <img src=\"https://res.cloudinary.com/dsgbvowu4/image/upload/q_100/v1638271968/personal/mumbai-solo-picture_tb0wpd.jpg\" width=\"2000\" height=\"800\" data-image=\"390\" />
        </figure>\n
        <p>I strongly believe in helping people and giving back. I was a part of 
        <a href=\"https://communityofcoders.in/\" target=\"_blank\" rel=\"noreferrer noopener\">Community of Coders</a> and 
        <a href=\"https://dscvjti.tech/\" target=\"_blank\" rel=\"noreferrer noopener\">Google Developer Student Club</a> at VJTI where I've helped in organising, teaching and mentoring juniors. I am a part of a local community NGO since 2.5 years which promotes higher education and I've been a speaker at many Career Guidance and other seminars as well.</p>\n
        <p>Apart from design and code, I love exploring beautiful places on my bike and catching up with friends. </p>
      `
    },
    {
      name: 'contact',
      title: "Let's Talk About You.",
      introduction: `
      <p class=\"center\">Think we can make great things together?
        <strong>
          <br />
          <a href=\"mailto:devanshi1500@gmail.com\">Let's get in touch!</a>
        </strong>
      </p>
      `,
      content: `
      <p class=\"center\">
        <strong>Devanshi Shah</strong>
        <br />
        <a href=\"mailto:devanshi1500@gmail.com\">devanshi1500@gmail.com&nbsp;</a>
      </p>
      `
    },
    {
      name: 'work',
      title: "Work.",
      messageWhenNoItems: 'There are no items present',
      timelineItems: [
        {
          from: new Date(2021, 7),
          to: new Date(2021, 9),
          title: "Software Developer",
          company: "WorkIndia",
          description:
            `
            <ul>
              <li>Responsible for end-to-end completion of tasks including requirement gathering, documentation, code changes, testing and deployment</li>
              <li><b>70+</b> successfully merged PRs</li>
              <li>In charge of <b>Sales Panel microservice</b> responsible for about <b>5%</b> of the revenue</li>
              <li>Worked with <b>Django, React, Kafka, Kubernetes, Jenkins</b></li>
            </ul>
            `
        },
        {
          from: new Date(2021, 5),
          to: new Date(2021, 6),
          title: "Graduate Technical Intern",
          company: "Barclays PLC",
          description:
            `
            <ul>
              <li>Managed the team and designed a utility to automate creation and management of <b>750+ runbooks</b> per project</li>
              <li>Worked with <b>Angular, Typescript</b></li>
            </ul>
            `
        },
        {
          from: new Date(2021, 2),
          to: new Date(2021, 4),
          title: "Frontend Development Lead",
          company: "Freelance Project",
          description:
            `
            <ul>
              <li>Worked as frontend lead and helped a local business establish an online presence</li>
              <li>Planned and built the frontend, performed <b>code reviews</b> of other team members</li>
              <li>Point-of-contact between the client and the team</li>
              <li>Worked with <b>Vue.js, Tailwind CSS</b></li>
            </ul>
            `
        },
        {
          from: new Date(2021, 0),
          to: new Date(2021, 2),
          title: "Web Development Lead",
          company: "Civil Engineering Association, VJTI",
          description:
            `
            <ul>
              <li>Responsible for building, deploying and maintaining the community website</li>
              <li>Gathering and accommodating everchanging requirements of the community and sponsors</li>
              <li><a href='https://cesavjti.tech' target="_blank" rel="noreferrer noopener">https://cesavjti.tech</a>
            </ul>
            `
        }
      ]
    },
  ]
})