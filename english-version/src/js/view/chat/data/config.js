import * as Animatable from 'react-native-animatable';
import { Image, View } from 'react-native';
import config from '../../../config';
import React from 'react';
const ip = config.url;
module.exports = {
  chatHead: {
    facility: {
      title: 'Facility service search',
      content:
        "To find out about the hotel's facilities and services, please enter a facility or service name to search. For example, wifi, children's playground, desk, bar, pick-up, etc.",
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: 'Please enter a facility or service name.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'tuntun',
          avatar: ip + 'static/robot.png'
        },
        sent: true,
        received: true
      }
    },
    arround: {
      title: 'Peripheral search',
      content: 'To find out more about the hotel, please follow the prompts.',
      checkbox: [
        'Department store',
        'shopping center',
        'train station',
        'Attractions'
      ],
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text:
          'Please click on the destination of interest below to learn more.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'tuntun',
          avatar: ip + 'static/robot.png'
        },
        sent: true,
        received: true
      }
    },
    policy: {
      title: 'Policy search',
      content:
        "To find out about the hotel's policy information, please follow the prompts.",
      checkbox: [
        'Check-in notice',
        'Bank card',
        'Check-in and departure time',
        'Extra bed'
      ],
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text: 'Please click on the policy below to learn more.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'tuntun',
          avatar: ip + 'static/robot.png'
        },
        sent: true,
        received: true
      }
    },
    question: {
      title: 'Question',
      content:
        'If you want to ask questions about the hotel, please ask below.',
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text:
          'The following is the question and answer that most of you are most concerned about, please refer to',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'tuntun',
          avatar: ip + 'static/robot.png'
        },
        sent: true,
        received: true
      }
    },
    focus: {
      title: 'My focus',
      content:
        'To get a quick overview of the hotel, click on the new one below.',
      fw: {
        _id: Math.round(Math.random() * 1000000),
        text:
          'The following is the information you are interested in. We are looking for you quickly, please wait a moment.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'tuntun',
          avatar: ip + 'static/robot.png'
        },
        sent: true,
        received: true
      }
    }
  },
  config: [
    {
      key: 'facility',
      title: 'Facility service',
      checkbox: [
        "Children's Paradise",
        'bed',
        'desk',
        'balcony',
        'wifi',
        'bar',
        'breakfast',
        ' pick up machine'
      ]
    },
    {
      key: 'arround',
      title: 'Surrounding',
      checkbox: [
        'Department store',
        'Shopping center',
        'Train station',
        'Sights'
      ]
    },
    {
      key: 'policy',
      title: 'Policy',
      checkbox: [
        'Check in notice',
        'bank card',
        'check in and leave time',
        'extra bed'
      ]
    },
    {
      key: 'others',
      title: 'Other',
      checkbox: [
        'Weather',
        'Add a change',
        'Sound insulation effect',
        'Room size'
      ]
    }
  ],
  card: [
    {
      url: '../images/1.png',
      key: 'facility',
      name: 'Facility service search',
      animate: 'bounceIn',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle:
        "To find out about the hotel's facilities and services, please enter a facility or service name to search. For example, wifi, children's playground, desk, bar, pick-up, etc."
    },
    {
      url: '../images/2.png',
      key: 'arround',
      name: 'Peripheral search',
      animate: 'bounceInDown',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle: 'To find out more about the hotel, please follow the prompts.'
    },
    {
      url: '../images/3.png',
      key: 'policy',
      name: 'Policy search',
      animate: 'bounceInUp',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle:
        "To find out about the hotel's policy information, please follow the prompts."
    },
    {
      url: '../images/4.png',
      key: 'question',
      name: 'Question',
      animate: 'bounceInLeft',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
      subtitle:
        'If you want to ask questions about the hotel, please ask below.'
    },
    {
      url: '../images/5.png',
      key: 'focus',
      name: 'My focus',
      animate: 'bounceInRight',
      avatar_url:
        'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      subtitle:
        'To get a quick overview of the hotel, click on the new one below.'
    }
  ],
  policy: [
    {
      title: 'Pet',
      key: 'pet_policies'
    },
    {
      title: 'Extra bed',
      key: 'bed_policies'
    },
    {
      title: 'Child',
      key: 'children_policies'
    },
    {
      title: 'Check-in time and departure time',
      key: 'arrival_policies'
    },
    {
      title: 'Bank card',
      key: 'credit_card_policies'
    },
    {
      title: 'Check-in information',
      key: 'notice_policies'
    }
  ]
};
