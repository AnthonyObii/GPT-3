import React from 'react';
import Feature from "../../components/feature/Feature";
import './tony1.css';

const Tony1 = () => {
  return (
    <div className="tony1__whatgbt3 section__margin" id="tony1">
    <div className="tony1__whatgbt3-feature">
    <Feature title= "what is GPT-3" text="GPT-3 is an artificial intelligence language model developed by OpenAI. It stands for 'Generative Pre-trained Transformer 3', and is the third iteration of the GPT series. GPT-3 uses machine learning algorithms to generate human-like text based on a given prompt."/>
    </div>
    <div className="tony1__whatgbt3-heading">
    <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    <p>Explore The Libary</p>
     </div>
     <div className="tony1__whatgbt3-container">
    <Feature title="ChatsBots" text="A chatbot on GPT-3 is an artificial intelligence-powered tool that can mimic human conversation using natural language processing. It uses the GPT-3 language model to generate responses to user input and engage in a dialogue with them. Chatbots on GPT-3 can be used for a variety of purposes, such as customer support, lead generation, or even entertainment." />
    <Feature title="Knowledgebase" text="knowledgebase on GPT-3 is a collection of information and resources related to the technology and its applications. It typically includes articles, tutorials, documentation, and other materials that provide guidance on how to work with GPT-3 and use it effectively. " />
    <Feature title="Education" text="Education on GPT-3 involves learning about the technology and its various applications through formal or informal means. Formal education in GPT-3 may include taking courses or participating in training programs that teach individuals how to work with the technology."/>
  </div>


    </div>
  )
}

export default Tony1;