export const constants = Object.freeze({
  pages: [
    {
      name: 'home',
      title: "Hello;",
      introduction: "<p>Hi, I'm <strong>Devanshi Shah</strong>, a Computer Engineering Undergraduate, living in and in love with Mumbai.</p>",
      services: [
        {
          title: 'UI/UX design',
          description: `I believe in Design Thinking and crafting better user experiences. Making a new product or refreshing an existing design, I can make it aesthetic and easy to use.`,
          image: {
            data: {
              url:
                'https://s3.eu-west-3.amazonaws.com/simonwuyts-portfolio/bb43f04a-8d25-4767-8d69-ffdf596fe545.svg'
            }
          }
        },
        {
          title: 'Front-end development',
          description: `I translate designs to production ready HTML, CSS and Javascript. <a href='https://www.vuejs.org/'/>Vue.js</a>, <a href='https://angular.io/'/>Angular</a> and <a href='https://reactjs.org/'/>React</a> complete my front-end stack.`,
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
      title: "About me.",
      introduction: "<p>Hi, I'm <strong>Devanshi Shah</strong>, a Computer Engineering Undergraduate at <a href=\"https://vjti.ac.in/\" target=\"_blank\" rel=\"noreferrer noopener\">VJTI</a>, living in and in love with Mumbai.</p>",
      content: `
        <p>I am passionate about software development, good design and growth. I’ve always sought out opportunities and challenges that are meaningful to me. Pursuing my bachelor's degree, I’ve been exploring many things.
          
        </p>\n
        <p>In 2021, I interned at
          <a href=\"https://home.barclays/\" target=\"_blank\" rel=\"noreferrer noopener\">Barclays PLC</a>, a British multinational bank, where I realized how impactful every change that I made was. Later in 2021, I worked at 
          <a href=\"https://www.workindia.in/\" target=\"_blank\" rel=\"noreferrer noopener\">WorkIndia</a>, a growth-stage start-up, where I got the taste of ownership and action-based culture. Since then, I'm focusing on exploring new technologies one step at a time.
        </p>\n
        <p>I wish to work on great products that people depend on, I wish to interact and collaborate with people across the globe and have the opportunity to learn the best of design and development practices. I care about building impactful, accessible and inclusive tech for everyone.</p>\n
        <figure>
          <img src=\"https://res.cloudinary.com/dsgbvowu4/image/upload/q_100/v1638271968/personal/mumbai-solo-picture_tb0wpd.jpg\" width=\"2000\" height=\"800\" data-image=\"390\" />
        </figure>\n
        <p>I strongly believe in helping people and giving back. I was a part of 
        <a href=\"https://communityofcoders.in/\" target=\"_blank\" rel=\"noreferrer noopener\">Community of Coders</a> and 
        <a href=\"https://gdscvjti.tech/\" target=\"_blank\" rel=\"noreferrer noopener\">Google Developer Student Club</a> at VJTI where I've helped in organising, teaching and mentoring juniors. I am a part of a community NGO since 2018 which promotes higher education and I've been a speaker at many Career Guidance and other seminars as well.</p>\n
        <p>Apart from design and code, I love exploring beautiful places on my bike and catching up with friends. </p>
      `
    },
    {
      name: 'contact',
      title: "Let's talk about you.",
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
              <li><a href='https://cesavjti.netlify.app' target="_blank" rel="noreferrer noopener">https://cesavjti.tech</a>
            </ul>
            `
        }
      ]
    },
  ],
  socialLinks: [
    {
      label: 'LinkedIn',
      imgPath: 'M0 5h3.578v11H0zM13.324 5.129c-.038-.012-.074-.025-.114-.036a2.32 2.32 0 00-.145-.028A3.207 3.207 0 0012.423 5c-2.086 0-3.409 1.517-3.845 2.103V5H5v11h3.578v-6s2.704-3.766 3.845-1v7H16V8.577a3.568 3.568 0 00-2.676-3.448z',
      iconBox: '0 0 22 20',
      link: 'https://www.linkedin.com/in/devanshi1500'
    },
    {
      label: 'Github',
      imgPath: 'M11.9991,2 C6.47774,2 2.00001,6.47712 2.00001,12.0006 C2.00001,16.4184 4.86504,20.1665 8.83877,21.489 C9.33909,21.5807 9.52142,21.272 9.52142,21.007 C9.52142,20.7696 9.51282,20.1407 9.50791,19.3062 C6.72636,19.9105 6.13948,17.9657 6.13948,17.9657 C5.68459,16.8105 5.02895,16.5029 5.02895,16.5029 C4.121,15.8824 5.09771,15.895 5.09771,15.895 C6.10143,15.9657 6.62936,16.9256 6.62936,16.9256 C7.52135,18.4537 8.97014,18.0125 9.53984,17.7565 C9.63069,17.1102 9.88914,16.6696 10.1746,16.4196 C7.95415,16.1672 5.61952,15.3093 5.61952,11.4773 C5.61952,10.3856 6.00934,9.49292 6.64902,8.79388 C6.54588,8.54089 6.20271,7.52417 6.74723,6.14739 C6.74723,6.14739 7.58643,5.87851 9.49686,7.17252 C10.2943,6.95073 11.1501,6.8398 12.0003,6.83594 C12.8499,6.8398 13.7051,6.95073 14.5038,7.17252 C16.413,5.87851 17.2509,6.14739 17.2509,6.14739 C17.7967,7.52417 17.4535,8.54089 17.351,8.79388 C17.9919,9.49292 18.3787,10.3856 18.3787,11.4773 C18.3787,15.3189 16.0403,16.1642 13.8131,16.4118 C14.1717,16.7205 14.4915,17.3308 14.4915,18.2637 C14.4915,19.6005 14.4792,20.6791 14.4792,21.007 C14.4792,21.2744 14.6597,21.5855 15.1668,21.4878 C19.1374,20.1629 22,16.4172 22,12.0006 C22,6.47712 17.5223,2 11.9991,2 Z',
      iconBox: '0 0 24 24',
      link: 'https://www.github.com/devanshi1500'
    },
    // {
    //   label: 'Twitter',
    //   imgPath: 'M22.4592,6.01238 C21.6896,6.35373 20.8624,6.58442 19.9944,6.68815 C20.8803,6.15701 21.5609,5.31598 21.8813,4.31378 C21.052,4.80564 20.1336,5.16278 19.156,5.3552 C18.3732,4.52112 17.2579,4 16.0235,4 C13.6534,4 11.7317,5.92147 11.7317,8.29155 C11.7317,8.6279 11.7697,8.95546 11.8429,9.2696 C8.2761,9.0906 5.11376,7.38203 2.9971,4.78551 C2.62766,5.41935 2.41602,6.15656 2.41602,6.94309 C2.41602,8.43204 3.17365,9.74563 4.32524,10.5153 C3.6218,10.4929 2.95997,10.2999 2.3814,9.97846 C2.38099,9.99639 2.38099,10.0143 2.38099,10.0324 C2.38099,12.1118 3.86034,13.8463 5.8236,14.2406 C5.4635,14.3387 5.08435,14.3912 4.69295,14.3912 C4.41641,14.3912 4.14756,14.3642 3.88547,14.3142 C4.43162,16.0191 6.01654,17.26 7.89455,17.2945 C6.42577,18.4457 4.57528,19.1318 2.56454,19.1318 C2.21813,19.1318 1.87652,19.1114 1.54078,19.0717 C3.44004,20.2894 5.69592,21 8.11951,21 C16.0134,21 20.3302,14.4605 20.3302,8.78918 C20.3302,8.60314 20.326,8.41805 20.3177,8.23395 C21.1563,7.62886 21.8839,6.87302 22.4592,6.01238 Z',
    //   iconBox: '0 0 24 24',
    //   link: 'https://www.twitter.com/devanshi1500'
    // },
    {
      label: 'Email',
      imgPath: 'M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z',
      iconBox: '0 0 150 80',
      link: 'mailto:devanshi1500@gmail.com'
    },
    {
      label: 'Resume',
      imgPath: 'M640 768H128V257.90599999999995L256 256V128H0v768h768V576H640V768zM384 128l128 128L320 448l128 128 192-192 128 128V128H384z',
      iconBox: '0 0 768 1024',
      link: 'https://drive.google.com/file/d/1wo4Y6kh51i15vFTGF1Eu9anWdzXAJd9e/view?usp=sharing'
    }
  ]
})