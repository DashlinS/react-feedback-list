function FeedbackStats({feedback}) {
// Calculate readings average
//loop through array, add them up and times length of feedback items
let average = feedback.forEach((item) => item.reduce())

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4> {/* Should react/change based on array size*/}
      <h4>Average Rating: {average}</h4>
    </div>
  )
}

export default FeedbackStats
