import React from 'react';
import Feature from "../../components/feature/Feature"
import './features.css';

const featuresData =[
  {
    title: "Automation " ,
    text: "GPT-3 can automate tasks that would otherwise require significant human resources. This can save time and reduce costs,improving the accuracy and efficiency of the task."
  },
  {
    title: "Language processing" ,
    text: "GPT-3 is a powerful language processing tool that can be used to generate human-like responses in real-time. This makes it useful for applications such as chatbots, virtual assistants, and customer service."
  },
  {
    title: "Data analysis" ,
    text: "GPT-3 can process and analyze large amounts of data quickly and accurately. This can provide valuable insights and inform decision-making in a variety of industries, from healthcare to finance to marketing."
  },
  {
    title: "Innovation" ,
    text: "GPT-3 is a cutting-edge technology that is constantly evolving and improving. Using GPT-3 can help businesses stay ahead of the curve and innovate in their industry, leading to competitive advantages and improved customer experiences."
  }
]

const Features = () => {
  return (
    <div className="tony1__features section__padding" id="features">
      <div className="tony1__features-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="tony1__features-container">
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features