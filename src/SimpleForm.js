
import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import Rating from "./Rating";
import EnduranceCycle from './EnduranceCycle';
import './App.css';
import { ThemeProvider } from 'styled-components';


class SimpleForm extends Component {

    render() {
      const theme =  {
        
        fontFamily: '',
        headerBgColor: 'rgb(0, 0, 153)',
        headerFontColor: 'white',
        headerFontSize: '15px',
        botBubbleColor: 'rgb(0, 0, 153)',
        botFontColor: 'white',
        userBubbleColor: 'rgb(0, 0, 153)',
        userFontColor:'white'
        
    }
      return (
        <ThemeProvider theme={theme}>
<ChatBot 
headerTitle='BV-Bot'
         recognitionEnable={true}
        //speechSynthesis={{ enable: true, lang: 'en' }}
          steps={[
            { 
              id: '1',
              message: 'Welcome back, Abhishek. It looks you bought a Nike shoe on 29th january 2021.',
              trigger: '2',
              delay:3000
            },
            // {
            //   id: 'name',
            //   message:'Product Details: Nike shoes',
            //   delay:1000,
            //   trigger: '2',
            // },
            {
              id: '2',
              message: 'We’d love to know what you thought about your purchase',
              delay:1000,
              trigger: 'category',
            },
            {
              id: 'category',
            component:(<Rating/>),
            delay:1000,
            trigger:'Other'
            },
            {
              id: 'Other',
              delay:4000,
     message: 'Thanks. Would you be willing to provide a review on the product?',
     
              trigger:'show'
            },
            {
              id:'show',
              options: [
                { value:'Yes', label: 'Yes', trigger: 'Yes' },
                {value:'No',  label: 'No', trigger: 'No' },
               
              ],
            },
            {
              id:'No',
              message:'That’s everything! Thank you so much for taking time to providing feedback. We hope you enjoy your product. Please press done button',
              // trigger:'ratingSubmit'
            },
            // {
            //   id:'ratingSubmit',
            //   component:(<button style={{background:'blue',color:'white'}}>Submit</button>)
            // },

            {id:'Yes',
            message:'We display a nickname alongside published reviews. How would you like to be known?',
           
          trigger:'nickname'},
          {
            id:'nickname',
            user:true,
            trigger:'next'
          },
            {
              id:'next',
              message:'Hi {previousValue}! Tell us what you thought of the product and your purchasing experience:',
              trigger:'btn'
            },

            {
              id:'btn',
              component:(<div>
                <textarea style={{width:'100%'}}></textarea>
              </div>),
              
    trigger:'msg'
            },
           
            {
              id:'msg',
              delay:3000,
              message:'Thankyou for the review, Would you like to answer two more questions? ',
             trigger:'fdk'
             
            
            },
            {id:'fdk',
            options:[
              { value:'Yes', label: 'Yes', trigger: 'frnd' },
              {value:'No',  label: 'No', trigger: 'NoRec' },
            ],},
            {
              id:'NoRec',
              message:'That’s everything! Thank you so much for taking time to providing feedback. We hope you enjoy your product. Please press done button',
              // trigger:'ratingSubmit'
            },
            {id:'frnd',
          message:'Would you recommend this product to your friend?',
          trigger:'recomnd'
        },
          {
            id:'recomnd',
            options: [
              { value:'Yes', label: 'Yes',trigger:'prefinal'},
              {value:'No',  label: 'No',trigger:'prefinal'},
             
            ],
          },
          {
            id:'prefinal',
            message:'Would you recommend Endurance Cycles to a friend?',
            trigger:'lastQ'
          },
          {
            id:'lastQ',
            component:<EnduranceCycle></EnduranceCycle>,
            trigger:'final'
          },
          {
            id:'final',
            delay:3000,
               message:'That’s everything! Thank you so much for taking time to providing feedback. We hope you enjoy your product. Please press done button',
            //trigger:'ratingSubmit'
          }
           
           
          ]}
        />
        </ThemeProvider>
      );
    }
  }

  export default SimpleForm;
