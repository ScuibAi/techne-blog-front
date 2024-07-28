import React from 'react'

const ArticleCard = () => {
  return (
    <React.Fragment>
        <div className='article-card flex bg-white'>
            <div className='flex'>
                <h6>august 13, 2021</h6>
                <h3>10 Hilarious Cartoons That Depict Real-Life Problems of Programmers</h3>
                <p>Redefined the user acquisition and redesigned the onboarding experience, all within 3 working weeks.</p>
            </div>
            
            <img src="/lassets/artthumbsm.png" alt="Techne blog article thumbnail" />
        </div>
    </React.Fragment>
  )
}

export default ArticleCard