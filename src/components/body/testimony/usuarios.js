import React from 'react'
import { Testimonial, TestimonialAvatar, TestimonialContent, TestimonialHeading, TestimonialText } from './testimony'

export const Usuarios = (props) => {
    const text= props.text;
    const name= props.name;
    const title= props.title;
    const avatar= props.avatar;
  return (
    <Testimonial>
            <TestimonialContent>
              <TestimonialHeading></TestimonialHeading>
              <TestimonialText>
                {text}
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              // src={
              //   {avatar}
              // }
              name={name}
              title={title}
            />
          </Testimonial>

  )
}
