import React from 'react'

const data = {
  project1: {
    title: "Portfolio Website",
    info: {
      time: "1 & 1/2 Months (ish)",
      startDate: "6/2/2018",
      endDate: "7/14/2018"
    },
    content: (
      <div>
        <p>
          Like other portfolios on the internet, I made this portfolio to display my skills and projects,
          and to provide a simple method from which people can contact me with inquiries.
          My portfolio site was built using the React framework, and utilizes many awesome open source libraries,
          such as React Router, React Anime, and Font Awesome Icons.
        </p>

        <p>
          React's a great framework, especially for simple clientside websites like my portfolio.
          It also helps keep the website organized and componentized,
          allowing me to add, modify, and change specific sections of my portfolio with ease.
        </p>

        <p>
          I'm currently hositng the site on Google FireBase, and I setup a Google FireBase Function to receive form
          input from my "Contact Me" section. By doing so, I've minimized my hosting costs to virtually nothing.
        </p>

        <p>
          I really learned a lot from creating this portfolio. It took a while,
          but I managed to pick up a metric ton of knowledge on how to animate components,
          scroll listeners, routing w/ React Router, and much more.
        </p>

        <p>
          All of the source code can be viewed on GitHub:
        </p>

        <a href='https://github.com/CF12/portfolio'>Link to Repo</a>
      </div>
    )
  },

  project2: {
    title: "Minecraft Survival Montage",
    info: {
      time: "1 Month (ish)",
      startDate: "7/00/2017",
      endDate: "8/4/2017"
    },
    content: (
      <div>
        <p>
          Work In Progress!
          (it's a cringy one give me some time okay)
        </p>
      </div>
    )
  }
}

export default data
