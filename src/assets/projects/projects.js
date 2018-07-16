import React from 'react'

const data = {
  project1: {
    title: "Portfolio Website",
    info: {
      time: "1 Month (ish)",
      startDate: "6/2/2018",
      endDate: "7/14/2018"
    },
    content: (
      <div>
        <p>
          Like all portfolios on the internet, this one's all about showing off my skills and projects,
          along with providing a simple method in which people can contact me with inquiries.
          My portfolio site was built using the React framework, and utilizes many awesome open source libraries,
          such as React Router, React Anime, and Font Awesome Icons.
        </p>

        <p>
          React's a great framework, especially for simple clientside websites.
          It also helps keep the website organized and componentized,
          allowing me to add, modify, and change sections of my portfolio with ease.
        </p>

        <p>
          I hosted the site on GitHub Pages,
          and setup an AWS Lambda to receive form imputs from my "Contact Me" section. By doing so, I
          minimized my hosting costs to virtually nothing.
        </p>

        <p>
          I really learned a lot from creating this portfolio. It took a while,
          but I managed to pick up a metric ton of knowledge on how to animate components,
          scroll listeners, routing w/ React Router, and much more.
        </p>
      </div>
    )
  },

  project2: {
    title: "Minecraft Survival Montage",
    info: {
      time: "1 Month (ish)",
      startDate: "6/2/2018",
      endDate: "7/14/2018"
    },
    content: (
      <div>
        <p>
          Like all portfolios on the internet, this one's all about showing off my skills and projects,
          along with providing a simple method in which people can contact me with inquiries.
          My portfolio site was built using the React framework, and utilizes many awesome open source libraries,
          such as React Router, React Anime, and Font Awesome Icons.
        </p>

        <p>
          React's a great framework, especially for simple clientside websites.
          It also helps keep the website organized and componentized,
          allowing me to add, modify, and change sections of my portfolio with ease.
        </p>

        <p>
          I hosted the site on GitHub Pages,
          and setup an AWS Lambda to receive form imputs from my "Contact Me" section. By doing so, I
          minimized my hosting costs to virtually nothing.
        </p>

        <p>
          I really learned a lot from creating this portfolio. It took a while,
          but I managed to pick up a metric ton of knowledge on how to animate components,
          scroll listeners, routing w/ React Router, and much more.
        </p>
      </div>
    )
  }
}

export default data
