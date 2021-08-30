import React from 'react'

const CoupleProfile = (): JSX.Element => {
  return (
    <div className="couple-profile">
      <h1 className="title">We are Getting Married!</h1>
      <div className="content">
        <div className="item">
          <div className="circle">
            <img src={`static/images/dita-profil.JPG`} />
          </div>
          <h2 className="name">Anindita Ayu Pratiwi</h2>
          <h4 className="description">
            <span>{'First born of'}</span>
            <span>{'Mr. Bambang Madyo Sudarno & Mrs. Dwi Endah Andayani'}</span>
          </h4>
        </div>
        <div className="item">
          <h1 className="and">{'&'}</h1>
        </div>
        <div className="item">
          <div className="circle">
            <img src={`/static/images/eka-profil.JPG`} />
          </div>
          <h2 className="name">Kretawiweka Nuraga Sani</h2>
          <h4 className="description">
            <span>{'First born of'}</span>
            <span>{'Mr. Saiful Zuhri & Mrs. Eny Triarnati Yuli Robi’ah'}</span>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default CoupleProfile
