import React from 'react'
import { InterviewTemplate } from '../../templates/interview'

const InterviewPreview = ({ entry, widgetFor }) => (
  <InterviewTemplate
    content={widgetFor('body')}
    interviewerName={entry.getIn(['data', 'interviewerName'])}
    intervieweeName={entry.getIn(['data', 'intervieweeName'])}
    featuredimage={entry.getIn(['data', 'featuredimage'])}
    title={entry.getIn(['data', 'title'])}
  />
)


export default InterviewPreview
