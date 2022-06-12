import React from 'react'
import { Bug, Lightbulb, Asterisk } from 'phosphor-react-native'

export const feedbackTypes = {
  'BUG': {
    title: 'Bug',
    Icon: (props = {}) => <Bug { ...props } />
  },
  'IDEA': {
    title: 'Ideia',
    Icon: (props = {}) => <Lightbulb { ...props } color='yellow' />
  },
  'OTHER': {
    title: 'Outros',
    Icon: (props = {}) => <Asterisk { ...props } />
  },
}

export type FeedbackTypeKeys = keyof typeof feedbackTypes
