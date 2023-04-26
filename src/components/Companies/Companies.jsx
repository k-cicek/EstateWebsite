import React from 'react'
import './Companies.css'

const Companies = () => {
  return (
    <section className="companies-wrapper">
        <div className="paddings innerWidth flexCenter companies-container">
            <img src="/public/prologis.png" alt="logo" />
            <img src="/public/tower.png" alt="logo" />
            <img src="/public/equinix.png" alt="logo" />
            <img src="/public/realty.png" alt="logo" />
        </div>
    </section>
  )
}

export default Companies