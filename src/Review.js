import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]

  const check = (num) => {
    if (num > people.length - 1) return 0
    if (num < 0) return people.length - 1
    return num
  }

  const randomPpl = () => {
    let random = Math.floor(Math.random() * people.length)
    console.log(random)
    if (random === index) {
      random = index + 1
    }
    setIndex(check(random))
  }

  const prevPpl = () => {
    setIndex((index) => check(index - 1))
  }

  const nextPpl = () => {
    setIndex((index) => check(index + 1))
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPpl}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={nextPpl}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn" onClick={randomPpl}>
        suprise me
      </button>
    </article>
  )
}

export default Review
