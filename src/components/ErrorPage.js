import React from 'react'

export default function ErrorPage() {
  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh', }}>

      <div>
        <p style={{ textAlign: 'center', fontSize: '2rem', color: 'goldenrod' }} >Error 404</p>
        <p style={{ textAlign: 'center', color: 'white' }}>Page not found</p>
      </div>

    </div>
  )
}
