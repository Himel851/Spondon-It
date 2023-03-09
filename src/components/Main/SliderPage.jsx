import React, { useState } from 'react'


const feedbacks = [
  {
    text: "This is the first feedback",
    imageUrl: "https://www.facebook.com/images/fb_icon_325x325.png",
  },
  {
    text: "This is the second feedback",
    imageUrl: "https://static01.nyt.com/images/2021/10/02/business/00roose-fb-silo/00roose-fb-silo-mediumSquareAt3X.jpg",
  },
  {
    text: "This is the third feedback",
    imageUrl: "https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-facebook-icon-social-media-3d-png-image_6308418.png",
  },
];


const SliderPage = () => {
  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

  const goToPreviousFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - 1 : prevIndex - 1
    );
  };
  
  const goToNextFeedback = () => {
    setCurrentFeedbackIndex((prevIndex) =>
      prevIndex === feedbacks.length - 1 ? 0 : prevIndex + 1
    );
  };

  const changeFeedbackByClick = (index) => {
    setCurrentFeedbackIndex(index);
  };

  return (
    <div>
      <p>{feedbacks[currentFeedbackIndex].text}</p>
      <img
        src={feedbacks[currentFeedbackIndex].imageUrl}
        alt="feedback"
        className='hi'
        onClick={() => changeFeedbackByClick(currentFeedbackIndex)}
      />
      <button onClick={goToPreviousFeedback}>Prev</button>
      <button onClick={goToNextFeedback}>Next</button>
    </div>
  );
  
  
  
  
  
}

export default SliderPage